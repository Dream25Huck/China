const container =  document.getElementsByClassName('containerAnswerWrong')[0];
const container2 =  document.getElementsByClassName('containerAnswerRight')[0];
const content =  document.getElementsByClassName('contentSizes')[0];
const img = document.getElementsByClassName('img')[0];
function getPosition(){
  const x = Math.random() * (window.innerWidth - 100); 
  const y = Math.random() * (window.innerHeight - 100); 
  return {x, y};  
}

if (container) {
  container.addEventListener('mouseenter', () => {

    const {x, y} = getPosition(); 
   
    container.style.position = 'absolute';
    container.style.left = `${x}px`;
    container.style.top = `${y}px`;
  });
} else {
  console.log('Элемент не найден');
}



container.addEventListener('mouseenter', () => {

  const {x, y} = getPosition(); 
 
  container.style.position = 'absolute';
  container.style.left = `${x}px`;
  container.style.top = `${y}px`;
});




container2.addEventListener('mouseenter', () => { 
    content.style.display = 'none';
    img.style.width = '100%';
    img.style.height = '700px';
    img.setAttribute('src', 'china.jpg');
});