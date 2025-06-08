---
Finished: false
tags:
  - article
  - devops
  - github-actions
  - github-reusable-workflows
created: 2023-06-12T15:01:00
updated: 2025-05-09T10:27
---
# GitHub Actions

GitHub Actions are written in YAML file format. There are multiple ways of triggering GitHub actions, related to git-actions such as push/pull requests. But also cron schedules. It is a cheap and flexible way of doing simple jobs. One good advantage is that all the functions are in the same repo. One source of truth. 

I find GitHub Actions to be more durable and easy to work with than Lambda Functions etc.  They are also quite capable of doing daily updates and runs, so it is a good alternative to lambda functions and serverless fucntions. 


## Reusable workflows. 

Reusable workflows are how you can combine public and other workflows together as reusable functions in a way. I used to work a lot with it in one of my machine learning projects.  However, sometimes I think this is a bit out of touch, as you can just make them yourself and have all the code in one file. Since you do not work that much on GitHub, Actions that work are usually changed only until they work. 



# Links
- [Awesome GitHub Actions](https://github.com/sdras/awesome-actions)
- [Securing Github Action](https://www.wiz.io/blog/github-actions-security-guide)

# Thoughts 
- Understanding how easy it is to use Github actins as a supplement or replacement for lambda functions in AWS or Azure functions in Azure is a good trick to have. 
- Get to know how to use service principals to get the most out of Github's actions. 


