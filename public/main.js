const topMenu = document.getElementById('top-menu')
const toggleTopMenuIcon = document.getElementById('toggle-top-menu-icon')

document.addEventListener('click',(e)=>{
  if(toggleTopMenuIcon.contains(e.target)){
    //click to Toggle top menu icon
    topMenu.classList.toggle('top-menu-expanded')
    topMenu.classList.toggle('hidden')
  }else{
    //Click outside from Toggle top menu icon
    if(topMenu.classList,contains('top-menu-expanded')){
    topMenu.classList.remove('top-menu-expanded')
    topMenu.classList.add('hidden')

    }
  }
})