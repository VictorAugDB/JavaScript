
    function contar(){
    var inicio = document.getElementById('txtInicio')
    var fim = document.getElementById('txtFim')
    var passo = document.getElementById('txtPasso')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = ('Impossível Contar!')
        //alert('[ERRO] Faltam dados para preencher')
    }else{
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p == 0){
            alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if(f > i){
            for(c = i; c <= f; c += p){   
                res.innerHTML += `${c}👉`
            }
            res.innerHTML += `🛑`
        }else{
            for(c = i; c >= f; c -= p){
                res.innerHTML += `${c}👉`
            }
            res.innerHTML += `🛑`
        }
    }
}
