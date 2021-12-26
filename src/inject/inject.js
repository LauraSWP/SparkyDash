chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		  document.getElementsByTagName('body')[0].className = 'light';

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
			document.body.classList.remove("sparky");
			fetch(chrome.runtime.getURL('/../../sparky.html')).then(r => r.text()).then(html => {
			  document.body.insertAdjacentHTML('beforeend', html);
			  // not using innerHTML as it would break js event listeners of the page
			});
		} else {
document.body.classList.add("sparky");
		document.body.classList.remove("light");
		console.log("It's off");
		}
	}
);
}
	}, 0);
	}
);
