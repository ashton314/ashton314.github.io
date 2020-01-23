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

I use Git for just about everything: from code to research notes to this blog post! I kept track of different revisions of this essay in Git, sent it to my wife for edits, and eventually published it all with Git. Git can do a lot.

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

So you write that draft, and it's ok. But that draft has given you some ideas that might make your first draft of the ending better, so you you create a copy of `the_draft_ending_1.txt` to try some changes:

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

There's a lot you might be asked to do, and you'll have to spend some significant time digging through your files to find the right versions and the various pieces of story that you've written. Is there a better way? Well, yes. That better way is with Git.

## Version control, but with Git

Git will handle all the file copying for you. Git also lets you annotate parts of the history of your files so you can easily refer back to earlier points, compare what changed, etc. Git also makes branching to try out different versions of something *really* easy: you have have as many branches as you like (all of them get a name so you can keep track of what's waht) and you can then selectively merge the versions as you see fit. It's very handy.

Let's just look at a simple case of *keeping track of history* with Git.

> Brief note: There are lots of ways to use Git—people call these "workflows". I'll detail *one* possible workflow here; remember that something different might work better for you.

I've kept the nitty-gritty how-to instructions saved in an [appendix](#appendix1) that you can reference if you need to. The reason why I've done this is so that if you are already familiar with the minutia, you can just read a high-level description of working with Git.

### Keeping Track of History

Let's start back at the beginning when you have just one file you'd like to keep track of:

```
my_story/
  |
  \-- the_draft.txt
```

[Create a repository](#initilize-a-repository) at this point and [make a commit](#committing-a-file) to start tracking the changes to `the_draft.txt`.

> *Commit*: like pressing "Save", but stores a permanent snapshot of the files. Remember when we copied "the_draft.txt" when we got to a point that we liked and wanted to start experimenting with a copy? That "copy" action is very much like a commit. You can think of it as Git will copy your files into the repository.

Great! Now, the directory looks the same as before, but we can start trying stuff out without worying about loosing the hard work we've already made. Go ahead and open up `the_draft.txt` and make some catastrophic edits—delete stuff, add nonsequiter jokes, kill off all your central characters, etc.

Hit the "Save" button as much as you want. Cool. Now your work is in shambles. Let's get it back, shall we? Since we haven't committed any of the changes, we can easily roll them back. Go ahead an [revert the changes](#revert-changes-in-the-working-directory). Once you're done with that, open `the_draft.txt` again and check to make sure that all your aweful changes have been undone. Cool, huh?

<!-- Talk about saving work -->

There's a lot more you can do. You can jump back to any previous commit, or compare your current files with a previous version of a file. I won't cover that here, though. Maybe in a later blog post.

## What was that you said about having multiple versions?

<!-- Tutorial on branching -->

## I need more power!

Great! Git will give you all the power. Unfortunately, I can't document all the ways that Git can help you. Instead, I'll just point you to some resources that might help:

 - [Hello World](https://guides.github.com/activities/hello-world/) — A gentle introduction to using Git and GitHub for non-coders.
 - [Git Handbook](https://guides.github.com/introduction/git-handbook/) — A quick and simple overview of the Git CLI[^4].
 - [Git Flight Rules](https://github.com/k88hudson/git-flight-rules#to-stage-part-of-tracked-files) — The most comprehensive how-to guide on Git that I've ever seen. If there's something you want to do, this will almost certainly have directions for how to do it. Good resource for if something goes wrong.

{#appendix1}
## Appendix: How-To Actions

I've deliberately left out the concrete details of what you need to type/what buttons you need to click to effect the various actions; instead, I've collected the actions here so that this post will be useful to you, whether you use a command-line or something like [Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807) for iOS.

#### Initilize a Repository

**CLI**:

1. Move into the folder where you want to create the repository

        $ cd ~/projects/my_story/

2. Initilize the repository

        $ git init

#### Committing a File

You need to tell Git to start tracking the changes to a file. If you don't, Git will not ever touch it. That means when you switch branches or roll back history, the file will remain untouched. (I.e. It won't be deleted.) Only do this for files that might be automatically generated from other files you're tracking, like a PDF generated from a Markdown document, for instance. You'd track the Markdown, but not the generated PDF because the PDF can be created at any time from the Markdown.

Once a file has been committed once, Git will watch for changes.

Committing is a two-step process: first, you tell Git *which* files you'd like to commit. (This is called "staging"—don't worry about it too much.) Next, you tell Git to commit those files along with a brief description about what you changed.

**CLI**:

1. Tell Git what files to commit this round

        $ git add the_draft.txt
    
   You can do this as many times as you like; if you add the same file multiple times, only the last version will be saved.

2. (Optional) Tell Git to add *all* changed files to the commit

        $ git add -A
    
    Only use this if you are *sure* you want to commit everything.

3. Make the commit

        $ git commit -m "Replace what's here with a good short message"

#### Revert Changes in the Working Directory

After we commit, we can make as many changes as we like to the files in the folder our repository is watching, and easily get back to the state the folder was in when we committed.

**CLI**:

1. Tell Git to replace your changes with the last thing you committed

        $ git checkout -- <file>

## Footnotes

[^1]: "National Novel Writing Month", except this was during the month of January, instead of November like it usually is, so we called ours "JanoNanoWriMo".

[^2]: Because, after all, you're writing an epic fantasy novel. If you're not and happen to be writing something like a research paper, replace the word "ending" with something like "conclusion", and "characters die off sooner" with "test results come earlier in the paper" or something like that.

[^3]: I'm aware this situation can usually be mitigated by the operating system asking you if you really want to overwrite an existing file—just imagine you fat-fingered it. I've done that, we've all done that.

[^4]: CLI: Abbreviation for *Command Line Interface*.
