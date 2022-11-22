function mysteryScoping1() {
   var x = 'out of block';
   if (true) {
     var x = 'in block';  
     console.log(x);
   }
   console.log(x);
}
  
mysteryScoping1()
console.log('--------');


function mysteryScoping2() {
   const x = 'out of block';
   if (true) {
     const x = 'in block';  
     console.log(x);
   }
   console.log(x);
}

mysteryScoping2()
console.log('--------');

function mysteryScoping3() {
   const x = 'out of block';
   if (true) {
     const x = 'in block';  
     console.log(x);
   }
   console.log(x);
}

mysteryScoping3()
console.log('--------');


function mysteryScoping4() {
   let x = 'out of block';
   if (true) {
     let x = 'in block';  
     console.log(x);
   }
   console.log(x);
}

mysteryScoping4()
console.log('--------');
 
function mysteryScoping5() {
   let x = 'out of block';
   if (true) {
     let x = 'in block';  
     console.log(x);
   }
//    let x = 'out of block again';
   console.log(x);
}

mysteryScoping5()
console.log('--------');



function madLib(verb, adj, noun) {
    return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`;
}

console.log(madLib('make', 'best', 'guac')); // "We shall MAKE the BEST GUAC."


function isSubString(sentence, target) {
    let answer = sentence.includes(target);
    console.log(answer)
}

console.log(isSubString("time to program", "time"));
//true
console.log(isSubString("Jump for joy", "joys"));
//false

function fizzBuzz(array) {
    const fizz = [];
    array.forEach(num => {
        if ((num % 3 === 0) || (num % 5 === 0)) {
            fizz.push(num);
        }
    });
    return fizz;
}


console.log(fizzBuzz([2, 3, 5, 15, 50, 57, 75]));
function isPrime(num) {
    if (num < 2) {
        return false;
    };
    if (num === 2) {
        return true;
    };
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
            break;
        }
    }
    return true;
}

console.log(isPrime(2));
//true
console.log(isPrime(10));
//false

console.log(isPrime(15485863));
//true
console.log(isPrime(3548563));
//false

function sumOfNPrimes(num) {
    var sum = 0;
    var j = 0;
    for (let i = 2; j < num; i++) {
        if (isPrime(i)) {
            sum += i;
            j += 1;
        }
    }
    return sum;
}
console.log(sumOfNPrimes(0));
 //0
console.log(sumOfNPrimes(1));
//2
console.log(sumOfNPrimes(4));
//17