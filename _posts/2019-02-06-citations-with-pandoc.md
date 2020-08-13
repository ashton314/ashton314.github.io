---
layout: post
title: Citations with Pandoc
date: '2019-02-06 05:03:26'
tags:
- tools
- writing
---

Today I figured out how to get [Pandoc](https://pandoc.org) to automatically generate MLA citations for me!

I used Pandoc and the Biblatex bibliography format. What's nice about this is that you can enter in all the information you know about the source, keep it nice and organized in a file, and then change the citation style on the fly. Imagine if you thought you had to use MLA, but then realized you needed to switch to APA citation styles. You can do that instantly with Pandoc and Biblatex.

First, you'll need [pandoc](https://pandoc.org) and [pandoc-citeproc](http://hackage.haskell.org/package/pandoc-citeproc). (Instructions to install are on the Pandoc website. If you're running macOS, you can use [Homebrew](brew.sh) to install with `brew install pandoc` and `brew install pandoc-citeproc`.)

Next, create a bibliography file. Pandoc can work with many different formats, outlined [in their documentation](https://pandoc.org/MANUAL.html#citations), but I'll show an example with Biblatex, the bibliography database format used with LaTeX.

Example markdown file:

    ---
    title: Irresponsible Encryption
    author: Ashton Wiersdorf
    date: \today
    bibliography: research/refs.bib
    link-citations: true
    cls: Modern Language Association 8th edition
    ---
    
    Imagine a world where every phone call was tapped, where every purchase online could compromise your credit card, and where every one of your online accounts could be hacked. Imagine if every email you sent were scanned, analyzed, and the findings sold to the highest bidder. Imagine if your health, financial, and shopping records were public. That would be the end of our modern life as we know it. That is a real possiblity we are facing. (Especially if you use Gmail—Google has scanned the contents of emails in the past to serve targeted ads. [See @scroogled_blog]) Governments across the world—from the United States to Australia—are pushing or have passed legislation that mandates "exceptional access mechanisms"—means by which they can break encryption if they have a warrant to do so. They point to cases where criminals—from drug dealers to terrorists—have used encryption to conceal evidence against themselves. However, what they are asking for would have its consequences.
    
    
    
    \pagebreak
    
    # References

Note how I have `bibliography: research/refs.bib` at the top of the file. That lets Pandoc know where to go to find the biblography file. Then you can have a database file like this stored in `research/refs.bib`:

    @online{scroogled_blog,
    	Annotation = {Ars Technica reports on this---the scary part is that Google was scanning emails in the first place.},
    	Author = {Diane Greene},
    	Crossref = {ars_scroogled},
    	Date = {2017-06-23},
    	Title = {As G Suite gains traction in the enterprise, G Suite's Gmail and consumer Gmail to more closely align},
    	Url = {https://blog.google/products/gmail/g-suite-gains-traction-in-the-enterprise-g-suites-gmail-and-consumer-gmail-to-more-closely-align/},
    	Urldate = {2019-02-05},
    	Bdsk-Url-1 = {https://blog.google/products/gmail/g-suite-gains-traction-in-the-enterprise-g-suites-gmail-and-consumer-gmail-to-more-closely-align/}}
    
    @online{ars_scroogled,
    	Author = {Ron Amadeo},
    	Date = {2017-06-23},
    	Title = {Scroogled no more: Gmail won't scan e-mails for ads personalization},
    	Url = {https://arstechnica.com/gadgets/2017/06/gmail-will-no-longer-scan-e-mails-for-ad-personalization/},
    	Urldate = {2019-02-05},
    	Bdsk-Url-1 = {https://arstechnica.com/gadgets/2017/06/gmail-will-no-longer-scan-e-mails-for-ad-personalization/}}
    
    ...

Each entry has a _cite key_: something that lets you refer to the citation from within your document. Note how in the markdown file I wrote `[See @scroogled_blog]`. That gets replaced with the following in the final product:

> …Google has scanned the contents of emails in the past to serve targeted ads. (See Greene 2017)…

And at the end of the paper, I get a nice-looking citation like this:

> Greene, Diane. 2017. “As G Suite Gains Traction in the Enterprise, G Suite’s Gmail and Consumer Gmail to More Closely Align.” June 23, 2017. https://blog.google/products/gmail/g-suite-gains-traction-in-the-enterprise-g-suites-gmail-and-consumer-gmail-to-more-closely-align/.

To generate the finished product, I simply run `pandoc --filter pandoc-citeproc paper.md -o paper.pdf`. Poof! Nicely formatted and automatic citations!

To change the citation style, simply alter what is on the line starting with `cls:` in the header. You can find a list of valid styles [here](https://www.zotero.org/styles), with more information [here](https://citationstyles.org/authors/). Good luck with your papers!

