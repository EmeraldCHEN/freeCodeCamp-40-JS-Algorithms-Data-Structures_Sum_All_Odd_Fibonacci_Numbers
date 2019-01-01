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





// Retrieved from 
