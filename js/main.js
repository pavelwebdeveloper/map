import esriConfig from "https://js.arcgis.com/4.34/@arcgis/core/config.js";

esriConfig.apiKey = "AAPTxy8BH1VEsoebNVZXo8HurGVJYBP5RCY3Qd-UftJl3nYGhWn-9U0tmeq-hiwLQrOneEiavtS3h6aCovZFpc0fL85XMmaLV3Uk83gok0BNPkQElxTbuiio5E8iA9F3b5Yb2_y3Knf9EOrFGtuq9er5slYi3n8V1-Jc-dz3_PolWPJXSFrcQe8AFPmQXIJcF3njSNIpPNdPlMNzomWYQpmBJkad29XDIbTT37ndlyc15mQ.AT1_12dEYBqc";


import Map from "https://js.arcgis.com/4.34/@arcgis/core/Map.js";
import MapView from "https://js.arcgis.com/4.34/@arcgis/core/views/MapView.js";
import GraphicsLayer from "https://js.arcgis.com/4.34/@arcgis/core/layers/GraphicsLayer.js";
import Graphic from "https://js.arcgis.com/4.34/@arcgis/core/Graphic.js";

import { Marker } from "./Marker.js";
import { markers } from "./markers.js";


    
const graphicsLayer = new GraphicsLayer();

const map = new Map({ 
        basemap: "arcgis/topographic", 
        //basemap: "osm", // this basemap can be used to test access
        layers: [graphicsLayer] 
    });

const view = new MapView({
        map: map,
        container: "viewDiv",
        center: [6.769, 43.426],
        zoom: 12
    });

const point = {
        //Create a point
        type: "point",
        longitude: 6.7352,
        latitude: 43.4330,
      };

      const symbol = {
        type: "picture-marker",
        url: "https://static.arcgis.com/images/Symbols/Shapes/BlackStarLargeB.png",
        width: "64px",
        height: "64px"
      };

      const pointGraphic = new Graphic({ geometry: point, symbol: symbol });
      graphicsLayer.add(pointGraphic);
 