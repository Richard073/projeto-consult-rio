let carros= [];

function adicionarCarros(){
    let inModelo= document.getElementById("inModelo");
    let inPreco= document.getElementById("inPreco");

    let modelo = inModelo.value;
    let preco = Number(inPreco.value);
    
    if(modelo === "" || preco === 0 || isNaN(preco)){
        alert("informe corretamente os dados");
        inModelo.focus();
        return;
    }

    carros.push({modelo: modelo, preco:preco});
    inModelo.value="";
    inPreco.value="";
    inModelo.focus();

    listarCarros();
}
let btAdicionar=document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCarros);

function listarCarros(){
    if(carros.length === 0){ //verifica se o arrey está vazio
        alert("Não há carros na lista");
        return;
    }
    let lista=""; //Concatenar lista de carros
    
    for(let i = 0; i < carros.length; i++){
        lista+= `${carros[i].modelo} - R$: ${carros[i].preco.toFixed(2)} \n`;
    }
    document.getElementById("outLista").textContent=lista;
}
let btListar=document.getElementById("btlistar");
btListar.addEventListener("click", listarCarros);

function filtrarCarros(){
    //faz filtragem do valor max a partir do prompt
    let maximo = Number(prompt("Qual o valor Máximo que deseja pagar"));
    if(maximo === 0 || isNaN(maximo)){
        return;
    }
    let lista="";
    //pecorre todos elementos do vetor
    for(let i=0; i<carros.length; i++){
        //verifica se o preco é inferior/ igual ao maximo
        if(carros[i].preco<=maximo){
            lista += `${carros[i].modelo} -R$: ${carros[i].preco.toFixed(2)} \n`;
        }
    }
    let outLista= document.getElementById("outLista"); //referencia a outLista
    if(lista ===""){
        outLista.textContent= `Não há carros com preço até R$ ${maximo.toFixed(2)}`;
    }else{
        outLista.textContent=`Carros até R$: ${maximo.toFixed(2)} \n-------------------------\n ${lista}`;
    }
}
let btFiltrar  = document.getElementById("btFiltrar");
btFiltrar.addEventListener("click", filtrarCarros);