// Lista de notícias simulada
const noticias = [
    {
        titulo: "Adultização infantil: entenda o debate na Câmara para proteger crianças e adolescentes nas redes sociais",
        descricao: "Entre as propostas em análise, uma das principais obriga plataformas digitais acessadas por menores a adotarem medidas de segurança. Empresas que não cumprirem as regras poderão ser responsabilizadas.",
        imagem: "https://s2-g1.glbimg.com/UOMlzbwDTXrxWsBV6wUTgblyduM=/0x0:1984x1223/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/w/L/fNGFsfSUmz39ikJ2FQQA/img20250806223400639-1-.jpg",
        link: "https://g1.globo.com/politica/noticia/2025/08/11/entenda-o-debate-na-camara-para-regulamentar-protecao-a-criancas-e-adolescentes-nas-redes-sociais.ghtml"
    },
    {
        titulo: "Companhia aérea planeja táxi voador para 2027 no Japão; veja como é o modelo",
        descricao: "Empresa All Nippon Airways (ANA) fará demonstração dos modelos em outubro, durante a Exposição Universal de Osaka. Modelo de eVTOL tem capacidade para um piloto e quatro passageiros e pode chegar a 320 km/h.",
        imagem: "https://s2-g1.glbimg.com/Jszi3tRpA7p4QokP5cocPQvOz7Y=/0x0:1400x876/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/L/4/1Bbj8WQ8ANggJIuUUh1Q/ana-joby.jpg",
        link: "https://g1.globo.com/inovacao/noticia/2025/08/10/companhia-aerea-planeja-taxi-voador-para-2027-no-japao-veja-como-e-o-modelo.ghtml"
    },
    {
        titulo: "Razr 60 Ultra: g1 testou o celular dobrável da Motorola e comparou com outros 3 modelos",
        descricao: "Huawei e Honor lideram a lista dos aparelhos mais caros à venda no Brasil, mas Samsung e Motorola têm versões mais baratas (e fabricadas no país) que saem por menos de R$ 15 mil.",
        imagem: "https://s2-g1.glbimg.com/446ScpCzv2k4WX7efduhM3YIvyQ=/0x0:2000x1126/2000x1126/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/H/G/1BSxlgTYyAxwwN88xDrw/razr-60-ultra-2.jpeg",
        link: "https://g1.globo.com/guia/guia-de-compras/tecnologia/celulares/motorola-razr-60-ultra-g1-teste-do-celular-dobravel.ghtml"
    },
    {
        titulo: "‘Rio AI City’: saiba mais sobre o projeto que prevê investimento de US$ 65 bilhões em data centers e será protagonista no RIW",
        descricao: "Iniciativa quer transformar o Rio em um dos maiores hubs de inteligência artificial do mundo até 2032, com infraestrutura sustentável, formação de talentos e exportação de tecnologia. Especialista acredita em potencial de influência global.",
        imagem: "https://s2-g1.glbimg.com/CioJKQoyY4mOvMJvtk8MdQt8rL4=/0x0:3284x1847/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/F/M/ZLv6WmRdAnM8eCXBSxsg/data-center-meta.jpg",
        link: "https://g1.globo.com/rj/rio-de-janeiro/noticia/2025/08/11/rio-ai-city-saiba-mais-sobre-o-projeto-que-sera-protagonista-no-riw.ghtml"
    },
    {
        titulo: "Após vídeo de Felca, juíza alerta sobre perigo de redes sociais para crianças: 'Internet é lugar público e perigoso'",
        descricao: "Vanessa Cavalieri, da Vara da Infância e Juventude do Rio de Janeiro, esclareceu a urgência do assunto e alertou as famílias sobre o uso de redes por menores. \"É importante lembrar que a imagem dos filhos pertence aos filhos, não aos pais\"",
        imagem: "https://s2-g1.glbimg.com/ul8W4Kd0vEnJlXLblff5sMJHHCE=/0x0:640x440/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/N/3/nXCbezTTK1prxCtKTj2A/estrada-da-vida-27-.jpg",
        link: "https://g1.globo.com/tecnologia/noticia/2025/08/11/juiza-alerta-para-os-perigos-das-redes-sociais-para-criancas-e-adolescentes.ghtml"
    },
    {
        titulo: "Tchau, internet discada: AOL vai desligar seus últimos modems ativos nos EUA",
        descricao: "Serviço chegou a ter mais de 2 milhões de clientes em 2015, mas caiu para poucos milhares nos últimos anos. Empresa impulsionou o auge da internet nos Estados Unidos e em outros países.",
        imagem: "https://s2-g1.glbimg.com/Gm766Zs7vZifBy9nqFqsvt4Pn98=/0x0:2000x1333/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/b/v/OsMfk9QqeMcxc9jrNrbQ/139544.jpg",
        link: "https://g1.globo.com/tecnologia/noticia/2025/08/11/tchau-internet-discada-aol-vai-desligar-seus-ultimos-modems-ativos-nos-eua.ghtml"
    },
];

// Carregar notícias no HTML
const newsList = document.getElementById("news-list");
noticias.forEach(noticia => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
        <div class="card shadow-sm">
            <img src="${noticia.imagem}" class="card-img-top" alt="${noticia.titulo}">
            <div class="card-body">
                <h5 class="card-title">${noticia.titulo}</h5>
                <p class="card-text">${noticia.descricao}</p>
                <a href="${noticia.link}" target="__blank" class="btn btn-primary">Leia mais</a>
            </div>
        </div>
    `;
    newsList.appendChild(col);
});