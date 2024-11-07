function addEle(){
    let allNods = document.querySelector(".notes")
    let d = document.createElement('div')
d.className = "note"
let div = document.createElement("div")
div.className = `top-title`
d.appendChild(div)
let input = document.createElement("input")
input.className = `inps`
input.setAttribute("type","text")
d.appendChild(input)
let textarea = document.createElement("textarea")
textarea.className="text"
d.appendChild(textarea)
allNods.appendChild(d)

let notes = document.querySelectorAll(".note")


let X = document.querySelector(".closer")

let text = document.querySelectorAll(".text")

let topTitle = document.querySelectorAll(".top-title")

let inp = document.querySelectorAll(".inps")




notes.forEach( note => { 
        
    X.addEventListener("click",()=>{
        note.classList.remove("onclick")
        note.style.position = `inline`
        X.style.visibility = `hidden`
        X.style.opacity = 0
        topTitle.forEach(tops =>{
            tops.style.display = `none`
        })
        inp.forEach(inps =>{
            inps.classList.add("top-title-active")
            inps.disabled = true
        })
        text.forEach(texts =>{
            texts.style.backgroundColor = `#222222`
            texts.style.display= `none`
        })
        document.querySelector(".add").classList.remove("hidde")
        document.body.style.overflow = ""

    })
    note.addEventListener("click",()=>{
         note.classList.add("onclick")
            X.style.visibility = `visible`
            X.style.opacity = 1 
            topTitle.forEach(tops =>{
                tops.style.display = `block`
            })
            text.forEach(texts =>{
                texts.style.backgroundColor = `black`
                texts.style.display= `inline`
            })
            text.focus
            document.querySelector(".add").classList.add("hidde")
            document.body.style.overflow = "hidden"
            inp.forEach(inps =>{
                inps.classList.remove("top-title-active")
                inps.disabled = false
            })

           
});
})

}
window.onload = ()=>{
window.localStorage.setItem("widow", document.querySelector(".notes").innerHTML)



                document.querySelector(".notes").innerHTML = localStorage.getItem("widow")
            }


let open = 1