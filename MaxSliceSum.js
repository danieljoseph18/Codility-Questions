function solution(A) {
    let sliceSum = 0;
    let maxSlice = 0;
    if(A.length == 1){
        return A[0];
    }

    if(!A.some(a => a >= 0)){
        return (Math.max(...A));
    } else {
       for(let i=0; i<A.length; i++){
            sliceSum = Math.max(0, sliceSum + A[i]);
            maxSlice = Math.max(maxSlice, sliceSum);
        }
        return maxSlice; 
    }
}
