function addAluno(){
    let Alunos = [{
        "matricula": "14433",
        "nome": "Breno Vaz Borges",
        "datanasc": "12/06/2005",
        "curso": "Informática",
        "genero":"masculino"
    },

    {
        "matricula": "14466",
        "nome": "Gabriel Duarte",
        "datanasc": "08/10/2007",
        "curso": "Informática",
        "genero":"masculino"
    },

    {
        "matricula": "12335",
        "nome": "Ruan Cauan",
        "datanasc": "08/01/2005",
        "curso": "Informática",
        "genero":"masculino"
    },

    {
        "matricula": "13454",
        "nome": "Nicholas Pietro",
        "datanasc": "07/11/2006",
        "curso": "Informática",
        "genero":"masculino"
    },

    {
        "matricula": "13512",
        "nome": "Emilly Francine",
        "datanasc": "29/08/2006",
        "curso": "Informática",
        "genero":"feminino"
    }
];

    let aluno = { 

        "matricula": document.getElementById("matricula").value,
        "nome": document.getElementById("nome").value,
        "datanasc": document.getElementById("datanasc").value,
        "curso": document.getElementById("curso").value,
        "genero": document.getElementById("genero").value
    }

};