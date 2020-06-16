function verificar(){
    var data = new Date
    var anoAtual = data.getFullYear()
    var anoD = document.getElementById('txtdataNasc')
    var res = document.getElementById('res')
    if(anoD.value.length == 0 || anoD.value >= anoAtual){
        res.innerHTML = '[ERRO] Verifique os dados, há algo errado!'
    } else{
        var fsex = document.getElementsByName('rdbSexo')
        idade = anoAtual - Number(anoD.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'homemCrianca.jpg')
            } else if(idade < 21){
                img.setAttribute('src', 'homemAdolescente.jpg')
            } else if(idade < 60){
                img.setAttribute('src','homemAdulto.jpg')
            } else {
                img.setAttribute('src', 'idoso.jpg')
            }
        } else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'mulherCrianca.jpg')
            } else if(idade < 21){
                img.setAttribute('src', 'mulherAdolescente.jpg')
            } else if(idade < 60){
                img.setAttribute('src','mulherAdulta.jpg')
            } else {
                img.setAttribute('src', 'idosa.jpg')
            }       
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}