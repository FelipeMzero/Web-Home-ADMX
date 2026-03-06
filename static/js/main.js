// --- LÓGICA DE DETECÇÃO AUTOMÁTICA DE IMAGENS ---
// A variável 'imagensDisponiveis' deve ser injetada pelo Flask no seu index.html
let slideIndex = 0;
const pastaBase = "/static/images/";

/**
 * Filtra a lista de imagens detectada automaticamente.
 * Se houver mais de uma foto, a 'no_treinamento.jpg' é ignorada.
 */
function obterImagensFiltradas() {
    const imagens = (typeof imagensDisponiveis !== 'undefined') ? imagensDisponiveis : [];

    // Se houver 2 ou mais imagens na pasta, removemos a imagem padrão da exibição
    if (imagens.length > 1) {
        const filtradas = imagens.filter(img => 
            img !== "no_treinamento.jpg" && 
            img !== "no_treinamento.png" && 
            img !== "no_treinamento.jpeg"
        );
        return filtradas.length > 0 ? filtradas : ["no_treinamento.jpg"];
    }
    
    return imagens.length === 1 ? imagens : ["no_treinamento.jpg"];
}

// --- FUNÇÕES DO CARROSSEL DE TREINAMENTOS ---
function abrirImagemTreinamento() {
    const modal = document.getElementById('modalImagem');
    const imagens = obterImagensFiltradas();
    
    if (modal && imagens.length > 0) {
        modal.style.display = 'flex';
        slideIndex = 0; 
        mostrarSlide(slideIndex);
    }
}

function fecharImagemTreinamento() {
    const modal = document.getElementById('modalImagem');
    if (modal) {
        modal.style.display = 'none';
    }
}

function mudarSlide(n) {
    mostrarSlide(slideIndex += n);
}

function mostrarSlide(n) {
    const imgElement = document.getElementById('imgTreinamento');
    const btnPrev = document.querySelector('.carousel-prev');
    const btnNext = document.querySelector('.carousel-next');
    const imagens = obterImagensFiltradas();

    if (n >= imagens.length) slideIndex = 0;
    if (n < 0) slideIndex = imagens.length - 1;

    if (imgElement) {
        imgElement.src = pastaBase + imagens[slideIndex];
    }

    const exibirSetas = imagens.length > 1 ? 'block' : 'none';
    if(btnPrev) btnPrev.style.display = exibirSetas;
    if(btnNext) btnNext.style.display = exibirSetas;
}

// --- EDUCAÇÃO PERMANENTE (MOODLE) ---
function alertaMoodle() {
    alert("A Plataforma Moodle está em fase de implantação pela equipe de Educação Permanente e TI. Em breve, todos os cursos e treinamentos estarão disponíveis aqui!");
}

// --- LISTA COMPLETA DE RAMAIS INTERNOS ---
const listaRamais = [
    { n: "6601", s: "DIRETORIA HOSPITALAR" },
    { n: "6602", s: "ASSESSORIA" },
    { n: "6603", s: "DEPARTAMENTO PESSOAL / RH" },
    { n: "6604", s: "POSTO DE ENFERMAGEM UI" },
    { n: "6605", s: "POSTO DE ENFERMAGEM UTI" },
    { n: "6606", s: "POSTO DE ENFERMAGEM PRONTO ATENDIMENTO" },
    { n: "6607", s: "POSTO DE ENFERMAGEM CENTRO CIRURGICO" },
    { n: "6608", s: "FARMÁCIA SATELITE UTI" },
    { n: "6609", s: "FARMÁCIA SATELITE UI" },
    { n: "6610", s: "FARMÁCIA SATELITE CENTRO CIRURGICO" },
    { n: "6611", s: "FARMÁCIA SATELITE PRONTO ATENDIMENTO" },
    { n: "6612", s: "SHL" },
    { n: "6613", s: "LAVANDERIA" },
    { n: "6614", s: "CME" },
    { n: "6615", s: "SADT" },
    { n: "6616", s: "RECEPÇÃO DA UTI / EQUIPE MULTIPROFISSIONAL" },
    { n: "6617", s: "ALMOXARIFADO" },
    { n: "6618", s: "LABORATÓRIO" },
    { n: "6619", s: "RECEPÇÕES UI" },
    { n: "6620", s: "RECEPÇÃO AMBULATÓRIO" },
    { n: "6621", s: "RECEPÇÕES PRONTO ATENDIMENTO" },
    { n: "6622", s: "SAU/OUVIDORIA" },
    { n: "6623", s: "SERVIÇO SOCIAL" },
    { n: "6624", s: "NÚCLEO INTERNO DE REGULAÇÃO (NIR)" },
    { n: "6625", s: "COMUNICAÇÃO" },
    { n: "6626", s: "CONTRATOS" },
    { n: "6627", s: "AGÊNCIA TRANSFUSIONAL" },
    { n: "6628", s: "SND (NUTRIÇÃO)" },
    { n: "6629", s: "TECNOLOGIA DA INFORMAÇÃO (TI)" },
    { n: "6630", s: "CAF (CENTRAL DE ABASTECIMENTO FARMACÊUTICO)" },
    { n: "6631", s: "PORTARIA" },
    { n: "6632", s: "SAME" },
    { n: "6633", s: "GUARITA" },
    { n: "6634", s: "TRIAGEM AMBULATÓRIO" }
];

// --- FUNÇÕES DE TELEFONIA ---
function abrirTelefonia() {
    const modal = document.getElementById('modalTelefonia');
    if (modal) {
        modal.style.display = 'block';
        renderizarRamais(listaRamais);
        setTimeout(() => document.getElementById('buscaRamal')?.focus(), 100);
    }
}

function fecharTelefonia() {
    const modal = document.getElementById('modalTelefonia');
    if (modal) modal.style.display = 'none';
}

function renderizarRamais(dados) {
    const corpo = document.getElementById('corpoTabela');
    if (corpo) {
        corpo.innerHTML = dados.map(item => `
            <tr>
                <td style="width:100px; font-weight:bold; color:#8a1b3d; font-size:1.1rem;">${item.n}</td>
                <td style="font-weight:600; color:#333;">${item.s}</td>
            </tr>
        `).join('');
    }
}

// Filtro de busca em tempo real para ramais
document.getElementById('buscaRamal')?.addEventListener('input', (e) => {
    const termo = e.target.value.toUpperCase();
    const filtrados = listaRamais.filter(r => 
        r.s.includes(termo) || r.n.includes(termo)
    );
    renderizarRamais(filtrados);
});

// FECHAMENTO GLOBAL (Ao clicar fora dos modais)
window.addEventListener('click', function(event) {
    const modalImg = document.getElementById('modalImagem');
    const modalTel = document.getElementById('modalTelefonia');
    
    if (event.target === modalImg) fecharImagemTreinamento();
    if (event.target === modalTel) fecharTelefonia();
});