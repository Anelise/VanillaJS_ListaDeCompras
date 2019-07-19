class StorageHelper{
	contructor(){
		throw new Error('Para StorageHelper os métodos são static');
	}

	static setListaProdutos(produtos){
		localStorage.setItem("listaProdutos", JSON.stringify(produtos));
	}

	static getListaProdutos(){
		let produtosjson = JSON.parse(localStorage.getItem("listaProdutos"));
		let produtos = [];

		if(produtosjson!=null)
		produtosjson.forEach(function(produto){
			let novoproduto = new Produto(new Date(produto._data),produto._nome, produto._quantidade, produto._unidade,  produto._valorUnitario, produto._observacao);
			produtos.push(novoproduto);
		});

		return produtos;
	}

	static esvazia(){
		localStorage.removeItem("listaProdutos");
	}
}