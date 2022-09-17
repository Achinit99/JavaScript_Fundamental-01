/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

// Variable name conventions
let firstName = "Achini";
console.log(firstName);

year = 1997;
console.log(typeof year);

// Math Operators
const now = 2022;
const ageachini = now - 1999;
const ageavishka = now - 1995;
console.log(ageachini, ageavishka);
console.log(ageachini + ageavishka);

const First_N = "Ahinsa";
const Last_N = "Thathsarani";
console.log(First_N + " " + Last_N);

// Assigment Operators
let a = 10 + 5; // 15
a += 10; // a = a + 10 = 25
a *= 4; // a = a * 4 = 100
a++; // a = a + 1
a--; // a = a - 1
a--;
console.log(a);

// Comparison Operators
console.log(ageachini < ageavishka);  // >, <, >=, <=
console.log(ageavishka >= 18);

// Operator Precedence
let x, y;
x = y = 25 - 10 - 5; // x = 10, y = 10
console.log(x, y);

const birthYear = 2037;
const age_mom = birthYear - 1978;
const age_dad = birthYear - 1976;

const averageAge = age_mom + age_dad / 2;
console.log(age_mom, age_dad, averageAge);


// Coding Challenge
const massMark = 78;
const heightMark = 1.69;
const massJhone = 92;
const heightJhone = 1.76;

const BMLMark = massMark / heightMark ** 2;
const BMIJhone = massJhone / (heightJhone * heightJhone);
const markHigherBMI = BMLMark > BMIJhone;

console.log(BMLMark, BMIJhone, markHigherBMI); 

// String and Template
const firstName = "Achini";
const job = "teacher";
const birthYear = 1999;
const year = 2022;

const Achini = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(Achini);

const AchiniNew = `Im ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(AchiniNew);

console.log("Just a regular string...");

console.log(" String with \n multiple \n lines"); 


// _if_else Statement
const age = 15;

if (age >= 18)
{
    console.log("Achini can start driving license");
}
else
{
    const yearsLeft = 18 - age;
    console.log(`Achini is too young. Wait another ${ yearsLeft} years :)`);
}

const birthYear = 1998;
let century;
if (birthYear <= 2000)
{
    century = 20;
}
else
{
    century = 21;
}
console.log(century);  


// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23),23);


// Type Conversion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "3");
console.log("23" > "18");
console.log("23" + "44"); // + sing is not work in string --> 2344   
*/

// Boolean --> true And false Values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Ahinsa"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money)
{
    console.log("Don't spend it all ;)");
}
else
{
    console.log("You should get a job!");
}

let height;
if (height)
{
    console.log("YAY! Heiht is defined");
}
else
{
    console.log("Height is UNDEFINED");
}