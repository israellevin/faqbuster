faqbuster
=========

Add annotations as iframe tooltips.

To run the http://is.gd/shtikipedia example on localhost:

1. Run `python -m SimpleHTTPServer;SimpleHTTPServer` (will serve this folder on port 8080)
2. Drag this bookmarklet to the toolbar:
<a href="javascript:{var style=document.createElement('link');style.rel='stylesheet';style.type='text/css';style.href='https://publishedmodfiles.s3.amazonaws.com/1099/usermod-45.css';document.getElementsByTagName('head')[0].appendChild(style);var js=document.createElement('script');js.setAttribute('type','text/javascript');js.setAttribute('src','http://thedod.github.io/reply2smartid/truthmap.js');document.getElementsByTagName('head')[0].appendChild(js);js=document.createElement('script');js.setAttribute('type','text/javascript');js.setAttribute('src','http://0.0.0.0:8000/faqbuster.js');document.getElementsByTagName('head')[0].appendChild(js);void(0);}">fqb</a>
   (Note that it loads the the external [js](http://thedod.github.io/reply2smartid/truthmap.js) and
   [css](https://publishedmodfiles.s3.amazonaws.com/1099/usermod-45.css";document.getElementsByTagName('head) files).
3. To test your code, go  [here](http://smartid.gov.il/GeneralInformation/Pages/FAQ.aspx) and click on the bookmark.

