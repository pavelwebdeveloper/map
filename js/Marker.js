
import Graphic from "https://js.arcgis.com/4.34/@arcgis/core/Graphic.js";

export class Marker {
    constructor(id, img, description, longitude, latitude){
        this.id = id;
        this.img = img;
        this.description = description;
        this.longitude = longitude;
        this.latitude = latitude;
    }

    createGraphic(){
        const point = {
        //Create a point
        type: "point",
        longitude: this.longitude,
        latitude: this.latitude,
      };

      const symbol = {
        type: "picture-marker",
        url: "https://static.arcgis.com/images/Symbols/Shapes/BlackStarLargeB.png",
        width: "64px",
        height: "64px"
      };

        return new Graphic({
             geometry: point, 
             symbol: symbol,
             popupTemplate: {
                content: `
                    <img src=${this.img} width="200"/>
                    <p>${this.description}</p>
                `
             }
        })
    }
}