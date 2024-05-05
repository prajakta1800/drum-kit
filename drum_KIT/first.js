// 1st method :=

// document.querySelectorAll("button")[0].addEventListener("click",h1)
// document.querySelectorAll("button")[1].addEventListener("click",h1)
// document.querySelectorAll("button")[2].addEventListener("click",h1)
// document.querySelectorAll("button")[3].addEventListener("click",h1)
// document.querySelectorAll("button")[4].addEventListener("click",h1)
// document.querySelectorAll("button")[5].addEventListener("click",h1)
// document.querySelectorAll("button")[6].addEventListener("click",h1)

// // {
// //   alert(" i m clicked");
// // });
// function h1(){
//     alert("i m cliked");
// }


//  2nd method :=


for(var i=0;i<=4;i++){
document.querySelectorAll("button")[i].addEventListener("click",h1)

function h1(){
       


var k1= this.innerHTML ;

    switch (k1) {

        case "w":
                var audio= new Audio("sounds/WhatsApp Audio 2024-04-13 at 12.56.59.mpeg");
                audio.play();
                break;
        case "a":
            var audio1= new Audio("sounds/WhatsApp Audio 2024-04-13 at 12.57.01.mpeg");
            audio1.play();
            break;
         case "s":
            var audio2= new Audio("sounds/WhatsApp Audio 2024-04-13 at 12.57.05.mpeg");
            audio2.play();
            break; 
           
            case "d":
            var audio3= new Audio("sounds/WhatsApp Audio 2024-04-13 at 12.57.07.mpeg");
            audio3.play();
            break; 
            case "j":
                var audio4= new Audio("sounds/WhatsApp Audio 2024-04-13 at 12.57.15.mpeg");
                audio4.play();
                break; 
               
    
        default: console.log(k1);
            // alert(s)
            // break;
    }
//     function buttonAnimation(currentKey){
//         var active=document.querySelector("." + currentKey);
//         active.classList.add("pressed");
        
//    }



     }
    }


