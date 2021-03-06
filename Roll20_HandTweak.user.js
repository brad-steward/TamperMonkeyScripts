// ==UserScript==
// @name          Roll20 Expanded Hand Display
// @namespace     https://github.com/brad-steward/TamperMonkeyScripts/blob/master/Roll20_HandTweak.js
// @updateURL     https://raw.githubusercontent.com/brad-steward/TamperMonkeyScripts/master/Roll20_HandTweak.js
// @description	  A minor CSS Tweak for Roll20's Hand display (when using card decks)
// @author        brad-steward
// @include       https://app.roll20.net/editor*
// @include       https://app.roll20.net/campaigns/chatarchive*
// @run-at        document-start
// @version       1.0.2
// @license       GPL-3.0-or-later
// ==/UserScript==
(function() {
	var css = `
.hand .handcontainer .cardinhand {
	width: calc((100% / 2) - 20px);
	margin: 5px;
}

.hand .handcontainer .cardinhand a.lightly {
	width: 100%;
}

.hand .handcontainer .cardinhand a.lightly img {
	max-width: 100%;
	max-height: unset;
	width: 100%;
}

#playerzone .deckhands .hand .handcontainer {
	max-width: 500px;
	width: 500px;
}
`;
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else {
	const node = document.createElement("style");
	node.type = "text/css";
	node.innerHTML = css;

	// Note(stormy): wait for document.head to be available
	const interval = 10;
	const waitForDepts = () => {
		if (!document.head) {
			setTimeout(waitForDepts, 10);
			return;
		}

		document.head.appendChild(node);

	}
	setTimeout(waitForDepts, 10);
}
})();
