
//character idle animation

var boy =  document.getElementById("boy");
idleImageNumber =1;
idleAnimationNumber=0;

    function  idleAnimation(){

        idleImageNumber = idleImageNumber+1;

        if(idleImageNumber==11){
            idleImageNumber =1;
    }

    boy.src = "assets/img/png/idle("+idleImageNumber+").png";
}

function idleAnimationStart(){
    idleAnimationNumber = setInterval(idleAnimation,200);
}


//character run animation-------------------------------------------------


var runImageNumber=1;
var runAniamtionNumber =0;
    function runAnimation(){

        runImageNumber=runImageNumber+1;

        if(runImageNumber==11){
            runImageNumber = 1;
        }

        boy.src = "assets/img/png/Run("+ runImageNumber +").png";
    }

    function runAnimationStart(){
       runAniamtionNumber = setInterval(runAnimation,100);
       clearInterval(idleAnimationNumber);  // Stop idle animation
    }


// character jump animation --------------------------------------------

jumpAnimationNumber = 0;
jumpImageNumber = 0;
 boyMarginTop=450;

function jumpAnimation(){

    jumpImageNumber = jumpImageNumber +1;


    if(jumpImageNumber<=6){
        boyMarginTop = boyMarginTop-20;
        boy.style.marginTop = boyMarginTop+"px";
    }

    if(jumpImageNumber >=7){
        boyMarginTop = boyMarginTop +20;
        boy.style.marginTop = boyMarginTop + "px";
    }

    if(jumpImageNumber==11){
        jumpImageNumber=1;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber=0;
        runImageNumber = 0;
        runAnimationStart();
    }

    boy.src = "assets/img/png/Jump("+ jumpImageNumber +").png";
}

function jumpAnimationStart(){
        clearInterval(idleAnimationNumber);
        runImageNumber=0;
        clearInterval(runAniamtionNumber);
        jumpAnimationNumber = setInterval(jumpAnimation,100);
}



 function keyCheck(event){
      // alert(event.keyCode);
    // console.log(event);
     var keyCode = event.keyCode;


     //when press enter boy start to running ------------------------------------

     if(keyCode==13){

         if (moveBackgroundAnimationId==0){
             moveBackgroundAnimationId = setInterval(moveBackground,100);
         }
         if(runAniamtionNumber==0){
             runAnimationStart();
         }

     }

//when press space boy start to jump ------------------------------------

     if(keyCode==32){
         if(jumpAnimationNumber==0){
             jumpAnimationStart();
         }
         if (moveBackgroundAnimationId==0){
             moveBackgroundAnimationId = setInterval(moveBackground,100);
         }
     }

 }

 //move background when boy runs------------------------------------


var backgraoundImagePositionX=0;
    moveBackgroundAnimationId=0;

    function moveBackground(){

        backgraoundImagePositionX = backgraoundImagePositionX -20;

        document.getElementById("background").style.backgroundPositionX = backgraoundImagePositionX + "px";

    }





