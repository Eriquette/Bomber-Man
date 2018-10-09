const movingObj = document.getElementById('mover');

let horizontal = 0;
let vertical = 0;

document.onkeydown = keyDownHandler;

let keyPressed = {
    37: false,
    38: false,
    39: false,
    40: false,
};


function keyDownHandler(e)
{
    keyPressed[e.keyCode] = true;
    // left
    if(keyPressed[37] === true)
    {
        horizontal -= 10;
        movingObj.style.left = horizontal + "px";
    }
    // up
    else if(keyPressed[38] === true)
    {
        vertical -= 10;
        movingObj.style.top = vertical + "px";
    }
    // right
    else if(keyPressed[39] === true)
    {
        horizontal += 10;
        movingObj.style.left = horizontal + "px";
    }
    // down
    else if(keyPressed[40] === true)
    {
        vertical += 10;
        movingObj.style.top = vertical + "px";
    }
}

document.onkeyup = keyUpHandler;

function keyUpHandler(e)
{
    keyPressed[e.keyCode] = false;
}
