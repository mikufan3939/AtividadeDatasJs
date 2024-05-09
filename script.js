document.addEventListener("DOMContentLoaded", function(){
    let comparar=document.getElementById('comparar');
    let intervalo=document.getElementById('intervalo');
    let atual=document.getElementById('atual');

    comparar.addEventListener('click', function(){
        let data1=new Date(document.getElementById('data1').value);
        let data2=new Date (document.getElementById('data2').value);

        alert(`A data maior é: ${compararData(data1,data2)}`);
    });

    intervalo.addEventListener('click', function(){
        let data1=new Date(document.getElementById('data1').value);
        let data2=new Date (document.getElementById('data2').value);

        if(intervaloData(data1, data2)){
            alert(`O intervalo entre as datas é de: ${Math.trunc(intervaloData(data1, data2)/86400)} dias`);
        }
    });

    atual.addEventListener('click', function(){
        let dataAtual=new Date();
        let novaData=`${dataAtual.getHours()}:${dataAtual.getMinutes()} - ${dataAtual.getDate()}/${dataAtual.getMonth()+1}/${dataAtual.getFullYear()}`;
        console.log(dataAtual);
        alert(`A data atual é: ${novaData}`); 
    });
});

function compararData (data1, data2){
    if(data1.getTime()>data2.getTime()){
        return data1;
    }
    return data2;
}

function intervaloData(data1, data2){
    if(data1.getTime()>=data2.getTime()){
        alert("Primeira data deve ser mais antiga!");
        console.log("Teste1");
        return false;
    }
    console.log("Teste2");
    return (data2.getTime()-data1.getTime())/1000;
}