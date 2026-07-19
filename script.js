let button=document.querySelector("#btn")
let selectionbox = document.querySelector(".text-select");
let textarea=document.querySelector(".textarea")
let wordcounter=document.querySelector("#wordCount")

selectionbox.addEventListener("change", function () {
    button.textContent = selectionbox.options[selectionbox.selectedIndex].value;
});
let previousValue=``;

textarea.addEventListener("input",()=>{
    if(textarea.value.trim()===""){
        var words=[]
    }
    else{
        words=textarea.value.split(/\s+/)
    }
    if(words.length>500){
       textarea.value=previousValue
        words=textarea.value.split(/\s+/)
         
        return
    }
    previousValue=textarea.value
    wordcounter.textContent=`${words.length} / 500 words`
})