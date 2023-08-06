//your parameter variables go here!
let seedpodX = 70;
let seedpodY =  60;

let seedpodThickness = 20

function setup_wallpaper(pWallpaper){
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN)
  pWallpaper.show_guide (false);// set this to false when you're already to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 220;
  pWallpaper.grid_settings.cell_height = 220;
  pWallpaper. grid_settings.row_offset = 50;
}

function wallpaper_background(){
  angleMode(DEGREES)

  background(196, 212, 255);//light blue sky
}


function my_symbol (){

  

  //seedpod pedicel
  push()
  noFill();
  strokeWeight(7)
  stroke(127, 173, 80)
  bezier(53, 58, 4, 76, 26, 158, 61, 162)
  pop();

  //seedpod
  push()
  stroke(127, 173, 80)
  strokeWeight(4)
  fill (127, 173, 80)// baby green colour
 //arc(x, y, w, h, start, stop)
 arc (70, 60, 60, 50, 90, 270)
 pop();

  //seedpod surface
  push()
  fill(178, 230, 145)
  strokeWeight(3)
  stroke(127, 173, 80)// grass colour
  //ellipse (x, y, w, h)
  ellipse(seedpodX ,seedpodY, 20, 50);
  fill(72, 105, 51)// moss colour
  ellipse (seedpodX -3, seedpodY + 7, 1, 5 );
  ellipse (seedpodX + 2, seedpodY + 15, -1, 6 );
  ellipse (seedpodX + 1, seedpodY - 3, -2, 4 );
  ellipse (seedpodX , seedpodY -16, 1, -5 );
  
  pop();

  //lotus bud pedicel
  push()
  noFill();
  strokeWeight(5)
  stroke(127, 173, 80)
  bezier(160, 77, 195, 98, 181, 154, 135, 148);
  pop();

  //

// lotus leaf
  push()
  fill (127, 173, 80)
  stroke(127, 173, 80);
ellipse(100, 175, 170, 35);
pop();

//lotus
let S = 250; 

 push()
 strokeWeight (3)
 stroke (196, 212, 255)
let gradient = drawingContext.createLinearGradient(-S, -S, S, -S);

gradient.addColorStop(0.0, color(247, 156, 177));
gradient.addColorStop(1.0, color(235, 167, 221));


  drawingContext.fillStyle = gradient;

// // central side
drawDrop(80, 155, -145, 40, 2);
drawDrop(120, 155, -35, 40, 2);


// // central side
drawDrop(90, 140, -120, 30, 2);
drawDrop(110, 140, -60, 30, 2);


  // diagonal
  drawDrop(82, 165, -165, 55, 3);
  drawDrop(118, 165, -15, 55, 3);
  
   

  // // central side
  drawDrop(85, 160, -125, 45, 2.5);
  drawDrop(115, 160, -55, 45, 2.5);
  
  // // the botom center
  drawDrop(100, 155, -90, 60, 2.5); 

  // // lotus buds
  drawDrop(166, 80, -140, 35, 2);
  drawDrop(162, 90, -160, 25, 3);
  drawDrop(177, 83, -97, 27, 3);


  pop();

}

function drawDrop(x, y, angle, size, parameter) {
// Your implementation of drawing the drop using the provided parameters
// ...
}

function drawDrop(x, y, t, r, A) {  // 
  push();
  translate(x, y);
  rotate(t);
  beginShape();
  for (let theta = 0; theta < 360; theta++) { 
  let R = r / (A * sin(theta / 2) + 1);
    vertex(R * cos(theta), R * sin(theta));// code method from 
  }
  endShape(CLOSE);
  pop();
  }
  
//}


