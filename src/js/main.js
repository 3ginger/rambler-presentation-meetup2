//add debug panel
(function(){
    var dp = document.getElementById('debug-panel');
    function toggleDebugPanel() {
        if(dp.classList.contains('active')) {
         dp.classList.remove('active');
        } else {
            dp.classList.add('active');
        }
    }

    window.onkeyup = function(e) {
        if (e.keyCode == 73 && e.ctrlKey && !e.shiftKey) {
            toggleDebugPanel();
        }
    };

    function _addMessage(message) {
        if(dp) {
            var e = document.createElement('pre');
            e.innerHTML = message;
            dp.appendChild(e);
        }
    }

    window.debug = {
        addMessage:_addMessage
    };
})();

// Avoid console errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

//RAF
(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                    callback(currTime + timeToCall);
                },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());


debug.addMessage('Hello debug');



(function() {
    var technologes = ["Jade", "HTML", "HTML5", "CSS3", "CSS3", "JavaScript", "underscore", "jQuery", "D3js", 
                        "DHTML", "PHP", "XML", "XSLT", "AJAX", "DNS", "CMS", "SEO", "IP", "Python", "Ruby", "Go", "R", 
                        "C++", "Firefox", "Internet Explorer", "Google Chrome", "Opera", "Yandex Browser", "Safari", 
                        "Android", "Linux", "UNIX", "Windows", "Ubuntu", "Fedore", "Apple", "OpenBSD", "Solaris", 
                        "Vagrant", "MacOS", "Minix", "AngularJS", "BackboneJS", "React", "Angular 2", "ECMAscript 6", 
                        "Grunt", "Bower", "NPM", "Node.js", "RxJS", "TypeScript", "MeteorJS", "KnockoutJS", "SCSS", 
                        "Stylus", "LESS", "Gulp", "Sublime Text", "WebStorm", "PyCharm", "Django", "Symfony", "Flask", 
                        "Facebook", "VK", "Twitter", "Odnoklassniki", "Google+", "LiveJournal", "KISS", "CoffeeScript", 
                        "Canvas", "SVG", "WebSocket", "WebStorage", "Drag&Drop", "Agile", "Scrum framework", "TDD", "БЭМ", 
                        "SOLID", "REST", "CORS", "Continuous integration", "git", "e2e", "karma", "Flash", "Dragonbone", 
                        "Nape", "Box2d", "Objective C", "Cocos2d", "TreeJS", "Unity", "Unreal engine", "motor2", "PureMVC", 
                        "Google Maps API", "Action Script 3", "Action Script 2", "DOM", "require.js", "browserfy.js", 
                        "Polymer", "MeteorJS", "ExtJS", "derby.js", "MV*", "MVC", "Spine", "Dojo", "YUI", "Ember.js", "CanJS", 
                        "Knockback.js", "Mithril", "TroopJS", "Firebase", "Express", "VanillaJS", "Vue.js", "Marionette.js", 
                        "BootstrapJS", "HTML5 ★ BOILERPLATE"];
    var choosenTechs = ["Jade", "Stylus", "D3js", "BackboneJS", "underscore", "Grunt"];
    var choosenTechs2 = ["Jade", "Stylus", "D3js", "Grunt"];

    var colors = d3.scale.category10();
    function getRandomPercent(max) {
        max = max || 100;
        return Math.floor(Math.random()*max) + '%';
    }
    function getRandomValue(min, max) {
        return min + Math.floor(Math.random()*(max - min));
    }
    function setNewStylesForWords(wordViews) {
        wordViews.classed('selected', false)
            .style('opacity', 1)
            .style('left', function() { return getRandomPercent(95);})
            .style('top', function() { return getRandomPercent();})
            .style('font-size', function() {return getRandomValue(3, 6) + 'rem';})
            .style('color', function() { return colors(Math.floor(Math.random()*10));});
    }

    
    var curPage = 0, lastPage = 9;
    var faderLayer = d3.select('.fader.layer');
    var wordsLayer = d3.select('.words.layer');
    var wordViews = wordsLayer.selectAll('.word')
        .data(technologes, function(d) {return d;})
        .enter()
        .append('div')
        .attr('class', 'word')
        .text(function(d) {return d;});

    var intervalID = null;
    function startWords() {
        if(intervalID === null) {
            setNewStylesForWords(wordViews);
            intervalID = setInterval(function() {
                setNewStylesForWords(wordViews);
            }, 2000);
        }
    }

    function activateSlide() {
        d3.selectAll('.window').classed('disabled', true);
        startWords();
        faderLayer.style('opacity', 0.6);
        if(curPage === 0) {
            d3.select('.titled.window').classed('disabled', false);
        } else if(curPage === 1) {
            d3.select('.subtitled.window').classed('disabled', false);
        } else if(curPage === 2) {
            showChoosenWords(choosenTechs);
            faderLayer.style('opacity', 0);
        } else if(curPage === 3) {
            d3.select('.iterative-nature.window').classed('disabled', false);
            faderLayer.style('opacity', 0.8);
        } else if(curPage === 4) {
            d3.select('.refactoring.window').classed('disabled', false);
            faderLayer.style('opacity', 0.8);
        } else if(curPage === 5) {
            d3.select('.refactoring-plus.window').classed('disabled', false);
            faderLayer.style('opacity', 0.8);
        } else if(curPage === 6) {
            d3.select('.refactoring-other-plus.window').classed('disabled', false);
            faderLayer.style('opacity', 0.8);
        } else if(curPage === 7) {
            d3.select('.choose-tech.window').classed('disabled', false);
            faderLayer.style('opacity', 0.8);
        } else if(curPage === 8) {
            d3.select('.convenience.window').classed('disabled', false);
            faderLayer.style('opacity', 0.8);
        } else if(curPage === 9) {
            showChoosenWords(choosenTechs2);
            faderLayer.style('opacity', 0);
            d3.select('.about.window').classed('disabled', false);
            d3.select('.thanks.window').classed('disabled', false);
        }
    }

    function showChoosenWords(words) {
        clearInterval(intervalID);
        intervalID = null;
        wordViews.style('opacity', 0);
        wordsLayer.selectAll('.word').data(words, function(d) {return d;})
            .classed('selected', true)
            .style('opacity', 1)
            .style('left', '0')
            .style('top', function(d, i) {return 20 + 10 * i + '%';})
            .style('font-size', '5rem');
    }


    d3.select('.left.button').on('click', function() {
        curPage--;
        curPage = curPage < 0 ? 0 : curPage;
        console.log('cur page =', curPage);
        activateSlide();
    });

    d3.select('.right.button').on('click', function() {
        curPage++;
        curPage = curPage > lastPage ? lastPage : curPage;
        console.log('cur page =', curPage);
        activateSlide();
    });

    activateSlide();
    
})();
