alert ("Over 50% of commercial pilots have admitted to falling asleep while flying a plane..");

function greetUser (){
    let vacation = prompt("... Are you happy today? (Yes, No, Maybe So)");
    console.log(vacation);

    if (vacation == ""){
        vacation = prompt("Try working on your reading comprehension skills, pal! :)");
    }
    else if (vacation == 'Yes'){
        document.write('Way to not let sleeping airline pilots stop you from staying happy! *side eye*')
    } else if (vacation == 'No'){
        document.write('Bestie, same!')
    } else if (vacation == 'Maybe So'){
        document.write('... How mysterious of you')
    } else {
        document.write('That was not an option! You Failed the Test')
    }
    
    return vacation;
}

let theirAnswer = greetUser ();
console.log (theirAnswer);

console.log("After Conditional");


confirm ("Are you SURE you want to see this mess of a Website?!!")