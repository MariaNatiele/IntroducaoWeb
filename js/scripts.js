
function resposta(){
    
    let Q1 = document.getElementById("p1").value;
    let Q2 = document.getElementById("p2").value;
    let Q3 = document.getElementById("p3").value;
    
    let R1 = document.getElementById("r1").checked;
    let R2 = document.getElementById("r2").checked;
    let R3 = document.getElementById("r3").checked;
    let R4 = document.getElementById("r4").checked;
    let R5 = document.getElementById("r5").checked;



   let teste = (Q1) && (Q2) && (Q3);
    let teste2 = (R1 == true) || (R2 == true) || (R3 == true) || (R4 == true) || (R5 == true);
    
    if ((teste) && (teste2)){
            envia();
    }else{
        alert("Preencha todos os campos!");
       
    }
    
    
}


function envia(){
    let primeira = document.getElementById("p1").value;
    document.getElementById("q1").innerHTML = primeira;

    let segunda = document.getElementById("p2").value;
    document.getElementById("q2").innerHTML = segunda;

    let teceira = document.getElementById("p3").value;
    document.getElementById("q3").innerHTML = teceira;

    quarta();
    
}

function quarta(){
       let p1 = document.getElementById("r1").checked;
       let p2 = document.getElementById("r2").checked;
       let p3 = document.getElementById("r3").checked;
       let p4 = document.getElementById("r4").checked;
       let p5 = document.getElementById("r5").checked;
      
        
    if(p1 == true){
        document.getElementById("q4").innerHTML = "Estou Invisível";
       
    }
    if(p2 == true){
        document.getElementById("q4").innerHTML = "Caminhando no passo de tartaruga";
       
    }
    if(p3 == true){
        document.getElementById("q4").innerHTML = "Melhor que ontem e pior que amanhã";
       
    }
    if(p4 == true){
        document.getElementById("q4").innerHTML = "Minha displina é o meu guia";
       
    }
    if(p5 == true){
        document.getElementById("q4").innerHTML = "O/A todo(a) Poderosa";
       
    }
    
    
    
}
