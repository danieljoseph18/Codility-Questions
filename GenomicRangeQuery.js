//time complexity O(N+M)

function solution(S, P, Q) {
    let returnArray = [];
    for(let i=0; i<P.length; i++){
        let slice;
        let start = P[i];
        //end exclusive so must add 1 to i
        let end = Q[i]+1;
        if(end === "undefined"){
            slice = S.slice(start);
        } else {
            slice = S.slice(start, end); 
        }
        if(slice.includes("A")){
            returnArray.push(1); 
        } else if(slice.includes("C")){
            returnArray.push(2);
        } else if(slice.includes("G")){
            returnArray.push(3)
        } else if(slice.includes("T")){
            returnArray.push(4)
        }
    }
    return returnArray;
}
