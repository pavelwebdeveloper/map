class MarkerManager {
    

    constructor(){
        this.markers = [];
    }

    async loadMarkers(){
        const response = await fetch("./js/markers.json");
        this.markers = await response.json();

        console.log(markers);

        markers.forEach(m => {
        console.log("Marker img:", m.img);
        const marker = new Marker(m.id, m.placeOfInterestType, m.title, m.img, m.description, m.longitude, m.latitude);
        graphicsLayer.add(marker.createGraphic());
    });
    }


}