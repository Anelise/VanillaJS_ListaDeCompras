class ListaProdutos{

	constructor( ){
		this._produtos = StorageHelper.getListaProdutos();
	}

	adiciona(produto){
		this._produtos.push(produto);
		StorageHelper.setListaProdutos(this._produtos);

	}

	get produtos(){
		return [].concat(this._produtos);
	}

	esvazia(){
		this._produtos = [];
		StorageHelper.esvazia();
	}
}