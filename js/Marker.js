
import Graphic from "https://js.arcgis.com/4.34/@arcgis/core/Graphic.js";

export class Marker {
    constructor(id, placeOfInterestType, title, img, description, longitude, latitude){
        this.id = id;
        this.placeOfInterestType = placeOfInterestType;
        this.title = title;
        this.img = img;
        this.description = description;
        this.longitude = longitude;
        this.latitude = latitude;
    }

    #symbolPictureIdentifier(){
        let symbolPicture;
        switch(this.placeOfInterestType){
            case "beach":
                symbolPicture = "icons/beach-solid.svg";
                break;
            case "fortress":
                symbolPicture = "icons/fortress.svg";
                break;
            case "walking":
                symbolPicture = "icons/walking.svg";
                break;
            case "museum":
                symbolPicture = "icons/museum.svg";
                break;
            case "mountain-cave":
                symbolPicture = "icons/mountain-cave.svg";
                break;
            case "panorama":
                symbolPicture = "icons/panorama-svgrepo-com.svg";
                break;
            case "park":
                symbolPicture = "icons/park-svgrepo-com.svg";
                break;
            case "lake":
                symbolPicture = "icons/lake-svgrepo-com.svg";
                break;
            case "promenade":
                symbolPicture = "icons/promenade-svgrepo-com.svg";
                break;
        }
        return symbolPicture;
    }

    #imageDisplay(){
        let images = ``;
        this.img.forEach(i => {
            console.log(i);
            images += `<img src="${window.location.origin}/map/${i}" alt="${this.title}" width="200"/>` // Works for GitHub pages
            /*images += `<img src="${window.location.origin}/${i}" alt="${this.title}" width="200"/>`*/ // Works for local host
        })
        return images;
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
        url: this.#symbolPictureIdentifier(),
        width: "32px",
        height: "32px"
      };

        return new Graphic({
             geometry: point, 
             symbol: symbol,
             popupTemplate: {
                title: `${this.title}`,
                content: `
                    ${this.#imageDisplay()}
                    <p>${this.description}</p>
                `
             }
        })
    }
}