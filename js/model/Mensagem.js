class Mensagem{
	constructor(textoFornecido=""){
		this._texto = textoFornecido;
	}

	get texto(){
		return this._texto;
	}

	set texto(textoFornecido){
		this._texto = textoFornecido;
	}
}