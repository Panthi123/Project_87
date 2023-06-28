
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
//Get rference of canvas created.


color = "red"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

// Attach canvas and addEventListener with 'mousedown' event.

canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown(e)
{
    
    color = document.getElementById("color").value;
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    //additional activity ends
    //Get the x and y coordinates when the mouse is clicked.
    
        
    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    //Call the "circle()" function with mouse_x and mouse_y as parameters.  
    circle();

}


function circle()
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40, 0 , 2*Math.PI);
ctx.stroke();
}

//additional activity
function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


	

	
