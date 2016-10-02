chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if(msg.deleteAds === true) {
        const ads = document.getElementsByClassName('ads-ad');
        for(let i = 0; i < ads.length; i++){
            ads[i].remove();
        }
    }
})
