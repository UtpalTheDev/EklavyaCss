let float_btn=document.querySelector(".float-act-btn");
let float_list=document.querySelector(".float-act-list");
let float_btn_val=0;
try{
let toast_suc_elem=document.querySelector(".toast-success");
let toastSuccess=document.querySelector(".toastSuccess");




toastSuccess.addEventListener("click",()=>{
    toast_suc_elem.classList.add("toastanim")
    toastSuccess.style.cursor="not-allowed"
setTimeout(()=>{toast_suc_elem.classList.remove("toastanim"); toastSuccess.style.cursor="pointer"

},5000)});
////////////////////////////////////////////////////////
let toastError=document.querySelector(".toastError");

let toast_err_elem=document.querySelector(".toast-error");

toastError.addEventListener("click",()=>{
    toast_err_elem.classList.add("toastanim")
    toastError.style.cursor="not-allowed"
setTimeout(()=>{toast_err_elem.classList.remove("toastanim"); toastError.style.cursor="pointer"

},5000)});
////////////////////////////////////////////////////

let toastWarning=document.querySelector(".toastWarning");

let toast_war_elem=document.querySelector(".toast-warning");

toastWarning.addEventListener("click",()=>{
    toast_war_elem.classList.add("toastanim")
    toastWarning.style.cursor="not-allowed"
setTimeout(()=>{toast_war_elem.classList.remove("toastanim"); toastWarning.style.cursor="pointer"

},5000)});

//////////////////////////////////////////

let toastInfo=document.querySelector(".toastInfo");
let toast_info_elem=document.querySelector(".toast-info");

toastInfo.addEventListener("click",()=>{
    toast_info_elem.classList.add("toastanim")
    toastInfo.style.cursor="not-allowed"
setTimeout(()=>{toast_info_elem.classList.remove("toastanim"); toastInfo.style.cursor="pointer"

},5000)});
}
catch{
    console.log("element is not present in html")
}

try{
let ham_btn=document.querySelector(".ham");
let ham_btn_t1=document.querySelector("#check");

let sidenav=document.querySelector(".sidenav");
let sidenav_t1=document.querySelector(".sidenav-t1");


let sidenav_close=document.querySelector(".sidenav-closebtn");

ham_btn.addEventListener("click",sidenavopen);

ham_btn_t1.addEventListener("click",sidenav_t1_toggle);
let ham_btn1_val=0;

sidenav_close.addEventListener("click",sidenavclose);

function sidenav_t1_toggle()
{
    if(ham_btn1_val===0)
    {
        sidenav_t1.style.width=`250px`;
        ham_btn1_val=1;
    }
    else{
        sidenav_t1.style.width=`0px`;
        ham_btn1_val=0;

    }
}


function sidenavopen(){
    sidenav.style.width=`250px`;
   }
   
   function sidenavclose(){
       sidenav.style.width=`0px`;
      }
}
catch{
console.log("hamberger elements not in html");
}

try{
float_btn.addEventListener("click",floatClick);
function floatClick(e){
    if(float_btn_val===0)
    {float_list.style.display=`block`;
    float_btn.style.transform=`rotate(45deg)`;
   float_btn_val=1; }
   
    else{float_list.style.display=`none`;
    float_btn.style.transform=`rotate(0deg)`;
    float_btn_val=0;}
   }
}
catch{
    console.log("float button not present in html");
}

try{

}
catch{
    
}



   