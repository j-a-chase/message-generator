//File Name: main.js
//Date: 21 November 2021
//Name: James A. Chase
//Purpose:  To practice JavaScript essentials and Git workflow
//Description:  This program creates a random message every time
//              you run the program.

//Will hold the randomized message
let message = "";

//Returns a random number between 1 - 5
const genRandomNumber = () => {

    num = Math.floor(Math.random() * 5 + 1);
    console.log(num);
    return num;

};

const firstMessagePart = num => {

    switch (num) {
        case 1:
            message += "The cat jumped ";
            break;
        case 2:
            message += "My belly was ";
            break;
        case 3:
            message += "Once upon a time ";
            break;
        case 4:
            message += "It was the best of times ";
            break;
        case 5:
            message += "The big red ball ";
            break;
        default:
            console.log("Error with random number generation.");
            break;
    };
  
};

const secondMessagePart = num => {

    switch (num) {
        case 1:
            message += "when suddenly ";
            break;
        case 2:
            message += "to go over everything ";
            break;
        case 3:
            message += "drives me insane ";
            break;
        case 4:
            message += "tastes like snowflakes ";
            break;
        case 5:
            message += "is smooth like butter ";
            break;
        default:
            console.log("Error with random number generation.");
            break;
    };

};

const thirdMessagePart = num => {

    switch (num) {
        case 1:
            message += "and then the mountain collapsed.";
            break;
        case 2:
            message += "then the zombies attacked.";
            break;
        case 3:
            message += "to have it removed.";
            break;
        case 4:
            message += "that they should be burned.";
            break;
        case 5:
            message += "to eat some cheese.";
            break;
        default:
            console.log("Error with random number generation.");
            break;
    };

};

firstMessagePart(genRandomNumber());
secondMessagePart(genRandomNumber());
thirdMessagePart(genRandomNumber());

console.log(message);