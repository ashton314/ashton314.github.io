---
title: Git for Writers
excerpt: "Writing is hard enough. Let tools make it easier."
prepend_excerpt: true
author: Ashton Wiersdorf
tags: git, writing
---

Goals for draft 2:

 - Cut out a lot of the detailed instruction; point elsewhere
 - Halve the length
 - More on collaboration
 - Target a student audience

Writing is hard, and writing with other people is worse. Between group papers, computer crashes, and endless revisions, there’s a lot of headache that accompanies writing.

I write a fair amount, both prose and software. One of the tools I use when I write is [Git](https://git-scm.com). Git was initially developed to be useful for programmers, but I have found it to be useful for writing as well. In fact I used Git extensively while writing this blog post!

I’m going to show you why you might want to use Git for personal and collaborative writing projects. It protects from data loss, eases collaborative work, and helps you manage revisions. Most of the how-to stuff I’ll leave to the plethora of excellent guides that have already been created and instead focus on bigger-picture reasons and use cases.

## The Headache

We all have folders for papers with a bunch of files named something like this:

 - `my_paper.txt`
 - `my_paper_final_verson.txt`
 - `my_paper_rough_draft.txt`
 - `my_paper_final_version_2.txt`
 - `my_paper_final_version_2 (1).txt`
 - `my_paper_last_revisions.txt`

Which one is the most up-to-date copy? What if something crucial is missing from the final draft that got left in some abandoned draft?

Group papers are bad too. What happens if one of your colleagues "helpfully" makes some corrections to your assigned section and forgets to tell you? Then you go back into the Google Doc or whatever, paste over your new content (because you've been editing that same section too) and now their edits are gone. Then you start playing a blame-game to see who's fault it is for stepping on the other's toes.

Yuck.

Let's take Git out for a spin, starting with that aweful mess of file names.

## Version Control

*Or: Use the same file and never loose anything!*

Essentially, Git will handle the "version X" blob we often stick at the end of file names to mark different versions. You won't *see* those other files *per se*—in fact, we just use one file name—but you will be able to go back to previous versions of your files, see what's in them, and see what changed.

You might think of Git as a fancy backup system. It’s true that it can act like a backup system. It might be more helpful to think if Git as a *journaling system* instead: Git helps you record what you changed and why. For software projects, this can be enormously helpful: you can see the rationale behind different design decisions. When writing a paper, you can use the journal behavior to see what you wrote at any given point in time as well as some notes about what you were thinking when you wrote it. When working with a group, this is even more helpful, because it lets you see *who* wrote *what*, *when*, and *why*.

Let's try it out on a sample paper.

You can do the following in one of two ways:

 1. Use GitHub[^13]; there's a nice introduction [here](https://guides.github.com/activities/hello-world/) on getting started with your first repository.

 2. Use Git on your own computer.

    Most Git users I know use the command line, but if you aren't comforable with that, there are a [host of interfaces](https://git-scm.com/downloads/guis) that you can download. I don't know much about Windows or macOS clients, but if you're working on iOS I highly recommend [Working Copy](https://workingcopyapp.com/).

Once you've got Git and a way to interact with it, you'll need to make a new repository. Follow the instructions for your respective Git client to do that.

Next, let's create a new file. Call it `my_essay.txt` or something like that and throw [some random text](https://duckduckgo.com/?q=5+paragraphs+of+lorem+ipsum&ia=answer&iax=answer) into it. (Important: use a plain-text format like text (`.txt`), Markdown (`.md`, `.markdown`), Org-mode (`.org`), or LaTex (`.tex`). Non-plaintext formats like Word (`.doc`, `.docx`) and Pages (`.pages`) files don't play nicely.)

Next, you'll make a *commit*: a commit is like saying "Git, please remember the contents of these files as they are at this moment forever; also, I'd like to note that..." Essentially you're making a journal entry which includes a copy of your files as well as whatever notes you add to that entry. Usually these notes are what you changed since the last time you did this.

This solves the problem of messy file names: instead of creating `my_essay.txt` and then one week later copying it so you don't loose it and start working on `my_essay_draft_2.txt` or something, you just keep making commits which will mark each version automatically without any of the extra files.

You can view the notes you wrote on each of your journal entries, (this is called the "log", on the command line you say `git log` to see a list of commits; see your Git client's instructions on how to do this) and you can view the changes made to files at each point. You can even get back the changes you made at *any point* in history. Again, see your Git client for specifics on how to do that. Look for things like `git log --patch`, `git checkout`, and `git cherry-pick`.

With that being said, it's important you commit often. I commit roughly once an hour when I'm working on a project, but sometimes it's once every five minutes. When in doubt, err on the side of more commits.

<!-- Old stuff starts here -->

## Branches, i.e. well-organized copies

<!-- Consider treating branches purely as a way to make drafts and copies---collaboration is tricky to do right and would take a fair amount of time to explain. GitHub's tutorials do a better job of that then I could possibly do. -->

Sometimes when writing a program (or an essay, a book, etc.) you'll come to a point where you want to start making a bunch of potentially-risky edits. By "potentially-risky", I mean edits that you might want to throw away, but to reverse all your changes would be hard, tedious, or impossible to do. I actually came to that point when I started writing this section of my blog post![^11]

Every commit marks a point in your repository's history.I'll help you visualize it with a box. This is a commit:

<img src="/assets/img/git_diagrams/initial_commit.png" alt="Initial commit" title="Single commit with no predecessor" height="66.7px">
<!-- ![Initial commit](/assets/img/git_diagrams/initial_commit.png "Single commit with no predecessor") -->

That funny eight-character code is the name of the commit. Git generates these automatically, and they're  unique to each commit. You won't have to worry about it until you start doing more advanced stuff with Git. I'm just putting it here for some visual distinction between commits.

The commit remembers the state of the files in your repository at the time you made the commit, as well as the commit message you assigned to that point.

<img src="/assets/img/git_diagrams/inital_commit_with_message.png" alt="A commit showing date, author, metadata" height="150px">
<!-- ![A commit showing date, author, metadata](/assets/img/git_diagrams/initial_commit_with_message.png) -->

Every commit also remembers what commit came before it. As you create commits, it starts looking like links in a chain:

<img src="/assets/img/git_diagrams/two_commits.png" alt="Two commits" title="See! It looks like a chain!" height="66.7px">
<!-- ![Two commits](/assets/img/git_diagrams/two_commits.png "See! It looks like a chain!") -->

Each time you make a commit it adds a new link to the chain:

![Three commits linked together](/assets/img/git_diagrams/three_commits.png "And another commit, etc…")

On each node there's another commit message:

![Chain of commits with a message showing](/assets/img/git_diagrams/three_commits_with_message.png)

We call the tip of that chain a *branch*, and it's name is the `master` branch. You can have one or many branches, each with their own name, but you must always have a `master` branch.[^12] Here's a diagram of a new branch called `dangerous-edit`.

![Creating a new branch](/assets/img/git_diagrams/branch_with_labels.png)

<blockquote class="callout">
A *branch* is like a named copy of your work. Every Git repository has a branch named `master`.
</blockquote>

Why would anyone want to use branches? Experimenting with ideas is one good reason. When I was about to start rewriting this section, my chain of commits looked something like this:

![Three commits linked together](/assets/img/git_diagrams/three_commits.png "These commits are actually from a different place in my repository's history—but they're real! You can see them on GitHub.")

When I knew I would be deleting a bunch of stuff, I didn't know if I would like the changes, so I created a new branch and called it `dangerous-edit`.

![Creating a new branch](/assets/img/git_diagrams/branch_with_labels.png)

I was able to hop between the branches; when I worked on this post I would make the edits on `dangerous-edit`, but when I needed to modify something else on my blog, I did those changes on `master`.

Eventually, I got this to the point where I was happy with my commits, so I [merged](#merge-branches) `dangerous-edit` into the `master` branch:

![Merger of two branches](/assets/img/git_diagrams/two_branch_merge.png)

You might not always want to keep your changes on a branch. Then your tree might look like this:

![A branch that has been abandoned](/assets/img/git_diagrams/abandoned_branch.png)

You can just leave those branches. You can also delete them too if you're sure you don't ever want to reference them again.

Branches are a nice way of making experimental edits. You can also use them for collaboration: each person working on something can have their own branch. As the authors are ready to share what they've been working on, they can merge their branches into `master`. Collaboration is a complex topic; I'll let GitHub handle that. (See the [next section](#i-need-more-power).)

Git will automatically try to merge files. It gets everything right a surprising amount of the time. However, if the same line in a file has been changed on both branches, it will stop and ask the human to resolve the conflict. Git can also only merge text-based files. Using Microsoft Word or Apple Pages will not work as well. (You can still keep track of history, though.) I have [heard of work-arounds](http://blog.martinfenner.org/2014/08/25/using-microsoft-word-with-git/), but I've never seen them actually used.

## I need more power!

Great! Git will give you all the power. Unfortunately, I can't document all the ways that Git can help you. Instead, I'll just point you to some resources that might help:

 - [Hello World](https://guides.github.com/activities/hello-world/) — A gentle introduction to using Git and GitHub for non-coders.
 - [Git Glossary](https://help.github.com/en/github/getting-started-with-github/github-glossary) — Definition of common Git terms.
 - [Git Handbook](https://guides.github.com/introduction/git-handbook/) — A quick and simple overview of the Git CLI[^4].
 - [Pro Git](https://git-scm.com/book/en/v2) — An in-depth manual for Git. If you need to get the most out of Git, this is the book for you.
 - [Git Flight Rules](https://github.com/k88hudson/git-flight-rules#to-stage-part-of-tracked-files) — The most comprehensive how-to guide on Git that I've ever seen. If there's something you want to do, this will almost certainly have directions for how to do it. Good resource for if something goes wrong.

{#appendix1}
## Appendix: How-To Actions

I've deliberately left out the concrete details of what you need to type/what buttons you need to click to effect the various actions; instead, I've collected the actions here so that this post will be useful to you, whether you use a command-line or something like [Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807) for iOS.

#### Initialize a Repository

**CLI**:

1. Move into the folder where you want to create the repository

        $ cd ~/projects/my_story/

2. Initialize the repository

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

#### Create a Branch

A *branch* is a named thread of history. You can have as many branches as you'd like, but you always have one branch: `master`. This is the branch you start out on.

When you create a new branch, that branch has to start from a previous branch[^5]. This will probably be the `master` branch for you.

**CLI**:

1. Ask Git to create a new branch named `first-ending` and switch to it

        $ git checkout -b first-ending

#### List branches

You'll start building up a bunch of branches in your repository. That's fine; branches are really cheap in Git. They take up hardly any space. You can see what branches are available, as well as what branch you've currently got check out.

**CLI**:

1. List branches

        $ git branch

   This will show you your current branch with a `*` next to it.

#### Switch branches

Switching branches will replace the files in your repository with the versions on the branch you are switching to. Make sure all your changes are committed before doing this. (Git will actually stop you if you try to switch branches with uncommitted changes.)

**CLI**:

1. Checkout (i.e. switch to) a different branch

        $ git checkout other-branch

2. Once you're done editing, commit and switch back to master (this is just another example of switching branches)

        $ git add the_draft.txt
        $ git commit -m "Made some kinda dicey edits to my draft"
        $ git checkout master

Now `the_draft.txt` is just as you left it. You can always get back to your dicey edits with `git checkout other-branch`.

#### Collaborate

You can share your repository with as many people as you'd like. They can each create a copy (in Git parlance, "clone") of your repository and send you edit suggestions that you can review and merge back into yours.

It's possible to collaborate without GitHub. However, GitHub is an *extremely* convenient option. I'd just say get yourself a GitHub account and use their tools. (They have some excellent tutorials as well.)

#### Compare Branches

Comparing points in history—be it branches or arbitrary commits—is really easy with Git. It's often referred to as "diffing", and the report of changes is called a "diff". Different Git clients have different ways of showing a diff, but almost universally additions are green and deletions are red.

**CLI**:

1. Ask Git to show you the differences between `editors-branch` and `master` (your copy)

        $ git diff editors-branch master

This will show you the sections of the files that changed. All the lines that got added will be marked with a `+` at the start, and all the lines that got deleted outright will be marked with a `-`. If a line got *changed*, there will be one deletion and one addition so you can see the difference between the two.

#### Merge Branches

Merging is generally straight-forward in Git. Sometimes, however, there may be *conflicts* that you have to resolve. These happen when changes to the same few lines of code are on both branches that you're trying to merge. Your Git client will tell you about these conflicts, and you'll be able to edit the files and resolve the merge.

**CLI**:

Assuming no conflicts, this will be all you have to do:

1. Switch to the branch you want the merge to ultimately wind up in (if not already in the branch)

        $ git checkout master

2. Merge your editor's edits into your master branch

        $ git merge editors-branch

## Footnotes

[^1]: "National Novel Writing Month", except this was during the month of January, instead of November like it usually is, so we called ours "JanoNanoWriMo".

[^2]: Because, after all, you're writing an epic fantasy novel. If you're not and happen to be writing something like a research paper, replace the word "ending" with something like "conclusion", and "characters die off sooner" with "test results come earlier in the paper" or something like that.

[^3]: I'm aware this situation can usually be mitigated by the operating system asking you if you really want to overwrite an existing file—just imagine you fat-fingered it. I've done that, we've all done that.

[^4]: CLI: Abbreviation for *Command Line Interface*.

[^5]: I'm simplifying a little bit here: a branch just has to start from a commit. You can walk backward through your history to any given point and start a new branch there. However, for the sake of simplicity in this tutorial, just assume that a branch starts from another branch. Personally, I start branches from the heads of other branches like 95% of the time.

[^6]: If you're using GitHub, this will take the form of a *pull request*.

[^7]: "Versions" and "branches" are roughly equivalent here. Git will use the term "branch"; if you come across it in some of the Git documentation, you can usually just read it as "version".

[^8]: Eagle-eyed readers might note that there is now a folder called `.git` in the file that wasn't there before. That folder is where Git stores all the versions of your files, along with some information that helps it do its job efficiently. You don't need to worry so much about what's in there.

[^9]: Roll back: Just a fancy way to say "undo".

[^10]: If you don't see the `.git/` folder, it might just be hidden. On macOS you can hit `Command-Shift-.` to toggle displaying hidden files and folders in Finder.

[^11]: I originally had a section written about collaborating with people using branches. I decided, however, that GitHub does a better job of explaining that than I could do, and so I'd just focus on using branches as copies.

[^12]: Strictly speaking, I believe it is possible to delete the `master` branch, but that *seriously* messes up things in your repository. Don't do it. I've never *ever* seen or heard first-hand of this being done.

[^13]: GitHub is to Git as YouTube is to videos. It's just a place to put Git repositories. They have a *whole bunch* of useful practical tutorials [here](https://guides.github.com/).
