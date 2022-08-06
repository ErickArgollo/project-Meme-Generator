const imgContainer = document.getElementById('meme-image-container');
const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const color = document.querySelectorAll('.color')
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const air = document.getElementById('air')


function takeId(qtdRepeticao, id){
  for(let i = 0; i < qtdRepeticao; i += 1){
    document.getElementById(`${id}${i}`)
  }
}

takeId(5, 'color')
takeId(4, 'meme')

function addEventListener(){
  for(let i = 0; i < color.length; i+=1){
    color[i].addEventListener('click', fontColor)
  }
}

addEventListener()

function fontColor(event){
memeText.style.color = event.target.style.backgroundColor
}


function addColor(){
  color1.style.backgroundColor = 'red';
  color2.style.backgroundColor = 'green';
  color3.style.backgroundColor = 'blue';
  color4.style.backgroundColor = 'black';
  color5.style.backgroundColor = 'white';
}


function adicionaTexto() {
  const valor = inputText.value;
  memeText.innerHTML = valor;
}

inputText.addEventListener('keyup', adicionaTexto);


memeInsert.addEventListener('change', (event) => {
  // const inputTarget = event.target;

  const file = event.target.files[0];

  const reader = new FileReader(); // filereader permite ler o conteudo do meu objeto file
  reader.addEventListener('load', (e) => {
    const thisReader = e.target;

    const img = document.createElement('img');
    memeImage.innerHTML = '';
    img.src = thisReader.result;
    img.id = 'meme-image';
  
    memeImage.appendChild(img);
  });
  reader.readAsDataURL(file); // readasdataurl uso para ler o conteudo tipo File ou Blob
});


function trocaBorda(event) {
  imgContainer.style.border = '';
  imgContainer.style.border = event.target.style.border;
  memeImage.style.backgroundColor = event.target.style.borderColor
}

fire.addEventListener('click', trocaBorda);
water.addEventListener('click', trocaBorda);
earth.addEventListener('click', trocaBorda);
air.addEventListener('click', function(){
memeImage.innerHTML = `<img src="imgs/d83.png" alt="" id = 'meme-image'>`
memeText.innerHTML = 'PARABÉNS!'
alert('Você dominou os 4 elementos!')

})


function adicionaImg(event) {
  memeImage.innerHTML = '';
  const img = document.createElement('img');
  img.src = event.target.src;
  img.classList.add('memeimg');
  img.id = 'meme-image';
  memeImage.appendChild(img);
}

meme1.addEventListener('click', adicionaImg);
meme2.addEventListener('click', adicionaImg);
meme3.addEventListener('click', adicionaImg);
meme4.addEventListener('click', adicionaImg);

window.onload = function(){
  addColor()
  
}
