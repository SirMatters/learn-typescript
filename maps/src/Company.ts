import faker from 'faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  markerContent = (): string =>
    `
    <div>
      <h1>Company name: ${this.companyName}</h1> 
      <h3>Catchprase: ${this.catchPhrase}</h3>
    </div>
    `;

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
