/**
 * CLASSES
 *
 * Method modifiers
 * public - a method could be called anywhere any time
 * protected - a method could be called by other methods in the calss or by other methods in child classes
 * private - a method could be called by other methods ONLY in the class
 */

class Vehicle {
  color: string;

  constructor(color: string) {
    // fields should be initialized either in constructore
    // either after declaration
    this.color = color;
  }

  public drive(): void {
    console.log('chaga chaga');
  }
  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    // as color has no modifier, no new field is created
    super(color); // ref to constructor method of the parent class
  }

  // ovveride parent's method
  // with err as method modifier is changed
  private drive(): void {
    console.log('vrooom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk(); // accesible as it is a protected method
  }
}

const vehicle = new Vehicle('red');
vehicle.drive();
vehicle.honk();

const fastCar = new Car(4, 'blue');
fastCar.drive(); // err as the method is ovveriden as private
fastCar.startDrivingProcess(); // this method is public
fastCar.honk(); // protected method can not be accesed outside of the class or child

class flyingVehicle {
  // fields assignment shortcut
  // NB! added modifier
  constructor(public color: string) {}
}
