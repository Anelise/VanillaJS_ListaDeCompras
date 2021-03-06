class ListaProdutosController{
	constructor(){
		let $ = document.querySelector.bind(document);
		this._inputNome = $('#nome');
		this._inputQuantidade = $('#quantidade');
		this._inputUnidade = $('#unidade');
		this._inputValorUnitario= $('#vunitario');
		this._inputObservacao = $('#obs');
		this._listaProdutos = ProxyFactory.create(new  ListaProdutos(),['adiciona','esvazia'],model=>this._listaProdutosView.update(model));
		this._listaProdutosView = new ListaProdutosView($('#listaProdutosView'), $('#contaLista'));
		this._listaProdutosView.update(this._listaProdutos);
		this._mensagemView = new MensagemView($('#mensagemView'));
	}

	adiciona(evento){
		evento.preventDefault();
		this._listaProdutos.adiciona(this._criaProduto());
		this._limpaFormulario();
		this._mensagemView.update( new Mensagem("Item adicionado!") );

	}

	_criaProduto(){
		return new Produto(
				new Date(),
				this._inputNome.value,
				this._inputQuantidade.value,
				this._inputUnidade.value,
				this._inputValorUnitario.value,
				this._inputObservacao.value
			);
	}

	_limpaFormulario(){
		this._inputNome.value = '';
		this._inputQuantidade.value = 0;
		this._inputUnidade.value = 'UN';
		this._inputValorUnitario.value = 0;
		this._inputObservacao.value = '';
		this._inputNome.focus();
	}

	limpaLista(event){
		event.preventDefault();
		this._listaProdutos.esvazia();
		this._mensagemView.update( new Mensagem("Lista Vazia!") );


	}

}