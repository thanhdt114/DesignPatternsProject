// Receiver
class Light {
    turnOn() {
        var state = "Light is on";
        var id = "now-state";
        upgradeState(state, id);
    }

    turnOff() {
        var state = "Light is off";
        var id = "now-state";
        upgradeState(state, id);
    }
}

// Command
class Command {
    constructor(receiver) {
        this.receiver = receiver;
    }

    execute() {
        throw new Error("This method should be overridden");
    }
}

// Concrete Commands
class TurnOnCommand extends Command {
    execute() {
        this.receiver.turnOn();
    }
}

class TurnOffCommand extends Command {
    execute() {
        this.receiver.turnOff();
    }
}

// Invoker
class RemoteControl {
    setCommand(command) {
        this.command = command;
    }

    executeCommand() {
        this.command.execute();
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

function processCommand() {
    var state = "";
    var id = "now-state";
    updateState(state, id);

    // Usage
    const light = new Light();

    const turnOnCommand = new TurnOnCommand(light);
    const turnOffCommand = new TurnOffCommand(light);

    const remoteControl = new RemoteControl();

    remoteControl.setCommand(turnOnCommand);
    remoteControl.executeCommand();
    // Output: Light is on

    remoteControl.setCommand(turnOffCommand);
    remoteControl.executeCommand();
    // Output: Light is off
}


