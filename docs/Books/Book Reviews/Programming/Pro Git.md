---
created: 2023-10-29T15:52
updated: 2024-06-16T21:02
Pages: 440
Author: Scott Chacon
finished: true
Date Finished: 2024-05-15
tags:
  - books
  - digital-garden
  - book-review
  - git
  - github
  - version-control
  - programming
  - developing
---
# Pro Git


# 🚀 The Book in 3 Sentences
This book delves deep into Git. It is nice for an intermediate git professional who would like to have some more understanding of the "under the hood". 
It is quite comprehensive on the git work itself. 
# 🎨 Impressions

I found it to be a good book with interesting concepts. I wanted to read it to get a better understanding of how git works and to explain how it works more properly to others. In my line of work, understanding the why has been more important than doing the what or improving the how. This is an attempt by me to do this. 

Here is the [link](https://git-scm.com/book/en/v2) to the book as a free open-source book. 

# ✍️ My Top  Quotes

- *The major difference between Git and any other VCS (Subversion and friends included) is the way Git thinks about its data.* 
 
- *Git thinks of its data more like a set of snapshots of a mini filesystem. Every time you commit, or save the state of your project in Git, it basically takes a picture of what all your files look like at that moment and stores a reference to that snapshot.* 
 
- *Everything in Git is check-summed before it is stored and is then referred to by that checksum. This means it's impossible to change the contents of any file or directory without Git knowing about it.* 
 
- *Git comes with a tool called git config that lets you get and set configuration variables that control all aspects of how Git looks and operates* 
 
- *The rules for the patterns you can put in the .gitignore file are as follows: 
	- *Blank lines or lines starting with # are ignored. Standard glob patterns work.* 
	- *You can end patterns with a forward slash (/) to specify a directory.* 
	- *You can negate a pattern by starting it with an exclamation point (!).*
  
- *Gitk is basically a visual git log tool, and it accepts nearly all the filtering options that git log does.* 
 
- *One of the common undos takes place when you commit too early and possibly forget to add some files, or you mess up your commit message. If you want to try that commit again, you can run commit with the --amend option* 
 
- *All three of these commands end up with a single commit - the second commit replaces the results of the first.* 
 
- *If you're using Windows with Git Bash, which is the default when installing Git on Windows with msysGit, auto-completion should be preconfigured.* 
 
- *Branching means you diverge from the main line of development and continue to do work without messing with that main line.* 
 
- *Some people refer to the branching model in Git as its "killer feature," and it certainly sets Git apart in the VCS community.* 
 
- *Unlike many other VCSs, Git encourages a workflow that branches and merges often, even multiple times in a day.* 
 
- *You'll notice the phrase "Fast forward" in that merge. Because the commit pointed to by the branch you merged in was directly upstream of the commit you're on, Git moves the pointer forward. To phrase that another way, when you try to merge one commit with a commit that can be reached by following the first commit's history, Git simplifies things by moving the pointer forward because there is no divergent work to merge together - this is called a "fast forward".* 
 
- *If you changed the same part of the same file differently in the two branches you're merging together, Git won't be able to merge them cleanly.* 
 
- *If you want to use a graphical tool to resolve these issues, you can run git mergetool, which fires up an appropriate visual merge tool and walks you through the conflicts:* 
 
- *Because Git uses a simple three-way merge, merging from one branch into another multiple times over a long period is generally easy to do. This means you can have several branches that are always open and that you use for different stages of your development cycle; you can merge regularly from some of them into others.* 
 
- *Many Git developers have a workflow that embraces this approach, such as having only code that is entirely stable in their master branch - possibly only code that has been or will be released.* 
 
- *They have another parallel branch named develop or next that they work from or use to test stability - it isn't necessarily always stable, but whenever it gets to a stable state, it can be merged into master.* 
 
- *Reality, we're talking about pointers moving up the line of commits you're making. The stable branches are farther down the line in your commit history, and the bleeding-edge branches are farther up the history* 
 
- *It's generally easier to think about them as work silos, where sets of commits graduate to a more stable silo when they're fully tested* 
 
- *Topic branches, however, are useful in projects of any size. A topic branch is a short-lived branch that you create and use for a single particular feature or related work. This is something you've likely never done with a VCS before because it's generally too expensive to create and merge branches. But in Git it's common to create, work on, merge, and delete branches several times a day.* 
 
- *Remote branches are references to the state of branches on your remote repositories. They're local branches that you can't move; they're moved automatically whenever you do any network communication. Remote branches act as bookmarks to remind you where the branches on your remote repositories were the last time you connected to them.* 
 
- *Checking out a local branch from a remote branch automatically creates what is called a tracking branch. Tracking branches are local branches that have a direct relationship to a remote branch.* 
 
- *Also, running git pull while on one of these branches fetches all the remote references and then automatically merges in the corresponding remote branch.* 
 
- *It performs a three-way merge between the two latest branch snapshots (C3 and C4) and the most recent common ancestor of the two (C2), creating a new snapshot (and commit).
 
- *The easiest way to integrate the branches, as we've already covered, is the merge command. It performs a three-way merge between the two latest branch snapshots (C3 and C4) and the most recent common ancestor of the two (C2), creating a new snapshot (and commit),* 
 
- *However, there is another way: you can take the patch of the change that was introduced in C3 and reapply it on top of C4. In Git, this is called rebasing. With the rebase command, you can take all the changes that were committed on one branch and replay them on another one.* 
 
- *Ahh, but the bliss of rebasing isn't without its drawbacks, which can be summed up in a single line: Do not rebase commits that you have pushed to a public repository.* 
 
- *When you rebase stuff, you're abandoning existing commits and creating new ones that are similar but different. If you push commits somewhere and others pull them down and base work on them, and then you rewrite those commits with git rebase and push them up again, your collaborators will have to re-merge their work and things will get messy when you try to pull their work back into yours.* 
 
- *Git can use four major network protocols to transfer data: Local, Secure Shell (SSH), Git, and HTTP.* 
 
- *Probably the most common transport protocol for Git is SSH. This is because SSH access to servers is already set up in most places - and if it isn't, it's easy to do. SSH is also the only network-based protocol that you can easily read from and write to.* 
 
- *The Git protocol is the fastest transfer protocol available. If you're serving a lot of traffic for a public project or serving a very large project that doesn't require user authentication for read access, it's likely that you'll want to set up a Git daemon to serve your project.* 
 
- *Regular developers work on their topic branch and rebase their work on top of master. The master branch is that of the dictator. Lieutenants merge the developers' topic branches into their master branch. The dictator merges the lieutenants' master branches into the dictator's master branch. The dictator pushes their master to the reference repository so the other developers can rebase on it.* 
 
- *The --squash option takes all the work on the merged branch and squashes it into one non-merge commit on top of the branch you're on.* 
 
- *The --no-commit option tells Git not to automatically record a commit. This allows you to introduce all the changes from another branch and then make more changes before recording the new commit.* 
 
- *This way, you can export a snapshot or build and name it something understandable to people. In fact, if you build Git from source code cloned from the Git repository, git --version gives you something that looks like this.* 
 
- *Here's an example to give you an idea of what it would take to get a SHA-1 collision. If all 6.5 billion humans on Earth were programming, and every second, each one was producing code that was the equivalent of the entire Linux kernel history (1 million Git objects) and pushing it into one enormous Git repository, it would take 5 years until that repository contained enough objects to have a 50% probability of a single SHA-1 object collision* 
 
- *Stashing takes the dirty state of your working directory - that is, your modified tracked files and staged changes - and saves it on a stack of unfinished changes that you can reapply at any time.* 
 
- *You only want to modify your last commit message, it's very simple: $ git commit --amend* 
 
- *So, if you see that a method in your code is buggy, you can annotate the file with git blame to see when each line of the method was last edited and by whom. This* 
 
- *If you pass -C to git blame, Git analyzes the file you're annotating and tries to figure out where snippets of code within it originally came from if they were copied from elsewhere.* 
 
 
- *When you're finished, you should run git bisect reset to reset your HEAD to where you were before you started, or you'll end up in a weird state:* 
 
- *This is a powerful tool that can help you check hundreds of commits for an introduced bug in minutes. In fact, if you have a script that will exit 0 if the project is good or non-0 if the project is bad, you can fully automate git bisect.* 
 
- *Git addresses this issue using submodules. Submodules allow you to keep a Git repository as a subdirectory of another Git repository. This lets you clone another repository into your project and keep your commits separate.* 
 
- *First you notice the .gitmodules file. This is a configuration file that stores the mapping between the project's URL and the local subdirectory you've pulled it into:* 
 
- *Although rack is a subdirectory in your working directory, Git sees it as a submodule and doesn't track its contents when you're not in that directory. Instead, Git records it as a particular commit from that repository. When you make changes and commit in that subdirectory, the superproject notices that the HEAD there has changed and records the exact commit you're currently working off of; that way, when others clone this project, they can re-create the environment exactly.* 
 
- *This is an important point with submodules: you record them as the exact commit they're at. You can't record a submodule at master or some other symbolic reference.* 
 
- *The rack directory is there, but empty. You must run two commands: git submodule init to initialize your local configuration file, and git submodule update to fetch all the data from that project and check out the appropriate commit listed in your superproject:* 
 
- *The next place Git looks is the ~/.gitconfig file, which is specific to each user. You can make Git read and write to this file by passing the --global option.* 
 
- *First place Git looks for these values is in an /etc/gitconfig file, which contains values for every user on the system and all of their repositories. If you pass the option --system to git config, it reads and writes from this file specifically.* 
 
- *The next place Git looks is the ~/.gitconfig file, which is specific to each user. You can make Git read and write to this file by passing the --global option.* 
 
- *Finally, Git looks for configuration values in the config file in the Git directory (.git/config) of whatever repository you're currently using. These values are specific to that single repository. Each level overwrites values in the previous level, so values in .git/config trump those in /etc/gitconfig, for instance.* 
 
 
- *Some of these settings can also be specified for a path, so that Git applies those settings only for a subdirectory or subset of files. These path-specific settings are called Git attributes and are set either in a .gitattributes file in one of your directories (normally the root of your project) or in the .git/info/attributes file if you don't want the attributes file committed with your project* 
 
- *Using attributes, you can do things like specify separate merge strategies for individual files or directories in your project, tell Git how to diff non-text files, or have Git filter content before you check it into or out of Git.* 
 
- *The hooks are all stored in the hooks subdirectory of the Git directory. In most projects, that's .git/hooks.* 
 
- *The pre-commit hook is run first, before you even type in a commit message. It's used to inspect the snapshot that's about to be committed, to see if you've forgotten something, to make sure tests run, or to examine whatever you need to inspect in the code.* 
 
- *The prepare-commit-msg hook is run before the commit message editor is fired up but after the default message is created.* 
 
- *The commit-msg hook takes one parameter, which again is the path to a temporary file that contains the current commit message. If this script exits non-zero, Git aborts the commit process, so you can use it to validate your project state or commit message before allowing a commit to go through.* 
 
- *After the entire commit process is completed, the post-commit hook runs. It doesn't take any parameters, but you can easily get the last commit by running git log -1 HEAD. Generally, this script is used for notification or something similar.* 
 
- *In addition to the client-side hooks, you can use a couple of important server-side hooks as a system administrator to enforce nearly any kind of policy for your project. These scripts run before and after pushes to the server.* 
 
- *This leaves four important entries: the HEAD and index files and the objects and refs directories. These are the core parts of Git. The objects directory stores all the content for your database, the refs directory stores pointers into commit objects in that data (branches), the HEAD file points to the branch you currently have checked out, and the index file is where Git stores your staging area information.* 
 
- *Git is a content-addressable filesystem. Great. What does that mean? It means that at the core of Git is a simple key-value data store. You can insert any kind of content into it, and it will give you back a key that you can use to retrieve the content again at any time.* 
 
- *Amazing. You've just done the low-level operations to build up a Git history without using any of the front ends. This is essentially what Git does when you run the git add and git commit commands - it stores blobs for the files that have changed, updates the index, writes out trees, and writes commit objects that reference the top-level trees and the commits that came immediately before them.* 
 
- *That is all a lightweight tag is - a branch that never moves. An annotated tag is more complex, however. If you create an annotated tag, Git creates a tag object and then writes a reference to point to it rather than directly to the commit.* 
 
- *The HEAD file is a symbolic reference to the branch you're currently on. By symbolic reference, I mean that unlike a normal reference, it doesn't generally contain a SHA-1 value but rather a pointer to another reference.* 
 
