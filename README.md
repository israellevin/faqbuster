faqbuster
=========

Add annotations as iframe tooltips.

Currently hardcoded to work from localhost, so after you clone it you run

    python -m SimpleHTTPServer;SimpleHTTPServer

Then you make sure you have a JS file with the proper name (all non alphanumericals in pathname of faq you want to bust replaced by '-') which defines the truthlinks array of phrases and the URI of the annotation, something like this:

    var truthlinks = [
        ['phrase1', 'http://www.nsa.gov'],
        ['phrase1', 'http://www.nasa.gov']
    ];

And then you run, in the page you want to bust, the following JS as a bookmarklet:

    var js = document.createElement('script'); js.setAttribute('type','text/javascript'); js.setAttribute('src','http://0.0.0.0:8000/faqbuster.js'); document.getElementsByTagName('head')[0].appendChild(js);
