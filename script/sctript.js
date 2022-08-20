// let microphone=document.querySelector(".fa-microphone");
// let input=document.querySelector("input")
// let magnifyingGlass=document.querySelector(".fa-magnifying-glass")


// magnifyingGlass.addEventListener("click",()=>{
    
//     input.classList.toggle("activewidth")
//     microphone.classList.toggle("activeblock")
// })

// let buyutec=document.querySelector(".fa-magnifying-glass");
// let input=document.querySelector("input")
// let mikrofon=document.querySelector(".fa-microphone")

// buyutec.addEventListener("click",()=>{

// input.style.width="300px"
// mikrofon.classList.remove("activeblock")

// });


// mikrofon.addEventListener("click",()=>{
//     input.style.width="30px";
//     mikrofon.classList.add("activeblock")
// })

let buyutec=document.querySelector(".fa-magnifying-glass");
let input=document.querySelector("input");
let mikrofon=document.querySelector(".fa-microphone")

buyutec.addEventListener("click",()=>{
    input.classList.toggle("activewidth")
    mikrofon.classList.toggle("activeblock")
})

