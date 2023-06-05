
// Đối tượng XMLHttpRequest để tải nội dung từ các file HTML
function loadContent1(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        callback(xhr.responseText);
      } else {
        console.error('Error loading content: ' + xhr.status);
      }
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
}

// Xử lý sự kiện khi người dùng nhấp vào các liên kết điều hướng
function handleNavigationClick1(event) {
  event.preventDefault();
  var target = event.target;
  var url = target.getAttribute('href');

  loadContent1(url, function (content) {
    var contentElement = document.getElementById('content-level1');
    contentElement.innerHTML = content;

  });
}

// Gán sự kiện cho các liên kết điều hướng
var navigationLink1 = document.querySelectorAll('#list-horizontal-navbar a');
navigationLink1.forEach(function (link) {
  link.addEventListener('click', handleNavigationClick1);
});

var selectedItem = null;
function highlightItemHorizontal(item) {
  const list1Items = document.querySelectorAll('#list-horizontal-navbar .highlight-horizontal');
  list1Items.forEach(item => {
    item.classList.remove('highlight-horizontal');
  });

  selectedItem = event.target; // Cập nhật thẻ được chọn
  selectedItem.classList.add("highlight-horizontal"); // Thêm highlight cho thẻ được chọn
}

function firstLoad() {
  var url = "home";
  loadContent1(url, function (content) {
    var contentElement = document.getElementById('content-level1');
    contentElement.innerHTML = content;
  });

  var id = "index1";
  var item = document.getElementById(id)
  item.classList.add("highlight-horizontal")

  Prism.highlightAll();
}

document.addEventListener('DOMContentLoaded', firstLoad);
