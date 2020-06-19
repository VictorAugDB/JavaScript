valores = [3, 2, 8, 9, 5, 7, 1]
pos = valores.indexOf(6)
valores.sort()

if(pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor está na posição ${pos}`)
}

for(let pos in valores){
    console.log(`A Posição ${pos} Contém o valor: ${valores[pos]}`)
}

/*
console.log(`O valor 7 se encontra na posição: ${valores.indexOf(7)}`) // Procura se existe o valor 7 dentro do vetor e retorna sua posição
console.log(`O valor 6 se encontra na posição: ${valores.indexOf(6)}`) // Como não existe o número 3 retorna -1
*/

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])
*/

/*
for(let pos = 0;pos<valores.length;pos++){
    console.log(`Posição: ${pos} contém o valor ${valores[pos]}`)
}
Maneira tradicional de mostrar um vetor na tela
*/

//Se lê Para posição dentro/em de valores