// JavaScript (with jQuery)
$(document).ready(function() {
  $('#login-form').submit(function(event) {
    event.preventDefault(); // Ngăn chặn gửi form mặc định

    var username = $('#username').val();
    var password = $('#password').val();

    // Kiểm tra và xử lý đăng nhập tại đây
    if (username === 'admin' && password === 'password') {
      $('#result').text('');
    } else {
      $('#result').text('invalid credentials');
    }
  });
});
