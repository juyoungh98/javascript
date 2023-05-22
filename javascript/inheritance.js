class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}

const myVehicle = new Vehicle("운송수단", 2);
console.log(myVehicle);

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel);
  }
}

const myBicycle = new Bicycle("자전거", 2);
console.log(myBicycle);

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel);
    this.license = license;
  }
}

const myCar = new Car("자동차", 4, "2종보통");
console.log(myCar);
