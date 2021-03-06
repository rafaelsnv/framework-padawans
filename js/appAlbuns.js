// Carregar posts no index

let inicio = 0;
let fim = 5;

function exibeAlbuns () {

    let sectionConteudoAlbuns = document.getElementById('conteudoAlbuns');
    let texto = sectionConteudoAlbuns.innerHTML;

    // Montar texto HTML dos filmes
    let dados = JSON.parse (this.responseText);

    for (inicio; inicio < fim; inicio++) {
        let post = dados[inicio];
        texto = texto + `
          <tr>
            <th scope="row">${post.userId}</th>
            <td>${post.id}</td>
            <td>${post.title}</td>
          </tr>
        `;
    };

    inicio = fim;
    fim += 5;
    
    // Preencher a tabela com o texto HTML
    sectionConteudoAlbuns.innerHTML = texto;
}

function carregarAlbuns () {

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeAlbuns;
    xhr.open ('GET', `https://jsonplaceholder.typicode.com/albums`);
    xhr.send ();
}

document.getElementById ('btnMaisAlbuns').addEventListener ('click', carregarAlbuns);
document.addEventListener('load' ,carregarAlbuns());
