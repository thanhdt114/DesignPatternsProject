// Định nghĩa một lớp Shape gồm phương thức draw
class Shape {
    draw() {
        throw new Error("Phương thức này phải được ghi đè.");
    }
}

// Triển khai các lớp con cụ thể của Shape
class Circle extends Shape {
    draw() {
        var imageUrl = "images/circle";
        var id = "draw-shape";
        setImage(imageUrl, 512, "draw-shape");

        state = "Vẽ hình tròn";
        var nowState = "now-state";
        updateState(state, nowState)
    }
}

class Square extends Shape {
    draw() {
        var imageUrl = "images/square";
        var id = "draw-shape";
        setImage(imageUrl, 512, "draw-shape");

        state = "Vẽ hình vuông";
        var nowState = "now-state";
        updateState(state, nowState)
    }
}

// Factory Method để tạo đối tượng Shape dựa trên type
function createShape(type) {
    switch (type) {
        case "circle":
            return new Circle();
        case "square":
            return new Square();
        default:
            var id = "draw-shape"
            var imageElement = document.getElementById(id);
            imageElement.src = null;

            state = "Hình không xác định";
            var nowState = "now-state";
            updateState(state, nowState)
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

function drawShape() {
    var input = document.getElementById("factory-input");
    var value = input.value;
    const item = createShape(value);
    
    item.draw();
}

function clearState() {
    var state = "";
    var id = "now-state";
    updateState(state, id);
}

