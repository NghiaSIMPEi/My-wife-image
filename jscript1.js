function upDate(previewPic) {

console.log("Event triggered");
console.log("Alt:", previewPic.alt);
console.log("Src:", previewPic.src);

let imageDiv = document.getElementById("image");

imageDiv.innerHTML = previewPic.alt;
imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {

let imageDiv = document.getElementById("image");

imageDiv.innerHTML = "Hover over or focus on an image below to display here.";
imageDiv.style.backgroundImage = "url('')";
}

