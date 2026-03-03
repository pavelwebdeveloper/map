import esriConfig from "https://js.arcgis.com/4.34/@arcgis/core/config.js";

esriConfig.apiKey = "AAPTaM82e_eL-4HBhzDZnS1ev9g..LcY_1YyXe9pPTTdXihJY3ElKe2HxNtJ562fhGlcnbjDNu6pnkbz1Kvgzxf3u7VlUbbuD90e98nzXo-legiUDTBdJqN_chUEKeIr-uqVxJU1AgzTkm_bOAKc-lG2Jd0ECACGKfEHS0p6xni1Xsh9G-4veU_oVr71D1Mddgl5vVsBpg7QQJQ91Xk22G0MjsEGIZ5p7sYrm3Qy3apdIODtmUNhTHzrZgEHkPM1WDB5Jn_EKnPCwwkaMwRI.AT1_12dEYBqc";


import Map from "https://js.arcgis.com/4.34/@arcgis/core/Map.js";
import MapView from "https://js.arcgis.com/4.34/@arcgis/core/views/MapView.js";
import GraphicsLayer from "https://js.arcgis.com/4.34/@arcgis/core/layers/GraphicsLayer.js";

import { MarkerManager } from "./MarkerManager.js";



   
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

document.getElementById("markers-filter-select").addEventListener("change", async function(){
    const selectedMarkersType = document.getElementById("markers-filter-select").value;

    console.log("selectedMarkersType outside MarkersManager $$$$$$$$$$$$$$$$$$$$$$$$$$!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(selectedMarkersType);

    graphicsLayer.removeAll();

    markerManager.addMarkersToMap(selectedMarkersType);
})

console.log("window.location.origin");
console.log(window.location.origin);
 