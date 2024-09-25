// Question 2...
let msg: string = "Hello Eric, Usama would you like to learn some python today";
console.log(msg);

// Question 3...
let perName: string = "Asim Gujjar"

// Convert to lowercase::
let lowercaseName: string = perName.toLowerCase();
console.log("Lowercase: " , lowercaseName);

// Convert to Uppercase::
 let UppercaseName: string = perName.toUpperCase();
 console.log("Uppercase: " , UppercaseName);
 
//Convert to Tittle::
let tittleCaseName : string = perName.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
console.log("TittleCase: " , tittleCaseName);

// Question 4...
let famQuote: string = "Billgates one said, if you are born poor, It's not your Mistake, but is you die poor, It,s your mistake";
console.log(famQuote);

// Question 5...
let famous_person: string = "Billgates one said:";
let famous_Quote: string = " If you are born poor, It's  not your Mistake, But if you die poor,  It's your Mistake.";
console.log(famous_person + famous_Quote);

// Question 6...
let nam: string = "\t \n Faheem \n \t";
console.log(nam);

// Question 7..
// ADD
let addnum : Number = 3 + 5 ;
console.log("Addition:\t" + addnum);

// Sub
let subNum : Number = 15 - 5 ;
console.log("Subtraction:\t" + subNum);

// Multi
let MultiNum : Number = 9 * 5 ;
console.log("Multiply:\t" + MultiNum);

// Divide
let divNum : Number = 32 / 4 ;
console.log("Divide:\t" + divNum);

// Question 8...
// console.log(7 + 1)
// console.log(18 - 10)
// console.log(32 * 8)
// console.log(45 / 5)

// Question 9...
let favNum : Number = 5;
let myMsg : string ="My Favourate Number is:";
console.log(myMsg + favNum);

// Question 10...
/*Faheem Gujjar ---- Date 21-7-24
I am learning TypScript using Node.js and my ProGramm is going to well*/

// Question 11...

let friendsName : string [] = ["Faheem" , "Asim" , "Waseem"];
console.log(friendsName[0]);
console.log(friendsName[1]);
console.log(friendsName[2]);
for (let i = 0; i < friendsName.length; i++) {
    console.log("friend" + (i + 1) + ":" + friendsName[i]);
}

// Question 12...
for (let i = 0 ; i < friendsName.length; i++) {
    console.log(`ASSALAM O ALAIKUM ${friendsName[i]}! Have a great day`);
} 
 
// Question 13...
let cars: string [] =["Supra" , "Mercedes" , "Vigo" , "Civic"];
for(let i = 0; i < cars.length; i++) {
    console.log(`I would like to own a ::${cars[i]}:: Car`)
}

// Question 14...
let dinner_guest: string[] = ["Brenden Erich", "Sam Altmen", "Elbert ainstien", "BillGates"];
for (let i = 0; i < dinner_guest.length; i++) {
    console.log(`ASSLAM O ALAIKUM MR.${dinner_guest[i]},you are invited to join me for dinner,It would be an honor to have your company \n.`)
}
// Question 15...
dinner_guest =["Brenden Erich", "Sam Altmen", "Elbert ainstien", "BillGates"];
dinner_guest[2] = "Elon Mask";
console.log(`Due to some personal reasons MR.${dinner_guest[2]} will not come in my dinner`);

// Question 16...
console.log(`${dinner_guest}:\n I have found a bigger dinner table than i think to invite three more friends`);
// Adding three more friends
// at beginning
dinner_guest.unshift("Ammen Alam");

// at middle
dinner_guest.splice(2,0, "Guido van Rossum");

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
    console.log(`Dear ${dinner_guest[i]} you are still in our list!\n`)
}
dinner_guest.pop()
dinner_guest.pop()
console.log(`we have 0 guest in list : ${dinner_guest}`);

//Question 18
let fav_Place: string[] = ["soudia", "Malysia", "Iran", "Turkey", "America"];
console.log(fav_Place);

let sorted_place = fav_Place.slice();
sorted_place.sort();

console.log(`Original Places:  ${fav_Place}`);
console.log(`Sorted Places: ${sorted_place}`);
console.log(`still in its original order:\n ${fav_Place}`);

let revFavPlace = fav_Place.slice();
revFavPlace.reverse();

console.log(`Original places: \n ${fav_Place}`);
console.log(`Reverse Favourit Places:\n ${revFavPlace}`);

fav_Place.reverse();
console.log(`reverse: ${fav_Place}`);

fav_Place.sort();
console.log(`sorted: ${fav_Place}`);

fav_Place.reverse();
console.log(`reverse: ${fav_Place}`);

// Question 19
dinner_guest = ["Brenden Erich", "Sam Altmen", "Elbert ainstien", "BillGates"];
console.log(`Hey! Dear Mr ${dinner_guest} you are invited again😌`);

// Question 20
let prog_language: string[] = ["Python", "JavaScript", "Java", "ReactNative", "Next.js"];
console.log(`List of Programming Languages:\n ${prog_language}`);

// Question 21 and 22
let object_Lang: { Language: string; year: number; }[] = [
    { Language: "Python", year: 1991 },
    { Language: "JavaScript", year: 1995 },
    { Language: "Java", year: 1991 },
    { Language: "C++", year: 1979 }
];
let invalid_index = object_Lang[3];
if (object_Lang.length > 3) {
    let valid_index = object_Lang[3];
    console.log("language at index 3: ", valid_index);
} else {
    console.log("Invalid index access. The array lenght is:", object_Lang.length);
}

// Question 23
//Comparison Operator
let car: string = 'subaru'
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'kawasaki'? I predict False.");
console.log(car == 'kawasaki');

console.log("Is five grater than 4? I predict True.");
console.log(5 > 4);

console.log("Is 10 less than 20? I predict True.");
console.log(10 < 20);

console.log("Is mango start with n? I predict False.");
console.log("mango".startsWith("n"));

console.log("Is mango end with o? I predict True.");
console.log("mango".endsWith("o"));

console.log("Is mango contain t? I predict False.");
console.log("mango".includes("t"));

console.log("Is true && false? I predict False.");
console.log(true && false);

console.log("Is true || false? I predict True.");
console.log(true || false);

console.log("Is false ? I predict False.");
console.log(false);

// Question 24
let fruit_king: string = "Mango"
console.log("Is Apple is king of fruit? I predict False.");
console.log("Apple" == fruit_king);

console.log("Is Mango is king of fruit? I predict True.");
console.log("Mango" == fruit_king);

let my_name: string = "Rameez"
console.log("Is rameez is my name in lowercase? I predict True.");
console.log(my_name.toLowerCase() == "rameez");

console.log("Is Rameez is my name in lowercase? I predict False.");
console.log(my_name.toLowerCase() == "Rameez");

console.log("is Six greater than two? I predict True.")
console.log(6 > 2)

console.log("is Six lesser than two? I predict False.")
console.log(6 < 2)

console.log("is Six divisible by two? I predict True.")
console.log(6 % 2 == 0)

console.log("is seven is divisible by two? I predict False.")
console.log(7 % 2 == 0)

console.log("is israel is State? i predict False.")
console.log(true && false)

console.log("is Palestine is State? i predict True.")
console.log(true || false)

let fruits: string[] = ["Apple", "Mango", "Orange", "Banana"]
console.log("Is Apple in fruits? I predict True.")
console.log(fruits.includes("Apple"))

console.log("Is Car in fruits? I predict False.")
console.log(fruits.includes("Car"))

// Question 25
let alien_color = ['green', 'yellow', 'red'][Math.floor(Math.random() * 3)] as 'green' | 'yellow' | 'red';

if (alien_color === "green") {
    console.log("Congratulations! The player just earned 5 points for shooting down the green alien.");
}

// Question 26
alien_color = ['green', 'yellow', 'red'][Math.floor(Math.random() * 3)] as 'green' | 'yellow' | 'red';
if (alien_color === 'green') {
    console.log("Congratulations! The player just earned 5 points for shooting down the green alien.");
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! The player just earned 10 points for shooting down the yellow alien.");
}

// Question 27
alien_color = ['green', 'yellow', 'red'][Math.floor(Math.random() * 3)] as 'green' | 'yellow' | 'red';
if (alien_color === 'green') {
    console.log("Congratulations! The player just earned 5 points for shooting down the green alien.");
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! The player just earned 10 points for shooting down the yellow alien.");
}
else if (alien_color === 'red') {
    console.log('Congratulations! The player just earned 15 points for shooting down the red alien.');
}

// Question 28
let age: number = 10
if (age <= 2) {
    console.log("the person is a baby")
}
else if (age > 2 && age <= 4) {
    console.log("the person is a toddler")
}
else if (age > 4 && age <= 13) {
    console.log("the person is a kid")
}
else if (age > 13 && age <= 20) {
    console.log("the person is a teenager")
}
else if (age > 20 && age <= 65) {
    console.log("the person is an adult")
}
else if (age > 65) {
    console.log("the person is an elder")
}

// Question 29
let fav_fruits: string[] = ["Pineapple", "Guava", "Mango"];

if (fav_fruits.includes("Pineapple")) {
    console.log("You Really Like Pineapple!");
}
if (fav_fruits.includes("Mango")) {
    console.log("You Really Like Mango!");
}
if (fav_fruits.includes("Guava")) {
    console.log("You Really Like Guava!");
}
if (fav_fruits.includes('Bananas')) {
    console.log("You really like Bananas!");
}
else {
    console.log("Bananas is not one of your favorite fruits.");
}
if (fav_fruits.includes('kiwi')) {
    console.log("You really like kiwi!");
}
else {
    console.log("Kiwi is not one of your favorite fruits.");
}

// Question 30
let userNames: string[] = ['Admin', 'Rameez', 'Rabbi', 'Yamman', 'Taswwor'];

for (let userName of userNames) {
    if (userName == 'Admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${userName}, thank you for logging in again.`);
    }
}

// Question 31
userNames = ['Admin', 'Rameez', 'Rabbi', 'Yamman', 'Taswwor'];
for (let i = userNames.length; i > 0; i--) {
    userNames.pop()
}
if (userNames.length > 0) {
    for (let _names of userNames) {
        if (_names == "Admin") {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log(`Hello ${_names}, thank you for logging in again.`);
        }
    }
}
else {
    console.log("We need to find some users");
}

// Question 32
let current_users: string[] = ['Ameen Alam', 'Rameez', 'Rabbi', 'Yamman', 'Taswwor'];
let new_users: string[] = ['Taswwor', 'Eric', 'Ramzy', 'Yamman', 'Okasha-Aijaz'];

for (let newUser of new_users) {
    if (current_users.some(user => user.toLowerCase() === newUser.toLowerCase())) {
        console.log(`The user name ${newUser} is not available. please try something new`);
    }
    else {
        console.log(`The user name ${newUser} is available`);
    }
}

// Question 33
let numbers: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {

    let ordinal: string;

    if (numbers[i] === 1) {
        ordinal = "st";
    }
    else if (numbers[i] === 2) {
        ordinal = "nd";
    }
    else if (numbers[i] === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log(`${numbers[i]}${ordinal}`);
}

// Question 34
let fav_pizzas: string[] = ['Cheese Pizza', 'Pepperoni pizza', 'Afghani tikka burst pizza'];

for (let pizza of fav_pizzas) {
    console.log(`I like ${pizza}`);
}
console.log('i really love pizza');

// Question 35
let petAnimal: string[] = ['Dog', 'Cat', 'Rabbit'];
for (let i = 0; i < petAnimal.length; i++) {
    console.log(petAnimal[i]);
}
for (let animal of petAnimal) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log('\n All three animals are commonly domesticated, kept as pets in households around the world. They are known for their companionship and play a significant role in human lives as beloved pets.');

// Question 36
function makeShirt(size: string, text: string): void {
    console.log(`\n The shirt size is ${size} and the message on it is ${text}`);
}
makeShirt('Medium', 'ASSALAM O ALAIKUM Javascript');

// Question 37
function make_Shirt(size: string = 'Large', text: string = 'I love Typescript'): void {
    console.log(`\n Make the shirt in size in ${size} and have message ${text}`);
}
make_Shirt()
make_Shirt('Medium', 'Assalam o alaikum TypeScript');

// Question 38
function describeCity(city: string, Country: string = 'pakistan!'): void {
    console.log(`\n The city ${city} is in ${Country} `);
}
describeCity('Karachi');
describeCity('Islamabad', 'Pakistan!');
describeCity('Istanbul', 'Turkey!');

// Question 39
function city_country(city: string = "Karachi", country: string = "Pakistan") {
    console.log(`"${city},${country}"`)
}
city_country()
city_country('Malacca', 'Malaysia');
city_country("Madina and Makkah", "Saudi Arabia");

// Question 40
function makeAlbum(artName: string, album_title: string, tracks?: Number): Record<string, any> {
    let album: Record<string, any> = {
        artName: artName,
        album_title: album_title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

let album1 = makeAlbum('Artist1', 'Album1');
let album2 = makeAlbum('Artist2', 'Album2', 17);
let album3 = makeAlbum('Artist3', 'Album3');
let album4 = makeAlbum('Artist4', 'Album4', 26);// Example with tracks parameter

console.log("Album 1:", album1);
console.log("Album 2:", album2);
console.log("Album 3:", album3);
console.log("Album 4:", album4);

// Question 41
function showMagician(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicainNames: string[] = ['Mahdi Moudini', 'Issy Simpson', 'Rahat Hossain', 'Ahmed El-Bayoumi'];
showMagician(magicainNames);

// Question 42
console.log('\t \n Modify the programm by adding "the Great" to each magicians name');
function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => magician + " " + "the Great!");
}

function show_magician(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magician_names: string[] = ['\n' + 'Mahdi Moudini', 'Issy Simpson', 'Rahat Hossain', 'Ahmed El-Bayoumi'];
show_magician(magician_names);

let greatMagicians: string[] = makeGreat(magician_names);

console.log("\n Magicians after adding 'the Great':");
show_magician(greatMagicians);

// Question 43
function makeGreatMagician(magicians: string[]): string[] {
    return magicians.map(magician => magician + " " + "the Great!");
}

function showOfMagician(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicianNames: string[] = ['\n' + 'Mahdi Moudini', 'Issy Simpson', 'Rahat Hossain', 'Ahmed El-Bayoumi'];
let great_magicians: string[] = makeGreatMagician(magician_names);
showOfMagician(magician_names);

console.log("\n Magicians after adding 'the Great':");
showOfMagician(greatMagicians);

const unchangedArray = magicainNames.slice();
const makeGreatUncahnged = makeGreatMagician(unchangedArray);
showOfMagician(unchangedArray);
showOfMagician(makeGreatUncahnged);

// Question 44
function make_sandwich(...items: string[]): void {
    console.log('Your sandwich is empty, We have add the following ingredients to the sandwich');
    for (let item of items) {
        console.log(`- ${item}`);
    }
}
make_sandwich('Bread', 'Salad');
make_sandwich('Cheese', 'Ketchup', 'Mustard');

// Question 45
function make_car(manufacturer: string, modelNames: string, carInfo: { [key: string]: any }): { [key: string]: any } {
    carInfo['manufacturer'] = manufacturer;
    carInfo['model Name'] = modelNames;
    return carInfo;
}

let tcars = make_car('Tesla', 'model x', { color: 'Black', towPackage: true });
console.log(tcars);