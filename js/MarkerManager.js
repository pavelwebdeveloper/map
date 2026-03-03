import { Marker } from "./Marker.js";

export class MarkerManager {
    

    constructor(view, graphicsLayer){
        this.view = view;
        this.graphicsLayer = graphicsLayer;
        this.markers = [];
    }

    async loadMarkers(){
        const response = await fetch("./js/markers.json");
        this.markers = await response.json();

        console.log(this.markers);
    }

    async addMarkersToMap(){
        this.markers.forEach(m => {
        console.log("Marker img:", m.img);
        const marker = new Marker(m.id, m.placeOfInterestType, m.title, m.img, m.description, m.longitude, m.latitude);
        this.graphicsLayer.add(marker.createGraphic());
    });
    }


}