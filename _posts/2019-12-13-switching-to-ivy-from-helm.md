---
title: Switching from Helm to Ivy
tags: emacs
---

Yet again, I've tweaked my [emacs configuration](https://github.com/ashton314/.dotfiles). The big change this time is switching to [Ivy](https://github.com/abo-abo/swiper) from [Helm](https://emacs-helm.github.io/helm/).

I'd like to say right off the bat that Helm is a great tool. I used it for several months and enjoyed it. Once thing that I love about helm is how discoverable it makes commands and functions. helm also got me into using bookmarks. I don't keep many bookmarks; I tend to collect a few when working on a multi-file project long-term. The bookmark that I use most consistently is to my `.emacs` file; these days I'm fiddling constantly with my settings.

I switched to Ivy because I found its completion options to be *killer* when using [Magit](https://magit.vc/): being able to fuzzy match branch names was sooo nice. I've also liked how Ivy handled completing file names. I *feel* faster. I'm not sure if I'm that much faster navigating around my file tree with it, but it does feel nice. There's so much that Ivy makes better: any function using `completing-read` benefits from Ivy's fuzzy matching.

It's been a gradual process; there's a lot that Helm does out-of-the-box that Ivy took some tweaking to get right. For example, sorting candidates for `M-x` by most recently used was one of my favorite features of Helm. I had to install [Ivy Prescient](https://melpa.org/#/ivy-prescient) to get the behavior I wanted. On top of that, I needed [Counsel](https://github.com/abo-abo/swiper#counsel) to show the key bindings next to their functions in `M-x`. Finally, I like to be able to fuzzy match anywhere within the command name, so I took out the leading `^` in counsel with this:

```elisp
(use-package counsel
  :config
  (ivy-configure 'counsel-M-x :initial-input ""))
```

## Conclusion

Both Helm and Ivy are fantastic packages. They've changed the way I use Emacs and I feel like they've made me substantially more productive and happy. If you haven't used either, you might want to start off with Helm for a nice out-of-the-box experience with loads of features and sensible defaults. However, if you just would like to be able to fuzzy-match things, Ivy is your library. It's fast, clean, and configurable. The only problem is that it sometimes requires configuration before it's exactly how you like it.
