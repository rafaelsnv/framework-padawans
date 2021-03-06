// Carregar posts no index

let inicio = 0;
let fim = 5;

function exibeTodos () {

    let sectionConteudoPostagens = document.getElementById('conteudoTodos');
    let texto = sectionConteudoPostagens.innerHTML;

    // Montar texto HTML dos filmes
    let dados = JSON.parse (this.responseText);
    console.log(dados);

    for (inicio; inicio < fim; inicio++) {
        let post = dados[inicio];
        if (post.completed == true){
          post.completed = '<i class="fas fa-check-circle"></i>';
        }
        else{
          post.completed = '<i class="fas fa-times-circle"></i>';
        }
        texto = texto + `
          <tr>
            <th scope="row">${post.userId}</th>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.completed}</td>
          </tr>
        `;
    };

    inicio = fim;
    fim += 5;
    
    // Preencher a tabela com o texto HTML
    sectionConteudoPostagens.innerHTML = texto;
}

function carregarTodos () {

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeTodos;
    xhr.open ('GET', `https://jsonplaceholder.typicode.com/todos`);
    xhr.send ();
}

document.getElementById ('btnMaisToDos').addEventListener ('click', carregarTodos);
document.addEventListener('load' ,carregarTodos());
