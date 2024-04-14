// asg0 (DrawRectangle.js)

// Retrieve <canvas> element <- (1)
var canvas = document.getElementById('example');

// Get the rendering context for 2DCG <- (2)
var ctx = canvas.getContext('2d');

function main() {   
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }     

    // Draw black background
    // Specify the color for clearing <canvas>
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    // Clear <canvas>
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawVector(v, color) {
    /*console.log('calling drawVector');*/
    let cx = canvas.width/2;
    let cy = canvas.height/2;
    let vx = v.elements[0];
    let vy = v.elements[1];
    // Draw red line
    ctx.strokeStyle = color;
    ctx.beginPath();

    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + vx*20, cy - vy*20);
    ctx.stroke();
    ctx.closePath();
}

function handleDrawEvent() {
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //first vector
    var inputX1 = document.getElementById("v1x").value;
    /*console.log("1st vec:");
    console.log(inputX1);*/
    var inputY1 = document.getElementById("v1y").value;
    /*console.log(inputY1);*/
    var inputColor1 = "red";
    var v1 = new Vector3([inputX1, inputY1, 0]);

    //second vector
    var inputX2 = document.getElementById("v2x").value;
    /*console.log("2nd vec:");
    console.log(inputX2);*/
    var inputY2 = document.getElementById("v2y").value;
    /*console.log(inputY2);*/
    var inputColor2 = "blue";
    var v2 = new Vector3([inputX2, inputY2, 0]);

    drawVector(v1, inputColor1);
    drawVector(v2, inputColor2);
}

function handleDrawOperationEvent(){
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //first vector
    var inputX1 = document.getElementById("v1x").value;
    /*console.log("1st vec:");
    console.log(inputX1);*/
    var inputY1 = document.getElementById("v1y").value;
    /*console.log(inputY1);*/
    var inputColor1 = "red";
    var v1 = new Vector3([inputX1, inputY1, 0]);

    //second vector
    var inputX2 = document.getElementById("v2x").value;
    /*console.log("2nd vec:");
    console.log(inputX2);*/
    var inputY2 = document.getElementById("v2y").value;
    /*console.log(inputY2);*/
    var inputColor2 = "blue";
    var v2 = new Vector3([inputX2, inputY2, 0]);

    // operation
    var inputOpVal = document.getElementById("opSelect").value;
    var inputOpScalar = document.getElementById("opScalar").value;
    /*console.log("inputOpVal is " + inputOpVal);
    console.log("inputOpScalar is " + inputOpScalar);*/

    // make copies
    var x, y, z;
    x = v1.elements[0];
    y = v1.elements[1];
    z = v1.elements[2];
    /*console.log("xyz is");
    console.log(x);
    console.log(y);
    console.log(z);*/
    var v3 = new Vector3([x, y, z]);
    /*console.log("v3 is");
    console.log(v3.elements[0]);
    console.log(v3.elements[1]);
    console.log(v3.elements[2]);*/
    var inputColor3 = "green";

    x = v2.elements[0];
    y = v2.elements[1];
    z = v2.elements[2];
    /*console.log("xyz is");
    console.log(x);
    console.log(y);
    console.log(z);*/
    var v4 = new Vector3([x, y, z]);
    /*console.log("v4 is");
    console.log(v4.elements[0]);
    console.log(v4.elements[1]);
    console.log(v4.elements[2]);*/
    var inputColor4 = "green";
    var hasv3 = false;
    var hasv4 = false;

    if (inputOpVal != null) {
    switch (inputOpVal) {
        case "add":
            v3.add(v2);
            /*console.log("after add v3 is");
            console.log(v3.elements[0]);
            console.log(v3.elements[1]);
            console.log(v3.elements[2]);*/
            hasv3 = true;
            break;
        case "sub":
            v3.sub(v2);
            /*console.log("after sub v3 is");
            console.log(v3.elements[0]);
            console.log(v3.elements[1]);
            console.log(v3.elements[2]);*/
            hasv3 = true;
            break;
        case "mul": 
            v3.mul(inputOpScalar);
            v4.mul(inputOpScalar);
            /*console.log("after mul v3 is");
            console.log(v3.elements[0]);
            console.log(v3.elements[1]);
            console.log(v3.elements[2]);
            console.log("after div v4 is");
            console.log(v4.elements[0]);
            console.log(v4.elements[1]);
            console.log(v4.elements[2]);*/
            hasv3 = true;
            hasv4 = true;
            break;    
        case "div": 
            v3.div(inputOpScalar);
            v4.div(inputOpScalar);
            /*console.log("after div v3 is");
            console.log(v3.elements[0]);
            console.log(v3.elements[1]);
            console.log(v3.elements[2]);
            console.log("after div v4 is");
            console.log(v4.elements[0]);
            console.log(v4.elements[1]);
            console.log(v4.elements[2]);*/
            hasv3 = true;
            hasv4 = true;
            break;
        case "mag":
            console.log("magnitude of v1 is " + v1.magnitude());
            console.log("magnitude of v2 is " + v2.magnitude());
            break;
        case "nor":
            v3.normalize();
            v4.normalize();
            hasv3 = true;
            hasv4 = true;
            break; 
        case "ang":
            //dot(v1, v2) = ||v1|| * ||v2|| * cos(A)
            //A = acos( dot(v1, v2) / (||v1|| * ||v2||) )
            var angRad = Math.acos(Vector3.dot(v1,v2) / (v1.magnitude() * v2.magnitude()) );
            var angDeg = angRad * (180 / Math.PI);
            console.log("angle between v1 and v2 is " + angDeg);
            break;
        case "are":
            var v5 = Vector3.cross(v1, v2);
            var areaTri = v5.magnitude() / 2;
            console.log("area of triangle formed by v1 and v2 is " + areaTri);
            break;
    }}

    drawVector(v1, inputColor1);
    drawVector(v2, inputColor2);
    if (hasv3) {
        drawVector(v3, inputColor3);
    }
    if (hasv4) {
        drawVector(v4, inputColor4);
    }
}