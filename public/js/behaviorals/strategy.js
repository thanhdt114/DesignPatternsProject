// Context
class PaymentProcessor {
    constructor(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    processPayment(amount) {
        this.paymentStrategy.pay(amount);
    }

    setPaymentStrategy(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }
}

// Strategy
class PaymentStrategy {
    pay(amount) {
        throw new Error("This method should be overridden.");
    }
}

// Concrete Strategies
class CreditCardPaymentStrategy extends PaymentStrategy {
    pay(amount) {
        var state = "Paying " + amount + " with credit card.";
        var id = "now-state";
        upgradeState(state, id);
    }
}

class PayPalPaymentStrategy extends PaymentStrategy {
    pay(amount) {
        var state = "Paying " + amount + " with PayPal.";
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

function processStrategy() {
    var state = "";
    var id = "now-state";
    updateState(state, id);

    // Usage
    const paymentProcessor = new PaymentProcessor(new CreditCardPaymentStrategy());
    paymentProcessor.processPayment(100); // Output: Paying $100 with credit card.

    paymentProcessor.setPaymentStrategy(new PayPalPaymentStrategy());
    paymentProcessor.processPayment(50); // Output: Paying $50 with PayPal.
}


