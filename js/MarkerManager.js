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
    }

    async addMarkersToMap(selectedMarkersType = "all"){

        let filteredMarkers = this.markers;

        if(selectedMarkersType != "all"){
            filteredMarkers = this.markers.filter(m => {
                return m.placeOfInterestType == selectedMarkersType;
            })
        }
        
            filteredMarkers.forEach(m => {
            const marker = new Marker(m.id, m.placeOfInterestType, m.title, m.img, m.description, m.longitude, m.latitude);
            this.graphicsLayer.add(marker.createGraphic());
        });
    }
}