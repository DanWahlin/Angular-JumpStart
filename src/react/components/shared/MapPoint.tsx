import React from 'react';

interface MapPointProps {
  longitude: number;
  latitude: number;
  markerText: string;
}

const MapPoint: React.FC<MapPointProps> = ({ 
  longitude = 0, 
  latitude = 0, 
  markerText = '' 
}) => {
  return null;
};

export default MapPoint;
