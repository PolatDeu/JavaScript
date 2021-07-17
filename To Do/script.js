const inputText =document.querySelector('.input');
const buton =document.querySelector('.btn');
const takvimeEkle =document.querySelector('.array')
const icon=document.querySelector('fas fa-trash delete')

buton.addEventListener('click',function(){
    // console.log(inputText.value)
    takvimeEkle.innerHTML+=`<p class="box"><button class="btn-left" onclick="check(this)"><i class="far fa-check-square"></i></button>${inputText.value}<i onclick="silme(this)" class="fas fa-trash delete"></i></p>`
    
})

function silme(element){
    element.parentNode.parentNode.removeChild(element.parentNode); 
}
function check(element){
    element.parentNode.classList.add("line-t")
}
// document.querySelector(".fas fa-trash").addEventListener('click',function(){
//     console.log(document.querySelector(".fas fa-trash"));
// })
// console.log(icon)