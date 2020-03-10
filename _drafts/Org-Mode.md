---
title: Coming to use Org-Mode
excerpt: "Or: How I Learned to Stop Worrying and Love Plain Text"
tags: emacs, organization
---

<!-- The killer features for me: -->

<!--  - Capture anywhere -->
<!--  - beorg on mobile -->
<!--  - linking between files -->
<!--  - attachments + git = 😍 -->

I'm a bit of a digital organization nut. Ever since I got my first personal digital device (a 4th-gen iPod Touch) I've been obsessed with keeping my notes, todo-lists, and calendars in some digital form. I tried using [Bullet Journal](https://bulletjournal.com/pages/learn) for a while and I liked it a lot. However, I didn't like relying on a physical notebook that I was prone to forget at home, and I missed digital indexing and being able to copy-paste web articles in with my notes. So, digital it is.[^1]

I used [Evernote] for a long while, and I liked it. However, with some changes to their business and privacy models, I decided to switch off of that. Besides, they never had a terminal accessible client.

For the past few years most of my notes have lived in [Deft] in [Emacs]. I was pretty happy with how that was working. I wanted to find a solution for my todo lists though, especially for school assignments. I tried a few homework-tracking apps, but none really jived with me. I eventually tried using [Trello], and that worked pretty well for a few semesters.

Then I found Org-mode.

## The Path to Understanding

Org-mode can be difficult to get a handle on. It took me a while to get into it. What follows is roughly my piecemeal path to understanding Org-mode.

### Starting simple

Let’s just start with a single file. Imagine you have a project that you’re working on, and you want a single place to put your TODOs. Create a file called `my_project.org` and open it up. Add some metadata at the top of the file like so:

```
#+TITLE: My Project
#+DATE: 2020-03-14
#+AUTHOR: Ashton Wiersdorf
```

These are *optional*—they do make exporting org to different formats much nicer.

Now let's start creating some tasks.

### Using agendas with multiple files

Other nice features:
 - Code blocks that you can eval
 - Smart lists
 - Heck, it even gives you spreadsheets
 - Solid knowledge base

[^1]: I would like to note that I am a avid advocate of taking class and meeting notes by hand. There have been [some studies] done that show that it is dramatically more effective.
