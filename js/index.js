'use strict';

$('a.download').on('click', function () {
	mixpanel.track("download");
	$('.cta-modal').fadeIn();
});
