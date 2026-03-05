import { Marker } from "./Marker.js";

export class MarkerManager {
 
    // constructor function for MarkerManager object
    constructor(view, graphicsLayer){
        this.view = view;
        this.graphicsLayer = graphicsLayer;
        this.markers = [];
    }

    // function for loading an array of places of interest from a json file
    async loadMarkers(){
        const response = await fetch("./js/markers.json");
        this.markers = await response.json();
    }

    // function to filter, if necessary, and to add markers to the map
    async addMarkersToMap(selectedMarkersType = "all"){

        // moving 
        let filteredMarkers = this.markers;
        //let filteredMarkers = [];

        // filtering markers if necessary according to a needed marker type
        if(selectedMarkersType != "all"){
            filteredMarkers = this.markers.filter(m => {
                return m.placeOfInterestType == selectedMarkersType;
            })
        }
        
        // adding the filtered markers to the map
        filteredMarkers.forEach(m => {
            const marker = new Marker(m.id, m.placeOfInterestType, m.title, m.img, m.description, m.longitude, m.latitude);
            this.graphicsLayer.add(marker.createGraphic());
        });
    }
}