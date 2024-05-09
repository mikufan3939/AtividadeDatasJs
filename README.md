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
