// Context
class Player {
    constructor() {
        this.state = new IdleState(this);
    }

    setState(state) {
        this.state = state;
    }

    play() {
        this.state.play();
    }

    pause() {
        this.state.pause();
    }

    stop() {
        this.state.stop();
    }
}

// State
class PlayerState {
    constructor(player) {
        this.player = player;
    }

    play() {
        throw new Error("This method should be overridden.");
    }

    pause() {
        throw new Error("This method should be overridden.");
    }

    stop() {
        throw new Error("This method should be overridden.");
    }
}

// Concrete States
class IdleState extends PlayerState {
    play() {
        var state = "Playing music.";
        var id = "now-state";
        upgradeState(state, id);
        this.player.setState(new PlayingState(this.player));
    }

    pause() {
        var state = "Player is already idle.";
        var id = "now-state";
        upgradeState(state, id);
    }

    stop() {
        var state = "Player is already idle.";
        var id = "now-state";
        upgradeState(state, id);
    }
}

class PlayingState extends PlayerState {
    play() {
        var state = "Player is already playing.";
        var id = "now-state";
        upgradeState(state, id);
    }

    pause() {
        var state = "Pausing music.";
        var id = "now-state";
        upgradeState(state, id);
        this.player.setState(new PausedState(this.player));
    }

    stop() {
        var state = "Stopping music.";
        var id = "now-state";
        upgradeState(state, id);
        this.player.setState(new IdleState(this.player));
    }
}

class PausedState extends PlayerState {
    play() {
        var state = "Resuming music.";
        var id = "now-state";
        upgradeState(state, id);
        this.player.setState(new PlayingState(this.player));
    }

    pause() {
        var state = "Player is already paused.";
        var id = "now-state";
        upgradeState(state, id);
    }

    stop() {
        var state = "Stopping music.";
        var id = "now-state";
        upgradeState(state, id);
        this.player.setState(new IdleState(this.player));
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

function processState() {
    var state = "";
    var id = "now-state";
    updateState(state, id);

    // Usage
    const player = new Player();

    player.play(); // Output: Playing music.
    player.pause(); // Output: Pausing music.
    player.play(); // Output: Resuming music.
    player.stop(); // Output: Stopping music.
    player.play(); // Output: Playing music.
    player.stop(); // Output: Stopping music.
}


