document.addEventListener("DOMContentLoaded", function(){
    let comparar=document.getElementById('comparar');
    let intervalo=document.getElementById('intervalo');
    let atual=document.getElementById('atual');

    comparar.addEventListener('click', function(){
        let data1=new Date(document.getElementById('data1').value);
        let data2=new Date (document.getElementById('data2').value);
        if(!validar(data1,data2)){
            alert(`A data maior é: ${compararData(data1,data2)}`);
        }
    });

    intervalo.addEventListener('click', function(){
        let data1=new Date(document.getElementById('data1').value);
        let data2=new Date (document.getElementById('data2').value);
        if(!validar(data1,data2)){
            if(intervaloData(data1, data2)){
                alert(`O intervalo entre as datas é de: ${Math.trunc(intervaloData(data1, data2)/86400)} dias`);
            }
        }
    });

    atual.addEventListener('click', function(){
        let dataAtual=new Date();
        alert(`A data atual é: ${converterData(dataAtual)}`); 
    });
});

function compararData (data1, data2){
    if(data1.getTime()>data2.getTime()){
        return converterData(data1);
    }
    else if(data1.getTime()==data2.getTime()){
        let igual="As datas são iguais."
        return igual;
    }
    return converterData(data2);
}

function intervaloData(data1, data2){
    if(data1.getTime()>=data2.getTime()){
        alert("Primeira data deve ser mais antiga!");
        return false;
    }
    return (data2.getTime()-data1.getTime())/1000;
}

function validar(data1, data2){
    if(isNaN(data1) || isNaN(data2)){
        alert("Escolha uma data!");
        return true;
    }
    return false;
}

function converterData(dataAtual){
    let ano=(dataAtual.getFullYear()).toString();
    let mes=(dataAtual.getMonth()+1).toString();
    let dia=(dataAtual.getDate()).toString();
    let horas=(dataAtual.getHours()).toString();
    let minutos=(dataAtual.getMinutes()).toString();
    console.log(mes.length);
    if(mes.length<2){
        mes="0"+mes;
    }
    if(dia.length<2){
        dia="0"+dia;
    }
    if(horas.length<2){
        horas="0"+horas;
    }
    if(minutos.length<2){
        minutos="0"+minutos;
    }
    
    let novaData=`${horas}:${minutos} - ${dia}/${mes}/${ano}`;
    return novaData;
}
