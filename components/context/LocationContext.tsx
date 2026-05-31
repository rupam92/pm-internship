"use client"
// src/context/LocationContext.tsx
import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';

interface LocationContextProps {
  location: string;
  setLocation: (location: string) => void;
}

const LocationContext = createContext<LocationContextProps | undefined>(undefined);

export const LocationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [location, setLocationState] = useState<string>('Indore');

  const setLocation = (newLocation: string) => {
    setLocationState(newLocation);
    localStorage.setItem('currentLocation', newLocation);
  };

  useEffect(() => {
    const saved = localStorage.getItem('currentLocation');
    if (saved) {
      setLocationState(saved);
    }
  }, []);

  return (
      <LocationContext.Provider value={{ location, setLocation }}>
        {children}
      </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocationContext must be used within a LocationProvider');
  }
  return context;
};
