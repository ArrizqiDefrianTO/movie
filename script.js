function searchMovie(keyword) {

	let xhr = new XMLHttpRequest();


	xhr.onreadystatechange =function () {
		// body...
		if(xhr.readyState == 4 && xhr.status === 200) {
			console.log(xhr.response);
		}
	}

	xhr.open('');
	xhr.send();

	
}