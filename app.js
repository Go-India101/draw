var canvas = document.getElementById("draw");

var ctx = canvas.getContext("2d");
resize();

// resize canvas when window is resized
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

// initialize position as 0,0
var pos = { x: 0, y: 0 };

// new position from mouse events
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function clean(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  canDataCount = 0;
  canData = [];
  undoData = canData;
  oldData = canData;
}
function draw(e) {
  if (e.buttons !== 1) return; // if mouse is not clicked, do not go further

  var color = document.getElementById("hex").value;

  ctx.beginPath(); // begin the drawing path

  ctx.lineWidth = document.getElementById("size").value; // width of line
  ctx.lineCap = document.getElementById("inputtype").value;
  ctx.strokeStyle = color; // hex color of line

  ctx.moveTo(pos.x, pos.y); // from position
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to position

  ctx.stroke(); // draw it!
}
download_img = function(el) {
  var image = canvas.toDataURL("SCRIBBLE/jpg");
  el.href = image;
};

function change1() {
    document.getElementById("inputtype").value = "round";
    document.getElementById("brush1").style.backgroundColor = "white";
    document.getElementById("brush1").style.color = "#00bfff";
    document.getElementById("brush2").style.backgroundColor = "#00bfff";
    document.getElementById("brush2").style.color = "black";
    document.getElementById("brush3").style.backgroundColor = "#00bfff";
    document.getElementById("brush3").style.color = "black";
    document.getElementById("eraser").style.backgroundColor = "#00bfff";
    document.getElementById("eraser").style.color = "black";
    document.getElementById("hex").value = "black";
}
function change2() {
  document.getElementById("inputtype").value = "butt";
    document.getElementById("brush2").style.backgroundColor = "white";
    document.getElementById("brush2").style.color = "#00bfff";
    document.getElementById("brush1").style.backgroundColor = "#00bfff";
    document.getElementById("brush1").style.color = "black";
    document.getElementById("brush3").style.backgroundColor = "#00bfff";
    document.getElementById("brush3").style.color = "black";
    document.getElementById("eraser").style.backgroundColor = "#00bfff";
    document.getElementById("eraser").style.color = "black";
    document.getElementById("hex").value = "black";
}
function change3() {
  document.getElementById("inputtype").value = "square";
    document.getElementById("brush3").style.backgroundColor = "white";
    document.getElementById("brush3").style.color = "#00bfff";
    document.getElementById("brush1").style.backgroundColor = "#00bfff";
    document.getElementById("brush1").style.color = "black";
    document.getElementById("brush2").style.backgroundColor = "#00bfff";
    document.getElementById("brush2").style.color = "black";
    document.getElementById("eraser").style.backgroundColor = "#00bfff";
    document.getElementById("eraser").style.color = "black";
    document.getElementById("hex").value = "black";
}
function change4() {
  document.getElementById("hex").value = "#ffffff";
    document.getElementById("brush1").style.backgroundColor = "#00bfff";
    document.getElementById("brush1").style.color = "black";
    document.getElementById("brush2").style.backgroundColor = "#00bfff";
    document.getElementById("brush2").style.color = "black";
    document.getElementById("brush3").style.backgroundColor = "#00bfff";
    document.getElementById("brush3").style.color = "black";
    document.getElementById("eraser").style.backgroundColor = "white";
    document.getElementById("eraser").style.color = "#00bfff";
}

        document.onclick = hideMenu;
        document.oncontextmenu = rightClick;
  
        function hideMenu() {
            document.getElementById(
                "contextMenu").style.display = "none"
        }
  
        function rightClick(e) {
            e.preventDefault();
  
            if (document.getElementById(
                "contextMenu").style.display == "block")
                hideMenu();
            else {
                var menu = document
                    .getElementById("contextMenu")
                      
                menu.style.display = 'block';
                menu.style.left = e.pageX + "px";
                menu.style.top = e.pageY + "px";
            }
        }



// add window event listener to trigger when window is resized
window.addEventListener("resize", resize);

// add event listeners to trigger on different mouse events
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);

        function changeColor() {
            document.getElementById(
              "draw").style.backgroundColor =
                document.getElementById(
              "backcolor").value;
        }

        