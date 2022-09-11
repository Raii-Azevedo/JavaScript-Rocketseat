/*DEMONSTRANDO O COMPORTAMENTO DO VAR DENTRO DO ESCOPO*/
var serie = "friends";

function x (){
    /*Bloco*/{
        console.log(serie)
    }
}

/* o escopo global é o objeto WINDOW */