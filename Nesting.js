//use a stack array
//loop through the string
//when ever an "(" arrives add it to the top of the stack (increase size)
//then when an ")" arrives pop the stack to remove the "(" (decrease size)
//check at the end if the stack is empty, if it is return 1 else return 0

function solution(S) {
    let stack = [];
    let size = 0;
    //if length is odd it can't possibly be nested properly so return 0
    if(S.length%2 !== 0){
        return 0
    }

    for(let i=0; i< S.length; i++){
        if(S[i] === '('){
            stack.push('(');
            size +=1;
        } else if(S[i] === ')' && size !== 0){
            stack.pop();
            size -=1;
        }
    }

    if(size === 0){
        return 1
    } else {
        return 0
    }

}
