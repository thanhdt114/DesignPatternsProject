// Abstract Factory
class AbstractCarFactory {
    createCar() {
        throw new Error("This method should be overridden.");
    }
}

// Concrete Factory
class SedanCarFactory extends AbstractCarFactory {
    createCar() {
        return new SedanCar();
    }
}

class SuvCarFactory extends AbstractCarFactory {
    createCar() {
        return new SuvCar();
    }
}

// Abstract Product
class Car {
    drive() {
        throw new Error("This method should be overridden.");
    }
}

// Concrete Products
class SedanCar extends Car {
    drive() {
        console.log("Driving a Sedan car.");

        var state = "Driving a Sedan car";
        var id = "now-state";
        updateState(state, id)
    }
}

class SuvCar extends Car {
    drive() {
        console.log("Driving an SUV car.");

        var state = "Driving an SUV car";
        var id = "now-state";
        updateState(state, id)
    }
}

function updateState(state, id) {
  var nowState = document.getElementById(id);
  if ((state == "") || (state == null)) {
      state = "empty";
  }
  nowState.innerHTML = "State: " + state;
}

// Client
function client(factory) {
    const car = factory.createCar();
    car.drive();
}

function sedanProcess() {
    const sedanFactory = new SedanCarFactory();
    client(sedanFactory);
}

function suvProcess() {
    const suvFactory = new SuvCarFactory();
    client(suvFactory);
}

// Usage


