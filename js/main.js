var quote;
var author;
var randomKey;
var	tweetData;

document.getElementById("get-quote").onclick = function() {
/* --- workaround for clearing text fields on each click ---
	$("#quote-display").text();
	$("#quote-author").text();*/
	randomKey = Math.floor(Math.random() * (999999 - 1) + 1);
	console.log(randomKey); 
	//had to include callback=? to make crossdomain request for JSONP
		$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&key=" + randomKey + "&lang=en&jsonp=?", function(data) {
			quote = data.quoteText;
			author = data.quoteAuthor;
			if(author === "") {
				author = "Unknown"; 
			}

			tweetData = 'https://twitter.com/intent/tweet?text=' + quote + ' --' + author;
/*		--- troubleshooting console.log outputs -----	
			console.log(author);
			console.log(typeof author);*/
			$("#quote-display").text(quote);
			$("#quote-author").text('– ' + author);
		document.getElementById("tweet").setAttribute("href",tweetData);
	})
		// alternate method using crossorigin.me workaround - slower and less reliable than JSONP

	/*$.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&key=" + randomKey + "&lang=en", function(data) {
		$("#quote-display").text(JSON.stringify(data.quoteText));
		$("#quote-author").text(JSON.stringify(data.quoteAuthor));
	});*/
};