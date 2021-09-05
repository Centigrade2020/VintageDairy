const gallery = document.getElementById("galleryWrapper");

var x = 50;
setTimeout(() => {
  gallery.style.transform = `translateX(${x}%)`;
  x = x + 50;
}, 500);
