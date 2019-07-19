class DecimalHelper{
	contructor(){
		throw new Error('Para DecimalHelper os métodos são static');
	}

	static textoParaDecimal(texto){
		return parseFloat(texto.replace(',','.')).toFixed(2);
	}

	static decimalParaTexto(numero){
		return (""+ numero).replace('.',',');
	}
}