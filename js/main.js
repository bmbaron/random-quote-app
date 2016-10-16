document.getElementById("get-quote").onclick = function() {
	var randomKey = Math.floor(Math.random() * (999999 - 1) + 1);
	console.log(randomKey); 
	$.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&key=" + randomKey + "&lang=en", function(data) {
		$("#quote-display").text(JSON.stringify(data.quoteText));
		$("#quote-author").text(JSON.stringify(data.quoteAuthor));
	});
};