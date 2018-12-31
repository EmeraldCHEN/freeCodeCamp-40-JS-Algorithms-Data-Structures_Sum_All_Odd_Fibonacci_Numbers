function sumFibs(num) {
    let arr = [1,1];
    let i = 1;
    while(arr[i] <= num){     
        i++;
        arr[i] = arr[i-1] + arr[i-2];
        arr.concat(arr[i]);
    }
   return arr.filter(x => (x % 2 === 1)).reduce((a,b) => a+b) - arr[arr.length-1];
}
sumFibs(1000); // return 1785
