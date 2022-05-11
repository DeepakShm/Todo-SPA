(()=>{"use strict";var t={315:(t,n,e)=>{e.d(n,{Z:()=>i});var r=e(537),o=e.n(r),A=e(645),a=e.n(A)()(o());a.push([t.id,'html,body{margin:0 auto;padding:0;background-color:#e1daf4;color:#211540;line-height:normal;font-size:1rem;font-family:Montserrat,-apple-system,blinkmacsystemfont,segoe ui,roboto,helvetica neue,arial,noto sans,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol,noto color emoji;scroll-behavior:smooth;letter-spacing:-1px}h1,h2,h3,h4,h5,h6,p,ol,ul,li,input{list-style:none;padding:0;margin:0}a{text-decoration:none;display:block;color:inherit;cursor:pointer}button{border:none;background-color:unset;font-size:inherit;line-height:2rem;font-family:inherit;color:inherit;cursor:pointer}.p-5-10{padding:5px 10px}.p-20{padding:1rem 2rem}.d-grid-col{display:grid;grid-column:1;grid-template-columns:repeat(2, auto);gap:50px;margin-bottom:20px}.d-flex-row{display:flex;flex-direction:row;gap:10px}.d-flex-col{display:flex;flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.dropdown-content{display:none;position:absolute;right:0;background-color:#f1f1f1;min-width:160px;box-shadow:0px 8px 16px 0px rgba(0,0,0,.2);z-index:1000;border-radius:5px}.dropdown-content a{font-size:.8rem;padding:2px 10px;margin:5px 0}.dropdown-content a:hover{background-color:#ddd}.dropdown:hover .dropdown-content{display:block}.dropdown{position:relative;display:inline-block}.main{width:80%;margin:0 auto;position:relative}.fab-btn{font-size:3rem;display:grid;color:#fff;background:#f51b35;position:fixed;z-index:10;aspect-ratio:1;width:50px;height:50px;place-items:center;right:3%;bottom:3%;border-radius:100%;box-shadow:0px 8px 16px 0px rgba(0,0,0,.2)}.header{position:sticky;top:0;z-index:100;background-color:#e1daf4}.header nav div .logo{aspect-ratio:1;width:25px}.header nav .menu .menu-button{display:none;height:100%;width:30px;cursor:pointer;flex-direction:column;justify-content:space-between;align-items:center;gap:4px}.header nav .menu .menu-button span{background-color:#211540;height:4px;width:30px;border-radius:2px}.header nav .menu .nav-links{display:flex;flex-direction:row;gap:20px;line-height:2rem}.header nav .menu .nav-links li a{padding-left:10px;padding-right:10px;transition:all .1s ease-in-out}.arrow-down{border:solid;border-width:0 3px 3px 0;display:inline-block;padding:3px;transition:transform .5s ease-in-out;transform:rotate(45deg);-webkit-transform:rotate(45deg)}.arrow-up{transform:rotate(-135deg)}.content .banner h1{text-transform:capitalize;font-size:2rem;margin-bottom:10px}.content .home-content .tasks{margin:2rem 0;border-top:2px solid #d3cce5;padding-top:20px;line-height:2rem}.content .home-content .category-tasks ul{display:grid;gap:20px;grid-template-columns:repeat(3, 1fr)}.content .home-content .category-tasks ul li{padding:20px;display:grid;height:100px;border:2px solid #d3cce5;border-radius:10px;transition:all .5s;cursor:pointer}.content .home-content .category-tasks ul li .c-icon{aspect-ratio:1;width:25px}.content .home-content .category-tasks ul li .c-text h3{margin-bottom:5px}.content .home-content .category-tasks ul li .c-text span{color:gray}.content .home-content .category-tasks ul li:hover{background:#fff}.content .tasks-content .tabs{margin:20px 0}.content .tasks-content .tabs .tab-list{position:sticky;top:60px;z-index:10;background:#e1daf4}.content .tasks-content .tabs .tab-list .tab-btn{padding:10px;margin-right:30px;border-radius:10px 10px 0px 0px;border-bottom:2px solid rgba(0,0,0,0);color:gray}.content .tasks-content .tabs .tab-list .active-tab-btn{color:#f51b35;border-bottom:2px solid}.content .tasks-content .tabs .tab{padding:10px}.content .tasks-content .tabs .tab .task-check .task-title{padding:5px 10px;border-radius:2px;margin-right:25%}.content .tasks-content .tabs .tab .task-check .task-title p{margin-bottom:2px;white-space:nowrap}.content .tasks-content .tabs .tab .task-check .task-title span{font-size:13px;opacity:.8;margin-right:20px;font-family:monospace;white-space:nowrap}.content .tasks-content .tabs .tab .task-title:hover{background-color:#d3cce5}.content .tasks-content .tabs .tab .action{position:relative}.content .tasks-content .tabs .tab .action button{position:absolute;right:0}.content .tasks-content .tabs .tab .edit{padding:10px;font-size:13px;opacity:.4}.content .tasks-content .tabs .tab .delete{padding:10px;font-size:13px;opacity:.5;color:#f51b35}.content .tasks-content .tabs .tab .edit:hover .delete:hover{opacity:1}.content .add-task-content{width:30vw}.content .add-task-content .add-task form .input-group{display:flex;flex-direction:column;gap:10px;margin-bottom:30px}.content .add-task-content .add-task form input,.content .add-task-content .add-task form select{font-size:15px;line-height:2rem;outline:none;height:2.5rem;padding:0 10px;margin:0;border:0;border-bottom:2px solid;border-radius:5px 5px 0px 0px}.content .add-task-content .add-task form input:focus,.content .add-task-content .add-task form select:focus{border-color:#7ac417}.content .add-task-content .add-task form button{width:100%;padding:.5rem;background-color:#f51b35;color:#fff;box-shadow:2px 2px 10px rgba(0,0,0,.2);border-radius:10px}.task-check{display:flex;flex-direction:row;gap:20px;align-items:center;position:relative;margin-bottom:12px;cursor:pointer;font-size:1rem;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.task-check input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:relative;top:0;left:0;height:25px;aspect-ratio:1;width:25px;background-color:#fff;border-radius:100%}.task-check:hover input~.checkmark{background-color:#fff}.task-check input:checked~.checkmark{background-color:#7ac417}.task-check input:checked~.task-title{opacity:.3}.checkmark:after{content:"";position:absolute;display:none}.task-check input:checked~.checkmark:after{display:block}.task-check .checkmark:after{left:9px;top:5px;width:4px;height:9px;border:solid #fff;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.toast{position:fixed;top:70px;right:20px;padding:10px 20px;display:none;z-index:1000;background-color:#fff;width:23%;text-align:right;border-left:6px solid #f51b35;box-shadow:0px 8px 16px 0px rgba(0,0,0,.2);border-radius:5px;transition:all .5ms ease-in-out}.toast div{display:grid;place-content:center}.toast-display{display:block}.active-link{color:#fff;background-color:#f51b35;border-radius:5px;box-shadow:2px 2px 10px rgba(0,0,0,.2)}@media screen and (max-width: 768px){.main{width:100%}.p-20{padding:15px}.add-task-content{width:100% !important}}@media screen and (max-width: 500px){body{font-size:.8rem}.content{width:100%}.content .home-content .category-tasks ul{display:grid;grid-template-columns:repeat(2, 1fr)}}',"",{version:3,sources:["webpack://./src/styles/style.scss"],names:[],mappings:"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",sourcesContent:['$pm-color: #211540;\r\n$sc-color: #F51B35;\r\n$tr-color: #7AC417;\r\n$bg-color: #e1daf4;\r\n$lt-color: #d3cce5;\r\n\r\nhtml,\r\nbody {\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    background-color: $bg-color;\r\n    color: $pm-color;\r\n    line-height: normal;\r\n    font-size: 1rem;\r\n    font-family: Montserrat, -apple-system, blinkmacsystemfont, segoe ui, roboto, helvetica neue, arial, noto sans, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji;\r\n    scroll-behavior: smooth;\r\n    letter-spacing: -1px;\r\n}\r\n\r\nh1,h2,h3,h4,h5,h6,p,ol,ul,li,input{\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n    display: block;\r\n    color: inherit;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton{\r\n    border: none;\r\n    background-color: unset;\r\n    font-size: inherit;\r\n    line-height: 2rem;\r\n    font-family: inherit;\r\n    color: inherit;\r\n    cursor: pointer;\r\n}\r\n\r\n.p-5-10{\r\n    padding: 5px 10px;\r\n}\r\n\r\n.p-20{\r\n    padding: 1rem 2rem;\r\n}\r\n.d-grid-col{\r\n    display: grid;\r\n    grid-column: 1;\r\n    grid-template-columns: repeat(2,auto);\r\n    gap: 50px;\r\n    margin-bottom: 20px;\r\n}\r\n.d-flex-row{\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 10px;\r\n}\r\n.d-flex-col{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.items-center{\r\n    align-items: center;\r\n}\r\n\r\n.justify-between{\r\n    justify-content: space-between;\r\n}\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    right: 0;\r\n    background-color: #f1f1f1;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1000;\r\n    border-radius: 5px;\r\n    a{\r\n        font-size: 0.8rem;\r\n        padding: 2px 10px;\r\n        margin: 5px 0;\r\n    }\r\n    a:hover{\r\n        background-color: #dddddd;\r\n    }\r\n}\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n}\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.main{\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    position: relative;\r\n}\r\n\r\n.fab-btn{\r\n    font-size: 3rem;\r\n    display: grid;\r\n    color: white;\r\n    background: $sc-color;\r\n    position: fixed;\r\n    z-index: 10;\r\n    aspect-ratio: 1;\r\n    width: 50px;\r\n    height: 50px;\r\n    place-items: center;\r\n    right: 3%;\r\n    bottom: 3%;\r\n    border-radius: 100%;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n}\r\n\r\n.header{\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 100;\r\n    background-color: $bg-color;\r\n    nav{\r\n        div .logo{\r\n            aspect-ratio: 1;\r\n            width: 25px;\r\n        }\r\n\r\n        .menu{\r\n            .menu-button{\r\n                display: none;\r\n                height: 100%;\r\n                width: 30px;\r\n                cursor: pointer;\r\n                flex-direction: column;\r\n                justify-content: space-between;\r\n                align-items: center;\r\n                gap: 4px;\r\n            }\r\n            .menu-button span{\r\n                background-color: #211540;\r\n                height: 4px;\r\n                width: 30px;\r\n                border-radius: 2px; \r\n            }\r\n            .nav-links{\r\n                display: flex;\r\n                flex-direction: row;\r\n                gap: 20px;\r\n                line-height: 2rem;\r\n                li a{\r\n                    padding-left: 10px;\r\n                    padding-right: 10px;\r\n                    transition: all 0.1s ease-in-out;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.arrow-down{\r\n    border: solid;\r\n  border-width: 0 3px 3px 0;\r\n  display: inline-block;\r\n  padding: 3px;\r\n  transition: transform 0.5s ease-in-out;\r\n  transform: rotate(45deg);\r\n  -webkit-transform: rotate(45deg);\r\n}\r\n.arrow-up{\r\n    transform: rotate(-135deg);\r\n}\r\n\r\n.content {\r\n    .banner h1{\r\n        text-transform: capitalize;\r\n        font-size: 2rem;\r\n        margin-bottom: 10px;\r\n    }\r\n    .home-content{\r\n        .tasks{\r\n            margin: 2rem 0;\r\n            border-top: 2px solid $lt-color;\r\n            padding-top: 20px;\r\n            line-height: 2rem;\r\n        }\r\n        .category-tasks{\r\n            ul{\r\n                display: grid;\r\n                gap: 20px;\r\n                grid-template-columns: repeat(3, 1fr);\r\n                li{\r\n                    padding: 20px;\r\n                    // place-items: center;\r\n                    display: grid;\r\n                    height: 100px;\r\n                    border: 2px solid $lt-color;\r\n                    border-radius: 10px;\r\n                    transition: all 0.5s;\r\n                    cursor: pointer;\r\n                    .c-icon{\r\n                        aspect-ratio: 1;\r\n                        width: 25px;\r\n                    }\r\n                    .c-text{\r\n                        // text-align: center;\r\n                        h3{\r\n                            margin-bottom: 5px;\r\n                        }\r\n                        span{\r\n                            color: gray;\r\n                        }\r\n                    }\r\n                }\r\n\r\n                li:hover{\r\n                    background: white;\r\n                    // transform: scale(1.1);\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .tasks-content{\r\n        .tabs{\r\n            margin: 20px 0;\r\n            .tab-list{\r\n                position: sticky;\r\n                top: 60px;\r\n                z-index: 10;\r\n                background: #e1daf4;\r\n                .tab-btn{\r\n                    padding: 10px;\r\n                    margin-right: 30px;\r\n                    border-radius: 10px 10px 0px 0px;\r\n                    border-bottom: 2px solid transparent;\r\n                    color: gray;\r\n                }\r\n                .active-tab-btn{\r\n                    color: $sc-color;\r\n                    border-bottom: 2px solid;\r\n                }\r\n            }\r\n            .tab{\r\n                padding: 10px;\r\n                .task-check{\r\n                    .task-title{\r\n                        padding: 5px 10px;\r\n                        border-radius: 2px;\r\n                        margin-right: 25%;\r\n                        p{\r\n                            margin-bottom: 2px;\r\n                            white-space: nowrap;\r\n                        }\r\n                        span{\r\n                            font-size: 13px;\r\n                            opacity: 0.8;\r\n                            margin-right: 20px;\r\n                            font-family: monospace;\r\n                            white-space: nowrap;\r\n                        }\r\n                    }\r\n                }\r\n                .task-title:hover{\r\n                    background-color: $lt-color;\r\n                }\r\n                .action{\r\n                    position: relative;\r\n                    button{\r\n                        position: absolute;\r\n                        right: 0;\r\n                    }\r\n                }\r\n                .edit{\r\n                    padding: 10px;\r\n                    font-size: 13px;\r\n                    opacity: 0.4;\r\n                }\r\n                .delete{\r\n                    padding: 10px;\r\n                    font-size: 13px;\r\n                    opacity: 0.5;\r\n                    color: $sc-color;\r\n                }\r\n                .edit:hover .delete:hover{\r\n                    opacity: 1;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .add-task-content{\r\n        width: 30vw;\r\n        .add-task{\r\n            form{\r\n                .input-group{\r\n                    display: flex;\r\n                    flex-direction: column;\r\n                    gap: 10px;\r\n                    margin-bottom: 30px;\r\n                }\r\n                input,select{\r\n                    font-size: 15px;\r\n                    line-height: 2rem;\r\n                    outline: none;\r\n                    height: 2.5rem;\r\n                    padding: 0 10px;\r\n                    margin: 0;\r\n                    border: 0;\r\n                    border-bottom: 2px solid;\r\n                    border-radius: 5px 5px 0px 0px\r\n                }\r\n                \r\n                input:focus,select:focus{\r\n                    border-color: #7AC417;\r\n                }\r\n                \r\n    \r\n                button{\r\n                    width: 100%;\r\n                    padding: 0.5rem;\r\n                    background-color: $sc-color;\r\n                    color: white;\r\n                    box-shadow: 2px 2px 10px rgb(0 0 0 / 20%);\r\n                    border-radius: 10px;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\r\n.task-check {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 20px;\r\n    align-items: center;\r\n    position: relative;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n  }\r\n  \r\n  /* Hide the browser\'s default checkbox */\r\n  .task-check input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n  }\r\n  \r\n  .checkmark {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    height: 25px;\r\n    aspect-ratio: 1;\r\n    width: 25px;\r\n    background-color: white;\r\n    border-radius: 100%;\r\n  }\r\n  \r\n  .task-check:hover input ~ .checkmark {\r\n    background-color: white;\r\n  }\r\n  \r\n  .task-check input:checked ~ .checkmark {\r\n    background-color: $tr-color;\r\n  }\r\n\r\n  .task-check input:checked ~ .task-title {\r\n    opacity: 0.3;\r\n    // text-decoration: line-through;\r\n  }\r\n  \r\n  .checkmark:after {\r\n    content: "";\r\n    position: absolute;\r\n    display: none;\r\n  }\r\n  \r\n  .task-check input:checked ~ .checkmark:after {\r\n    display: block;\r\n  }\r\n  \r\n  .task-check .checkmark:after {\r\n    left: 9px;\r\n    top: 5px;\r\n    width: 4px;\r\n    height: 9px;\r\n    border: solid white;\r\n    border-width: 0 3px 3px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    -ms-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n  }\r\n  \r\n\r\n\r\n.toast{\r\n    position: fixed;\r\n    top: 70px;\r\n    right: 20px;\r\n    padding: 10px 20px;\r\n    display: none;\r\n    z-index: 1000;\r\n    background-color: white;\r\n    width: 23%;\r\n    text-align: right;\r\n    border-left: 6px solid #f51b35;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    border-radius: 5px;\r\n    transition: all 0.5ms ease-in-out;\r\n    div{\r\n        display: grid;\r\n        place-content: center;\r\n    }\r\n}\r\n\r\n.toast-display{\r\n    display: block;\r\n}\r\n\r\n\r\n.active-link{\r\n    color: white;\r\n    background-color: #f51b35;\r\n    border-radius: 5px;\r\n    box-shadow: 2px 2px 10px rgb(0 0 0 / 20%);\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .main{\r\n        width: 100%;\r\n    }\r\n    .p-20{\r\n        padding: 15px;\r\n    }\r\n    .add-task-content{\r\n        width: 100% !important;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    body{\r\n        font-size: 0.8rem;\r\n    }\r\n    .content{\r\n        width: 100%;\r\n        .home-content{\r\n            .category-tasks ul{\r\n                display: grid;\r\n                grid-template-columns: repeat(2, 1fr);\r\n            }\r\n        }\r\n    }\r\n}'],sourceRoot:""}]);const i=a},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,A){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);r&&a[d[0]]||(void 0!==A&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=A),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},537:t=>{t.exports=function(t){var n=t[1],e=t[3];if(!e)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),A="/*# ".concat(o," */"),a=e.sources.map((function(t){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(t," */")}));return[n].concat(a).concat([A]).join("\n")}return[n].join("\n")}},379:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var A={},a=[],i=0;i<t.length;i++){var s=t[i],c=r.base?s[0]+r.base:s[0],d=A[c]||0,l="".concat(c," ").concat(d);A[c]=d+1;var p=e(l),C={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(C);else{var u=o(C,r);r.byIndex=i,n.splice(i,0,{identifier:l,updater:u,references:1})}a.push(l)}return a}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var A=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<A.length;a++){var i=e(A[a]);n[i].references--}for(var s=r(t,o),c=0;c<A.length;c++){var d=e(A[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}A=s}}},569:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var A=e.sourceMap;A&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var A=n[r]={id:r,exports:{}};return t[r](A,A.exports,e),A.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();var r={};(()=>{e.d(r,{M:()=>v,z:()=>b});class t{tabBtns;category;section="Priority";taskList=[];constructor(){const t=new URLSearchParams(window.location.search);this.category=t.get("category")||"All",document.getElementById("category").innerHTML=this.category+" Tasks",document.getElementById("date").innerHTML=(new Date).toDateString(),this.dateBtn=document.getElementById("dateBtn"),this.opentab(),this.renderTaskList("Priority"),document.getElementById("task-count").innerHTML=`Total : ${this.taskList.length} tasks`}opentab(){this.tabBtns=document.querySelectorAll(".tab-btn"),this.tabBtns.forEach((t=>{"Priority"===t.name&&t.classList.add("active-tab-btn"),t.addEventListener("click",(t=>{var n,e=document.getElementsByClassName("tab");for(n=0;n<e.length;n++)e[n].style.display="none",e[n].innerHTML="";const r=document.getElementById(t.target.name);r.innerHTML="",r.style.display="block",this.tabBtns.forEach((n=>{n.name===t.target.name?n.classList.add("active-tab-btn"):n.classList.remove("active-tab-btn")})),this.section=t.target.name,this.renderTaskList(t.target.name)}))}))}renderTaskList(t){let n=this.getTaskListType(t);const e=document.getElementById(t);e.innerHTML="",0!==n.length?(n.forEach((t=>{e.innerHTML+=`\n\n            <div>\n              <div class="d-grid-col p-10">\n                <label class="task-check">\n                  <input type="checkbox" id="${t.id}" ${t.checked?"checked":""}>\n                  <span class="checkmark"></span>\n                  <div class="task-title">\n                    <p>${t.title}</p>\n                    <p>\n                        <span>${new Date(t.date).toDateString()}</span>\n                        <span>${new Date(t.date).toLocaleString("en-IN",{hour:"numeric",minute:"numeric",dayPeriod:"narrow",hour12:!0})}</span>\n                    </p>\n                  </div>\n                </label>\n                <div class="action">\n                  <button class="delete" value="${t.id}">&#9587;</button>\n                  \x3c!-- <button class="edit" onclick="((e)=>{e.style.background='red'})(this)" >&#10000;</button> --\x3e\n                </div>\n              </div>\n            </div>\n\n            `})),this.setTaskEvents()):e.innerHTML="<p>No Task Found<p>"}getTaskListType(t){return"Done"===t?this.taskList.filter((t=>!0===t.checked)).sort(((t,n)=>new Date(n.date)-new Date(t.date))):"Pending"===t?this.taskList.filter((t=>!1===t.checked)).sort(((t,n)=>new Date(n.date)-new Date(t.date))):("all"===this.category?this.taskList=b.taskList:this.taskList=b.getCategoryTasks(this.category),this.taskList=this.taskList.sort(((t,n)=>new Date(n.date)-new Date(t.date))),this.taskList)}setTaskEvents(){document.querySelectorAll("input[type='checkbox']").forEach((t=>{t.addEventListener("change",(n=>{n.cancelBubble=!0,n.stopPropagation(),b.updateTask(t.id),this.renderTaskList(this.section)}))})),document.querySelectorAll(".action .delete").forEach((t=>{t.addEventListener("click",(t=>{t.cancelBubble=!0,t.stopPropagation();const n=t.target.value;b.deleteTask(n),this.taskList=b.getCategoryTasks(this.category),this.renderTaskList(this.section)}))}))}}class n{totalTask;doneTask;username=localStorage.getItem("username");constructor(){this.totalTask=document.getElementById("total-task"),this.doneTask=document.getElementById("done-task"),document.getElementById("date").innerHTML=(new Date).toDateString(),document.getElementById("username").innerHTML="Hello, "+localStorage.getItem("username"),this.onInit(),this.navigateEvent()}navigateEvent(){document.querySelectorAll(".cat-list").forEach((t=>{t.addEventListener("click",(t=>{t.cancelBubble=!0,t.stopPropagation(),t.preventDefault();const n="tasks?category="+t.target.id;console.log(n),window.history.pushState({},"",n),v()}),!1)}))}onInit(){this.doneTask.innerHTML=b.taskDone,this.totalTask.innerHTML=b.taskList.length,document.getElementById("c-all").innerHTML=`${b.taskList.length} Tasks`,document.getElementById("c-work").innerHTML=`${b.categoryCount.work} Tasks`,document.getElementById("c-personal").innerHTML=`${b.categoryCount.personal} Tasks`,document.getElementById("c-school").innerHTML=`${b.categoryCount.school} Tasks`,document.getElementById("c-grocery").innerHTML=`${b.categoryCount.grocery} Tasks`}}class o{addForm;constructor(){this.addForm=document.getElementById("addForm"),this.setSubmitEvent();var t=new Date;t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),document.getElementById("t-date").value=t.toISOString().slice(0,16)}setSubmitEvent(){this.addForm.addEventListener("submit",(t=>{t.cancelBubble=!0,t.stopPropagation(),t.preventDefault();const n=new FormData(this.addForm),e={};for(var r of n.keys())e[r]=n.get(r);if(e.date=new Date(n.get("date")),e.checked=!1,e.id=(new Date).getTime().toString(),this.addForm.checkValidity()){document.getElementById("toast").classList.toggle("toast-display"),setTimeout((()=>{document.getElementById("toast").classList.toggle("toast-display")}),1500),b.addTask(e);const t="tasks?category="+e.category;window.history.pushState({},"",t),v()}return!1}))}}e.p;var A=e(379),a=e.n(A),i=e(795),s=e.n(i),c=e(569),d=e.n(c),l=e(565),p=e.n(l),C=e(216),u=e.n(C),g=e(589),h=e.n(g),m=e(315),k={};k.styleTagTransform=h(),k.setAttributes=p(),k.insert=d().bind(null,"head"),k.domAPI=s(),k.insertStyleElement=u(),a()(m.Z,k),m.Z&&m.Z.locals&&m.Z.locals;var b=new class{taskList=[];categoryCount={personal:0,work:0,school:0,grocery:0};taskDone=0;constructor(){this.getAllTasks()}getAllTasks(){const t=localStorage.getItem("tasks");if(null===t)return localStorage.setItem("tasks","[]"),void(this.taskList=[]);this.taskList=JSON.parse(t)}getCategoryTasks(t){return 0===this.taskList.length?[]:"all"===t.toLowerCase()?this.taskList:this.taskList.filter((n=>n.category===t))}setDoneCount(){this.taskDone=this.taskList.filter((t=>!0===t.checked)).length}setCategoryCount(){this.categoryCount={personal:this.getCategoryTasks("personal").length,work:this.getCategoryTasks("work").length,school:this.getCategoryTasks("school").length,grocery:this.getCategoryTasks("grocery").length}}addTask(t){this.taskList.push(t),localStorage.setItem("tasks",JSON.stringify(this.taskList)),this.categoryCount[t.category]++}updateTask(t){const n=this.taskList.findIndex((n=>n.id===t));this.taskList[n].checked=!this.taskList[n].checked,localStorage.setItem("tasks",JSON.stringify(this.taskList)),this.taskList[n].checked?this.taskDone++:this.taskDone--}deleteTask(t){const n=this.taskList.findIndex((n=>n.id===t)),e=this.taskList[n];this.taskList.splice(n,1),this.categoryCount[e.category]--,localStorage.setItem("tasks",JSON.stringify(this.taskList)),e.checked&&this.taskDone--}};b.setCategoryCount(),b.setDoneCount();const x=document.getElementById("outlet"),f=document.getElementById("home"),y={NA:{id:null,component:"./components/404.html",title:"404 | Todo SPA",descripton:"404 page not found"},404:{id:null,component:"./components/404.html",title:"404 | Todo SPA",descripton:"404 page not found"},home:{id:"home",component:"./components/home.html",title:"Home | Todo SPA",descripton:"Home Page",init:()=>new n},tasks:{id:null,component:"./components/tasks.html",title:"Tasks | Todo SPA",descripton:"Tasks Page",init:()=>new t},add:{id:null,component:"./components/add.html",title:"Add Task | Todo SPA",descripton:"Add Task Page",init:()=>new o}};var w="";document.querySelectorAll("a").forEach((t=>{t.addEventListener("click",(t=>{const{target:n}=t;(n.matches("ul li a")||n.matches("#addForm")||n.matches("a#add"))&&(t.preventDefault(),localStorage.getItem("username")&&B(t))}))}));const B=t=>{t.preventDefault();const n=t.target.href||t.target.form.action;window.history.pushState({},"",n),v()},v=async()=>{let t=window.location.pathname.split("/").pop();console.log(t),0===t.length&&(t="home");const n=y[t]||y[404];let e,r="";w!==window.location.href&&(null!==n.id?f.classList.add("active-link"):f.classList.remove("active-link"),r=await fetch(n.component).then((t=>t.text())),x.innerHTML=r,document.title=n.title,document.querySelector('meta[name="description"]').setAttribute("content",n.descripton),w=window.location.href,n.init&&(e=n.init()))};window.onpopstate=v,window.route=B,function(){if(null===localStorage.getItem("username")){x.innerHTML='\n        <section class="add-task-content">\n            <div class="add-task" >\n                <form id="userForm" method="post">\n                    <div class="input-group">\n                        <label for="username" ><h3>Enter your name :</h3></label>\n                        <input type="text" name="username" id="username" required>\n                    </div>\n                    <button type="submit" >Save</button>\n                </form>\n            </div>\n        </section>\n        ';const t=x.querySelector("#userForm");return t.addEventListener("submit",(n=>{n.preventDefault(),n.stopPropagation(),localStorage.setItem("username",t.children[0].children[1].value),v()})),!1}return!0}()&&v()})()})();
//# sourceMappingURL=main.48654941f712dd7b8227.js.map