import esriConfig from "https://js.arcgis.com/4.34/@arcgis/core/config.js";

esriConfig.apiKey = "AAPTa2JYA6FrlSdVptbfEC5qfAQ..saw-C2Uuds8jb1x_zH-m14AJ2xwUj1jQxYuZPylSvT88he2VNw25Zj_0NQwA7obpfaHJOq3NeOvH9ivPy7L1WCI75rioX7A_CmGOHYHAlaY3ZUYhIZ90HuRFEwZ_fx3ELHnKOYdX9wKtk4XVjuV3XHH6dn9_SoTJRWPpfxmNGIST-T55ehV9InlXGF6pp2GBd_z4GyVKJDNxCbj2A6PgOK2KB5f2GKu8vu85omLGXuLWSTCPCBjQYxU.AT1_12dEYBqc";

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
 