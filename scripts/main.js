const navBtnBlock = document.getElementById('nav-btn-block');
const navBtn = document.querySelector('.nav-btn');


navBtnBlock.addEventListener('mouseover', (event)=>{
  if(!(event.target.classList.contains('active-nav-btn')) && event.target.classList.contains('nav-btn')){
    navBtn.classList.remove('active-nav-btn');
    event.target.classList.add('active-nav-btn');
  }
});


navBtnBlock.addEventListener('mouseout', (event)=>{


  event.target.classList.remove('active-nav-btn');
  navBtn.classList.add('active-nav-btn');


});

//glass movement

const glassPath = document.querySelector('.cls-1');
const glassSvg = document.querySelector('.land-svg');

glassPath.addEventListener('mouseover',(event)=>{
  glassSvg.style.animation = 'glassMove 1s linear';
});
