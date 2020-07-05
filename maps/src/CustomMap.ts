import { User } from './User';
import { Company } from './Company';

interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}
/**
 * The class is used to wrap google map to prevent
 * standard methods exposure. Oterwise other devs
 * could 'break' the app by using unwanted methods
 */

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
