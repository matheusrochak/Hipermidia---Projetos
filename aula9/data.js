let data_usuario


function compararDatas(){
	let dataAtual = new Date()
	dataAtual = `${dataAtual.getFullYear()}-${dataAtual.getMonth()+1}-${dataAtual.getDate()}`
	dataAtualCorte = dataAtual.split('-')
	dataUsuario = document.getElementById('dataInput').value
	dataUsuarioCorte = dataUsuario.split('-')

	console.log(`A diferença entre as datas e de ${retornaAnos(dataAtualCorte[0], dataUsuarioCorte[0])} anos, 
		${retornaMeses(dataAtualCorte[1], dataUsuarioCorte[1])} mes/meses,
		 e ${retornaDias(dataAtualCorte[2], dataUsuarioCorte[2])} dias`)
}
function retornaAnos(atual,comp){
	return Math.abs(parseInt(atual) - parseInt(comp))
}
function retornaMeses(atual,comp){
	return Math.abs(parseInt(atual) - parseInt(comp))
}
function retornaDias(atual,comp){
	return Math.abs(parseInt(atual) - parseInt(comp))
}