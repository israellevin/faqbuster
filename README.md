faqbuster
=========

Add annotations as iframe tooltips.

To run this on localhost:

1. Run `python -m SimpleHTTPServer;SimpleHTTPServer` (will serve this folder on port 8080)
2. Drag this bookmarklet to the toolbar:
<a href="javascript:{var js = document.createElement('script'); js.setAttribute('type','text/javascript'); js.setAttribute('src','http://thedod.github.io/reply2smartid/truthmap.js'); document.getElementsByTagName('head')[0].appendChild(js);var js = document.createElement('script'); js.setAttribute('type','text/javascript'); js.setAttribute('src','http://0.0.0.0:8000/faqbuster.js'); document.getElementsByTagName('head')[0].appendChild(js);void(0);}">fqb</a>
(Note that it loads the definition of `truthmap` from [http://thedod.github.io/reply2smartid/truthmap.js](http://thedod.github.io/reply2smartid/truthmap.js)),
3. To test your code, go  [here](http://smartid.gov.il/GeneralInformation/Pages/FAQ.aspx) and click on the bookmark.

