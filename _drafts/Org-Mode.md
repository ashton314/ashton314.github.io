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

For the past few years most of my notes have lived in [Deft] in [Emacs]. I was pretty happy with how that was working. I wanted to find a solution for my todo lists though, especially for school assignments. I tried a few homework-tracking apps, but none really jived with me. I eventually tried using [Trello], and that worked pretty well for a few semesters. It still wasn't perfect though.

Then I found Org-mode.

## The Path to Understanding

Org-mode can be difficult to get a handle on. There's so much that it can do, that it's hard to know where to start. It took me a while to get into it. What follows is roughly my piecemeal path to understanding Org-mode. I went step-by-step, acquiring something that was immediately useful to me at that time. I've tried to capture that here.

### Starting simple: a TODO list for a project.

Let’s just start with a single file. Imagine you have a project that you’re working on, and you want a single place to put your TODOs. Create a file called `my_project.org` and open it up. Add some metadata at the top of the file like so:

```org
#+TITLE: My Project
#+DATE: 2020-03-14
#+AUTHOR: Ashton Wiersdorf
```

Note that these lines are *optional*—they're not necessary, but they do make exporting org to different formats much nicer.

Now let's start creating some tasks.

A basic task looks like this:

```org
* TODO Bake cookies for mom
```

The `*` at the start of the line marks this as a level-1 heading. (Much like a single `#` in Markdown.) Headlines can go as deep as you like by adding astrisks. (Again, like adding octothorps in Markdown, except Markdown can only go 6 levels deep.)

Any headline can become a `TODO` item by adding `TODO` at the start of the headline text. That `TODO` represents the *state* that task is in. The default states are blank, `TODO`, and `DONE`. You can cycle through these by putting your cursor on the headline, holding `shift`, and using the left/right arrow keys.

We'll cover more about `TODO` states later.

Normally I like putting all my TODOs in a flat list at the root of my project. My file looks kinda like this:

```org
#+TITLE: Compiler Project

* DONE Finish writing regression tests for the compiler as it stands
* DONE Create two compile phases
* TODO Add query primitives
* TODO Find documentation for the target platform
```

Sometimes I do a little more of a complex nesting, if I want to, say, keep notes and TODO items in the same file:

```org
#+TITLE: Compiler Project

* Tasks
** DONE Finish writing regression tests for the compiler as it stands
** TODO Find documentation for the target platform
* Notes
** 2020-03-15
Lorem Ipsum dolor sit amet…
```

Org mode lets you collapse sections: move your cursor to a headline and hit TAB; this will cycle the visibility of the items under that headline.

Don't worry about loosing stuff in your tree; org mode has fantastic searching/narrowing/filtering features to help extract all the nodes with TODO status marked on them. In fact, this is part of the genius of org mode, because it lets you freely intermix notes and TODO items.

### More complex TODO items

<!-- TODO: talk about deadlines and tags -->

### Using agendas with multiple files

Other nice features:
 - Code blocks that you can eval
 - Smart lists
 - Heck, it even gives you spreadsheets
 - Solid knowledge base

[^1]: I would like to note that I am a avid advocate of taking class and meeting notes by hand. There have been [some studies] done that show that it is dramatically more effective.
