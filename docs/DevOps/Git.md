---
finished: false
tags:
  - article
  - digital-garden
created: 2024-01-06T15:01
updated: 2024-01-07T16:39
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
4. Don't be afraid to throw away code. If the branch has a lot of changes and a lot of merge conflicts, start over on a new branch. This is simple, you already have done the work, so don't be afraid to do it again. After all, it is also a good opportunity for you to work on refactoring the code. 

# Links
- [Only need plaintext](https://www.youtube.com/watch?v=WgV6M1LyfNY&ab_channel=NoBoilerplate) Argues against anything other than Git and GitHub for software teams. 

# Thoughts 
- 


