const input1Value = document.querySelector("#inputunten");
console.log(input1Value.textContent*7);
const input2Value = document.querySelector("#inputoben");

let x;
let y;
let z;
let t;
let b;
let o;
const btn7 = document.querySelector("#btn5");
const btn8 = document.querySelector("#btn6");
const btn9 = document.querySelector("#btn7");
const btn4 = document.querySelector("#btn9");
const btn5 = document.querySelector("#btn10");
const btn6 = document.querySelector("#btn11");
const btn1 = document.querySelector("#btn13");
const btn2 = document.querySelector("#btn14");
const btn3 = document.querySelector("#btn15");
const btn0 = document.querySelector("#btn18");
const btn00 = document.querySelector("#btn19");
const btnC = document.querySelector("#btn1");
const btnCarpi = document.querySelector("#btn8");
const btnEksi = document.querySelector("#btn12");
const btnBol = document.querySelector("#btn4");
const btnTopla = document.querySelector("#btn16");
const btnEsit = document.querySelector("#btn20");
const btnArtiEksi = document.querySelector("#btn17");
// btn7.onclick=function num (){
//     input1Value.innerText = `7`
//     console.log(input1Value.innerText);
    
// }
btn7.addEventListener("click", ()=>{
    input1Value.textContent=input1Value.textContent+7
})
btn8.addEventListener("click", ()=>{
    input1Value.textContent=input1Value.textContent+8
})
btn9.addEventListener("click", ()=>{
    input1Value.textContent=input1Value.textContent+9
})
btn6.addEventListener("click", ()=>{
    input1Value.textContent=input1Value.textContent+6
})
btn5.addEventListener("click", ()=>{
    input1Value.textContent=input1Value.textContent+5
})
btn4.addEventListener("click", ()=>{
    if (input1Value!=''&&input2Value!=''){
        input2Value.textContent='';
        x="";
        z='';
        t='';
        b='';
        y='';
        input1Value.textContent=4;
    } else input1Value.textContent=input1Value.textContent+4
})
btn3.addEventListener("click", ()=>{
    input1Value.textContent=input1Value.textContent+3
})
btn2.addEventListener("click", ()=>{
    input1Value.textContent=input1Value.textContent+2
})
btn1.addEventListener("click", ()=>{
    input1Value.textContent=input1Value.textContent+1
})
btn0.addEventListener("click", ()=>{
    input1Value.textContent=input1Value.textContent+0
})
btn00.addEventListener("click", ()=>{
    input1Value.textContent=input1Value.textContent+"."
})
btnArtiEksi.addEventListener("click", ()=>{
    
    if (input2Value.textContent.includes='+') {input2Value.textContent='-'+input2Value.textContent} else{
        input2Value.textContent='+'+input2Value.textContent
    }
})

btnCarpi.addEventListener("click", ()=>{
    x = input1Value.textContent;
    input2Value.textContent=input2Value.textContent+ input1Value.textContent+"*"
    // else {
    //     o=input1Value.textContent;
    //     input2Value.textContent=parseInt(x)*parseInt(o)
    // }
    console.log(x);

    input1Value.textContent=""
//     input2Value.textContent=input2Value.textContent+{x}+"*"
})
btnEksi.addEventListener("click", ()=>{
    if (y!=''){null}else input2Value.textContent=input2Value.textContent+ input1Value.textContent+"-";
    z = input1Value.textContent;

    input1Value.textContent=""
})
btnTopla.addEventListener("click", ()=>{
    input2Value.textContent=input2Value.textContent+ input1Value.textContent+"+";
    t = input1Value.textContent;

    input1Value.textContent=""
})
btnBol.addEventListener("click", ()=>{
    input2Value.textContent=input2Value.textContent+ input1Value.textContent+"/";
    b = input1Value.textContent;

    input1Value.textContent=""
})
btnEsit.addEventListener("click", ()=>{
    input2Value.textContent=input2Value.textContent+ input1Value.textContent;
    y = input1Value.textContent;
    
    if(x!=''){
    input1Value.textContent=parseInt(x)*parseInt(y);
    
}else if(z!=''){
    input1Value.textContent=parseInt(z)-parseInt(y);
}
else if(t!=''){
    input1Value.textContent=parseInt(t)+parseInt(y);
}
else if(b!=''){
    input1Value.textContent=parseInt(b)/parseInt(y);
}
})
btnC.addEventListener("click", ()=>{
    input1Value.textContent=""
    input2Value.textContent=""
    x="";
    z='';
    t='';
    b='';
    y='';
})