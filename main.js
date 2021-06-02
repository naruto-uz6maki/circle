var mouseevent="empty";
var last_pos_x,last_pos_y;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="black";
width=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseevent="mousedown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_pos_x=e.clientX-canvas.offsetLeft;
current_pos_y=e.clientY-canvas.offsetTop;
if(mouseevent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.arc(current_pos_x,current_pos_y,40,0,360);
    ctx.stroke();
}
last_pos_x=current_pos_x;
last_pos_y=current_pos_y;
}