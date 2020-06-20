//Recursividade

function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))

/*

Função recursiva (uma função que chama a si mesma dentro do bloco)

Ordem de execução 

5 * fatorial (4)
4 * fatorial (3)
3 * fatorial (2)
2 * fatorial (1)
Fatorial de 1 retorna 1
2 * 1
3 * 2
4 * 6
5 * 24 = 120

*/