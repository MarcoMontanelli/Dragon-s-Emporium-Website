

import React, { useState, useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

function GlobeComponent() {
  
  const globeEl = useRef();

  const markers = [
    { id: 1, city: 'Rome', lat: 45.9028, lng: 9.4964, value: 100, markerIcon: '../src/assets/whiteDragon.png', color: 'rgba(168, 85, 247, 0.75)' },
    { id: 2, city: 'Paris', lat: 48.8566, lng: 2.3522, color: 'rgba(255, 255, 255, 0.75)' },
    { id: 3, city: 'Berlin', lat: 52.5200, lng: 13.4050, color: 'rgba(255, 255, 255, 0.75)' },
    { id: 4, city: 'Madrid', lat: 40.4168, lng: -3.7038, color: 'rgba(255, 255, 255, 0.75)' },
    { id: 5, city: 'Palermo', lat: 37.4168, lng: 14.4050, color: 'rgba(255, 255, 255, 0.75)' },
  ];

  const arcsData = [
    { startLat: 45.9028, startLng: 9.4964, endLat: 48.8566, endLng: 2.3522, color: ['#ffffff', '#ffffff'] },
    { startLat: 45.9028, startLng: 9.4964, endLat: 52.5200, endLng: 13.4050, color: ['#ffffff', '#ffffff'] },
    { startLat: 45.9028, startLng: 9.4964, endLat: 40.4168, endLng: -3.7038, color: ['#ffffff', '#ffffff'] },
    { startLat: 45.9028, startLng: 9.4964, endLat: 37.4168, endLng: 14.4050, color: ['#ffffff', '#ffffff'] }
  ];

  // Update globe size based on the aspect ratio
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerWidth * 9 / 16); // 16:9 aspect ratio

  useEffect(() => {
    // Update the size of the globe based on window resize
    const handleResize = () => {
      setWidth(globeEl.current.offsetWidth);
      setHeight(globeEl.current.offsetWidth * 9 / 16);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      
    };
  }, []);

  return (
    <div ref={globeEl} className="w-full aspect-w-16 aspect-h-9">
      <Globe
        
        width={width}
        height={height}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        markers={markers}
        markerTooltipRenderer={marker => marker.city}
        pointsData={markers}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointAltitude={0}
        pointRadius={0.3}
        animateIn={true}
        arcsData={arcsData}
        arcColor="color"
        arcDashLength={0.1}
        arcDashGap={0}
        onPointHover={(point) => setHoveredMarker(point)}
        cameraDistance={2}
        pointOfView={{ lat: 45.9028, lng: 9.4964, altitude: 1 }}
        htmlElementsData={markers}
        htmlElement={marker => {
          const el = document.createElement('div');
          el.style.width = '48px'; // Larger icon size
          el.style.height = '48px'; // Larger icon size
          el.style.backgroundImage = `url(${marker.markerIcon})`;
          el.style.backgroundSize = 'contain';
          el.style.backgroundRepeat = 'no-repeat';
          el.style.backgroundPosition = 'center';
          el.onmouseover = () => setHoveredMarker(marker);  // Set hovered marker on mouse over
          el.onmouseout = () => setHoveredMarker(null);  // Clear hovered marker on mouse out
          return el;
        }}
      />
      
    </div>
  );
}

export default GlobeComponent;
