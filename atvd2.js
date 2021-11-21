function questao1(){
    var numeros =[25, 23, 11, 55, 30,  6, 4, 21, 34, 89, 56];
    numeros.sort();
    console.log(numeros);
  }
  
  function questao2(){
    var times = ["Santos", "Sport", "Santa Cruz", "Vasco", "Chapecó"];
    times.push("Flamengo");
    for(let i = 0; i < times.length; i++){
    console.log(times[i]);
    }
    times.shift();
    console.log("times: " + times);
    times.unshift("Palmeiras"); 
    console.log(times);
    times.push("Grêmio");
    for(let i = 0; i < times.length; i++){
    console.log(times[i]);
    }
    times.unshift("São Paulo","Santos"); 
    console.log(times);
    console.log("Quantidade de times: " + times.length);
    times.pop();
    console.log(times);
    times.sort();
    console.log(times);
  }
  
  function questao3(){
    var atividades = ["acordar", "tomar café", "estudar", "almoçar", "jogar", "jantar", "dormir"];
    console.log(atividades.reverse());
    console.log(atividades[3], atividades[6]);
    console.log(atividades.join(" - "));
    var atividadesFavoritas = ["escutar musica", "pintar"];
    var juntar = atividades.concat(atividadesFavoritas);
    console.log(juntar);
  }
  
  function questao4(){
    var cidades = ["Recife", "Salvador", "Piedade", "Candeias", "Prazeres"];
    cidades.shift();
    console.log("cidades: " + cidades);
    cidades.pop();
    console.log(cidades);
    cidades.sort();
    console.log(cidades);
  }