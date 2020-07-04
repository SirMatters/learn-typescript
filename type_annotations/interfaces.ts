/**
 * INTERFACES
 * interface creates a new type describing the property
 * names and value types of an object
 */

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

const printVechicle = ({
  name,
  year,
  broken,
}: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${name} produced ${year} is broken: ${broken}`);
};
printVechicle(oldCivic);

// interface could be created to shorten type annotation
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const newToyota = {
  name: 'corola',
  year: 2020,
  broken: false,
  summary() {
    return `name is ${this.name}`;
  },
};

// interface controls properties presence and value types of the properties
// TS basically asks
// 'Does this object has property which ... ?'
// extra props will be ignored
const printVechicleWithInterface = (vehicle: Vehicle): void => {
  console.log(vehicle.summary);
};
printVechicleWithInterface(newToyota);

/**
 * as we basically use only one prop of the
 * vehicle the interface for the print funciton
 * could be condensed. The interface name could
 * be reconsidered as well:
 */

interface Reportable {
  summary(): string;
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary);
};

// so newToyota is both Vehicle and Reportable
printSummary(newToyota);

/**
 * code reuse with interfaces
 */

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};
// so diff object could interract with the printSummary
// as Reportable interface describes the function's need
// in summary() property
//
//
// NB!: INTERFACE === contract == API
//
printSummary(drink);
printSummary(newToyota);
