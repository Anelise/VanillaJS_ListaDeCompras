class ListaProdutosView{
	constructor(elemento){
		this._elemento = elemento;
	}

	_template(model){
		return `
		<h4 class="d-flex justify-content-between align-items-center">
            <span class="text-muted">Itens adicionados</span>
            <span class="badge badge-secondary badge-pill" id="contaLista"></span>
          </h4>
           <ul class="list-group">${model.produtos.map(produto=> `
			<li class="list-group-item d-flex justify-content-between">
              <div>
                <h6 class="my-0">${produto.nome}</h6>${DateHelper.dataParaTexto(produto.data)}
                <small class="text-muted">${produto.observacao}</small>
              </div>
              <span class="text-muted">R$ ${produto.valorUnitario} X ${produto.quantidade} ${produto.unidade}</span>
            </li>`).join('')}</ul></div>`;
	}

	update(model){
		this._elemento.innerHTML = this._template(model);
		document.querySelector("#contaLista").innerHTML=model.produtos.length;
		
	}
}