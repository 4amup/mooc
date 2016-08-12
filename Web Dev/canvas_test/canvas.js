var drawing = document.getElementById("drawing");

if (drawing.getContext) {
  var context = drawing.getContext("2d");
  context.strokeStyle = "red";
  context.fillStyle = "black";

  // 绘制的是填充矩形
  context.fillStyle = "rgba(0,0,214,0.2)";
  context.fillRect(10,10,50,50);

  context.fillStyle = "rgba(0,0,244,0.8)";
  context.fillRect(30,30,50,50);
  
  // 绘制的是描边矩形
  context.strokeStyle = "#0000ff";
  context.strokeRect(100,10,50,50);

  context.strokeStyle = "rgba(0,0,255,.5)";
  context.strokeRect(120,30,50,50);

  // 导出图片
  var imgURI = drawing.toDataURL("image/png");
  var image = document.createElement("img");
  image.src = imgURI;
  document.body.appendChild(image);
}