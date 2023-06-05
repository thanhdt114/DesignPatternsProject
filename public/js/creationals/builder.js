class House {
    constructor() {
        this.foundation = '';
        this.structure = '';
        this.roof = '';
    }

    setFoundation(foundation) {
        this.foundation = foundation;
    }

    setStructure(structure) {
        this.structure = structure;
    }

    setRoof(roof) {
        this.roof = roof;
    }

    getInfo() {
        var state = "House with " + this.foundation + ", " + this.structure + " and " + this.roof;
        var id = "now-state";
        updateState(state, id);
        return `House with ${this.foundation}, ${this.structure}, and ${this.roof}`;
    }
}

class HouseBuilder {
    constructor() {
        this.house = new House();
    }

    buildFoundation(foundation) {
        this.house.setFoundation(foundation);
        return this;
    }

    buildStructure(structure) {
        this.house.setStructure(structure);
        return this;
    }

    buildRoof(roof) {
        this.house.setRoof(roof);
        return this;
    }

    getHouse() {
        return this.house;
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

function buildHouse(foundation, structure, roof) {
    const builder = new HouseBuilder();
    const house = builder
        .buildFoundation(foundation)
        .buildStructure(structure)
        .buildRoof(roof)
        .getHouse();

    house.getInfo()
}

function processBuilder() {
    var input = document.getElementById("builder-input-foundation");
    var foundation = input.value;

    input = document.getElementById("builder-input-structure");
    var structure = input.value;

    input = document.getElementById("builder-input-roof");
    var roof = input.value;

    buildHouse(foundation, structure, roof);
}
