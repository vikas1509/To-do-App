const input = document.getElementById('input-box');
const  listContainer = document.getElementById("list-container");


 function addTask(){

if(input.value === ''){
    alert("You must write somthing!");

}
else{
    let li = document.createElement("li");
    li.innerHTML=input.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML= "\u00d7";
    li.appendChild(span);

}
input.value='';
savedData();
 }

 listContainer.addEventListener("click", function(e){
    if(e.target.tagName==='LI'){
         e.target.classList.toggle("checked");
      //   classList.toggle("checked") //toggles the presence of the class "checked" on the clicked <li> element. If the class is already present, it removes it; if not, it adds it
         savedData()
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        savedData()
    }
 },false)

 function savedData(){
    localStorage.setItem("data", listContainer.innerHTML);

 }
 function ShowTask(){
    listContainer.innerHTML=localStorage.getItem("data");
 }
 ShowTask();