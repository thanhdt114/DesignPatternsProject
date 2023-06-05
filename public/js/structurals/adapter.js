// Giao diện nguồn dữ liệu không tương thích
class LegacyDataSource {
    getData() {
        return "Legacy data";
    }
}

// Giao diện mục tiêu
class TargetDataSource {
    getData() {
        return "Target data";
    }
}

// Adapter chuyển đổi từ LegacyDataSource sang TargetDataSource
class DataSourceAdapter extends TargetDataSource {
    constructor(legacyDataSource) {
        super();
        this.legacyDataSource = legacyDataSource;
    }

    getData() {
        const legacyData = this.legacyDataSource.getData();
        // Chuyển đổi dữ liệu từ legacyData thành dạng dữ liệu mới
        const transformedData = `Transformed: ${legacyData}`;
        return transformedData;
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

function processAdapter() {
    // Sử dụng
    const legacyDataSource = new LegacyDataSource();
    const adapter = new DataSourceAdapter(legacyDataSource);

    var state = adapter.getData();
    var id = "now-state";
    updateState(state, id);
}


