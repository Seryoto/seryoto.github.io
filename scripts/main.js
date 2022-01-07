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

//setInterval(()=>{
//  console.log(window.scrollY);
// 100);


//nav on scroll switch

console.log(window.scrollY);

window.addEventListener('scroll', ()=>{
  if(window.scrollY > '110'){
  navBtn.classList.remove('active-nav-btn');
  navBtnBlock.children[1].classList.add('active-nav-btn');
} else if(window.scrollY < '110'){
  navBtnBlock.children[1].classList.remove('active-nav-btn');
  navBtn.classList.add('active-nav-btn');
}
});





//glass movement

/*const glassPath = document.querySelector('.cls-1');
const glassSvg = document.querySelector('.land-svg');

glassPath.addEventListener('mouseover',(event)=>{
  glassSvg.style.animation = 'glassMove 1s linear';
});*/




//Preloader

/*const preloader = document.querySelector('.preloader');

window.onload = ()=>{ setTimeout(()=>{
  preloader.style.display = 'none';
}, 400); */
