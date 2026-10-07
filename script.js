let name=document.querySelector("#name")
let crushName=document.querySelector("#crush-name")
let button=document.querySelector("button")
let love=document.querySelector("#love")
let percent=document.querySelector("#percent")

button.addEventListener ("click",()=>{
if(name.value== ""&& crushName.value=="") {
    love.innerHTML="Please pass the value in both field"
    love.style.color="red"
}
else if(name.value==""){
    love.innerHTML="Please enter any name"
}
else if (crushName.value==""){
    love.innerHTML="Please enter crush name "
}
else {
love.innerHTML=`${name.value} and ${crushName.value} chance of love`
percent.innerHTML=Math.floor(Math.random()*100) + "%"
}
})
