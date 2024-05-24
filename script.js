function iniciarCarrossel() {
    let indiceAtual = 0;
    const imagens = document.querySelectorAll('.imagem_carrossel');
    const totalImagens = imagens.length;

    function mudarImagem() {
        classList = ".imagem_carrossel";
        
        imagens[indiceAtual].classList.remove('ativa');
        indiceAtual = (indiceAtual + 1) % totalImagens;
        imagens[indiceAtual].classList.add('ativa');
    }

    setInterval(mudarImagem, 5000);
    mudarImagem();

}


function definirLimitesData() {
    var dateInput = document.getElementById('data_marcada');
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = yyyy + '-' + mm + '-' + dd;
    dateInput.setAttribute("min", today);

    var maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    dd = maxDate.getDate();
    mm = maxDate.getMonth() + 1;
    yyyy = maxDate.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    maxDate = yyyy + '-' + mm + '-' + dd;
    dateInput.setAttribute("max", maxDate);
}


function formatarCPF(campo) {
    let valor = campo.value;
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    campo.value = valor;
}



function menuUsuarioAtualizarDados() {
    
    var form = document.getElementById('form-dados');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
    
    var menu = document.getElementById('menu-usuario');
    menu.style.borderBottom = menu.style.borderBottom === '1px solid var(--azul-escuro)' ? 'none' : '1px solid var(--azul-escuro)';
  }
