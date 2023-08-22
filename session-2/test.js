function test(){
    setText("info", "bangladesh")
    const sum = toNumber("input1")
    console.log(sum);
}
function test2(){
    setText("info", "hii")
}
function test3(){
    setText("info", "bangladesh")
}

// common function 
function setText(id,text){
    document.getElementById(id).innerText = text
}
function toNumber(id){
    const result = document.getElementById(id).value;
    return parseInt(result);
}