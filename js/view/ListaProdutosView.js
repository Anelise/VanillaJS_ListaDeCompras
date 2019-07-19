class ListaProdutosView extends BaseView{
	constructor(elementoTabela,elementoContador){
		super();
		this._elementoTabela = elementoTabela;
		this._elementoContador = elementoContador;
	}

	template(model){
		return `
		<h4 class="d-flex justify-content-between align-items-center">
            <span class="text-muted">Itens adicionados</span>
            
          </h4>
           <ul class="list-group">${model.produtos.map(produto=> `
			<li class="list-group-item d-flex justify-content-between">
              <div>
                <h6 class="my-0">${produto.nome}</h6>
                <small class="text-muted">${DateHelper.dataParaTexto(produto.data)} </small> ${produto.observacao}
              </div>
              <span class="text-muted">R$ ${produto.valorUnitario} X ${produto.quantidade} ${produto.unidade}</span>
            </li>`).join('')}</ul></div>`;
	}

	update(model){
		this._elementoTabela.innerHTML = this.template(model);

		let somaTotalLista = model.produtos.reduce(function(total,n){
			return total 
			+ (DecimalHelper.textoParaDecimal(n.valorUnitario) 
				*( n.unidade == 'UN'? n.quantidade : 1 ));
		},0.0);

		this._elementoContador.innerHTML= `A Lista tem ${model.produtos.length} itens, com total de R$ ${DecimalHelper.decimalParaTexto(somaTotalLista)}`;

	}
}