---
finished: true
tags:
  - article
  - digital-garden
  - git
  - github
  - version-control
  - programming
  - developing
  - teams
  - career
created: 2024-01-06T15:01
updated: 2024-09-16T13:31
---
# Git
Git was developed by Linus Torvalds, who also developed the operating system Linux.  He jokingly said he named both tools after himself. Git was made because making changes and collaborating on Linux had become too challenging and a new way of doing version control was needed.  

## Merge vs Rebase
A lot of the challenges I find most annoying when using git is the dreaded merge conflict. The merge conflict is difficult to fix and leaves you confused about what is the change and what is the base. 

When you merge, you create a new snapshot of the commit tree, so that the changes on your new branch are "merged" into the main tree. Thereby, it captures all changes done both on the new branch and your main branch.  This might of course lead to multiple changes at the same place, which again leads to merge conflicts. 
When you rebase, you put the difference in the branches as a new commit on top of the old branch, thereby adding on the new branch changes as a new commit. 
- [Explanation of merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#_basic_merging)
- [Explanation of rebasing](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)

### How to solve merge-conflicts
1. Only be one person on the project. Cant have merge conflicts if no merges. 
2. Keep the life of the non-critical branches super short. 1 day is good, a week is bad. 
3. Be careful when killing files, make sure that pull requests are reviewed and merged before doing any file killing (Killing in this case is deleting.)
4. Don't be afraid to throw away code. If the branch has a lot of changes and a lot of merge conflicts, start over on a new branch. This is simple; you have already done the work, so don't be afraid to do it again. After all, it is also a good opportunity for you to work on refactoring the code. 

### Git Bisect
[Git Bisect](https://www.git-scm.com/docs/git-bisect) is an interesting command, which I learned about in the Pro Git book. It is a really cool command for finding breaking changes and doing investigative analyses. 


### Git Blame
As its name is a bit strongly worded, the command itself has been quite nice for understanding each individual commit and why it was made. 


Both Git blame and Git biscet are fantastisc commands when you do not know the code base as a developer. Being able to find out when breaking changes were introduced and what the reasoning was for the breaking changes is great for debugging. 
# Links
- [Only need plaintext](https://www.youtube.com/watch?v=WgV6M1LyfNY&ab_channel=NoBoilerplate) Argues against anything other than Git and GitHub for software teams. 
- [BFG Repo Cleaner](https://rtyley.github.io/bfg-repo-cleaner/)
- [Learn Git and Branching](https://learngitbranching.js.org/)
- [Pro Git](../Books/Book%20Reviews/Pro%20Git.md) Book review and notes from the open source book on git.  It will help explain the rationale and intricacies of git. 
- [Idiot Proof Git](https://softwaredoug.com/blog/2022/11/09/idiot-proof-git-aliases)


# Thoughts 
- Merge Conflicts are painful, but resolving them quickly is important. They are not fatal by any means. 
- Git is not a perfect tool, and it has limitations. If the team is not working towards the strengths of Git, you will get a lot of issues. The team (and yourself) must understand the purpose behind git.
- Explain the following git concepts: head, commit-sha and bisect.  That will tell you all. 
- I think understanding the git fundamentals makes you an extremely valuable engineer.

