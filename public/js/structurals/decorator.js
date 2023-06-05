// Giao diện chung cho thành phần cần được bổ sung chức năng
class Component_Decorator {
    operation() {
        var state = "Component operation";
        var id = "now-state";
        upgradeState(state, id);
    }
}

// Lớp cơ bản không có chức năng bổ sung
class ConcreteComponent extends Component_Decorator {
    operation() {
        var state = "ConcreteComponent operation";
        var id = "now-state";
        upgradeState(state, id);
    }
}

// Lớp Decorator
class Decorator extends Component_Decorator {
    constructor(component) {
        super();
        this.component = component;
    }

    operation() {
        this.component.operation();
        var state = "Decorator operation";
        var id = "now-state";
        upgradeState(state, id);
    }
}

// Lớp Decorator cụ thể 1
class ConcreteDecorator1 extends Decorator {
    operation() {
        super.operation();
        var state = "ConcreteDecorator1 operation";
        var id = "now-state";
        upgradeState(state, id);
    }
}

// Lớp Decorator cụ thể 2
class ConcreteDecorator2 extends Decorator {
    operation() {
        super.operation();
        var state = "ConcreteDecorator2 operation";
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

function processDecorator() {
    var state = "";
    var id = "now-state";
    updateState(state, id);

    const component = new ConcreteComponent();
    const decorator1 = new ConcreteDecorator1(component);
    const decorator2 = new ConcreteDecorator2(decorator1);
    
    decorator2.operation();
}
