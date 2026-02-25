import esriConfig from "https://js.arcgis.com/4.34/@arcgis/core/config.js";

esriConfig.apiKey = "AAPTxy8BH1VEsoebNVZXo8HurGVJYBP5RCY3Qd-UftJl3nYGhWn-9U0tmeq-hiwLQrOneEiavtS3h6aCovZFpc0fL85XMmaLV3Uk83gok0BNPkQElxTbuiio5E8iA9F3b5Yb2_y3Knf9EOrFGtuq9er5slYi3n8V1-Jc-dz3_PolWPJXSFrcQe8AFPmQXIJcF3njSNIpPNdPlMNzomWYQpmBJkad29XDIbTT37ndlyc15mQ.AT1_12dEYBqc";


import Map from "https://js.arcgis.com/4.34/@arcgis/core/Map.js";
import MapView from "https://js.arcgis.com/4.34/@arcgis/core/views/MapView.js";
import GraphicsLayer from "https://js.arcgis.com/4.34/@arcgis/core/layers/GraphicsLayer.js";

import { Marker } from "./Marker.js";


const response = await fetch("./js/markers.json");
const markers = await response.json();

console.log(markers);
   
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

markers.forEach(m => {
  console.log("Marker img:", m.img);
  const marker = new Marker(m.id, m.placeOfInterestType, m.title, m.img, m.description, m.longitude, m.latitude);
  graphicsLayer.add(marker.createGraphic());
});

     
 