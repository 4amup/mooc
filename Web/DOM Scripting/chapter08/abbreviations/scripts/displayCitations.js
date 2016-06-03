function displayCitations() {
	var quotes = document.getElementsByTagName("blockquote");
	for (var i = 0; i < quotes.length; i++) {
		if (!quotes[i].getAttribute("cite")) {continue};
		var url = quotes[i].getAttribute("cite");
		var quoteChildren = quotes[i].getElementsByTagName("*");
		if (quoteChildren.length<1) {continue};
		var elem = quoteChildren[quoteElements.length-1];
	}
}