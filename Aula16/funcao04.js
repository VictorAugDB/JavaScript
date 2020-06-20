function fatorial(num){
    let fat = 1
    for(c = num; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(10))

/*
let fat = function(num){
    let a = num
    while(a > 1){
        num = num * (a-1)
        a--
    }
    return num
}
console.log(fat(10))

Uma forma de ser feita
*/