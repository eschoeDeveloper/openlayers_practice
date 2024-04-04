import React, { useEffect, useRef } from 'react';
import { Map as OlMap, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import { defaults as defaultControls } from 'ol/control';

export default function App() {
    const mapRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        if (!mapRef.current) return;

        const tileLayer = new TileLayer({
            source: new OSM()
        });
        const view = new View({
            center: fromLonLat([126.9783785, 37.5666612]), // 서울시청 경도와 위도
            zoom: 14
        });
      
        const map = new OlMap({
            controls: defaultControls({ zoom: false, rotate: false, attribution: false }),
            layers: [
                tileLayer
            ],
            view: view,
        });
        
        map.setTarget(mapRef.current);

        return () => {
            map.setTarget('');
        };

    }, []);

    return <div ref={mapRef} style={{ width: '100%', height: '100vh', display: "flex" }} />;

}