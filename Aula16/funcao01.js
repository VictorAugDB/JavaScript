function parImp(n){
    if(n % 2 == 0){
        return 'Par'
    }else{
        return 'Impar'
    }
}

var res = parImp(1000)
console.log(res)