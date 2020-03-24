function calcular(){

    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    var operacao = document.getElementById('operacao').value;

    if(operacao == '+'){
        so = n1 + n2;
        document.getElementById('result').innerHTML = `O Resultado da soma é = ${so}`;
        document.getElementById('result').style.display = "block";
    }else if(operacao == '-'){  
        su = n1 - n2;
        document.getElementById('result').innerHTML = `O Resultado da subtração é = ${su}`;
        document.getElementById('result').style.display = "block";
    }else if(operacao == '*'){
        m = n1 * n2;
        document.getElementById('result').innerHTML = `O Resultado da multiplicação é = ${m}`;
        document.getElementById('result').style.display = "block";
    }else if(operacao == '/'){
        d = n1 / n2;
        document.getElementById('result').innerHTML = `O Resultado da divisão é = ${d}`;
        document.getElementById('result').style.display = "block";
    }
}
