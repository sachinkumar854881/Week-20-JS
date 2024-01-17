// keyboard events
const input = document.getElementById("getName")
console.log('input:',input)
input.addEventListener('keydown',function(event){
    console.log('event.key:',event.key)
    console.log("key is pressed")
})