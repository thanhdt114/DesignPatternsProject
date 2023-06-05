// Abstract Class
class AbstractClass {
    templateMethod() {
        this.stepOne();
        this.stepTwo();
        this.stepThree();
    }

    stepOne() {
        throw new Error("This method should be overridden.");
    }

    stepTwo() {
        throw new Error("This method should be overridden.");
    }

    stepThree() {
        throw new Error("This method should be overridden.");
    }
}

// Concrete Classes
class ConcreteClassA extends AbstractClass {
    stepOne() {
        var state = "Step one for ConcreteClassA.";
        var id = "now-state";
        upgradeState(state, id);
    }

    stepTwo() {
        var state = "Step two for ConcreteClassA.";
        var id = "now-state";
        upgradeState(state, id);
    }

    stepThree() {
        var state = "Step three for ConcreteClassA.";
        var id = "now-state";
        upgradeState(state, id);
    }
}

class ConcreteClassB extends AbstractClass {
    stepOne() {
        var state = "Step one for ConcreteClassB.";
        var id = "now-state";
        upgradeState(state, id);
    }

    stepTwo() {
        var state = "Step two for ConcreteClassB.";
        var id = "now-state";
        upgradeState(state, id);
    }

    stepThree() {
        var state = "Step three for ConcreteClassB.";
        var id = "now-state";
        upgradeState(state, id);
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

function processTemplateMethod() {
    var state = "";
    var id = "now-state";
    updateState(state, id);

    // Usage
    const concreteClassA = new ConcreteClassA();
    concreteClassA.templateMethod();
    /*
    Output:
    Step one for ConcreteClassA.
    Step two for ConcreteClassA.
    Step three for ConcreteClassA.
    */

    const concreteClassB = new ConcreteClassB();
    concreteClassB.templateMethod();
    /*
    Output:
    Step one for ConcreteClassB.
    Step two for ConcreteClassB.
    Step three for ConcreteClassB.
    */
}


