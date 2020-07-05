/**
 * The class is used to wrap google map to prevent
 * standard methods exposure. Oterwise other devs
 * could 'break' the app by using unwanted methods
 */

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor() {
    this.googleMap = new google.maps.Map(document.getElementById('map'), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
