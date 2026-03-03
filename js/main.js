import esriConfig from "https://js.arcgis.com/4.34/@arcgis/core/config.js";

esriConfig.apiKey = "AAPTaUE2YHdrQUy5SU0ei_pVVww..IHPCMSECUrCSHUn_lu3qX42B3pwnPSqkh4xGn4CotX80JqX6uy_HU76miIWG_WbbivzM3Kdijj2GxwFFDtom4wsff3xKzOSy8YydWP8MX7FnCuJpWhV1_6IJkGFwd5f6wJzrJTSrLhVwy7wCK9gXtxRRgPYsGkwt-88I-ZYY9rbyXVRA0dhdn2sX2OdpJNIlxZ4GagNOHta4TGg7XusPo4ZhGpe1c0RV94oxRJsziU0KCcWqzkeWt4c.AT1_12dEYBqc";


import Map from "https://js.arcgis.com/4.34/@arcgis/core/Map.js";
import MapView from "https://js.arcgis.com/4.34/@arcgis/core/views/MapView.js";
import GraphicsLayer from "https://js.arcgis.com/4.34/@arcgis/core/layers/GraphicsLayer.js";

import { MarkerManager } from "./MarkerManager.js";

console.log("window.location.origin");
console.log(window.location.origin);

   
const graphicsLayer = new GraphicsLayer();

const map = new Map({ 
        basemap: "arcgis/topographic",
        //basemap: "osm",
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
 