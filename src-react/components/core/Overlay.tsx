import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const OverlayContainer = styled.div<{ active: boolean }>`
  display: ${props => props.active ? 'block' : 'none'};
`;

const OverlayBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: block;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const OverlayContent = styled.div`
  position: fixed;
  z-index: 999999;
  top: 50%;
  left: 50%;
  background-color: white;
  border: 1px solid rgb(94, 94, 94);
  transform: translate(-50%, 0%);
  cursor: pointer;
  padding: 5px;
  width: 285px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 1s;
`;

export const HttpRequestContext = React.createContext<{
  trackRequest: () => void;
  trackResponse: () => void;
}>({
  trackRequest: () => {},
  trackResponse: () => {}
});

export const useHttpTracking = () => {
  return React.useContext(HttpRequestContext);
};

interface OverlayProps {
  delay?: number;
  children?: React.ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({ 
  delay = 500,
  children 
}) => {
  const [enabled, setEnabled] = useState(false);
  const [queue, setQueue] = useState<any[]>([]);
  
  const trackRequest = () => {
    setQueue(prevQueue => {
      const newQueue = [...prevQueue, {}];
      
      if (newQueue.length === 1) {
        setTimeout(() => {
          setQueue(currentQueue => {
            if (currentQueue.length > 0) {
              setEnabled(true);
            }
            return currentQueue;
          });
        }, delay);
      }
      
      return newQueue;
    });
  };
  
  const trackResponse = () => {
    setQueue(prevQueue => {
      const newQueue = [...prevQueue];
      newQueue.pop();
      
      if (newQueue.length === 0) {
        setTimeout(() => {
          setQueue(currentQueue => {
            if (currentQueue.length === 0) {
              setEnabled(false);
            }
            return currentQueue;
          });
        }, delay);
      }
      
      return newQueue;
    });
  };
  
  return (
    <HttpRequestContext.Provider value={{ trackRequest, trackResponse }}>
      <OverlayContainer active={enabled} className="overlay">
        <OverlayBackground className="overlay-background" />
        <OverlayContent className="overlay-content">
          {children}
        </OverlayContent>
      </OverlayContainer>
    </HttpRequestContext.Provider>
  );
};

export const useFetchWithTracking = () => {
  const { trackRequest, trackResponse } = useHttpTracking();
  
  const fetchWithTracking = async (url: string, options?: RequestInit) => {
    trackRequest();
    try {
      const response = await fetch(url, options);
      trackResponse();
      return response;
    } catch (error) {
      trackResponse();
      throw error;
    }
  };
  
  return fetchWithTracking;
};

export default Overlay;
