const currentImage = document.querySelector('#image')
const images = ['img/image1.jpg','img/image2.jpg','img/image3.jpg','img/image4.jpg'];

function changeImage(){
  console.log("Hello from script file!");
let rnd = Math.floor(Math.random() * images.length);
currentImage.src = images[rnd]
console.log(rnd);

}