class Produto{
	
	constructor(data, nome, quantidade, unidade, valorUnitario, observacao){
		this._data = new Date(data.getTime());
		this._nome = nome;
		this._quantidade = quantidade;
		this._unidade = unidade;
		this._valorUnitario = valorUnitario;
		this._observacao = observacao;

		Object.freeze(this);
	}

	get data(){ return new Date(this._data.getTime()); }

	get nome(){ return this._nome; }

	get quantidade() { return this._quantidade; }

	get unidade() { return this._unidade; }

	get valorUnitario() { return this._valorUnitario; }

	get observacao() { return this._observacao; }

}