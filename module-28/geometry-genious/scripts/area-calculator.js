function calculateTriangleArea(){
//    get triangle base 
const baseField = document.getElementById('triangle-base');
const baseValueText = baseField.value;
const base = parseFloat(baseValueText)
console.log(base);
// get height 
const heightField = document.getElementById('triangle-height')
const heightValueText = heightField.value;
const height = parseFloat(heightValueText);
console.log(height);

const area = 0.5 * base * height;
console.log(area);
// show  triangle area 
const areaspan = document.getElementById("triangle-area");
areaspan.innerText = area;
addToCalculationEntry('Triangle', area);

}
// rectangle 
function calculateRectangleleArea(){
    // get width 
    const widthField = document.getElementById('rectangle-width')
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    // get length 
    const lengthField = document.getElementById('rectangle-length')
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);
// validation input 
if(isNaN(width) || isNaN(length)){
    alert('Please insert a number');
    return;
}
// area calculate 
    const area = width * length;
console.log(area);

const areaspan = document.getElementById("rectangle-area");
areaspan.innerText = area;
addToCalculationEntry('Rectangle', area);

}
// 3rd 
function calculateParallelogramleArea(){
    const base = getInputValue('parallelogram-base');
    // console.log(base);
    const height = getInputValue('parallelogram-height')
    // console.log(height);
    // validate check
    if(isNaN(base) || isNaN(height)){
        alert('Please insert number');
        return
    }

    const area = base * height;
    setElementInnerText('parallelogram-area', area)
// add to calculation entry
addToCalculationEntry('Parallelogram', area)


}
// ellipse area 
function calculateEllipseArea(){
    const majorRadius =getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2)
    setElementInnerText('ellipse-area', areaTwoDecimal);
    addToCalculationEntry('Ellipse', areaTwoDecimal);
}
// reusable input 
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;

}
// reusable set span, p, div
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area;
}

// add to calculation entry
/**
 * 1. get the element where you want to add the dynamic HTML
 * 2. create an element you want to add
 * 3. if needed add some class
 * 4. set inner HTML. it could be dynamic Template string 
 * 5. append the created element as a child of the parent
 */
function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' '  + area)
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

    calculationEntry.appendChild(p);
}

// data validation 
/**
 * 1. set the proper type of the input field. (number, data, email)
 * 2. check type using typeof
 * 3. NaN means: Not a Number.  isNaN is checking whether the input is not a number or not
*/
