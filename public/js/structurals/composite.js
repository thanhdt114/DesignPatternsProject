// Giao diện chung cho tất cả các thành phần trong cây
class Component {
    constructor(name) {
        this.name = name;
    }

    // Phương thức mặc định không làm gì
    // Được ghi đè bởi các lớp con nếu cần
    operation() {}

    // Thêm một thành phần con vào cây
    add(component) {}

    // Xóa một thành phần con khỏi cây
    remove(component) {}

    // Trả về tất cả các thành phần con trong cây
    getChildren() {}
}

// Lớp đơn lẻ không có thành phần con
class Leaf extends Component {
    operation() {
        var state = "Leaf " + this.name + " is performing operation";
        var id = "now-state";
        upgradeState(state, id);
    }
}

// Lớp thành phần chứa các thành phần con
class Composite extends Component {
    constructor(name) {
        super(name);
        this.children = [];
    }

    add(component) {
        this.children.push(component);
    }

    remove(component) {
        const index = this.children.indexOf(component);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    getChildren() {
        return this.children;
    }

    operation() {
        var state = "Composite " + this.name + " is performing operation";
        var id = "now-state";
        upgradeState(state, id);
        for (const child of this.children) {
            child.operation();
        }
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

function processComposite() {
    var state = "";
    var id = "now-state";
    updateState(state, id);

    const root = new Composite("root");
    const branch1 = new Composite("branch1");
    const branch2 = new Composite("branch2");
    const leaf1 = new Leaf("leaf1");
    const leaf2 = new Leaf("leaf2");
    const leaf3 = new Leaf("leaf3");
    
    root.add(branch1);
    root.add(branch2);
    branch1.add(leaf1);
    branch2.add(leaf2);
    branch2.add(leaf3);
    
    root.operation();
}

