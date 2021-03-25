let buttonReadMore = document.querySelectorAll('.leerMas-btn');
for(let i=0; i<buttonReadMore.length;i++){
  buttonReadMore[i].addEventListener('click', () => {
    if(buttonReadMore[i].textContent=='▲'){
      buttonReadMore[i].innerHTML='▼';
    }else{
      buttonReadMore[i].innerHTML='▲';
    }
  })
}