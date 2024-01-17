---
Finished: 
tags:
  - article
  - digital-garden
  - cyber-security
  - programming
  - hacking
  - code-scanning
created: 2024-01-06T15:01
updated: 2024-01-15T09:07
---
# CyberSecurity





# How to Think Like a Pentester

Penetration testing is essentially simulating attacks and investigating the consequences of said attacks. The end goal is not to get hacked. 

Two types or modes of pen testing. 
- **Black box.** A hired penetration tester acts like an attacker without "internal" knowledge.
- **White box.** Hired penetration tester "cheats" and has access to all info.  It saves time, improves coverage, easier to advise on fixes and improvements. 
Assuming zero trust principles, it is important to check penetration vulnerabilities based on the attacker having access to code repos, processes, etc. 
Differences between attackers and pen testers are that pen testers have scopes and are ethical, real attackers go after whatever is easiest. An issue with pen-testing is that attackers have technically unlimited time, therefore **white box** access can be a supplement to an internal pentester that might not have the resources of an attacker. 

The ideal scenario for an attacker is to gain access, that might be either an account or some sort of way of executing code on your application. Another goal is to gain persistence, where the attacker has access over time, for example, if a container or app is redeployed. 

Executing attacks: 
- [Burp](https://portswigger.net/burp/communitydownload) - Inspect HTTP traffic and find request headers, query parameters, etc. 
- Metasploit
- Custom exploits 
#### Questions Pen Testers ask themselves
- Which technologies are in use? 
- Are there existing vulnerabilities? Are they patched?
- How can one interact with the system without authentication? 
- How do legitimate users authenticate to the system?
- For ML, data leaks are the biggest issue. 
# Links
- [Article on supply chain attack on Pytorch](https://johnstawinski.com/2024/01/11/playing-with-fire-how-we-executed-a-critical-supply-chain-attack-on-pytorch/comment-page-1/#comments) Good informaiton and insightful on how to think about attachs. 

# Thoughts 
- Just don't post any secrets to Git Hub. 
- Again, keep them secrets out. 
- The best programming practice is cyber-security best practice. 


