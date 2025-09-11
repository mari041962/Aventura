const avanca = document.querySelectorAll('.btn-proximo');
const reiniciarBtn = document.getElementyById('.btn-reiniciar');

avanca.fortEach(button => {
button.addEventListener('click',function){
    const atual = document.querySelector('.ativo');
    const proximoPasso='passo-'+this.getAttribute('data-proximo');

    atual.classList.remove('ativo');
    const proximoElemento= document.getElementyById(proximoPasso);

    if(proximoElemento){
    proximoElemento.classList.add('ativo');
    } else{
        console.error(`Elemento com ID"${proximoPasso}" não encontrado.`)
    }

} 

})
});
// Reinicia o jogo ao clicar no botão de reinício
if (reiniciarBtn) {
    reiniciarBtn.addEventListener('click', () => {
        const atual = document.querySelector('.ativo');
        atual.classList.remove('ativo');
        document.getElementById('passo-0').classList.add('ativo');
    });
}