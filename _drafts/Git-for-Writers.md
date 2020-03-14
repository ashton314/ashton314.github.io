---
title: Git for Writers
excerpt: "Or: How I Learned to Stop Worrying and Delete Stuff in my Essays with Reckless Abandon"
prepend_excerpt: true
author: Ashton Wiersdorf
tags: git, writing
---

I'll confess right up front that I've never written a novel. I tried once during my senior year of high school for NaNoWriMo[^1] but it didn't turn out very well. What I *have* written a lot of is software. If I took all the code I wrote for just *one* of my larger projects, I'd end up with a small book.

So while I'm not so talented at composing prose, I've worked hard to be able to *manage* the large volume of stuff that I do write in a useful manner. One of the tools I use is [Git](https://git-scm.com). Git was initially developed to be useful for programmers, but it has turned out to be a tool that can be useful for writers, artists, composers—anyone who uses a computer to create long-lived projects.

## Ok, so what could Git possibly do for me?

In a sentence, Git gives you undo-super powers. It also lets you experiment with different versions of your work, and then selectively merge the parts that you like from your experiments back into one cohesive whole. Additionally, if you need to collaborate with people, Git makes it easy to manage multiple copies of a project offline.

You've done this kind of thing with your drafts before: you start with one file, then maybe you'll copy the file after you've got to a good stopping point, etc. It's a natural thing to do. However, you might not have thought about these actions as being related or being something that a tool could facilitate. Turns out, managing multiple copies of a set of files is common problem, and it's referred to as *version control*.

<blockquote class="callout">
Keeping track of drafts, versions, and history is a problem referred to as <strong>version control</strong>.
</blockquote>

There are lots of tools to help with version control; Git is just the most popular one. I use Git for just about everything: from code to research notes to this blog post! I kept track of different revisions of this essay in Git, sent it to my wife for edits, and eventually published it all with Git. Git can do a lot.

I realize that these concepts might be kind of abstract, so let's look at a use case.

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

You download the attachment your editor sent you and save it as a file called `the_draft_ending_3_from_editor.txt`. Now your folder looks like this:

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

Remember how in the example you copied files manually? You had to think of descriptive names for different versions of the file. (I just did a pretty dumb naming scheme by appending the name of the draft—you can probably think of something better.) Git will handle all the file copying for you. Git also lets you annotate parts of the history of your files so you can easily refer back to earlier points, compare what changed, etc.

Git also makes branching to try out different versions[^7] of something *really* easy. In Git parlance versions are called *branches*: you can assign branches names so you can keep track of which version is which.

<blockquote class="callout">
In Git, a *branch* is like a named version of a set of files.
</blockquote>

Let's just look at a simple case of *keeping track of a history of file versions* with Git.

> Brief note: There are lots of common practices and patterns surrounding using Git—people call these "workflows". I'll detail *one* possible workflow here; remember that something different might work better for you.

I've kept the nitty-gritty how-to instructions saved in an [appendix](#appendix1) that you can reference if you need to. The reason why I've done this is so that if you are already familiar with the minutiae, you can just read a high-level description of working with Git.

Also, if there are any unfamiliar terms here, please check the footnotes. If I neglected to define something that you're unsure about, there's a great glossary on [GitHub's Help website](https://help.github.com/en/github/getting-started-with-github/github-glossary) that you can go to.

### Keeping Track of History

Let's start back at the beginning when you have just one file you'd like to keep track of:

```
my_story/
  |
  \-- the_draft.txt
```

Let's start by [creating a repository](#initialize-a-repository). What is a "repository" you ask? [GitHub's glossary](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/about-repositories) has the best answer I could find:

> A repository is like a folder for your project. Your project's repository contains all of your project's files and stores each file's revision history. You can also discuss and manage your project's work within the repository.

After creating a repository, our folder looks like this:

```
my_story/
  |
  |-- .git/
  \-- the_draft.txt
```

That `.git/` folder is where Git saves stuff and keeps track of what files it's supposed to watch, etc. Don't worry about what's inside; most people who use Git never look inside the `.git/` folder, and that's just fine.[^10]

Now that we've got a repository, we can [commit](#committing-a-file) `the_draft.txt` to the repository. That means that Git will start noticing when we make changes to `the_draft.txt`. If we don't make a commit, then Git won't remember anything.

<blockquote class="callout">
*Commit*: To make a permanent snapshot of the repository. Can also be used as a noun to mean a particular snapshot.
</blockquote>

A commit tracks the contents of files, as well as the time the commit was made, the person who made the commit, and a short human-supplied message describing the commit.

Remember in the first example when we copied `the_draft.txt` to `the_draft_ending_1.txt` when we got to a point that we liked and wanted to start experimenting? That "copy" action is very much like a commit. You can think of making a commit as Git copying your files somewhere into that `.git/` folder so that they're safe.

Now that `the_draft.txt` has been committed, we can change whatever we want and always come back to this point right now. Go ahead and open up `the_draft.txt` in your favorite editor and make some catastrophic edits—delete stuff, add stuff, kill off all your central characters, etc. Hit the "Save" button on your editor and quit.

Since we haven't committed any of the *new* changes, we can easily roll them back[^9]. Go ahead an [revert the changes](#revert-changes-in-the-working-directory). Once you're done with that, open `the_draft.txt` again and check to make sure that all your awful changes have been undone. Cool, huh?

Ok, now try making some edits you actually *like*. Once you're done—just add a line or two—make another commit. Now this point in your file's history is permanently saved and recoverable. Keep doing this every time you get to a point that you want to be able to refer back to.

As you go on you will create a chain of commits: snapshots of your project over time. You can walk back and compare versions to see what you took out or added between any two given dates, and you can restore lost edits if you delete something but then change your mind.

There's a lot more you can do with Git, but I won't go into detail here. See the [Pro Git](https://git-scm.com/book/en/v2) book for more about what you can do with it. It will teach you how walk back to any commit you made and how to restore portions of that history. (And it's free!)

#### How often should I commit?

My rule is to commit whenever I have made some bit of progress that I don't want to loose. Sometimes that's just adding a few lines. Other times, I make a lot of edits before committing. At an absolute minimum, I commit once at the end of my work day.

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
