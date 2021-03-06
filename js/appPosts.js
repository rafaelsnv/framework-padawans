// Carregar posts no index

let inicio = 0;
let fim = 5;

function exibePosts () {

    let sectionConteudoPostagens = document.getElementById('conteudoPostagens');
    let texto = sectionConteudoPostagens.innerHTML;

    // Montar texto HTML dos filmes
    let dados = JSON.parse (this.responseText);

    for (inicio; inicio < fim; inicio++) {
        let post = dados[inicio];
        texto = texto + `
          <tr>
            <th scope="row">${post.userId}</th>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
          </tr>
        `;
    };

    inicio = fim;
    fim += 5;
    
    // Preencher a tabela com o texto HTML
    sectionConteudoPostagens.innerHTML = texto;
}

function carregarPostagens () {

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibePosts;
    xhr.open ('GET', `https://jsonplaceholder.typicode.com/posts`);
    xhr.send ();
}

document.getElementById ('btnMaisPosts').addEventListener ('click', carregarPostagens);
document.addEventListener('load' ,carregarPostagens());
