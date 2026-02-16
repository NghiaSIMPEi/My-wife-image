function upDate(preview) {
    console.log("Mouse active");
    console.log("Alt text: " + previewPic.alt);
    console.log("Image source: " + previewPic.src);

    var image = document.getElementById('image');
    image.style.backgroundImage = "url('" + preview.src + "')";
    image.innerHTML = preview.alt;
}

function unDo() {
    console.log("Mouse inactive");
    var image = document.getElementById('image');
    image.style.backgroundImage = "url('')";
    image.innerHTML = "Di chuột vào ảnh để xem!";
}