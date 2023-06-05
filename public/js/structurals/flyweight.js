// Flyweight
class CoffeeFlavor {
    constructor(flavor) {
        this.flavor = flavor;
    }

    getFlavor() {
        return this.flavor;
    }
}

// Flyweight Factory
class CoffeeFlavorFactory {
    constructor() {
        this.flavors = {};
    }

    getCoffeeFlavor(flavorName) {
        if (!this.flavors[flavorName]) {
            this.flavors[flavorName] = new CoffeeFlavor(flavorName);
        }
        return this.flavors[flavorName];
    }

    getTotalCoffeeFlavors() {
        return Object.keys(this.flavors).length;
    }
}

function setImage(imageUrl, maxWidth, id) {
    var imageElement = document.getElementById(id);
    
    var image = new Image();
    image.onload = function() {
      var width = image.width; // Chiều rộng ban đầu của ảnh
      var height = image.height; // Chiều cao ban đầu của ảnh
    
      // Tính toán kích thước mới dựa trên tỷ lệ rộng ban đầu và rộng tối đa mới
      var newWidth = maxWidth;
      var newHeight = (height * maxWidth) / width;
    
      // Tạo một canvas và vẽ ảnh vào với kích thước mới
      var canvas = document.createElement("canvas");
      canvas.width = newWidth;
      canvas.height = newHeight;
      var context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, newWidth, newHeight);
    
      // Gán dữ liệu canvas vào thuộc tính src của thẻ <img>
      imageElement.src = canvas.toDataURL();
    };
    
    image.src = imageUrl;
}

function updateState(state, id) {
    var nowState = document.getElementById(id);
    if ((state == "") || (state == null)) {
        state = "empty";
    }
    nowState.innerHTML = "State: " + state;
}

function upgradeState(state, id) {
    var nowState = document.getElementById(id);
    var lines = nowState.innerHTML.split("<br>");
    var text = "";

    if (state == "" || state == null) {
        state = "empty";
    }
    text = "State: " + state;

    lines.push(text);
    nowState.innerHTML = lines.join("<br>");
}

function processFlyweight() {
    var state = "";
    var id = "now-state";
    updateState(state, id);

    const flavors = ["Espresso", "Cappuccino", "Latte", "Mocha"];
    const factory = new CoffeeFlavorFactory();

    flavors.forEach((flavor) => {
        const coffeeFlavor = factory.getCoffeeFlavor(flavor);
        var state = "Coffee Flavor: " + coffeeFlavor.getFlavor();
        var id = "now-state";
        upgradeState(state, id);
    });

    var state = "Total Coffee Flavors: " + factory.getTotalCoffeeFlavors();
    var id = "now-state";
    upgradeState(state, id);
}
