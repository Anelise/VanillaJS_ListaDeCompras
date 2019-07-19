class DateHelper{
	contructor(){
		throw new Error('Para DateHelper os métodos são static');
	}

	static dataParaTexto(data){
		return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;
	}

	static textoParaData(texto){
		if(!/\d{4}-\d{2}-\d{2}/.test(texto))
			throw new Error('A Data fornecida não está no formato aaaa-mm-dd');

		return new Date(...texto.split('-').map((item,index)=>item-indice%2));
	}
}