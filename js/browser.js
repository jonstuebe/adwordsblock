'use strict';

var result = function result(_ref) {
	var _ref$link = _ref.link;
	var link = _ref$link === undefined ? '' : _ref$link;
	var _ref$cite = _ref.cite;
	var cite = _ref$cite === undefined ? '' : _ref$cite;
	var _ref$desc = _ref.desc;
	var desc = _ref$desc === undefined ? '' : _ref$desc;
	var _ref$isAd = _ref.isAd;
	var isAd = _ref$isAd === undefined ? false : _ref$isAd;

	var ad = isAd ? ' class="ad"' : '';
	return '<li' + ad + ' style="display: none"><span class="link">' + link + '</span><cite>' + cite + '</cite><span class="desc">' + desc + '</span></li>';
};

var results = [{
	link: '$15 Locksmith Service Near You - Recommended] Quick & Local',
	cite: 'www.247quicklocksmith.com/Locksmith',
	desc: '24/7 Locksmith Service We\'ll Beat Any Price Call Now For Immediate Response',
	isAd: true
}, {
	link: 'Phoenix Locksmith - Quality Service and Great Rates',
	cite: 'www.ozlocksmiths.com/Phoenix‎',
	desc: 'Serving Phoenix 24/7 - Call Now! $15 Service Call · $35 Lock Change Service · $19 Re-Key Service · $90 Car Key Service',
	isAd: true
}, {
	link: 'Locksmith Near You - Fast 24/7 Locksmith Services',
	cite: 'www.selectlocksmithaz.com/',
	desc: 'Locally Owned & Years Of Experience. We\'ll Beat Any Price. No Hidden Fees! Categories: Automotive, Residential, Commercial…',
	isAd: true
}, {
	link: 'The Best 10 Keys & Locksmiths in Tempe, AZ - Yelp',
	cite: 'https://www.yelp.com/search?cflt=locksmiths&find_loc=Tempe%2C+AZ',
	desc: 'Top Keys & Locksmiths in Tempe, AZ - Copperstate Lock & Security, Pop-A-Lock ... The guy up front was really courteous, gave me advice on how to prevent this ...'
}, {
	link: 'East Valley Lock and Key Review - Locks & Locksmiths in Tempe, AZ ...',
	cite: 'www.bbb.org/...locksmiths/east-valley-lock-and-key-in-tempe-...',
	desc: 'BBB\'s Business Review For East Valley Lock and Key that includes background information, consumer experience, BBB Accreditation status, BBB Rating, ...'
}, {
	link: 'Find a Locksmith Near Me | 24/7 Fast Response | $19 Service Call',
	cite: 'https://www.authorizedlocksmiths.com/',
	desc: 'Our team of nationwide locksmiths provides professional home, office and car locksmith services. Call us and we\'ll dispatch the closest locksmith near you!'
}, {
	link: 'Locksmith.com - Find a Local Locksmith Near Me for Car or Home',
	cite: 'www.locksmith.com',
	desc: 'Find a Locksmith Now - Emergency 24 Hour Service - FREE Online Service will Find a Local Screened Locksmith Service Professionals from our National ...'
}];

$('.input input').typed({
	strings: ["locksmith near me"],
	typeSpeed: 0
});

setTimeout(function () {

	$.each(results, function (index, value) {
		$('.results-inner').append(result(this));
	});

	$('.pager-totals').fadeIn();
	$('.results li').fadeIn();
}, 1250);

setTimeout(function () {

	$('.results .ad').slideUp();
}, 3000);