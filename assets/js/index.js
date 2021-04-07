let buttonReadMore = document.querySelectorAll('.leerMas-btn');
for(let i=0; i<buttonReadMore.length;i++){
  buttonReadMore[i].addEventListener('click', () => {
    if(buttonReadMore[i].textContent=='Leer más'){
      buttonReadMore[i].innerHTML='Leer menos';
    }else{
      buttonReadMore[i].innerHTML='Leer más';
    }
  })
}