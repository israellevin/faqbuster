(function(){'use strict';
    // Default out-of-the-box truthmap url from http://is.gd/js/shtikipedia
    var default_truthmap_url = 'http://thedod.github.io/reply2smartid/truthmap.js';
    var jq = window.jQuery;
    var gotjq = function(){
        var jsdata, truthlinks, $, body, cover;

        // To speed up loading, truthmap should be defined as the tomodo include
        // truthmap.js, but if it ain't we load it ourselves (from default_truthmap_url)
        // and bail till it loads.
        if('undefined' === typeof truthmap){
            jsdata = document.createElement('script');
            jsdata.setAttribute('type','text/javascript');
            jsdata.setAttribute('src', default_truthmap_url);
            jsdata.onreadystatechange = jsdata.onload = function(){
                jsdata.onreadystatechange = jsdata.onload = null;
                gotjq();
            };
            document.getElementsByTagName('head')[0].appendChild(jsdata);
            return;
        }

        truthlinks = truthmap[location.pathname];
        if('undefined' === typeof truthlinks) return; // not loaded yet

        $ = jq;
        body = $('body');
        cover = $('<div id="faqbustercover">').css({
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100%',
            height: '100%',
            background: 'black',
            opacity: '0.5',
            zIndex: '99'
        }).hide().appendTo(body).click(function(){
            cover.closer.fadeOut();
            $('iframe.faqbusterframe:visible').fadeOut();
            cover.fadeOut();
            return false;
        });
        cover.closer = $('<img src="http://openiconlibrary.sourceforge.net/gallery2/open_icon_library-full/icons/png/24x24/actions/dialog-close-2.png">').css({
            position: 'fixed',
            top: '0px',
            left: '0px',
            zIndex: '101'
        }).appendTo(body).click(function(){cover.click();});

        // Patch to hide on scroll (issue #2)
        $(document).scroll(function() {cover.click();});
        $.each(truthlinks, function(linkidx, link){
            var phrase = link[1];
            var selector = link[0]+':contains("' + phrase + '")';
            $(selector).first().each(function(i, node){
                node = $(node);
                node.html(node.html().replace(phrase, '<a class="faqbusterlink faqbusterlink' + linkidx + '" href="#">' + phrase + '</a>'));
            });
        });
        // Has to be a new each, even if it looks the same.
        $.each(truthlinks, function(linkidx, link){
            var uri = link[2];
            // truthroot is defined at truthmap.js
            var frame = $('<iframe style="position: fixed; z-index: 100;" class="faqbusterframe" src="' + truthroot + uri + '">').hide().appendTo(body);
            body.find('a.faqbusterlink' + linkidx).click(function(e){
                var phrase = $(this);
                var frameoffset = phrase.offset();
                var closeroffset = phrase.offset();
                frameoffset.top += phrase.height();
                closeroffset.left += frame.width();
                cover.fadeIn();
                frame.css({top: '0px', left: '0px'}).offset(frameoffset).fadeIn();
                cover.closer.css({top: '0px', left: '0px'}).offset(closeroffset).fadeIn();
                return false;
            });
        });
        $('a.faqbusterlink').first().click();

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
