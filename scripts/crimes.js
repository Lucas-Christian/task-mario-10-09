// Lista de notícias de crimes
const noticiasCrimes = [
    {
        titulo: "Polícia prende empresário suspeito de atirar e matar gari que fazia coleta de lixos",
        descricao: "Crime aconteceu no bairro Vista Alegre, na Região Oeste da capital. Homem dirigia um carro elétrico, modelo BYD, de cor cinza, quando atirou na vítima.",
        imagem: "https://s2-g1.glbimg.com/R0PQHGN6ojnGpltifVddEcSeQKs=/0x0:1030x579/540x304/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/Z/J/KjA4NdQteZNUo9UfcAYw/1754942753232443.jpg",
        link: "https://g1.globo.com/mg/minas-gerais/noticia/2025/08/11/policia-prende-homem-suspeito-de-atirar-e-matar-gari-apos-discussao-de-transito.ghtml"
    },
    {
        titulo: "Morre Miguel Uribe, pré-candidato à presidência da Colômbia baleado durante discurso",
        descricao: "Senador de oposição ao governo era considerado um dos favoritos na corrida eleitoral e foi baleado na cabeça enquanto discursava em evento em Bogotá em junho. Ele estava internado e voltou a ficar em estado crítico no sábado (9)",
        imagem: "https://s2-g1.glbimg.com/GIWglW1_xa8BLfc3Dn3ShPXCT0k=/0x0:1920x1249/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/5/O/7cIUlESBetsN9HlDBVDQ/miguel-uribe.jpg",
        link: "https://g1.globo.com/mundo/noticia/2025/08/11/morre-miguel-uribe-pre-candidato-presidencia-da-colombia-baleado.ghtml"
    },
    {
        titulo: "PGR denuncia casal que arrecadou R$ 1 milhão via PIX para manter acampamentos golpistas até o 8 de janeiro",
        descricao: "Dupla recebia colaborações para aquisição de alimentos na 'Barraca do Abdalla'. Para PGR, parte do dinheiro foi para usado para 'incitar a prática de atos democráticos.'",
        imagem: "https://s2-g1.glbimg.com/4fDocbG_Ld_lcetNx6tbm6FfeYE=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/4/C/EeTLUESTeuHIiya7BNfw/qg-noite-dia-28-00004-frame-679.jpeg",
        link: "https://g1.globo.com/politica/noticia/2025/08/11/pgr-denuncia-casal-que-arrecadou-r-1-milhao-via-pix-para-manter-acampamentos-golpistas-ate-o-8-de-janeiro.ghtml"
    }
];

// Carregar notícias no HTML
const crimeNewsList = document.getElementById("crime-news-list");
noticiasCrimes.forEach(noticia => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
        <div class="card shadow-sm">
            <img src="${noticia.imagem}" class="card-img-top" alt="${noticia.titulo}">
            <div class="card-body">
                <h5 class="card-title">${noticia.titulo}</h5>
                <p class="card-text">${noticia.descricao}</p>
                <a href="${noticia.link}" class="btn btn-danger">Leia mais</a>
            </div>
        </div>
    `;
    crimeNewsList.appendChild(col);
});