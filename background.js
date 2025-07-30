console.log( 'Background script loaded!');

chrome.runtime.onMessage.addListener((request, sender) => {
	const { frameId, tab: { id: tabId } } = sender;

	if (request.message === 'ping') {
		console.log('2. -----Ready to send pong!');
		chrome.tabs.sendMessage(
			tabId,
			{ message: 'pong' },
			{ frameId }
		);
	} else if (request.message === 'smash') {
		console.log('4. SCORE!');
	}

	return false;
} );
