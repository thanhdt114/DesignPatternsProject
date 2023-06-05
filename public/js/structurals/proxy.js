// Subject
class Image {
    constructor(filename) {
        this.filename = filename;
    }

    display() {
        var state = "Displaying image: " + this.filename;
        var id = "now-state";
        upgradeState(state, id);
    }
}

// Proxy
class ImageProxy {
    constructor(filename) {
        this.filename = filename;
        this.realImage = null;
    }

    display() {
        if (!this.realImage) {
            this.realImage = new Image(this.filename);
        }
        this.realImage.display();
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

function processProxy() {
    var state = "";
    var id = "now-state";
    updateState(state, id);

    const image = new ImageProxy("image.jpg");
    image.display();
}
