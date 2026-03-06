// --- LISTA COMPLETA DE RAMAIS INTERNOS - HRMJS ---
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

// --- CONTROLE DO MODAL DE TELEFONIA ---
function abrirTelefonia() {
    const modal = document.getElementById('modalTelefonia');
    if (modal) {
        modal.style.display = 'block';
        renderizarRamais(listaRamais);
        setTimeout(() => document.getElementById('buscaRamal').focus(), 100);
    }
}

function fecharTelefonia() {
    const modal = document.getElementById('modalTelefonia');
    if (modal) {
        modal.style.display = 'none';
        document.getElementById('buscaRamal').value = '';
    }
}

function renderizarRamais(dados) {
    const corpo = document.getElementById('corpoTabela');
    if (corpo) {
        corpo.innerHTML = dados.map(item => `
            <tr>
                <td style="width:80px; font-weight:bold; color:#8a1b3d; font-size:1.1rem; border-bottom: 1px solid #eee;">${item.n}</td>
                <td style="font-weight:600; color:#444; border-bottom: 1px solid #eee;">${item.s}</td>
            </tr>
        `).join('');
    }
}

document.getElementById('buscaRamal')?.addEventListener('input', (e) => {
    const termo = e.target.value.toUpperCase();
    const filtrados = listaRamais.filter(r => 
        r.s.includes(termo) || r.n.includes(termo)
    );
    renderizarRamais(filtrados);
});

window.onclick = function(event) {
    const modal = document.getElementById('modalTelefonia');
    if (event.target == modal) {
        fecharTelefonia();
    }
}
// --- FUNÇÕES PARA O MODAL DE IMAGEM DO TREINAMENTO ---
function abrirImagemTreinamento() {
    document.getElementById('modalImagem').style.display = 'block';
}

function fecharImagemTreinamento() {
    document.getElementById('modalImagem').style.display = 'none';
}

// (Mantenha as funções de Telefonia e Ramais abaixo...)