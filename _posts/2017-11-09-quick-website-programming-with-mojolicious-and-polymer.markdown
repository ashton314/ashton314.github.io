---
layout: post
title: Rapid Website Development with Mojolicious and Polymer
date: '2017-11-09 06:19:12'
tags:
- programming
---

My girlfriend works for BYU SA—it's the division of BYU that's responsible for planning and running events. As part of her job, she has to review song lyrics and make sure that the song is okay to play at BYU functions.

This can get rather irksome. Imagine reading text *looking* for vulgar words or phrases. Yuck. I took some time this evening to write a little website that checks [MetroLyrics](http://metrolyrics.com) for any vulgar words or phrases. I have an extensible blacklist which gets initialized at server start by some phrases from [FrontGate](https://www.frontgatemedia.com/a-list-of-723-bad-words-to-blacklist-and-how-to-use-facebooks-moderation-tool/).

I coded this up with [Mojolicious](http://mojolicious.org) and [Polymer Web Components](https://www.polymer-project.org). Polymer might have been a little overkill, but it saved me from writing lots of boring jQuery to set variable.

Here's what the site looks like:

![Sing Clearly](/content/images/2017/11/Screen-Shot-2017-11-08-at-11.12.02-PM.png)

You can look at the code for the repository [here](https://github.com/ashton314/sing_clearly).

This all took about 3 hours, the last of which was spent mostly getting some of the finer points of the user interface to work.

I'd be happy to get some contributions to my project, if anyone is feeling a little bored. ;-) Some more robust song searching would be nice, as well as better heuristics for bad phrases and whatnot.