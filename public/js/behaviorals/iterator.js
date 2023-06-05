// Iterator Interface
class Iterator {
    hasNext() {
        throw new Error("This method should be overridden.");
    }

    next() {
        throw new Error("This method should be overridden.");
    }
}

// Concrete Iterator
class ArrayIterator extends Iterator {
    constructor(array) {
        super();
        this.array = array;
        this.index = 0;
    }

    hasNext() {
        return this.index < this.array.length;
    }

    next() {
        return this.array[this.index++];
    }
}

// Aggregate Interface
class Aggregate {
    createIterator() {
        throw new Error("This method should be overridden.");
    }
}

// Concrete Aggregate
class ArrayAggregate extends Aggregate {
    constructor(array) {
        super();
        this.array = array;
    }

    createIterator() {
        return new ArrayIterator(this.array);
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

function processIterator() {
    var state = "";
    var id = "now-state";
    updateState(state, id);

    // Usage
    const array = [1, 2, 3, 4, 5];
    const aggregate = new ArrayAggregate(array);
    const iterator = aggregate.createIterator();

    while (iterator.hasNext()) {
        var state = iterator.next();
        var id = "now-state";
        upgradeState(state, id);
    }
}


