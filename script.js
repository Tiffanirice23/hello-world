function greetUser() {
     let vacation = prompt("... Are you happy today? (Yes, No, Maybe So)");
     console.log(vacation);
    
    while (vacation !== "Yes" && vacation !=="No" && vacation !== "Maybe So"){
    vacation = prompt ("... bruh. Valid answers are Yes, No, or Maybe So");
   }
    
    if (vacation == 'Yes'){
        document.write('Love that for you. Congrats on your brain chemistry!')
    } else if (vacation == 'No'){
        document.write('It is 9:47 pm as I type this lol. Samsiesss')
    } else if (vacation == 'Maybe So'){
        document.write('... How mysterious of you.')
    } else {
        vacation = prompt("Try working on your reading comprehension skills, pal! :)");
        document.write('wamp waaamp')
    }
    
    return vacation;
}

alert ("Over 50% of commercial pilots have admitted to falling asleep while flying a plane..");

let theirAnswer = greetUser();
console.log (theirAnswer);

console.log("After Conditional");


confirm ("Are you SURE you want to see the mess in here? Last chance to turn around!")
