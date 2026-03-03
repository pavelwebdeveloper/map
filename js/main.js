import esriConfig from "https://js.arcgis.com/4.34/@arcgis/core/config.js";

esriConfig.apiKey = "AAPTai3PzD2-f30JnzxTX_PskCQ..I3AAxLd6Ogkkil_bWzXiKUsVvVogH9tmB-czYIVn6NBLvTjmm2rxB11lfBQ0NHXyHg5mOIhStaxulXnI8UKW0_4_-x-kEsKqwSCWDXUrvXUP8aiRhhN77WLMubMRixVY7doIgt6gzeBTIpHdY5lKxRD9XMRaqwzfsASNyaPKDQs6p98xNpxXTqMzCm4pd4bLrNEY1IwnhFZN6QRxltjmouFV2LK0MvfwANYmpVOE3L0cQp7-ubNbJA..AT1_12dEYBqc";


import Map from "https://js.arcgis.com/4.34/@arcgis/core/Map.js";
import MapView from "https://js.arcgis.com/4.34/@arcgis/core/views/MapView.js";
import GraphicsLayer from "https://js.arcgis.com/4.34/@arcgis/core/layers/GraphicsLayer.js";

import { Marker } from "./Marker.js";


   
const graphicsLayer = new GraphicsLayer();

const map = new Map({ 
        basemap: "arcgis/topographic",
        layers: [graphicsLayer] 
    });

const view = new MapView({
        map: map,
        container: "viewDiv",
        center: [6.769, 43.426],
        zoom: 12
    });



     
 