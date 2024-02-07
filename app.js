const hourEl= document.querySelector('.hour')
const minuteEl= document.querySelector('.minute')
const secondEl= document.querySelector('.second')
const timeEl= document.querySelector('.time')
const dataEl= document.querySelector('.date')
const toggleEl= document.querySelector('.toggle')

const days = ['Sunday','Monday','Tuesday','Wedneday','Thursday','Friday','Saturday'];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

toggleEl.addEventListener('click',(e)=>{
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    }else{
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
    
})