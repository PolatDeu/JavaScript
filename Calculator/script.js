const input1Value = document.querySelector("#inputunten");
const input2Value = document.querySelector("#inputoben");
let x;
let y;
let z;
let t;
let b;
let o='';
let c;
let u;
let sonc;
function sayiCarp(a1,a2){
    sonc=parseInt(a1)*parseInt(a2);
    return sonc;
}
function sayiTopla(a1,a2){
    sonc=parseInt(a1)+parseInt(a2);
    return sonc;
}
function sayiCikar(a1,a2){
    sonc=parseInt(a1)-parseInt(a2);
    return sonc;
}
function sayiBol(a1,a2){
    sonc=parseInt(a1)/parseInt(a2);
    return sonc;
}
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
const btnSilme = document.querySelector("#btn3");
const btnCarpi = document.querySelector("#btn8");
const btnEksi = document.querySelector("#btn12");
const btnBol = document.querySelector("#btn4");
const btnTopla = document.querySelector("#btn16");
const btnEsit = document.querySelector("#btn20");
const btnArtiEksi = document.querySelector("#btn17");
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
    // if (o="1"){
    //     input2Value.textContent='';
    //     x='';
    //     z='';
    //     t='';
    //     b='';
    //     y='';
    //     o='';
    //     input1Value.textContent=4;
    // } else {
    //     input1Value.textContent=input1Value.textContent+4}
        input1Value.textContent=input1Value.textContent+4
    
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
    
    // let arteks = input1Value.textContent;
    // if(arteks.includes('+')){
    //     input1Value.textContent='-'+arteks.substring(1,arteks.textContent)
    // }else
    // input1Value.textContent='+'+{arteks};
    // if (!input1Value.textContent.includes('+')) {input1Value.textContent='+'+input1Value.textContent}else if (input1Value.textContent.includes('-')) {input1Value.textContent= input1Value.textContent.substring(1,input1Value.textContent);
    //     input1Value.textContent='+'+input1Value.textContent} else{
    //     input1Value.textContent= input1Value.textContent.substring(1,input1Value.textContent);
    //     input1Value.textContent='-'+input1Value.textContent;
    // };
    // if (input1Value.textContent.includes('+')) {
        
    // } else{
    //     input1Value.textContent=input1Value.textContent
    // };
    
    // if (input1Value.textContent.includes('+')) {input1Value.textContent='-'+input1Value.textContent} else{
    //     input2Value.textContent=input2Value.textContent
    // };
})

btnCarpi.addEventListener("click", ()=>{
    if(input2Value.textContent.includes('*')&&input1Value.textContent==''){alert("Click die Nummer");
    input2Value=input2Value};
    
    if(input2Value.textContent!=''&&input1Value.textContent!=''){
        
        u=input1Value.textContent;
        input2Value.textContent='';
        input2Value.textContent=sayiCarp(x,u);
        input1Value.textContent='';
    }else if (input2Value.textContent!=''&& input1Value.textContent == ''){
        x=input2Value.textContent;
        input2Value.textContent=input2Value.textContent+'*'
    } else {
        x = input1Value.textContent;
    input2Value.textContent=input2Value.textContent+ input1Value.textContent+"*"
    // else {
    //     o=input1Value.textContent;
    //     input2Value.textContent=parseInt(x)*parseInt(o)
    // }
    console.log(x);

    input1Value.textContent=""
    
//     input2Value.textContent=input2Value.textContent+{x}+"*"
}})
btnEksi.addEventListener("click", ()=>{
    // if(input2Value.textContent.includes("-")){alert("Click die Nummer");
    // input2Value=input2Value};
    // if (input1Value.textContent!=''&&input2Value.textContent!=''){alert("Click '=' ");
    // input2Value=input2Value}else
    if(input2Value.textContent!=''&&input1Value.textContent!=''){
        
        c=input1Value.textContent;
        input2Value.textContent='';
        input2Value.textContent=parseInt(z)-parseInt(c);
        input1Value.textContent=''
    } else if (input2Value.textContent!=''&& input1Value.textContent == ''){
        z=input2Value.textContent;
        input2Value.textContent=input2Value.textContent+'-'}else{
    z = input1Value.textContent;
    input2Value.textContent=input2Value.textContent+ input1Value.textContent+"-";
    

    input1Value.textContent=""
}})
btnTopla.addEventListener("click", ()=>{
    if(input2Value.textContent.includes("+"&&"-"&&"/"&&"*")){alert("Click die Nummer");
    input2Value=input2Value};
    if (input1Value.textContent!=''&&input2Value.textContent!=''){
        let tp=input1Value.textContent;
        input2Value.textContent='';
        input2Value.textContent=parseInt(t)+parseInt(tp);
        input1Value.textContent=''}
    else if (input2Value.textContent!=''&& input1Value.textContent == ''){
        t=input2Value.textContent;
        input2Value.textContent=input2Value.textContent+'+'}else{
    input2Value.textContent=input2Value.textContent+ input1Value.textContent+"+";
    t = input1Value.textContent;

    input1Value.textContent=""
}})
btnBol.addEventListener("click", ()=>{
    // if(input2Value.textContent.includes("/","+")){alert("Click die Nummer");
    // input2Value.textContent=input2Value.textContent};
    if (input1Value.textContent!=''&&input2Value.textContent!=''){
        let blm=input1Value.textContent;
        input2Value.textContent='';
        input2Value.textContent=parseInt(b)/parseInt(blm);
        input1Value.textContent='';} else if (input2Value.textContent!=''&& input1Value.textContent == ''){
            b=input2Value.textContent;
            input2Value.textContent=input2Value.textContent+'/'}
        
     else {
    input2Value.textContent=input2Value.textContent+ input1Value.textContent+"/";
    b = input1Value.textContent;

    input1Value.textContent=""
}})
btnEsit.addEventListener("click", ()=>{
    o="1"
    input2Value.textContent=input2Value.textContent+ input1Value.textContent;
    y = input1Value.textContent;
    
    if(x!=''){
    input2Value.textContent=parseInt(x)*parseInt(y);
    input1Value.textContent='';
    
}else if(z!=''){
    input2Value.textContent=parseInt(z)-parseInt(y);
    input1Value.textContent='';
}
else if(t!=''){
    input2Value.textContent=parseInt(t)+parseInt(y);
    input1Value.textContent='';
}
else if(b!=''){
    input2Value.textContent=parseInt(b)/parseInt(y);
    input1Value.textContent='';
}
})
btnSilme.addEventListener("click", ()=>{
    if (input1Value.textContent==''){
        input1Value.textContent=input2Value.textContent;
        input2Value.textContent='';
    } else
    input1Value.textContent= input1Value.textContent.substring(0,input1Value.textContent.length-1);
})
btnC.addEventListener("click", ()=>{
    input1Value.textContent=""
    input2Value.textContent=""
    x="";
    z='';
    t='';
    b='';
    y='';
    o='';
})