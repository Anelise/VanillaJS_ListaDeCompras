class MensagemView extends BaseView{
	constructor(elemento){
		super();
		this._elemento = elemento;
	}

	template(model){

		return `<p class="alert alert-info">${model.texto}</p>`;

	}

	update(model){
		this._elemento.innerHTML = this.template(model);
	}
	
}