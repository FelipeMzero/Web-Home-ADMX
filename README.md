# 🏥 Portal Interno - Instituto Mais Saúde (HRMJ)

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)
![Windows Server](https://img.shields.io/badge/Windows%20Server-0078D6?style=for-the-badge&logo=microsoft&logoColor=white)

Este projeto é uma solução de **Governança de TI** e **Desenvolvimento Web** criada para centralizar o ecossistema de sistemas do hospital, otimizando o tempo de busca do colaborador e padronizando o ambiente de trabalho.



---

## 🚀 Funcionalidades da Aplicação

O portal foi desenvolvido em **Python (Flask)** e funciona na intranet do instituto, oferecendo:

* **Sistemas Hospitalares:** Links diretos para Tasy, Neovero e Interact (NQSP).
* **Gestão de TI:** Integração com GLPI e ferramentas de suporte.
* **Educação Permanente:** Card dedicado para acesso à plataforma Moodle.
* **Informativos de Treinamento:** Sistema de visualização de cronogramas via modal (pop-up).
* **Recursos Humanos:** Acesso ao contracheque online e Ponto Eletrônico (RHID).
* **Logística Interna:** Links para reserva de salas (Auditório e Diretoria).
* **Telefonia:** Consulta rápida de ramais internos.

---

## 🛠️ Guia de Instalação e Configuração

### 1. Ambiente Python e Aplicação Web
Para rodar a aplicação Flask:

1.  **Instale o Python 3.x** no servidor da aplicação.
2.  **Instale as dependências:**
    ```bash
    pip install flask
    ```
3.  **Estrutura de Arquivos:**
    * `/templates/index.html` (Interface principal)
    * `/static/css/style.css` (Estilização e layout)
    * `/static/js/main.js` (Lógica do modal e telefonia)
4.  **Execução:**
    ```bash
    python app.py
    ```
    *Acesse via: `http://IP_DO_SERVIDOR:9000`*.

---

### 2. Governança via GPO (Google Chrome ADMX)
Para garantir que o portal seja a porta de entrada de todos os colaboradores:

1.  **Importação de Modelos:** Baixe e importe os arquivos `.admx` e `.adml` do Google Chrome para o repositório central de políticas do seu **Active Directory** (`C:\Windows\PolicyDefinitions`).
2.  **Configuração da Política:** No Editor de Gerenciamento de Política de Grupo, configure:
    * **Página Inicial:** `Google Chrome > Startup, Home page and New Tab page > Action on startup` -> Defina como `Open a list of URLs`.
    * **URL de Inicialização:** Adicione a URL do portal interno.
    * **Navegador Padrão:** Ative a política `Set Google Chrome as Default Browser`.
3.  **Aplicação:** Vincule a GPO à Unidade Organizacional (OU) que contém os computadores dos colaboradores.

---

## 📋 Requisitos
* **Servidor:** Windows Server com Active Directory.
* **Client:** Estações com Google Chrome instalado.
* **Linguagem:** Python 3.10+.

## 👨‍💻 Desenvolvedor
**Felipe Monteiro** - Gestão e Tecnologia da Informação.

---
