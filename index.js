let str="";
let btn=document.querySelectorAll(".button");
Array.from(btn).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            str=eval(str);
            document.querySelector("input").value=str;
        }else if(e.target.innerHTML=="C"){
            str="";
            document.querySelector("input").value=str;
        }else{
            console.log(e.target);
            str=str+e.target.innerHTML;
            document.querySelector("input").value=str;
        }
    });
});