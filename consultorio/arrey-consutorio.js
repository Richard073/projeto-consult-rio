let pacientes=[];  //declara variavel global
function adicionarPaciente(){
    let inPaciente= document.getElementById("inPaciente");
    let outLista= document.getElementById("outLista");
    
    let nome= inPaciente.value;
     
    if(nome == ""){
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }
    pacientes.push(nome); //inserir nome no arrey

    let lista=""; 

    for(i=0;i<pacientes.length;i++){ //pecorre a repeticao dos pacientes
        lista+=(i+1) +". " + pacientes[i]+ "\n"; 
    }
    outLista.textContent=lista;
    inPaciente.value="";
    inPaciente.focus();
}

let btAdicionar=document.getElementById("btAdicionar");
btAdicionar.addEventListener("click",adicionarPaciente);

function adicionarUrgente(){
    let inPaciente= document.getElementById("inPaciente");
    let outLista= document.getElementById("outLista");
    
    let nome= inPaciente.value;
     
    if(nome == ""){
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }
    pacientes.unshift(nome); //insere nome no inicio do arrey

    let lista="";
    for(i=0;i<pacientes.length;i++){
        lista+=(i+1) +". " + pacientes[i]+ "\n";
    }

    outLista.textContent=lista;
    inPaciente.value="";
    inPaciente.focus();
}

let btUrgencia=document.getElementById("btUrgencia");
btUrgencia.addEventListener("click",adicionarUrgente);

function atenderPaciente(){

    if(pacientes.length == 0){
        alert("Não há paciente em espera");
        inPaciente.focus();
        return;
    }
    let outAtendimento= document.getElementById("outAtendimento");
    let outLista=document.getElementById("outLista");

    let atender= pacientes.shift(); // retira o nome do inicio da lista 

    outAtendimento.textContent=atender;

    let lista= "";
    for(i=0; i<pacientes.length; i++){
        lista+=(i+1) + ". "+ pacientes[i]+ "\n";
    }
    outLista.textContent=lista;
}
let btAtender= document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);


