---
layout: post
title: Marked Man
featured: true
date: '2019-01-24 03:54:51'
tags:
- tools
- happy-things
- programming
---

Marked Man (mm) is a little program I wrote to view Markdown files like UNIX man pages. (Because who wants to leave their terminal just to open a file?)

It uses [Pandoc](https://pandoc.org) to convert between Markdown and the `groff` format. As a happy side-effect, this program can read basically _anything_ as a man page: HTML, LaTeX, Word files (seriously), ePub, etc. Anything that Pandoc can read, Marked Man can handle.

## Installing

I'm working on getting this set up with [Homebrew](brew.sh). For now, check out my GitHub repository [here](https://github.com/ashton314/homebrew-mm).

