'use strict';

mixpanel.track('visitor');

$('a.download').on('click', function () {
	mixpanel.track("download");
});
