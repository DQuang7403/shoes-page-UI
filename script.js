window.onload = function(){
  main();
}
function main(){
  let toggleBtn = document.getElementsByClassName("toggle-btn")[0];
  let nav = document.getElementsByClassName("mainNav")[0];
  toggleBtn.addEventListener('click',()=>{
    nav.classList.toggle('active');
  })
  
}