let grade = 73
let letterGrade = null

if(0 <= grade && grade < 50){
    letterGrade = "F"
}else if(50 <= grade && grade < 65){
    letterGrade = "D"
}else if(65 <= grade && grade < 75){
    letterGrade = "C"

}else if(75 <= grade && grade < 85){
    letterGrade = "B"

}else if(85 <= grade && grade <= 100){
    letterGrade = "A"

}

switch(letterGrade){
    case "A":
        console.log("Your grade is A!")
        break;
    case "B":
        console.log("Your grade is B!")
        break;
    case "C":
        console.log("Your grade is C!")
        break;
    case "D":
        console.log("Your grade is D!")
        break;
    case "F":
        console.log("Your grade is F!")
        break;
    default:
        console.log("Invalid input!")
        break;
}