let num = [5, 8, 2, 9, 3] //Cria um vetor de 4 posições
num.push(1) //Adiciona um valor ao vetor na posição 5
num.sort() //Organiza o vetor em ordem crescente
console.log(`Valores organizados em ordem crescente: ${num}`)
console.log(`O vetor tem ${num.length} Posições`)
console.log(`O primeiro valor do vetor é: ${num[0]}`)

for(let c=0;c<num.length;c++){
    console.log(`posição: ${c} valor: ${num[c]}`)
} // Mostrar dados por vetor

//OBS: O método sort deve ser colocar após a criação de dados para o vetor, pois caso seja colocada antes não irá organizar novamente