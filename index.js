const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/index');

require('dotenv').config();

// Định nghĩa thư mục chứa các file tĩnh (CSS, JavaScript, hình ảnh)
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// Khởi động server
app.listen(process.env.PORT, () => {
  console.log('Server is running on: http://localhost:' + process.env.PORT);
});
