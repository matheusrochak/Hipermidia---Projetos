function alteraFoto(){
	
	if(document.getElementById('foto').getAttribute('src') == 'lampada_off.gif'){
		document.getElementById('foto').setAttribute('src', 'lampada_on.gif')
	} else{
		document.getElementById('foto').setAttribute('src', 'lampada_off.gif')
	}
}