// Função para limpar um formulário
function limparFormulario(formId) {
    document.getElementById(formId).reset();
}

// Validação do formulário de Informações Pessoais
function validarInformacoesPessoais() {
    const form = document.getElementById('form-info-pessoais');
    const nome = form.nome.value.trim();
    const cpf = form.cpf.value.trim();

    if (nome === "") {
        alert("Por favor, preencha o campo Nome Completo.");
        return;
    }

    if (cpf === "" || !validarCPF(cpf)) {
        alert("Por favor, insira um CPF válido.");
        return;
    }

    alert("Informações Pessoais validadas com sucesso!");
}

// Validação do formulário de Contato
function validarContato() {
    const form = document.getElementById('form-contato');
    const email = form.email.value.trim();
    const telefone = form.telefone.value.trim();

    if (email === "" || !validarEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    if (telefone === "" || !validarTelefone(telefone)) {
        alert("Por favor, insira um telefone válido.");
        return;
    }

    alert("Contato validado com sucesso!");
}

// Validação do formulário de Credenciais
function validarCredenciais() {
    const form = document.getElementById('form-credenciais');
    const senha = form.senha.value.trim();
    const confirmarSenha = form.confirmarSenha.value.trim();

    if (senha === "" || confirmarSenha === "") {
        alert("Por favor, preencha os campos de senha.");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    alert("Credenciais validadas com sucesso!");
}

// Validação do formulário de Informações Profissionais
function validarProfissional() {
    const form = document.getElementById('form-profissional');
    const cnpj = form.cnpj.value.trim();

    if (cnpj === "" || !validarCNPJ(cnpj)) {
        alert("Por favor, insira um CNPJ válido.");
        return;
    }

    alert("Informações Profissionais validadas com sucesso!");
}

// Validação do formulário de Preferências
function validarPreferencias() {
    const form = document.getElementById('form-preferencias');
    const generoMusical = form.generoMusical.value.trim();

    if (generoMusical === "") {
        alert("Por favor, preencha o campo Gênero Musical Favorito.");
        return;
    }

    alert("Preferências validadas com sucesso!");
}

// Validação do formulário de Pagamento
function validarPagamento() {
    const form = document.getElementById('form-pagamento');
    const cartao = form.cartao.value.trim();
    const cvv = form.cvv.value.trim();

    if (cartao === "" || !validarCartao(cartao)) {
        alert("Por favor, insira um número de cartão válido.");
        return;
    }

    if (cvv === "" || !validarCVV(cvv)) {
        alert("Por favor, insira um CVV válido.");
        return;
    }

    alert("Pagamento validado com sucesso!");
}

// Validação do formulário de Outros Recursos
function validarOutros() {
    const form = document.getElementById('form-outros');
    const documento = form.documento.value.trim();

    if (documento === "") {
        alert("Por favor, faça o upload de um documento PDF.");
        return;
    }

    alert("Outros Recursos validados com sucesso!");
}

// Funções auxiliares de validação
function validarCPF(cpf) {
    return cpf.length === 11 && /^\d+$/.test(cpf); // Verifica se tem 11 dígitos numéricos
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarTelefone(telefone) {
    return telefone.length >= 10 && /^\d+$/.test(telefone); // Verifica se tem pelo menos 10 dígitos numéricos
}

function validarCNPJ(cnpj) {
    return cnpj.length === 14 && /^\d+$/.test(cnpj); // Verifica se tem 14 dígitos numéricos
}

function validarCartao(cartao) {
    return cartao.length === 16 && /^\d+$/.test(cartao); // Verifica se tem 16 dígitos numéricos
}

function validarCVV(cvv) {
    return cvv.length === 3 && /^\d+$/.test(cvv); // Verifica se tem 3 dígitos numéricos
}