let main = document.querySelector("main")
let btn = document.querySelector("button")
let time = document.querySelector(".time")
time.innerHTML = 0
let interval
let box = document.querySelector(".box")

let score = document.querySelector(".scoree")
score.innerHTML = 0

let overlay = document.querySelector(".overlay")



let random = ()=>{
    let xx = main.clientWidth - box.offsetWidth
    let yy = main.clientHeight - box.offsetHeight
    let x = Math.random()*xx
    let y = Math.random()*yy 
    console.log(x,y);
    
    box.style.left = `${x}px`
    box.style.top = `${y}px`
    
    let r = Math.random()*254
    let g = Math.random()*254
    let b = Math.random()*254
    box.style.backgroundColor = `rgb(${r},${g},${b})`
    
}



btn.addEventListener("click",(e)=>{ 
    let timer = time.innerHTML = 0
    let scoreNumber = score.innerHTML = Number(0)
    // scoreCount = 0
    btn.style.display = "none"
    box.style.display = "block"
     overlay.style.display = "none"
    // clearInterval(interval)
     let flag =true
    interval = setInterval(() => {
        
        random()
        let a =  timer+=1
        time.innerHTML = a
        if (flag==false) {
            return flag = true
        }
    }, 1000);

   setTimeout(() => {
     clearInterval(interval)
        btn.style.display = "block"
        box.style.display = "none"
        overlay.style.display = "flex"
   }, 10000);


   
   box.addEventListener("click",(e)=>{
    let a;
        if (flag) {
        a = scoreNumber+=1
       score.innerHTML = a
       return flag= false
        }
     
})  

})