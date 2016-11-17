

let setPixel = function(image, x,y,r,g,b){
  let offset = (image.width*y + x) * 4;
  image.data[offset] = r;
  image.data[offset+1] = g;
  image.data[offset+2] = b;
  image.data[offset+3] = 255;
};

window.onload = function(){
  let canvas = document.getElementById('canvas'),
    context = canvas.getContext("2d"),
    image = context.createImageData(canvas.width, canvas.height);



  for (let j = 0; j < image.height; j++){
    for (let i = 0; i < image.width; i++){
      setPixel(image, i,j, 0, 255 * (i/image.width), 255 * (j/image.height));
    }
  }
  context.putImageData(image, 0,0);
}
