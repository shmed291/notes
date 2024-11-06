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
                })
    });
})