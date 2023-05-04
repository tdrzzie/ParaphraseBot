// ==UserScript==
// @name         QuillSuperBot
// @namespace    https://nyashamandizvidza.co.zw
// @version      0.1
// @description  Quillbot VIP
// @author       Nyasha
// @match        https://quillbot.com/*
// @icon         https://quillbot.com/favicon.png
// @require      https://greasyfork.org/scripts/455943-ajaxhooker/code/ajaxHooker.js?version=1124435
// @run-at       document-start
// @grant        none
// @license      WTFPL
// ==/UserScript==
/* global ajaxHooker*/

(function() {
    'use strict';
    // developer tdrzzie*2
    ajaxHooker.hook(request => {
        if (request.url.endsWith('get-account-details')) {
            request.response = res => {
                const json=JSON.parse(res.responseText);
                const a="data" in json?json.data:json;
                a.profile.accepted_premium_modes_tnc=true;
                a.profile.premium=true;
                res.responseText=JSON.stringify("data" in json?(json.data=a,json):a);
            };
        }
    });
})();