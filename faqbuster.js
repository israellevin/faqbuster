(function(){'use strict';
    var jq = window.jQuery;
    var gotjq = function(){
        var contentroot = 'http://thedod.github.io/reply2smartid/';
        // truthmap is defined as the tomodo include truthmap.js
        // A git-maintained version (if you contrib) is at
        // http://thedod.github.io/reply2smartid/truthmap.js
        var truthlinks = truthmap[location.pathname];
        if (truthlinks) {
            var $ = jq;
            var body = $('body');
            var cover = $('<div>').css({
                position: 'fixed',
                top: '0px',
                left: '0px',
                width: '100%',
                height: '100%',
                background: 'black',
                opacity: '0.5',
                zIndex: '99'
            }).hide().appendTo(body).click(function(){
                $($.find('iframe.faqbusterframe')).fadeOut();
                $(this).fadeOut();
                return false;
            });
            console.log('make links');
            $.each(truthlinks, function(linkidx, link){
                var phrase = link[1];
                var selector = link[0]+':contains("' + phrase + '")';
                console.log("Making link: "+selector);
                $(selector).first().each(function(i, node){
                    node = $(node);
                    node.html(node.html().replace(phrase, '<a class="faqbusterlink faqbusterlink' + linkidx + '" href="">' + phrase + '</a>'));
                });
            });
            console.log('bind the clicks');
            // Has to be a new each, even if it looks the same.
            $.each(truthlinks, function(linkidx, link){
                var uri = link[2];
                var frame = $('<iframe style="position: fixed; z-index: 100;" class="faqbusterframe" src="' + contentroot + uri + '">').hide().appendTo(body);
                body.find('a.faqbusterlink' + linkidx).click(function(e){
                    console.log('here');
                    var phrase = $(this);
                    var offset = phrase.offset();
                    offset.top += phrase.height();
                    frame.css({top: '0px', left: '0px'}).offset(offset);
                    cover.fadeIn()
                    frame.fadeIn();
                    return false;
                });
            });
        };

        jsdata = document.createElement('script');
        jsdata.setAttribute('type','text/javascript');
        jsdata.setAttribute('src', jsdatauri);
        jsdata.onreadystatechange = jsdata.onload = function(){
            jsdata.onreadystatechange = jsdata.onload = null;
            gotjsdata();
        };
        document.getElementsByTagName('head')[0].appendChild(jsdata);
    };

    if('undefined' === typeof jq){
        jq = document.createElement('script');
        jq.setAttribute('type','text/javascript');
        jq.setAttribute('src','http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js');
        jq.onreadystatechange = jq.onload = function(){
            jq.onreadystatechange = jq.onload = null;
            gotjq();
        };
        document.getElementsByTagName('head')[0].appendChild(jq);
    }else gotjq();
}());
