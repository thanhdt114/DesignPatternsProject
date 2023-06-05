// Giao diện gốc
class Shape_Bridge {
    constructor(color) {
        this.color = color;
    }

    draw() {
        throw new Error("This method should be overridden.");
    }
}

// Giao diện mở rộng cho các hình vuông
class Square_Bridge extends Shape_Bridge {
    draw() {
        var state = "Drawing a square with color" + this.color;
        var id = "now-state";
        updateState(state, id);
    }
}

// Giao diện mở rộng cho các hình tròn
class Circle_Bridge extends Shape_Bridge {
    draw() {
        var state = "Drawing a circle with color" + this.color;
        var id = "now-state";
        updateState(state, id);
    }
}

// Giao diện độc lập cho các màu sắc
class Color {
    constructor(name) {
        this.name = name;
    }
}

// Giao diện màu đỏ
class RedColor extends Color {
    constructor() {
        super("red");
    }
}

// Giao diện màu xanh
class BlueColor extends Color {
    constructor() {
        super("blue");
    }
}

// Bridge kết nối giao diện hình và giao diện màu
class ShapeColorBridge {
    constructor(shape, color) {
        this.shape = shape;
        this.color = color;
    }

    draw() {
        this.shape.draw();
        console.log(`Coloring the shape with ${this.color.name} color.`);
    }
}

function setImage(imageUrl, maxWidth, id) {
    var imageElement = document.getElementById(id);

    var image = new Image();
    image.onload = function () {
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
    if (state == "" || state == null) {
        state = "empty";
    }
    nowState.innerHTML = "State: " + state;
}

function drawRedSquare() {
    const redSquare = new ShapeColorBridge(new Square_Bridge(), new RedColor());
    redSquare.draw();
}

function drawBlueCircle() {
    const blueCircle = new ShapeColorBridge(new Circle_Bridge(), new BlueColor());
    blueCircle.draw();
}
