# AtividadeDatasJs
Atividade de front end sobre datas.

## 1 - Função que receba dois parâmetros Date e seja de capaz de retornar o parâmetro maior
  **function compararData (data1, data2){
    if(data1.getTime()>data2.getTime()){
        return data1;
    }
    return data2;
}**

  A função compararData recebe dois parâmetros objetos do tipo "Date", assim podemos comparar os valores de "data1.getTime()" e "data2.getTime()", métodos que retornam o tempo decorrido, em milisegundos, desde 1º de Janeiro de 1970. Assim, podemos comparar os valores e retornar o maior.
