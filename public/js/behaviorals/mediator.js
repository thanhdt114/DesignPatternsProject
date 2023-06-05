// Mediator
class ChatRoom {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    sendMessage(message, sender) {
        for (const user of this.users) {
            if (user !== sender) {
                user.receiveMessage(message);
            }
        }
    }
}

// Colleague
class User {
    constructor(name, chatRoom) {
        this.name = name;
        this.chatRoom = chatRoom;
        this.chatRoom.addUser(this);
    }

    sendMessage(message) {
        this.chatRoom.sendMessage(message, this);
    }

    receiveMessage(message) {
        var state = this.name + " received message: " + message;
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

function processMediator() {
    var state = "";
    var id = "now-state";
    updateState(state, id);

    // Usage
    const chatRoom = new ChatRoom();

    const user1 = new User("User 1", chatRoom);
    const user2 = new User("User 2", chatRoom);
    const user3 = new User("User 3", chatRoom);

    user1.sendMessage("Hello, everyone!");

    // Output:
    // User 2 received message: Hello, everyone!
    // User 3 received message: Hello, everyone!
}


