chrome.extension.sendMessage({}, function(response) {

	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		  document.getElementsByTagName('body')[0].classList.add("light");

		// ----------------------------------------------------------

	}
	}, 10);
});
chrome.extension.sendMessage({}, function(response) {
	var checkstatus = window.setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(checkstatus);
chrome.storage.sync.get('varMenuSwitch', function (result) {
		if (result.varMenuSwitch === '1') {
			console.log("Works");
			document.body.classList.add("sparky");
			document.body.classList.remove("light");
			fetch(chrome.runtime.getURL('/../../sparky.html')).then(r => r.text()).then(html => {
			  document.body.insertAdjacentHTML('beforeend', html);
			  // not using innerHTML as it would break js event listeners of the page
			});
		} else {
document.body.classList.add("light");
		document.body.classList.remove("sparky");
		console.log("It's off");
		}
	}
);
}

	}, 0);
	}
);
chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		// cursor
chrome.storage.sync.get('PokeCursor', function (result) {
 console.log();
	 if (result.PokeCursor === 'pikachu') {
		 console.log("Pikachu Selected");
		 document.body.classList.add("pikachu");
		 document.body.classList.remove("minus");
		 document.body.classList.remove("chimchar");
	 }
	 else if (result.PokeCursor === 'minus') {
  		 console.log("Minus Selected");
  		 document.body.classList.add("minus");
			 document.body.classList.remove("pikachu");
			 document.body.classList.remove("chimchar");
	   }
		 else if (result.PokeCursor === 'chimchar') {
			 console.log("Chimchar Selected");
 			document.body.classList.add("chimchar");
 			document.body.classList.remove("pikachu");
			document.body.classList.remove("minus");
		 }
		 else if (result.PokeCursor === 'default') {
			 document.body.classList.remove("chimchar");
			 document.body.classList.remove("pikachu");
			 document.body.classList.remove("minus");
		 }
	 }
 );
}
	}, 0);
}
);
