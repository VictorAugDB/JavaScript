var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora}:00 horas.`)

if (hora >= 6 && hora < 12){
    console.log('Bom Dia!')
} else {
    if (hora > 11 && hora < 19 ){
        console.log('Boa Tarde!!')
    }else {
        if (hora > 19){
            console.log('Boa Noite!!!')
        } else{
            console.log('Ta acordado ainda ?')
        }
    }
}