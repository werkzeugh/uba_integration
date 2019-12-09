# Goal:

The goal of this document is to enable you to integrate webpack-based javascript-apps to be embedded within the umweltbundesamt.at website which should surpass future re-designs of umweltbundesamt.at in a most effortless manner. 

## embed your code

For embedding your code you can use a plain-html - Content-Element within the umweltbundesamt-typo3 CMS. Just add your script-tags there 

## external data sources (XHR)

When calling your datasources  via XHR-Requests make sure your Ressources answer properly to OPTIONS-Requests with following headers:

All *.umweltbundesamt.at domains are allowed by default to do cross-Site script requests. 

## Styles:

In General you Style your application within your js-Environment 

There are some CSS classes which you can use to style your content

You Can Test your application styles by using the reference css embed.css. 

This is only used for testing 
All css classes in this document are also present in the Stylesheets used on Umweltbundesamt.at

You cannot rely on styles found in the current implementation of general.css on Umweltbundesamt.at as they might change in bin the future

## Responsive 

All content should behave in a responsive manner and should respect the 100% size of the 
Content element it’s placed in

## accessibility

Applications should be built with Accessibility in mind
WCAG Level 2 is the target to aim for



Codepen

They are all defined in embed.css 


