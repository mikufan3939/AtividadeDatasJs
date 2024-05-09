# AtividadeDatasJs
Atividade de front end sobre datas.

## 1 - Função que receba dois parâmetros Date e seja de capaz de retornar o parâmetro maior
  **function compararData (data1, data2){<br/>
    if(data1.getTime()>data2.getTime()){{<br/>
        return data1;{<br/>
    }{<br/>
    return data2;{<br/>
}{<br/>**

  A função compararData recebe dois parâmetros objetos do tipo "Date", assim podemos comparar os valores de "data1.getTime()" e "data2.getTime()", métodos que retornam o tempo decorrido, em milisegundos, desde 1º de Janeiro de 1970. Assim, podemos comparar os valores e retornar o maior.

## 2 - Crie uma função que recebe dois parâmetros Date e que calcule o intervalo entre as datas. O primeiro parâmetro sempre deverá ser mais antigo que osegundo parâmetro. A função deve validar esse caso. 
 **function intervaloData(data1, data2){<br/>
    if(data1.getTime()>=data2.getTime()){<br/>
        alert("Primeira data deve ser mais antiga!");<br/>
        return false;<br/>
    }<br/>
    return (data2.getTime()-data1.getTime())/1000;<br/>
}<br/>**

 A função intervaloData recebe dois parâmetros objetos do tipo "Date", assim podemos comparar os valores, e validar que a primeira data seja mais antiga. Assim podemos retornar a diferença em milisegundos da "data2" e da "data1" e retornar esse valor convertido para segundos.

 ## 3 - Crie uma função que retorne a data atual no seguinte padrão: hora:minuto - dia/mês/ano.
**function converterData(dataAtual){<br/>
    let ano=(dataAtual.getFullYear()).toString();<br/>
    let mes=(dataAtual.getMonth()+1).toString();<br/>
    let dia=(dataAtual.getDate()).toString();<br/>
    let horas=(dataAtual.getHours()).toString();<br/>
    let minutos=(dataAtual.getMinutes()).toString();<br/>
    console.log(mes.length);<br/>**
    **if(mes.length<2){<br/>
        mes="0"+mes;<br/>
    }<br/>
    if(dia.length<2){<br/>
        dia="0"+dia;<br/>
    }<br/>
    if(horas.length<2){<br/>
        horas="0"+horas;<br/>
    }<br/>
    if(minutos.length<2){<br/>
        minutos="0"+minutos;<br/>
    }<br/>**
    
    **let novaData=`${horas}:${minutos} - ${dia}/${mes}/${ano}`;<br/>
    return novaData;<br/>
}<br/>**

 A função converterData, recebe um parâmetro dataAtual, que neste caso é um objeto "new Date()" que retorna um objeto Date com a data atualizada, assim, são utilizados vários métodos para isolar as diferentes propriedades da data (mês, ano, dia, etc.), após isso são realizados vários estruturas condicionas "if" para verificar e adicionar um "0" no começo de números com um só algarismo, por fim é construída e retornada a string no formato solicitado.
