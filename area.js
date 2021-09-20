const inputs = document.querySelectorAll(".inputs")
const btn = document.querySelector("#btn")
const outputArea = document.querySelector("#output-area")
const clr = document.querySelector("#clr-btn");

function ipProduct(a,b){
    const product = a*b
    return product 
}

function calcArea(){
    if((Number(inputs[0].value))>0 && (Number(inputs[1].value))>0){
        const productRes = ipProduct(Number(inputs[0].value), Number(inputs[1].value));
        const areaofTriangle= (productRes/2);
        outputArea.innerText = "Area of the triangle is "+ areaofTriangle;
    }
    else if((Number(inputs[0].value))<0 || (Number(inputs[1].value))<0){
        outputArea.innerText = "Sides can't be negative value";
    }
    else{
        outputArea.innerText = "Enter the sides of triangle";
    }
}
function clearHandler(){
    inputs[0].value="";
    inputs[1].value="";

    outputArea.innerText=""
}

btn.addEventListener("click", calcArea)
clr.addEventListener("click", clearHandler)