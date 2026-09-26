/*
  Hàm upDate: Chạy khi di chuột qua ảnh xem trước (previewPic)
*/
function upDate(previewPic) {
    // Step 1: Dùng console.log để kiểm tra xem sự kiện có hoạt động không
    console.log("Sự kiện hover kích hoạt thành công!");

    // Step 2: In ra thông tin alt và src của ảnh đang di chuột vào
    console.log("Alt Text: ", previewPic.alt);
    console.log("Source URL: ", previewPic.src);

    // Lấy thẻ div có id là 'image'
    var imageDiv = document.getElementById("image");

    // Step 3: Cập nhật văn bản của div thành giá trị alt của ảnh
    imageDiv.innerHTML = previewPic.alt;

    // Step 4: Cập nhật hình nền (backgroundImage) của div thành src của ảnh
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/*
  Hàm unDo: Chạy khi đưa chuột ra khỏi ảnh
*/
function unDo() {
    // Lấy thẻ div có id là 'image'
    var imageDiv = document.getElementById("image");

    // Step 1: Đặt lại hình nền về ban đầu (rỗng)
    imageDiv.style.backgroundImage = "url('')";

    // Step 2: Đặt lại văn bản ban đầu
    imageDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}