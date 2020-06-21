var num = document.getElementById('txtNum')
var lista = document.getElementById('flista')
var v = []

/*
function maior(){
    var ma = 0

    for(i = 0; i < v.length; i++){
        if(v[i] > ma){
            ma = v[i]
        }
    }
    return ma
}
function menor(){
    var me = 999

    for(i = 0; i < v.length; i++){
        if(v[i] < me){
            me = v[i]
        }        
    }
    return me
}



function soma(){
    var soma = 0
    for(i = 0; i < v.length;i++){
        soma += v[i]
    }
    return soma
}

function media(){
    var soma = 0
    for(i = 0; i < v.length;i++){
        soma += v[i]
    }
    var media = soma / i
    return media
}
*/ //Essas Funções, o vetor será percorrido para cada vez que chamar a função, logo decidi fazer na própria função finalizar.

function verifica(c){
    var ct = 0
    for(i = 0; i < v.length; i++){
        if(v[i] == c){
            ct++
        }
    }
    if(ct > 0){
        return 'true'
    }else{
        return 'false'
    }
} // a função verifica() também poderia ser feita apartir do método indexOf() que procura se o item passado no parâmetro existe no vetor
//ex:
/*

function verifica(n, v){ // n é o número v é o vetor
    if(v.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

//Também no exemplo do Professor Guanabara ele fez uma função para verificar se é um número de 1 a 100:

function isNumber(n){
    if(number(n) > 0 && number(n) <= 100){
        return true
    }else{
        return false
    } // isso irá retornar true caso o valor esteja entre 1 e 100, logo eu teria que inverter o meu condicional para retornar o erro no else da função adicionar().
}

*/

function adicionar(){
    var n = num.valueAsNumber
    res.innerHTML = ''
    if(num.value.length == 0 || n > 100 || n <= 0){
        alert('[ERRO] Digite um número de 1 a 100')
    }else if(v.length == 0 || verifica(n) == 'false'){
            var item = document.createElement('option')
            item.text = `Valor ${n} Adicionado`
            item.value = `lista${n}`
            lista.appendChild(item)
            v.push(n)
    }else{
        alert('O número digitado já existe na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    let ma = v[0]
    let me = v[0]
    let soma = 0
    let media = 0
    for(let pos in v){
        soma += v[pos]
        if(v[pos] > ma){
            ma = v[pos]
        }
        if(v[pos] < me){
            me = v[pos]
        }
    }
    media = soma / v.length
    res.innerHTML = `<p>Ao todo temos ${v.length} números cadastrados!</p>`
    res.innerHTML += `<p>O menor valor é: ${me}</p>`
    res.innerHTML += `<p>O maior valor é: ${ma}</p>`
    res.innerHTML += `<p>A soma dos elementos da lista é: ${soma}</p>`
    res.innerHTML += `<p>A média dos os elementos da lista é: ${media}</p>`
}