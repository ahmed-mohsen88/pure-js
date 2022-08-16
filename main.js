

// important variable
var body = document.querySelector("body");
var head = document.querySelector("head");
// navbar
var nav = document.createElement("nav");
body.appendChild(nav);
// left side
var leftSide = document.createElement("div");
var medSide = document.createElement("div");
var rightSide = document.createElement("div");
nav.appendChild(leftSide);
nav.appendChild(medSide);
nav.appendChild(rightSide);
medSide.innerHTML = "pure JavaScript"
medSide.setAttribute("style","font-size : xx-large")
rightSide.innerHTML = "right"


// create side bar
var open_side = document.createElement("button")
leftSide.appendChild(open_side)
open_side.innerHTML = "one button open and close side bar"
var side_bar = document.createElement("aside")
leftSide.appendChild(side_bar)
side_bar.setAttribute("style" , "display:none ;  background-color:black ; color:white ; width:200px ")
side_bar.setAttribute("id" , "hid")
side_bar.innerHTML = "iam side bar"

open_side.addEventListener("click",()=>{
    if(document.getElementById("hid").style.display === "none"){
        document.getElementById("hid").style.display = "block"} 
        else {
            document.getElementById("hid").style.display = "none "}
        }
)
// create element in sidebar using for each
var side_links_txt = ["home","about","contact"]
side_links_txt.forEach((ele)=> {
    var a_link_div = document.createElement("div");
    side_bar.appendChild(a_link_div);

    var a_link = document.createElement("a");
    a_link.innerHTML = ele;
    a_link_div.appendChild(a_link);    

})

// open_side.onclick = ()=>{
//     if(document.getElementById("hid").style.display = "none"){
//     document.getElementById("hid").style.display = "block"} 
//     else {
//         document.getElementById("hid").style.display = "none"}
//     }




// create css class 
var style = document.createElement("style");
head.appendChild(style);
style.innerHTML = "body.active{background-color:black}  .all{margin:auto ; text-align:center ; color:red ; display :flex ; flex-direction:column ; width : 100px ;text-align:center;margin:10px auto; align-items:center} nav{display:flex ;justify-content:space-around  ; align-items : center ; color : white ; background-color :black ; margin:5px;text-align:center}"

// main txt
let f_h1 = document.createElement("h1");
body.appendChild(f_h1);
f_h1.innerHTML = "welcome to my web site";  
f_h1.classList.add("f_h1");
document.querySelector(".f_h1").setAttribute("style","margin:auto ; text-align:center ; color:red")



// button dark mode
let but = document.createElement("button");
but.classList.add("but");
body.appendChild(but);
but.innerHTML = "dark mode button";
document.querySelector(".but").setAttribute("style","margin:auto ; text-align:center ; color:red ; display:block" )

but.onclick = function(){
    document.querySelector("body").classList.toggle("active")
};

// create todolist 
let former =document.createElement("form")
body.appendChild(former);
former.classList.add("all");
 
var txt = document.createElement("input");
former.appendChild(txt);
txt.classList.add("all");
txt.type = "text";


var sub = document.createElement("input");
former.appendChild(sub);
sub.classList.add("all");
sub.type = "submit";
sub.disabled = true;

txt.onkeyup = ()=>{
    
    if(txt.value.length > 5){
        sub.disabled = false;
    }
    else{
        sub.disabled = true;
    }
}


var lis = document.createElement("ul");
body.appendChild(lis);
lis.classList.add("all")
lis.setAttribute("id" , "list")


former.onsubmit = ()=>{
    var li = document.createElement("li");
    lis.appendChild(li);
    li.innerHTML = txt.value;
    li.classList.add("all")
    txt.value = ""
    return false
}


// adding remove button
var rem_but = document.createElement("button");
body.appendChild(rem_but);
rem_but.innerHTML = "remove item";
rem_but.classList.add("all")

rem_but.addEventListener("click",()=>{
    if (lis.childElementCount > 0 ) {
        lis.removeChild(lis.lastElementChild);
    }else{
        alert(`Attention !!!!!!!!!!!!!! \n no tasks to be removed`)
        return false
    }
})


// adding some img 
var img_div = document.createElement("div")
body.appendChild(img_div);
img_div.setAttribute("style","display:flex ; jusstify-content:space-between;width:100%")
var img = ["p5.jpg" , "p6.jpg" , "p7.jpg"];
img.forEach((el)=>{
    var imgs =  document.createElement("img");
    img_div.appendChild(imgs);
    imgs.setAttribute("src",`${el}`)
    imgs.setAttribute("width",`500px`)
})