//if number of divisors is odd take the end number and multiply by 4
//odd means number is square as middle divisors opposite is itself
//to achieve O(sqrtN) complexity loop while i*i < N
//if i*i = N number is square and return 4 * number
//else return last index and N/last index

function solution(N) {
    let divisors = [];
    let size = 0;
    let length;
    let width;
    if(N == 1){
        return 4
    }
    let i = 1
    for(i; i*i< N; i++){
        if(N%i === 0){
            divisors.push(i);
            size +=1;
        }
        
    }
    if(i*i == N){
        return 4*i;
    }

    length = divisors[size-1];
    width = N/length;

    return 2*(length+width)

    
    
}
