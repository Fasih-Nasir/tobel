var a=1;
function fn()
{
  document.getElementById("p").innerHTML = a++;
}

     // Change slide every 3 seconds (adjust as needed)
//   });

//   function changeBg(){
//       var navbar= document.getElementById("navbar");
//     var scrollValue = window.scrollY;
//     if(scrollValue < 50){
//         navbar.classList.remove("bgcolor");
//     }
//     else{
//         navbar.classList.add("bgcolor");
//     }
// }
// window.addEventListener("scroll", changeBg)

// document.addEventListener("scroll", function() )

function bg(){
    var nav=document.getElementById("navbar");
    var scr=window.scrollY;
    var link=document.getElementById("nav-link");
    if(scr < 70 ){
        nav.classList.remove("ch")
      link.classList.remove("b")
      }
        else{
            nav.classList.add("ch")
            link.classList.add("b")
        }
}
window.addEventListener("scroll", bg );