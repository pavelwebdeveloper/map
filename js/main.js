import esriConfig from "https://js.arcgis.com/4.34/@arcgis/core/config.js";

esriConfig.apiKey = "AAPTakGWC5mw5MUL2S-gxVJ0JXw..6JgoILI5u90cz1mc89dL2TXuBXMktaZ0Oq9CNtEgDkdB8uImajpUrk98iAkvcSn3Vc-z7mhsYB5HYRTIMuxod9hUFq6eJnvFdiqNhXtMbfsGFmDnjAhCocoR355yNCNuGVl4lmhjWtj0e8sKxbwWW4MnM1dIuop9dv3VhkcNJ_WOQFCrzuyNCmpqxPscCRmS6DBjlR7riKMIytJ8kHF3amEyklS0uoOvHkeLt5lu8WU_tuXh8ZL24Q..AT1_12dEYBqc";


import Map from "https://js.arcgis.com/4.34/@arcgis/core/Map.js";
import MapView from "https://js.arcgis.com/4.34/@arcgis/core/views/MapView.js";
import GraphicsLayer from "https://js.arcgis.com/4.34/@arcgis/core/layers/GraphicsLayer.js";

import { MarkerManager } from "./MarkerManager.js";

   
const graphicsLayer = new GraphicsLayer();

const map = new Map({ 
        basemap: "arcgis/topographic",
        //basemap: "osm", // This basemap can be displayed both on GitHub pages and local host
        layers: [graphicsLayer] 
    });

const view = new MapView({
        map: map,
        container: "viewDiv",
        center: [6.769, 43.426],
        zoom: 12
    });



const markerManager = new MarkerManager(view, graphicsLayer);
     
await markerManager.loadMarkers();

markerManager.addMarkersToMap();
 