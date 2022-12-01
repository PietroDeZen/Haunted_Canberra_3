//CAROUSEL
var counter =1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter =1;
  }
}, 3000);

//LIGHTBOX

const images = document.querySelectorAll('.grid-item')

images.forEach(image =>{
  image.addEventListener('click', e => {
     document.getElementById('lightbox').classList.add('active')
     const img = document.createElement('img')
     img.id = 'imageActive'
     img.src = image.src
     while(document.getElementById('lightbox').firstChild){
      document.getElementById('lightbox').removeChild(document.getElementById('lightbox').firstChild)
     }
     document.getElementById('lightbox').appendChild(img)
  })
})

document.getElementById('lightbox').addEventListener('click', e =>{
  if(e.target !== e.currentTarget) return
  document.getElementById('lightbox').classList.remove('active')
})



