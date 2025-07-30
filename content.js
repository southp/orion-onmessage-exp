console.log( 'content script loaded!' );

chrome.runtime.onMessage.addListener((request) => {
	if (request.message === 'pong') {
		console.log('3. ------ Pong received. Ready to smash!');

		chrome.runtime.sendMessage({ message: 'smash' });
	}

	return false;
} );

globalThis.addEventListener(
	'keydown',
	(event) => {
		if (event.code === 'KeyK') {
			console.log('1. -----Ready to send ping!');
			chrome.runtime.sendMessage({ message: 'ping'} );
		}
	}
);
