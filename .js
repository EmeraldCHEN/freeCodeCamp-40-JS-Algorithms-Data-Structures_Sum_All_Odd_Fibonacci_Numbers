/**************  Solution #1    ************************************************************************************/

function sumFibs(num) {
    let arr = [1,1];
    let i = 1;
    while(arr[i] <= num){     
        i++;
        arr[i] = arr[i-1] + arr[i-2];
        arr.concat(arr[i]); // if replacing the .concat() with .push() -> Error -> as .push() will mutate the original array (or object)
    }
   return arr.filter(x => (x % 2 === 1)).reduce((a,b) => (a+b)) - arr[arr.length-1];
}
sumFibs(1000); // return 1785



/**************  Solution #2    ************************************************************************************/

function sumFibs2(num) {
    let previousNum = 0;
    let currentNum = 1;
    let sum = 0;
    while(currentNum <= num){
        if(currentNum % 2 !== 0){ // Use the modulo operand to check if the current number is odd or even
            sum += currentNum;
        }
        // Complete the Fibonacci circle by rotating to get the next number and swap values after
        currentNum += previousNum;
        previousNum = currentNum - previousNum;       
    }
    return sum;
}


// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers/
