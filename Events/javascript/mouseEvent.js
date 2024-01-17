// mouse events
const btn = document.getElementById("submitData")
console.log('button:',btn)
btn.addEventListener('click',function(event){
    console.log('events are:',event)
    console.log('what is clicked:',event.target.tagName)
    console.log("what is target:",event.target)
    console.log("i got click a button")
})
btn.addEventListener('mouseover',function(event){
    console.log('mouseOver')
})
btn.addEventListener('mouseout',function(event){
    console.log('mouseOut')
})
btn.addEventListener('mouseleave',function(event){
    console.log('mouseLeave')
})
btn.addEventListener('mouseup',function(event){
    console.log('mouseUp')
})
btn.addEventListener('mousemove',function(event){
    console.log('mouseMove')
})
