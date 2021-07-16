const btnDgr=document.querySelectorAll(".btn");
const inputEkrani=document.querySelector('#inp1');

btnDgr.forEach(function(element){
    element.onclick=function(element){
        inputEkrani.value+=this.textContent
    }
});
