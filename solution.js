// Create your solutions here


//Ex.1

console.log("----- Ex.1 -----");


const nameOfCity = (str1) => {

  let str1Lowcase = str1.toLowerCase();
      
    if (str1Lowcase.startsWith("los")=== true || str1Lowcase.startsWith("new")=== true ){ return str1; 
    } else { return "The city name does not begin with Los or New "; }

    }

    console.log(nameOfCity('New York'));

    console.log(nameOfCity('newark'));

    console.log(nameOfCity('London'));


//Ex.2

console.log("----- Ex.2 -----");

const isDivisible = (int1) => {
  if (int1 % 100 === 0) { 
    return true; 
  } else { return false; };


}

console.log(isDivisible(1));

console.log(isDivisible(1000));

console.log(isDivisible(100));


//Ex.3

console.log("----- Ex.3 -----");


const isRaining = (bool) => (bool === true) ?  "_wet day - you need an umbrella_" :  "_dry day - leave your umbrella at home_";


console.log(isRaining(true));

console.log(isRaining(false));


// Loops

//Ex.4 Sequence

console.log("----- Ex.4 -----");

const geometricalSequence = (num2) => {
  
  let emptyArr = [];

  for (let i = 0; i < num2; i++) {
    let sequence = Math.pow(2, i);
    emptyArr += sequence + " ";

    
    
}

  return emptyArr.toString();
}

console.log(geometricalSequence(5));

console.log(geometricalSequence(10));


//Ex.5 Multiples

console.log("----- Ex.5 -----");


const multiplesOfThree = (num3) => {
  
  let emptyArr2 = [];

  for (let i = 1; i <= num3; i++) {
    let sequence2 = (3 * i)  ;
    emptyArr2 += sequence2 + " ";

    
    
}

  return emptyArr2.toString();
}


console.log(multiplesOfThree(5));

console.log(multiplesOfThree(10));


//Ex.6 Math 

console.log("----- Ex.6 -----");

const powerOf = (pow) => { 
  let result = Math.pow(pow, pow);

  return result; 
};

console.log(powerOf(3));

console.log(powerOf(4));


//Ex.7 Problem Solving How many?


console.log("----- Ex.7 -----");


const vowels = ["a", "e", "i", "o", "u"]

const  vowelCount = (str5) => { 

    
    let count = 0;

    for (let letter of str5.toLowerCase()) {
      if (vowels.includes(letter)) {
        count++;
      }
      
        
      
    }

    return count;
}

console.log(vowelCount("hello"));

console.log(vowelCount("test"));

console.log(vowelCount("fbw"));
