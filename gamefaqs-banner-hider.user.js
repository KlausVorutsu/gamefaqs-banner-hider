// ==UserScript==
// @name         GameFAQs Guide & Map Banner Hider
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Permanently hides the "Would you recommend this..." banner on GameFAQs guides and maps.
// @author       KlausVorutsu
// @match        *://gamefaqs.gamespot.com/*/faqs/*
// @match        *://gamefaqs.gamespot.com/*/map/*
// @icon         https://gamefaqs.gamespot.com/a/images/site/g_v13_dark.png
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // 1. Instantly hide the banner via CSS to prevent it from flashing on the screen during load
    GM_addStyle('#contrib_rec { display: none !important; }');

    // 2. Mimic the site's own "Hide" script to fix the layout
    // The site removes the banner and adds a 'rec_closed' class to the header wrap
    const banner = document.getElementById('contrib_rec');
    if (banner) {
        banner.remove();
    }

    const headerWrap = document.getElementById('faq_header_wrap');
    if (headerWrap) {
        headerWrap.classList.add('rec_closed');
    }
})();
