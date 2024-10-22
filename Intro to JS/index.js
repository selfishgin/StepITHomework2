// let grade = 75
let grade = prompt("Please enter the grade: "); // 1-ci line-dakini commentden cixardib 2-ci line-i commente salsaq isleyir. men elave input qoymaq istedim
switch(true){
    case (grade >= 85 && grade <= 100):
        console.log("Your grade is A!")
        break;
    case (grade >= 75 && grade < 85):
        console.log("Your grade is B!")
        break;
    case (grade >= 65 && grade < 75):
        console.log("Your grade is C!")
        break;
    case (grade >= 50 && grade < 65):
        console.log("Your grade is D!")
        break;
    case (grade >= 0 && grade < 50):
        console.log("Your grade is F!")
        break;
    default:
        console.log("Invalid input!")
        break;
}