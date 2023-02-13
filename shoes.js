window.onload = function(){
  ready(); 
}
function ready(){
  let index = 0;
  let shoes = document.getElementsByClassName("shoe")
  let circles = document.getElementsByClassName("circle");
  console.log(circles)
  const rightbutton = document.getElementsByClassName("right-arrow")[0].addEventListener('click',() =>{
    let nextIndex = index < 2 ? index + 1 : 0;
    const currentGroup = document.querySelector(`[data-index="${index}"]`);
    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
    currentGroup.dataset.status="after";
    nextGroup.dataset.status="become-active-from-left";
    const currentCircle = document.querySelector(`[data-order="${index}"]`);
    const nextCircle = document.querySelector(`[data-order="${nextIndex}"]`);
    currentCircle.dataset.active = "off";
    setTimeout(()=>{
      nextGroup.dataset.status="active";
      nextCircle.dataset.active="on";
      index = nextIndex;
    })
  })
  const leftButton = document.getElementsByClassName("left-arrow")[0].addEventListener('click',() =>{
    let beforeIndex = index > 0 ? index - 1 : 2;
    const currentGroup = document.querySelector(`[data-index="${index}"]`);
    const nextGroup = document.querySelector(`[data-index="${beforeIndex}"]`);
    const currentCircle = document.querySelector(`[data-order="${index}"]`);
    const nextCircle = document.querySelector(`[data-order="${beforeIndex}"]`);
    currentGroup.dataset.status="before";
    nextGroup.dataset.status = "become-active-from-right";
    currentCircle.dataset.active ="off";
    setTimeout(() =>{
      nextGroup.dataset.status="active";
      nextCircle.dataset.active="on";
      index = beforeIndex;
    })  
  })
    
}
  
