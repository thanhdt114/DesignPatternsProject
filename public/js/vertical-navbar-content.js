
// Đối tượng XMLHttpRequest để tải nội dung từ các file HTML
function loadContent2(url, callback) {
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
function handleNavigationClick2(event) {
    console.log("handle Navigation Click 2")
    event.preventDefault();
    var target = event.target;
    var url = target.getAttribute('href');

    loadContent2(url, function (content) {
        var contentElement = document.getElementById('content-level2');
        contentElement.innerHTML = content;
    });
}

function handleVerticalNavbarContent(url, id) {
    loadContent2(url, function (content) {
        var contentElement = document.getElementById('content-level2');
        contentElement.innerHTML = content;
    });
      
    const list1Items = document.querySelectorAll('#list-vertical-navbar .highlight-vertical');
    list1Items.forEach(item => {
        item.classList.remove('highlight-vertical');
    });

    var item = document.getElementById(id)
    item.classList.add("highlight-vertical")
}

function firstLoad() {
    var url = "home";
    var id = "home1";
    handleVerticalNavbarContent(url, id)
}

// window.addEventListener('load', firstLoad);


