// Subsystem 1
class Subsystem1 {
    operation1() {
        var state = "Subsystem1 operation1";
        var id = "now-state";
        upgradeState(state, id);
    }

    operation2() {
        var state = "Subsystem1 operation2";
        var id = "now-state";
        upgradeState(state, id);
    }
}

// Subsystem 2
class Subsystem2 {
    operation1() {
        var state = "Subsystem2 operation1";
        var id = "now-state";
        upgradeState(state, id);
    }

    operation2() {
        var state = "Subsystem2 operation2";
        var id = "now-state";
        upgradeState(state, id);
    }
}

// Facade
class Facade {
    constructor(subsystem1, subsystem2) {
        this.subsystem1 = subsystem1;
        this.subsystem2 = subsystem2;
    }

    operation() {
        this.subsystem1.operation1();
        this.subsystem2.operation1();
        this.subsystem1.operation2();
        this.subsystem2.operation2();
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

function processFacade() {
    var state = "";
    var id = "now-state";
    updateState(state, id);

    const subsystem1 = new Subsystem1();
    const subsystem2 = new Subsystem2();
    const facade = new Facade(subsystem1, subsystem2);

    facade.operation();
}
