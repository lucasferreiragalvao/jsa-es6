class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacaoView($("#negociacoesView"));

        this._negociacoesView.update(this._listaNegociacoes);

    }
    adiciona(event) {
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegocicao());
        this._negociacoesView.update(this._listaNegociacoes);
        this._limpaFormulario();

        console.log(this._listaNegociacoes.negociacoes);
        //Expressão Regular
        //let data = new Date(this._inputData.value.replace(/-/,','));

        //SPLIT
        //let data = new Date(this._inputData.value.split('-'));


    }
    _criaNegocicao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0

        this._inputData.focus();
    }
}