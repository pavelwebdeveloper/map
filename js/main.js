import esriConfig from "https://js.arcgis.com/4.34/@arcgis/core/config.js";

esriConfig.apiKey = "AAPTaM82e_eL-4HBhzDZnS1ev9g..LcY_1YyXe9pPTTdXihJY3ElKe2HxNtJ562fhGlcnbjDNu6pnkbz1Kvgzxf3u7VlUbbuD90e98nzXo-legiUDTBdJqN_chUEKeIr-uqVxJU1AgzTkm_bOAKc-lG2Jd0ECACGKfEHS0p6xni1Xsh9G-4veU_oVr71D1Mddgl5vVsBpg7QQJQ91Xk22G0MjsEGIZ5p7sYrm3Qy3apdIODtmUNhTHzrZgEHkPM1WDB5Jn_EKnPCwwkaMwRI.AT1_12dEYBqc";

import Map from "https://js.arcgis.com/4.34/@arcgis/core/Map.js";
import MapView from "https://js.arcgis.com/4.34/@arcgis/core/views/MapView.js";
import GraphicsLayer from "https://js.arcgis.com/4.34/@arcgis/core/layers/GraphicsLayer.js";

import { MarkerManager } from "./MarkerManager.js";

// initiating a GraphicsLayer object and asigning it to a constant
const graphicsLayer = new GraphicsLayer();

// initiating a Map object and asigning it to a constant
const map = new Map({ 
        basemap: "arcgis/topographic",
        //basemap: "osm",
        layers: [graphicsLayer] 
    });

// initiating a MapView object and asigning it to a constant
const view = new MapView({
        map: map, // referencing the map instance
        container: "viewDiv", // referencing the element in the DOM in which the map will be displayed
        center: [6.769, 43.426], // setting the central point of the map with coordinates
        zoom: 12 // setting the initial zoom level for the map
    });

// initiating a MarkerManager object and asigning it to a constant
const markerManager = new MarkerManager(view, graphicsLayer);
 
// loading markers to markerManager object
await markerManager.loadMarkers();

markerManager.addMarkersToMap();

// adding a change event listener to an element
document.getElementById("markers-filter-select").addEventListener("change", async function(){
    // getting value from select element and asigning it to a constant
    const selectedMarkersType = document.getElementById("markers-filter-select").value;

    // removing markers in order to display only filtered markers if necessary
    graphicsLayer.removeAll();

    // adding markers to the map
    markerManager.addMarkersToMap(selectedMarkersType);
})
 