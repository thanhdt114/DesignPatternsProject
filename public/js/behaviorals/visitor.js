// Visitor
class Visitor {
    visitElementA(element) {
        var state = "Visitor is visiting ElementA";
        var id = "now-state";
        upgradeState(state, id);
        // Thực hiện các thao tác trên ElementA
    }

    visitElementB(element) {
        var state = "Visitor is visiting ElementB";
        var id = "now-state";
        upgradeState(state, id);
        // Thực hiện các thao tác trên ElementB
    }
}

// ElementA
class ElementA {
    accept(visitor) {
        visitor.visitElementA(this);
    }
}

// ElementB
class ElementB {
    accept(visitor) {
        visitor.visitElementB(this);
    }
}

// Object Structure
class ObjectStructure {
    elements = [];

    addElement(element) {
        this.elements.push(element);
    }

    accept(visitor) {
        for (const element of this.elements) {
            element.accept(visitor);
        }
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

function processVisitor() {
    var state = "";
    var id = "now-state";
    updateState(state, id);

    // Usage
    const visitor = new Visitor();
    const elementA = new ElementA();
    const elementB = new ElementB();

    const objectStructure = new ObjectStructure();
    objectStructure.addElement(elementA);
    objectStructure.addElement(elementB);

    objectStructure.accept(visitor);
}


