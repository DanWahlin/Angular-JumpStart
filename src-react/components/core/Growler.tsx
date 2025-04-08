import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

export enum GrowlerMessageType {
  Success,
  Danger,
  Warning,
  Info
}

const GrowlerContainer = styled.div<{ position: string }>`
  position: fixed;
  z-index: 999999;
  
  ${props => props.position === 'top-left' && `
    top: 12px;
    left: 12px;
  `}
  
  ${props => props.position === 'top-right' && `
    top: 12px;
    right: 12px;
  `}
  
  ${props => props.position === 'bottom-right' && `
    bottom: 12px;
    right: 12px;
  `}
  
  ${props => props.position === 'bottom-left' && `
    bottom: 12px;
    left: 12px;
  `}
  
  ${props => props.position === 'top-center' && `
    top: 12px;
    left: 50%;
    transform: translate(-50%, 0%);
  `}
  
  ${props => props.position === 'bottom-center' && `
    bottom: 12px;
    left: 50%;
    transform: translate(-50%, 0%);
  `}
  
  .close-button:focus {
    outline: 0;
  }
`;

const GrowlItem = styled.div<{ active: boolean; messageType: string }>`
  cursor: pointer;
  padding: 5px;
  width: 285px;
  height: 65px;
  opacity: ${props => props.active ? 1 : 0};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 1s;
  margin-bottom: 10px;
  
  &.alert-success {
    background-color: #dff0d8;
    border-color: #d6e9c6;
    color: #3c763d;
  }
  
  &.alert-danger {
    background-color: #f2dede;
    border-color: #ebccd1;
    color: #a94442;
  }
  
  &.alert-warning {
    background-color: #fcf8e3;
    border-color: #faebcc;
    color: #8a6d3b;
  }
  
  &.alert-info {
    background-color: #d9edf7;
    border-color: #bce8f1;
    color: #31708f;
  }
`;

const GrowlMessage = styled.span`
  font-weight: bold;
`;

interface IGrowl {
  id: number;
  message: string;
  messageType: string;
  enabled: boolean;
}

export const useGrowler = () => {
  const [growlerInstance, setGrowlerInstance] = useState<{ 
    growl: (message: string, growlType: GrowlerMessageType) => number 
  } | null>(null);
  
  useEffect(() => {
    return () => {
      setGrowlerInstance(null);
    };
  }, []);
  
  const growl = useCallback((message: string, growlType: GrowlerMessageType): number => {
    if (growlerInstance) {
      return growlerInstance.growl(message, growlType);
    }
    console.warn('Growler not initialized yet');
    return 0;
  }, [growlerInstance]);
  
  return {
    setGrowlerInstance,
    growl
  };
};

export const GrowlerContext = React.createContext<{
  growl: (message: string, growlType: GrowlerMessageType) => number
}>({
  growl: () => 0
});

export const GrowlerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { growl, setGrowlerInstance } = useGrowler();
  
  useEffect(() => {
    setGrowlerInstance({ growl });
  }, [setGrowlerInstance, growl]);
  
  return (
    <GrowlerContext.Provider value={{ growl }}>
      {children}
    </GrowlerContext.Provider>
  );
};

export const useGrowlerService = () => {
  return React.useContext(GrowlerContext);
};

interface GrowlerProps {
  position?: string;
  timeout?: number;
}

const Growler: React.FC<GrowlerProps> = ({ 
  position = 'bottom-right', 
  timeout = 3000 
}) => {
  const [growls, setGrowls] = useState<IGrowl[]>([]);
  const [growlCount, setGrowlCount] = useState(0);
  const { setGrowlerInstance } = useGrowler();
  
  const growl = useCallback((message: string, growlType: GrowlerMessageType): number => {
    const newCount = growlCount + 1;
    setGrowlCount(newCount);
    
    const bootstrapAlertType = GrowlerMessageType[growlType].toLowerCase();
    const messageType = `alert-${bootstrapAlertType}`;
    
    const newGrowl: IGrowl = {
      id: newCount,
      message,
      messageType,
      enabled: false
    };
    
    setGrowls(prevGrowls => [...prevGrowls, newGrowl]);
    
    setTimeout(() => {
      setGrowls(prevGrowls => 
        prevGrowls.map(g => 
          g.id === newCount ? { ...g, enabled: true } : g
        )
      );
      
      setTimeout(() => {
        setGrowls(prevGrowls => 
          prevGrowls.map(g => 
            g.id === newCount ? { ...g, enabled: false } : g
          )
        );
        
        setTimeout(() => {
          removeGrowl(newCount);
        }, timeout);
      }, timeout);
    }, 0);
    
    return newCount;
  }, [growlCount, timeout]);
  
  const removeGrowl = useCallback((id: number) => {
    setGrowls(prevGrowls => prevGrowls.filter(growl => growl.id !== id));
    setGrowlCount(prevCount => prevCount - 1);
  }, []);
  
  useEffect(() => {
    setGrowlerInstance({ growl });
    
    return () => {
      setGrowlerInstance(null);
    };
  }, [growl, setGrowlerInstance]);
  
  return (
    <GrowlerContainer position={position} className="growler">
      {growls.map(growl => (
        <GrowlItem
          key={growl.id}
          active={growl.enabled}
          messageType={growl.messageType}
          className={`growl alert ${growl.messageType}`}
          onClick={() => removeGrowl(growl.id)}
        >
          <GrowlMessage className="growl-message">{growl.message}</GrowlMessage>
        </GrowlItem>
      ))}
    </GrowlerContainer>
  );
};

export default Growler;
