# Scope

* Escopo determina a visibilidade de alguma variável no JS.

# Block Statment
É uma declaração

{
    Aqui tem o conteúdo que quiser dentro do bloco
};

## var
É global (e também local) e poderá funcionar fora de um escopo

console.log('>Existe x antes do bloco?', x)

{
    var x  = 0
}

console.log('Existe x depois do bloco?', x)
