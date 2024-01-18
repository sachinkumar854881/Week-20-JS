// program ko run karenge toh pahele keydown chalega phir keyup chalega
// keydown
const kd = document.getElementById("getName")
console.log('input:',kd)
kd.addEventListener('keydown',function(event){
    console.log('event.key:',event.key)
    console.log("key is pressed")
})
// keyup
let ku = document.getElementById("getName")
ku.addEventListener('keyup',function(event){
    console.log(event.target,event.target.value)
})
