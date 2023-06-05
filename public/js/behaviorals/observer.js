// Subject
class NewsPublisher {
    constructor() {
        this.subscribers = [];
    }

    subscribe(observer) {
        this.subscribers.push(observer);
    }

    unsubscribe(observer) {
        this.subscribers = this.subscribers.filter((subscriber) => subscriber !== observer);
    }

    notify(message) {
        this.subscribers.forEach((observer) => observer.update(message));
    }
}

// Observer
class NewsSubscriber {
    constructor(name) {
        this.name = name;
    }

    update(message) {
        var state = this.name + " received news: " + message;
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

function processObserver() {
    var state = "";
    var id = "now-state";
    updateState(state, id);

    // Usage
    const publisher = new NewsPublisher();

    const subscriber1 = new NewsSubscriber("Subscriber 1");
    const subscriber2 = new NewsSubscriber("Subscriber 2");
    const subscriber3 = new NewsSubscriber("Subscriber 3");

    publisher.subscribe(subscriber1);
    publisher.subscribe(subscriber2);
    publisher.subscribe(subscriber3);

    publisher.notify("Breaking news: Important announcement!");

    publisher.unsubscribe(subscriber2);

    publisher.notify("Latest updates: Weather forecast.");
}


