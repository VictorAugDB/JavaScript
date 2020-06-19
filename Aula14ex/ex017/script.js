function tabuada(){
    var num = document.getElementById('txtNum')
    var tab = document.getElementById('selTab')

    if(num.value.length == 0){
        window.alert('[ERRO] Por favor Digite um número')
    }else{
            var n = num.valueAsNumber
            var c = 1
            tab.innerHTML = ''
            while(c <= 10){
                var item = document.createElement('option')
                item.text = `${n} X ${c} = ${n*c}`
                item.value = `tab${c}`
                tab.appendChild(item)
                c++
            }
        }
}
