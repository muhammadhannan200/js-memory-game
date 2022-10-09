var buttonColours=[ "red", "blue", "green", "yellow" ];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
$(document).keypress(function (e) {
    console.log(e.key)
    if(e.key=='A'||e.key=='a') {
        nextSequence();
        $('#level-title').text("Level "+level);
    }
    
});

$('.btn').click(function () { 

    // var userChosenColour = e.currentTarget.id;    old way
    var userChosenColour=$(this).attr("id");
    
    // userClickedPattern.push(e.currentTarget.id);   old way
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour); 
    var len=userClickedPattern.length-1;
    // console.log(len);
    checkAnswer(len);//>>>>>>>>>...
    animatePress(userChosenColour);

});


    

function nextSequence(){
    userClickedPattern=[];
    var randomNumber=Math.round(Math.random()*3);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour); 
    // console.log(randomNumber);>>show randome number
    // console.log(randomChosenColour)>>show randome colour
    // console.log(gamePattern) >> to generate  game pattern
    level++;
    $('#level-title').text("Level "+level);
    


// // $("#"+randomChosenColour).animate({opacity: 0}).animate({opacity: 1});
console.log(gamePattern)
// for (let index = 0; index < gamePattern.length; index++) {
//         console.log(gamePattern[index])
//         setTimeout(function () {
    //             $('#'+gamePattern[index]).delay(100).fadeOut().fadeIn('slow');  //flash animation for the same color
    //             delay(2000);
    //             },200);
    
    //     }
    $('#'+randomChosenColour).delay(100).fadeOut().fadeIn('slow');  //flash animation for the same color
    
playSound(randomChosenColour); // make a sound
}

function playSound(name)  {
    var audio = new Audio('sounds/'+name+'.mp3');  
    // console.log(audio);  
    audio.play();   }


    
function animatePress(currentColour)  {
    $('#'+currentColour).addClass('pressed');

    setTimeout(function(){
        $('#'+currentColour).removeClass("pressed");
},100);
}



function checkAnswer(currentLevel) { 
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]) {
        console.log("sucssesd");
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    else {
        console.log("wrong");
        playSound("wrong");
        $('body').addClass('game-over');
        setTimeout(function () {
            $('body').removeClass('game-over ');
        }, 200);
        $('#level-title').text('Game Over, Press Any Key to Restart');
        startOver()
         

         
    }
 }
 function startOver() { 
    gamePattern=[];
    level=0;
  }
