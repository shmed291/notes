const localSave = localStorage.getItem("note")?JSON.parse(localStorage.getItem("note")) :
[]

console.log(localSave);

function disPlayData(){
    let time = new Date()
    time = time.toString().split(" ")
    console.log(`${time[1]}/${time[2]}/${time[3]}`);
    
}
document.querySelector(".add-btn").addEventListener("click",()=>{
    let item = document.querySelector("#inputNote").value
    addToLocal(item)
})
function display(){
    let items = ""
    for(let i =0 ; i < localSave.length ; i++){
        items += `
        <div class="note">
                <textarea disabled>${localSave[i]}</textarea>
                <div class="icons">
                    <i class="fa-solid fa-check done"></i>
                    <i class="fa-solid fa-pen edit"></i>
                </div>
                <div class ="btns">
                     <button class="save ">save</button>
                     <button class="cancel ">cancel</button>
                </div>
            </div>`
    }
    document.querySelector(".notes").innerHTML = items
    doneNote()
    editNote()
    cancel()
}
function editNote(){
    let editBtn = document.querySelectorAll(".edit")
    let text = document.querySelectorAll("textarea")
    let saveBtn = document.querySelectorAll(".save")
    let cancel = document.querySelectorAll(".cancel")
    editBtn.forEach((eb,i) =>{
        eb.addEventListener("click", () =>{
            textedit()
            text[i].disabled = false
            cancel[i].classList.add("hide")

        })
        text[i].addEventListener("input",()=>{
            showSave(i)
        })
    })


}
function showSave(i){
    let text = document.querySelectorAll("textarea")
    let saveBtn = document.querySelectorAll(".save")
    let cancel = document.querySelectorAll(".cancel")
    if(text[i].value ===  localSave[i]){
           saveBtn[i].classList.remove("hide")
           cancel[i].classList.add("hide")

    }else{
   saveBtn[i].classList.add("hide")
   cancel[i].classList.remove("hide")

    }
}

function textedit(){
    let text = document.querySelectorAll("textarea")
    let saveBtn = document.querySelectorAll(".save")
    let btns  =document.querySelectorAll('.btns')
    saveBtn.forEach((sb,i) =>{
        sb.addEventListener("click", ()=> {
            save(text[i].value ,i)
            text[i].disabled = true
            sb.classList.remove("hide")
         } )
    })
}
function cancel(){
let text = document.querySelectorAll("textarea")
let cancelBtn = document.querySelectorAll(".cancel")

cancelBtn.forEach((cb,i) =>{
    
    cb.addEventListener("click",()=>{

        text[i].disabled = true
        save(text[i].value,i)
    })
}) 
}
function save(text,i){
    let cancelBtn = document.querySelectorAll(".cancel")
    let saveBtn = document.querySelectorAll(".save")
    localSave[i] = text
    localStorage.setItem("note",JSON.stringify(localSave));
    saveBtn[i].classList.remove("hide")
        cancelBtn[i].classList.remove("hide")
}

function doneNote(){
    let doneBtn = document.querySelectorAll(".done")
    doneBtn.forEach((d,i) =>{
        d.addEventListener("click",()=> { delet(i)})
    })
}
function delet(i){
    localSave.splice(i,1)
    localStorage.setItem("note",JSON.stringify(localSave));
    location.reload()
}

function addToLocal(item){
    localSave.push(item)
    localStorage.setItem("note",JSON.stringify(localSave))
    location.reload()
}
window.onload =() => {
    disPlayData()
    display()
}