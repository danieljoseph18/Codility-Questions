function solution(N) {
    let factors = 0;
    let i; 
    if(N == 1){
        return 1
    }
    for(i=1; i*i<N; i++){
        if(N%i == 0){
            factors += 2; 
        }
        
    }
    if(i*i == N){
            factors +=1; 
        }
    return factors;
}
