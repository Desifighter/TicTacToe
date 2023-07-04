

var arr = [-1,-2,-3,-4,-5,-6,-7,-8,-9];
var count = 0;

var gamestart = false;

document.querySelector("button").addEventListener("click",function () {
    document.querySelector("button").innerHTML = "Restart game";
    
    emptyBoxs(); 
    arr = [-1,-2,-3,-4,-5,-6,-7,-8,-9];

    document.querySelector(".turn").classList.remove("display-none");

    document.querySelector(".player1sign").classList.add("border-niche");
    document.querySelector(".player2sign").classList.remove("border-niche");

    document.querySelector("#turn-circle").classList.add("display-none");
    document.querySelector("#turn-cross").classList.remove("display-none");

    document.querySelector(".squareboard").classList.remove("display-none");
    document.querySelector("#display-result").classList.add("display-none");

    document.querySelector(".result-img").classList.remove("result-circle-img");
    document.querySelector(".result-img").classList.remove("result-draw-img");
    document.querySelector(".result-img").classList.remove("result-cross-img");

    document.querySelector("#display-result > span").innerHTML = "";

    gamestart = true;
    alternate = true;
    count = 0;
});


var alternate = true;

for (let index = 0; index < document.querySelectorAll(".mat").length; index++) {
    document.querySelectorAll(".mat")[index].addEventListener("click",function(){

        var filled = document.querySelectorAll(".mat")[index].classList.contains("bg-img-circle") || document.querySelectorAll(".mat")[index].classList.contains("bg-img-cross");

        if (alternate&&gamestart) {
            document.querySelector(".player1sign").classList.remove("border-niche");
            document.querySelector(".player2sign").classList.add("border-niche");

        } else if(gamestart){
            document.querySelector(".player2sign").classList.remove("border-niche");
            document.querySelector(".player1sign").classList.add("border-niche");
            
        }
        

        
        if (!filled&&gamestart) {
            if (alternate) {
                document.querySelectorAll(".mat")[index].classList.add("bg-img-cross");
                arr[index] = 1;
                alternate = false;
                count++;
                
            }
            else{
                document.querySelectorAll(".mat")[index].classList.add("bg-img-circle");
                arr[index] = 0;
                alternate = true;
                count++;
            }
            document.querySelector("#turn-cross").classList.toggle("display-none");
            document.querySelector("#turn-circle").classList.toggle("display-none");
            
            winresult(count);
        }

    });
    
}



function emptyBoxs() {
    for (let index = 0; index < document.querySelectorAll(".mat").length; index++){
        document.querySelectorAll(".mat")[index].classList.remove("bg-img-circle");
        document.querySelectorAll(".mat")[index].classList.remove("bg-img-cross");
    }
}


function winresult(params) {
    if (arr[0]===arr[1]&&arr[0]===arr[2]) {
        
        setTimeout(function () {
            displaywinners(arr[0]);
            
        },1000);
    } 
    else if(arr[3]===arr[4]&&arr[4]===arr[5]){
        
        setTimeout(function () {
            displaywinners(arr[3]);
            
        },1000);
        
    }
    else if(arr[6]===arr[7]&&arr[7]===arr[8]){
        
        setTimeout(function () {
            displaywinners(arr[6]);
            
        },1000);
        
    }
    else if(arr[0]===arr[3]&&arr[3]===arr[6]){

        setTimeout(function () {
            displaywinners(arr[0]);
            
        },1000);
    
    }
    else if(arr[1]===arr[4]&&arr[4]===arr[7]){

        setTimeout(function () {
            displaywinners(arr[1]);
            
        },1000);
    
    }
    else if(arr[2]===arr[5]&&arr[5]===arr[8]){

        setTimeout(function () {
            displaywinners(arr[2]);
            
        },1000);
        
    }
    else if(arr[0]===arr[4]&&arr[4]===arr[8]){

        setTimeout(function () {
            displaywinners(arr[0]);
            
        },1000);
        
    }
    else if(arr[6]===arr[4]&&arr[4]===arr[2]){
       
        setTimeout(function () {
            displaywinners(arr[6]);
            
        },1000);
        
    }
    else if(params===9){
        setTimeout(function () {
          
            displaywinners(45);
            
        },1000);

    }
}

function displaywinners(params) {
    document.querySelector(".squareboard").classList.add("display-none");
    document.querySelector("#display-result").classList.remove("display-none");
    if (params==0) {
        document.querySelector(".result-img").classList.add("result-circle-img");

        document.querySelector("#display-result > span").innerHTML = "Winner!"
    }
    else if (params==1) {
        document.querySelector(".result-img").classList.add("result-cross-img");

        document.querySelector("#display-result > span").innerHTML = "Winner!"
    }
    else{
        document.querySelector(".result-img").classList.add("result-draw-img");

        document.querySelector("#display-result > span").innerHTML = "Draw!"
    }

}





