const sportsNoticias = [
    {
        titulo: "Brasil vence Argentina e garante vaga na final da Copa América",
        descricao: "Com gol no último minuto, a seleção brasileira garantiu sua vaga na grande final, em um jogo emocionante no Maracanã.",
        imagem: "https://www.sonoticias.com.br/wp-content/uploads/2021/07/51304222810_4bdfc4d110_c.jpg",
        link: "https://jovempan.com.br/esportes/futebol/argentina-vence-o-brasil-quebra-jejum-de-28-anos-e-vira-maior-campea-da-copa-america.html"
    },
    {
        titulo: "Beatriz Souza Conquista Ouro nas Olimpíadas",
        descricao: "Você não vai acreditar na trajetória incrível da Beatriz Souza! Esta talentosa judoca brasileira fez história nas Olimpíadas de Paris.",
        imagem: "https://tse2.mm.bing.net/th/id/OIP.c776WAz6F1Ha359QqPHn3QHaE5?rs=1&pid=ImgDetMain&o=7&rm=3.jpg",
        link: "https://g1.globo.com/jornal-nacional/noticia/2024/08/02/novata-olimpica-beatriz-souza-conquista-a-primeira-medalha-de-ouro-do-brasil-em-paris.ghtml"
    },
    {
        titulo: "Final da Champions League será entre Real Madrid e Manchester City",
        descricao: "Os dois gigantes do futebol europeu se enfrentarão em Londres, prometendo um duelo repleto de craques e emoção.",
        imagem: "https://images.justwatch.com/backdrop/313756849/s640/real-madrid-vs-manchester-city.jpg",
        link: "https://www.uol.com.br/esporte/futebol/ultimas-noticias/2025/02/11/manchester-city-x-real-madrid-como-foi-o-jogo-champions.html"
    },
    {
        titulo: "Lewis Hamilton vence GP do Brasil de Fórmula 1",
        descricao: "O piloto britânico fez uma corrida impecável em Interlagos e emocionou a torcida brasileira com sua performance.",
        imagem: "https://tse3.mm.bing.net/th/id/OIP.gPUVcAL7lm6DM9TtmHaSjgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3.jpg",
        link: "https://www.f1mania.net/f1/em-dia-de-trapalhada-de-ocon-lewis-hamilton-vence-o-gp-do-brasil-de-formula-1/#:~:text=Lewis%20Hamilton%20venceu%20o%20Grande%20Pr%C3%AAmio%20do%20Brasil,foi%20campe%C3%A3%20do%20Mundial%20de%20Construtores%20de%202018."
    },
    {
        titulo: "NBA: Lakers vencem Celtics e empatam a série final",
        descricao: "Com grande atuação de LeBron James, os Lakers venceram fora de casa e igualaram a disputa pelo título da NBA.",
        imagem: "https://th.bing.com/th?id=OIF.LW%2fNi%2f%2bPXMhzi3OrjEyTig&rs=1&pid=ImgDetMain&o=7&rm=3.jpg",
        link: "https://lakersbrasil.com/site/noticias/2024/08/como_foi_a_ultima_final_de_nba_entre_lakers_e_celtics/"
    },
    {
        titulo: "Flamengo anuncia contratação de craque europeu",
        descricao: "O clube carioca surpreendeu ao anunciar a chegada de um renomado jogador da Europa para reforçar seu elenco.",
        imagem: "img/mario_flamenguista.png",
        link: "https://www.otvfoco.com.br/flamengo-diz-sim-pra-assinar-com-craque-de-gigante-da-europa/"
    }
];

const tabela = [
  { pos: 1, time: "Flamengo", pts: 40, J: 18, V: 12, E: 4, D: 2, GP: 33, GC: 8, SG: 25},
  { pos: 2, time: "Cruzeiro", pts: 37, J: 19, V: 11, E: 4, D: 4, GP: 31, GC: 13, SG: 18},
  { pos: 3, time: "Palmeiras", pts: 36, J: 17, V: 11, E: 3, D: 3, GP: 23, GC: 15, SG: 8},
  { pos: 4, time: "Bahia", pts: 30, J: 17, V: 8, E: 6, D: 3, GP: 23, GC: 16, SG: 7},
  { pos: 5, time: "Botafogo", pts: 29, J: 17, V: 8, E: 5, D: 4, GP: 23, GC: 10, SG: 13 },
  { pos: 6, time: "Mirassol", pts: 28, J: 17, V: 7, E: 7, D: 3, GP: 28, GC: 18, SG: 10 },
  { pos: 7, time: "São Paulo", pts: 28, J: 19, V: 7, E: 7, D: 5, GP: 22, GC: 20, SG: 2},
  { pos: 8, time: "RB Bragantino", pts: 27, J: 19, V: 8, E: 3, D: 8, GP: 22, GC: 25, SG: -3},
  { pos: 9, time: "Fluminense", pts: 24, J: 17, V: 7, E: 3, D: 7, GP: 21, GC: 23, SG: -2},
  { pos: 10, time: "Atlético-MG", pts: 24, J: 17, V: 6, E: 6, D: 5, GP: 19, GC: 18, SG: 1 },
  { pos: 11, time: "Internacional", pts: 24, J: 18, V: 6, E: 6, D: 6, GP: 21, GC: 23, SG: -2 },
  { pos: 12, time: "Ceará", pts: 22, J: 18, V: 6, E: 4, D: 8, GP: 18, GC: 19, SG: -1 },
  { pos: 13, time: "Corinthians", pts: 22, J: 18, V: 5, E: 7, D: 6, GP: 17, GC: 21, SG: -4 },
  { pos: 14, time: "Santos", pts: 21, J: 18, V: 6, E: 3, D: 9, GP: 20, GC: 23, SG: -3 },
  { pos: 15, time: "Grêmio", pts: 20, J: 18, V: 5, E: 5, D: 8, GP: 16, GC: 24, SG: -8 },
];

const tbody = document.getElementById("brasileirao-table");
tabela.forEach(t => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${t.pos}</td>
    <td>${t.time}</td>
    <td>${t.pts}</td>
    <td>${t.J}</td>
    <td>${t.V}</td>
    <td>${t.E}</td>
    <td>${t.D}</td>
    <td>${t.GP}</td>
    <td>${t.GC}</td>
    <td>${t.SG}</td>
  `;
  tbody.appendChild(tr);
});

const sportsList = document.getElementById("sports-news-list");
sportsNoticias.forEach(noticia => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
        <div class="card shadow-sm">
            <img src="${noticia.imagem}" class="card-img-top" alt="${noticia.titulo}">
            <div class="card-body">
                <h5 class="card-title">${noticia.titulo}</h5>
                <p class="card-text">${noticia.descricao}</p>
                <a href="${noticia.link}" target="_blank" class="btn btn-success">Leia mais</a>
            </div>
        </div>
    `;
    sportsList.appendChild(col);
});
