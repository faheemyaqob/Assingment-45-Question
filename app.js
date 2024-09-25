"use strict";
// Question 2...
let msg = "Hello Eric, Usama would you like to learn some python today";
console.log(msg);
// Question 3...
let perName = "Asim Gujjar";
// Convert to lowercase::
let lowercaseName = perName.toLowerCase();
console.log("Lowercase: ", lowercaseName);
// Convert to Uppercase::
let UppercaseName = perName.toUpperCase();
console.log("Uppercase: ", UppercaseName);
//Convert to Tittle::
let tittleCaseName = perName.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
console.log("TittleCase: ", tittleCaseName);
// Question 4...
let famQuote = "Billgates one said, if you are born poor, It's not your Mistake, but is you die poor, It,s your mistake";
console.log(famQuote);
// Question 5...
let famous_person = "Billgates one said:";
let famous_Quote = " If you are born poor, It's  not your Mistake, But if you die poor,  It's your Mistake.";
console.log(famous_person + famous_Quote);
// Question 6...
let nam = "\t \n Faheem \n \t";
console.log(nam);
// Question 7..
// ADD
let addnum = 3 + 5;
console.log("Addition:\t" + addnum);
// Sub
let subNum = 15 - 5;
console.log("Subtraction:\t" + subNum);
// Multi
let MultiNum = 9 * 5;
console.log("Multiply:\t" + MultiNum);
// Divide
let divNum = 32 / 4;
console.log("Divide:\t" + divNum);
// Question 8...
// console.log(7 + 1)
// console.log(18 - 10)
// console.log(32 * 8)
// console.log(45 / 5)
// Question 9...
let favNum = 5;
let myMsg = "My Favourate Number is:";
console.log(myMsg + favNum);
// Question 10...
/*Faheem Gujjar ---- Date 21-7-24
I am learning TypScript using Node.js and my ProGramm is going to well*/
// Question 11...
let friendsName = ["Faheem", "Asim", "Waseem"];
console.log(friendsName[0]);
console.log(friendsName[1]);
console.log(friendsName[2]);
for (let i = 0; i < friendsName.length; i++) {
    console.log("friend" + (i + 1) + ":" + friendsName[i]);
}
// Question 12...
for (let i = 0; i < friendsName.length; i++) {
    console.log(`ASSALAM O ALAIKUM ${friendsName[i]}! Have a great day`);
}
// Question 13...
let cars = ["Supra", "Mercedes", "Vigo", "Civic"];
for (let i = 0; i < cars.length; i++) {
    console.log(`I would like to own a ::${cars[i]}:: Car`);
}
// Question 14...
let dinner_guest = ["Brenden Erich", "Sam Altmen", "Elbert ainstien", "BillGates"];
for (let i = 0; i < dinner_guest.length; i++) {
    console.log(`ASSLAM O ALAIKUM MR.${dinner_guest[i]},you are invited to join me for dinner,It would be an honor to have your company \n.`);
}
// Question 15...
dinner_guest = ["Brenden Erich", "Sam Altmen", "Elbert ainstien", "BillGates"];
dinner_guest[2] = "Elon Mask";
console.log(`Due to some personal reasons MR.${dinner_guest[2]} will not come in my dinner`);
// Question 16...
console.log(`${dinner_guest}:\n I have found a bigger dinner table than i think to invite three more friends`);
// Adding three more friends
// at beginning
dinner_guest.unshift("Ammen Alam");
// at middle
dinner_guest.splice(2, 0, "Guido van Rossum");
// at last
dinner_guest.push("Adam Freeman");
// Print all guest along with massage
for (let i = 0; i < dinner_guest.length; i++) {
    console.log(`Mr.${dinner_guest[i]} you are invited to my dinner`);
}
// Question 17...
console.log(`\n Table is not available I can invite only two person\n`);
console.log(dinner_guest.length);
while (dinner_guest.length > 2) {
    let rm_guest = dinner_guest.pop();
    if (rm_guest) {
        console.log(`Sorry Mr.${rm_guest} we have not enough space, so you are not invited yet\n`);
    }
}
console.log(`The final two guest are:\t${dinner_guest}\n`);
for (let i = 0; i < dinner_guest.length; i++) {
    console.log(`Dear ${dinner_guest[i]} you are still in our list!\n`);
}
dinner_guest.pop();
dinner_guest.pop();
console.log(`we have 0 guest in list : ${dinner_guest}`);
