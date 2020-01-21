---
title: Git for Writers
excerpt: "Or: How I Learned to Stop Worrying and Delete Stuff in my Essays with Reckless Abandon"
author: Ashton Wiersdorf
tags: git, writing
---

# Or: How I Learned to Stop Worrying and Delete Stuff in my Essays with Reckless Abandon

I'll confess right up front that I've never written a novel. I tried once during my senior year of high school for NaNoWriMo[^1] but it didn't turn out very well. What I *have* written a lot of is software. I write loads of code. If I took all the code I wrote for just *one* of my larger projects, I'd end up with a small book. I write some code basically every day.

So while I'm not so talented at composing prose, I've worked hard to be able to *manage* the large volume of stuff that I do write in a useful manner. One of the tools I use is [Git](https://git-scm.com). Git was initially developed to be useful for programmers, but it has turned out to be a tool that can be useful for writers, artists, composers—anyone who uses a computer to create long-lived projects.

## Ok, so what could Git possibly do for me?

In a sentance, Git gives your "Undo" key super powers. It also lets you experiment with different versions of your work, and then selectively merge the parts that you like from your experiments back into one cohesive whole. If you need to collaborate with people, Git makes it easy to manage multiple copies of a project offline.

I realize that those might be kind of abstract, so let's look at a use case.

## A made-up tale about a busy writer like yourself

*Or: Version control, the manual way*

Let's say you're writing a story, and let's pretend you're keeping it in folder called `my_story`, and your first draft is in a file called `the_draft.txt`:

```
my_story/
  |
  \-- the_draft.txt
```

Let's say you get to the climax of your story, but you're not sure of how to wrap it up. You create a copy of `the_draft.txt` so you can experiment a little bit:

```
my_story/
  |
  |-- the_draft.txt
  \-- the_draft_ending_1.txt
```

You write your draft, and it's pretty good, but you're not sure if that's really the way you want your story to go. So, you decide to create another copy of `the_draft.txt` and try a different angle:

```
my_story/
  |
  |-- the_draft.txt
  |-- the_draft_ending_1.txt
  \-- the_draft_ending_2.txt
```

So you write that draft, and it's ok. But that draft has given you some ideas that might make your first draft of the ending better, so you you create a copy of `the_draft_endint_1.txt` to try some changes:

```
my_story/
  |
  |-- the_draft.txt
  |-- the_draft_ending_1.txt
  |-- the_draft_ending_1_with_some_2.txt
  \-- the_draft_ending_2.txt
```

But by now a *third* idea for the ending has struck, so you create another copy:

```
my_story/
  |
  |-- the_draft.txt
  |-- the_draft_ending_1.txt
  |-- the_draft_ending_1_with_some_2.txt
  |-- the_draft_ending_2.txt
  \-- the_draft_ending_3.txt
```

Next, the phone rings and your editor asks you for a draft **RIGHT NOW**, but all your work is in this messy, unpolished state. But your editor isn't having any of that and demands to see whatever you've got. You decide that you should `the_draft_ending_3.txt`, as you're currently the most excited about that one. You fire off the email, but as soon as it leaves your outbox, inspiration strikes again and you decide to make some major changes to `the_draft_ending_3.txt`.

Three days go by, and by the end you have a masterpiece in the making. You've made some significant structural changes to your story: some characters die off sooner than you were intending to, your climax has way more emotional oomph, foreshadowing galore, etc.[^2] You lean back in your chair to admire the fruits of your labor, when an email lands in your inbox: it's your editor, and he has inserted a few comments on your story.

You click on the attachment and hit "save". Too late! You forgot to rename the file, and now your beautiful work has been blown away by you saving a file by the same name![^3] You weep and wail and gnash your teeth in frustration. In the midst of your despair, you remember that your computer automatically makes backups every hour! You pick yourself off the ground, fire up the backup interface, and restore your old file.

There are a few pages missing, but it is now far short of a catastrophic data loss. Now you re-download the attachment your editor sent you, this time taking care to rename the file. Now your directory structure looks like this:

```
my_story/
  |
  |-- the_draft.txt
  |-- the_draft_ending_1.txt
  |-- the_draft_ending_1_with_some_2.txt
  |-- the_draft_ending_2.txt
  |-- the_draft_ending_3.txt
  \-- the_draft_ending_3_from_editor.txt
```

Now you have to look at what the editor sent you. You know some tools that will let you do this easily, but it's late so you just open up `the_draft_ending_3_from_editor.txt` and give it a manual perusal. You go slow so you don't miss anything. An hour later and you're pretty sure you've found all the edits the editor wants done. In preparation for applying the changes, you make another copy that you'll use to merge the changes from your editor into your freshly-revised ending 3.

```
my_story/
  |
  |-- the_draft.txt
  |-- the_draft_ending_1.txt
  |-- the_draft_ending_1_with_some_2.txt
  |-- the_draft_ending_2.txt
  |-- the_draft_ending_3.txt
  |-- the_draft_ending_3_from_editor.txt
  \-- the_draft_ending_4_merge.txt
```

By this point, your folder of drafts is getting kinda hairy. What if, the next day, you decide that you want to pull in a substantial portion of ending 1 into ending 3? What if you get more notes from your editor tomorrow that you have to incorporate?

There's a lot you might be asked to do, and you'll have to spend some significant time digging through your files to find the right versions and the various pieces of story that you've written. Is there a better way?

## Version control, but with Git

Well, yes there is a better way.

## I'm intrigued; how do I use it?

There are lots of ways to use Git---people call these "workflows". I'll detail *one* possible workflow here; remember that something different might work better for you.

<!-- Tutorial on basic workflow -->

## What was that you said about having multiple versions?

<!-- Tutorial on branching -->

## I need more power!

Great! Git will give you all the power.

 - [Git Flight Rules](https://github.com/k88hudson/git-flight-rules#to-stage-part-of-tracked-files) — The most comprehensive how-to guide on Git that I've ever seen

[^1]: "National Novel Writing Month", except this was during the month of January, instead of November like it usually is, so we called ours "JanoNanoWriMo".

[^2]: Because, after all, you're writing an epic fantasy novel. If you're not and happen to be writing something like a research paper, replace the word "ending" with something like "conclusion", and "characters die off sooner" with "test results come earlier in the paper" or something like that.

[^3]: I'm aware this situation can usually be mitigated by the operating system asking you if you really want to overwrite an existing file—just imagine you fat-fingered it. I've done that, we've all done that.
