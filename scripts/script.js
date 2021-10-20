var youtube_btn = document.getElementById("youtube-btn");
var imdb_btn = document.getElementById("imdb-btn");
var userInput = document.getElementById("input-box");
var url = "https://www.google.com";


function inputLength() {
	return userInput.value.length;
}

function searchable() {
	return userInput.value.split(' ').join('+');
}

function open_youtube() {
	if (inputLength() > 0) {
		var search = searchable();
		url = "https://www.youtube.com/results?search_query=" + search + "+trailer";
		window.open(url, "_blank");
	} else {
		alert("input is empty");
	}
	userInput.value = "";
}

function open_imdb() {
	if (inputLength() > 0) {
		var search = searchable();
		url = "https://www.imdb.com/find?q="+ search + "&ref_=nv_sr_sm";
		window.open(url, "_blank");
	} else {
		alert("input is empty");
	}
	userInput.value = "";
}


youtube_btn.addEventListener("click", open_youtube);

imdb_btn.addEventListener("click", open_imdb);