function greetUser(){
     let vacation = prompt("... Are you feeling happy today? (Yes, No, Maybe So)").toLowerCase();
     console.log(vacation);
    
     while (vacation !== "yes" && vacation !=="no" && vacation !== "maybe so"){
     vacation = prompt ("... Bruh. Valid answers are Yes, No, or Maybe So");
    }
     
     if (vacation == 'yes'){
         document.write('Love that for you. Congrats on your brain chemistry!');
     } else if (vacation == 'no'){
         document.write('I too am currently unhappy. It is 9:47 pm as I type this for a CodeFellow project lol.');
     } else if (vacation == 'maybe so'){
         document.write('... How mysterious of you.');
     } else {
         vacation = prompt("Try working on your reading comprehension skills, pal! :)");
         document.write('wamp waaamp')
     }
     
     return vacation;
}


alert ("Taking a vacation (even a stay-cation!) can lower the risk of heart disease");


function mentalHealth(){
    let displayBeach = prompt("Scale of 1-5, how much do you need a vacation rn?");
        displayBeach = parseInt(displayBeach);
        console.log(displayBeach);
    while (displayBeach < 1 || displayBeach > 5){
        displayBeach = prompt ("Oop, slow down and follow directions! This is for science. Scale of 1-5, how much do you need a vacation? AND GO!");
   }

    for (let i = 0; i < displayBeach; i++){
         document.write('<img class="tinyplane" src="tiny.plane.jpg" />');
         }
    
 
    return displayBeach;
}


    // let displayBeach = prompt("On a scale of 1-5, how much do you need a vacation?");
    // console.log(displayBeach);
      
    //     while (displayBeach !== "1" && vacation !=="2" && vacation !== "3" && vacation !== "4" && vacation !== "5"){
    //         displayBeach = prompt ("... Follow directions? This is for science. Scale of 1-5, how much do you need a vacation? AND GO!")
    //     }   

        // for (let i = 0; i < displayBeach; i++){
        //     document.write '(<img src= "tiny.plane") class= "Imgs" alt="Catching flights"/>)'
        // }

// function displayBeach (){
//     let beachPics = prompt ("On a scale of 1-5, how much do you need a vacation?");

//      (let i = 0; i < beachPics; i++){
//     document.write("<head class='beach-tags'>Wanna go halfsies on the cost of a vacation? <br> </head>");
//     }
// } 

//     while (displayBeach!== "1" && vacation !=="2" && vacation !== "3" && vacation !== "4" && vacation !== "5"){
//         displayBeach = prompt ("... Do you know how to follow directions? Scale of 1-5, how much do you need a vacation? AND GO!");
//      }
//         return vacation;


let theirAnswer = greetUser();
console.log (theirAnswer);

let theirMentalHealth = mentalHealth();
console.log (mentalHealth);

console.log("After Conditional");


confirm ("I'm still very new to coding. Are you SURE you want to see the mess in here?");
