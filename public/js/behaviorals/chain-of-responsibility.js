// Handler
class Handler {
    constructor() {
        this.nextHandler = null;
    }

    setNextHandler(handler) {
        this.nextHandler = handler;
    }

    handleRequest(request) {
        throw new Error("This method should be overridden.");
    }
}

// Concrete Handlers
class ConcreteHandler1 extends Handler {
    handleRequest(request) {
        if (request === "A") {
            var state = "Handled by ConcreteHandler1";
            var id = "now-state";
            upgradeState(state, id);
        } else if (this.nextHandler) {
            this.nextHandler.handleRequest(request);
        } else {
            var state = "No handler can process the request";
            var id = "now-state";
            upgradeState(state, id);
        }
    }
}

class ConcreteHandler2 extends Handler {
    handleRequest(request) {
        if (request === "B") {
            var state = "Handled by ConcreteHandler2";
            var id = "now-state";
            upgradeState(state, id);
        } else if (this.nextHandler) {
            this.nextHandler.handleRequest(request);
        } else {
            var state = "No handler can process the request";
            var id = "now-state";
            upgradeState(state, id);
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

function processChainOfResponsibility() {
    var state = "";
    var id = "now-state";
    updateState(state, id);

    // Usage
    const handler1 = new ConcreteHandler1();
    const handler2 = new ConcreteHandler2();
    handler1.setNextHandler(handler2);

    handler1.handleRequest("A");
    // Output: Handled by ConcreteHandler1

    handler1.handleRequest("B");
    // Output: Handled by ConcreteHandler2

    handler1.handleRequest("C");
    // Output: No handler can process the request
}


