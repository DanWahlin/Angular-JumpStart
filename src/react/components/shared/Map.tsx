import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { MapPoint } from './MapPoint';

interface IMapDataPoint {
  latitude: number;
  longitude: number;
  markerText?: string;
  firstName?: string;
  lastName?: string;
}

const MapContainer = styled.div<{ height: string; width: string }>`
  height: ${props => props.height};
  width: ${props => props.width};
`;

interface MapProps {
  height?: number;
  width?: number;
  latitude?: number;
  longitude?: number;
  markerText?: string;
  zoom?: number;
  dataPoints?: IMapDataPoint[];
  enabled?: boolean;
  children?: React.ReactNode;
}

const Map: React.FC<MapProps> = ({
  height = 0,
  width = 0,
  latitude = 34.5133,
  longitude = -94.1629,
  markerText = 'Your Location',
  zoom = 8,
  dataPoints = [],
  enabled = false,
  children
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  const [mapHeight, setMapHeight] = useState<string | null>(null);
  const [mapWidth, setMapWidth] = useState<string | null>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isScriptLoading, setIsScriptLoading] = useState(false);

  const mapPoints = React.Children.toArray(children)
    .filter(child => React.isValidElement(child) && child.type === MapPoint)
    .map(child => React.isValidElement(child) ? child.props : {}) as IMapDataPoint[];

  useEffect(() => {
    if (latitude && longitude) {
      if (height && width) {
        setMapHeight(`${height}px`);
        setMapWidth(`${width}px`);
      } else {
        const hw = getWindowHeightWidth(mapRef.current?.ownerDocument);
        setMapHeight(`${hw.height / 2}px`);
        setMapWidth(`${hw.width}px`);
      }
    }
  }, [height, width, latitude, longitude]);

  useEffect(() => {
    if (enabled) {
      const initializeMap = () => {
        setTimeout(() => {
          ensureScript();
        }, 200);
      };
      
      initializeMap();
    }
  }, [enabled]);

  useEffect(() => {
    if (map && enabled) {
      renderMapPoints();
    }
  }, [map, dataPoints, mapPoints, enabled]);

  const getWindowHeightWidth = (document?: Document) => {
    if (!document) return { height: 500, width: 900 };
    
    let width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    const height = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

    if (width > 900) { width = 900; }

    return { height, width };
  };

  const ensureScript = () => {
    if (!mapRef.current) return;
    
    setIsScriptLoading(true);
    const document = mapRef.current.ownerDocument;
    const script = document.querySelector('script[id="googlemaps"]') as HTMLScriptElement;
    
    if (script) {
      setIsScriptLoaded(true);
      setIsScriptLoading(false);
      if (enabled) { renderMap(); }
    } else {
      const mapsScript = document.createElement('script');
      mapsScript.id = 'googlemaps';
      mapsScript.type = 'text/javascript';
      mapsScript.async = true;
      mapsScript.defer = true;
      mapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=';
      mapsScript.onload = () => {
        setIsScriptLoaded(true);
        setIsScriptLoading(false);
        if (enabled) { renderMap(); }
      };
      document.body.appendChild(mapsScript);
    }
  };

  const createLatLong = (lat: number, lng: number) => {
    return (lat && lng) ? new google.maps.LatLng(lat, lng) : null;
  };

  const renderMap = () => {
    if (!mapRef.current) return;
    
    const latlng = createLatLong(latitude, longitude) as google.maps.LatLng;
    const options = {
      zoom,
      center: latlng,
      mapTypeControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    } as google.maps.MapOptions;

    const newMap = new google.maps.Map(mapRef.current, options);
    setMap(newMap);

    if ((mapPoints && mapPoints.length) || (dataPoints && dataPoints.length)) {
    } else {
      createMarker(newMap, latlng, markerText);
    }
  };

  const clearMapPoints = () => {
    markers.forEach((marker: google.maps.Marker) => {
      marker.setMap(null);
    });
    setMarkers([]);
  };

  const createMarker = (mapInstance: google.maps.Map, position: google.maps.LatLng, title: string) => {
    const infowindow = new google.maps.InfoWindow({
      content: title
    });

    const marker = new google.maps.Marker({
      position,
      map: mapInstance,
      title,
      animation: google.maps.Animation.DROP
    });

    setMarkers(prev => [...prev, marker]);

    marker.addListener('click', () => {
      infowindow.open(mapInstance, marker);
    });
  };

  const renderMapPoints = () => {
    if (!map || !enabled) return;
    
    clearMapPoints();

    const points = (mapPoints && mapPoints.length) ? mapPoints : dataPoints;

    if (points && points.length) {
      for (const point of points) {
        let pointMarkerText = (point.markerText) 
          ? point.markerText 
          : (point.firstName && point.lastName) 
            ? `<h3>${point.firstName} ${point.lastName}</h3>` 
            : 'Location';
            
        const mapPointLatlng = createLatLong(point.latitude, point.longitude) as google.maps.LatLng;
        createMarker(map, mapPointLatlng, pointMarkerText);
      }
    }
  };

  if (!enabled) {
    return null;
  }

  return (
    <MapContainer 
      ref={mapRef} 
      height={mapHeight || '400px'} 
      width={mapWidth || '100%'}
    >
      Map Loading....
    </MapContainer>
  );
};

export default Map;
