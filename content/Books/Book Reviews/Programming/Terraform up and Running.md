---
created: 2023-10-29T15:52
updated: 2025-05-16T14:18
Pages: 
Author: 
finished: true
Date Finished: 
tags:
  - books
  - digital-garden
  - book-review
  - iac
  - terraform
  - code-quality
  - programming/declarative-language
---
# Terraform up and Running


# 🚀 The Book in 3 Sentences
This book is an introduction to Terraform and IaC. It covers how it works and the logic behind it. 

# 🎨 Impressions
One thing is that you need your environment to be represented as code somewhere, and it should be the true and only representation of that state. 


# ✍️ My Top  Quotes
- *The Ops team occasionally makes mistakes, so you end up with snowflake servers, wherein each one has a subtly different configuration from all the others (a problem known as configuration drift).* 
 
- *Code that works correctly no matter how many times you run it is called idempotent code. To make the Bash script from the previous section idempotent, you’d need to add many lines of code, including lots of if-statements.* 
 
- *Organizations that use DevOps practices, such as IaC, deploy 200 times more frequently, recover from failures 24 times faster, and have lead times that are 2,555 times lower.* 
 
- *The Go code compiles down into a single binary (or rather, one binary for each of the supported operating systems) called, not surprisingly, terraform.* 
 
- *Apply Builds or changes infrastructure console Interactive console for Terraform interpolations destroy Destroy Terraform-managed infrastructure env Workspace management fmt Rewrites config files to canonical format* 
 
- *The reason this example uses port 8080, rather than the default HTTP port 80, is that listening on any port less than 1024 requires root user privileges.* 
 
- *When you add a reference from one resource to another, you create an implicit dependency. Terraform parses these dependencies, builds a dependency graph from them, and uses that to automatically determine in which order it should create resources.* 
 
- *Storing Terraform state in version control is a bad idea* 
 
- *The second option for handling secrets is to manage them completely outside of Terraform (e.g., in a password manager such as 1Password, LastPass, or OS X Keychain) and to pass the secret into Terraform via an environment variable.* 
 
- *The reason you need to put so much thought into isolation, locking, and state is that infrastructure as code (IAC) has different trade-offs than normal coding. When you’re writing code for a typical app, most bugs are relatively minor and break only a small part of a single app. When you’re writing code that controls your infrastructure, bugs tend to be more severe, given that they can break all of your apps—and all of your data stores* 
 
- *When creating modules, watch out for these gotchas: 
	- *File paths*
	- *Inline blocks*
 
- *I generally recommend using Git tags as version numbers for modules. Branch names are not stable, as you always get the latest commit on a branch, which may change every time you run the init command, and the sha1 hashes are not very human friendly. Git tags are as stable as a commit (in fact, a tag is just a pointer to a commit), but they allow you to use a friendly, readable name.* 
 
- *Terraform is a declarative language.* 
 
- *However, certain types of tasks are more difficult in a declarative language. For example, because declarative languages typically don’t have for-loops, how do you repeat a piece of logic—* 
 
- *Of course, a username like "neo.0" isn’t particularly usable. If you combine count.index with some built-in functions from Terraform, you can customize each “iteration” of the “loop” even more.* 
 
- *Putting these together, you get the following: resource "aws_iam_user" "example" \{ count = length(var.user_names) name = var.user_names\[count.index\] \} Now when you run the plan command, you’ll see that Terraform wants to create three IAM users, each with a unique name:* 
 
- *Terraform’s for expression also allows you to loop over a map using the following syntax: for KEY>, VALUE in  MAP> :  OUTPUT] Here, MAP is a map to loop over, KEY and VALUE are the local variable names to assign to each key-value pair in MAP, and OUTPUT is an expression that transforms KEY and VALUE in some way.* 
 
- *For looping over lists {for ITEM in MAP : OUTPUT_KEY => OUTPUT_VALUE# For looping over maps for KEY, VALUE in MAP: OUTPUT_KEY=> OUTPUT_VALUE* 
 
- *What you want to do instead is a zero-downtime deployment. The way to accomplish that is to create the replacement ASG first and then destroy the original one. As it turns out, the create_before_destroy life cycle setting you first saw in Chapter 2 does exactly this.* 
 
- *General problems that affect Terraform as a whole: count and for_each have limitations Zero-downtime deployment has limitations Valid plans can fail Refactoring can be tricky Eventual consistency is consistent…eventually* 
 
- *Two important limitations that you need to be aware of: You cannot reference any resource outputs in count or for_each. You cannot use count or for_each within a module configuration.* 
 
- *The key realization is that terraform plan looks only at resources in its Terraform state file. If you create resources out of band—such as by manually clicking around the AWS console—they will not be in Terraform’s state file, and, therefore, Terraform will not take them into account when you run the plan command. As a result, a valid-looking plan will still fail.* 
 
- *After you start using Terraform, you should only use Terraform When a part of your infrastructure is managed by Terraform, you should never manually make changes to it. Otherwise, you not only set yourself up for weird Terraform errors, but you also void many of the benefits of using infrastructure as code in the first place, given that the code will no longer be an accurate representation of your infrastructure. If you have existing infrastructure, use the import command If you created infrastructure before you started using Terraform, you can use the terraform import command to add that infrastructure to Terraform’s state file, so that Terraform is aware of and can manage that infrastructure.* 
 
- *The APIs for some cloud providers, such as AWS, are asynchronous and eventually consistent. Asynchronous means that the API might send a response immediately, without waiting for the requested action to complete. Eventually consistent means that it takes time for a change to propagate throughout the entire system, so for some period of time, you might get inconsistent responses* 
 
- *In short, whenever you use an asynchronous and eventually consistent API, you are supposed to wait and retry for a while until that action has completed and propagated.* 
 
- *If you want to deploy a service fully managed by a third party, such as running MySQL using the AWS Relational Database Service (RDS), you can expect it to take you one to tow weeks to get that service ready for production.* 
 
- *If you want to run your own stateless distributed app, such as a cluster of Node.js apps that don’t store any data locally (e.g., they store all their data in RDS) running on top of an AWS Auto Scaling Group (ASG), that will take roughly twice as long, or about two to four weeks to get ready for production.* 
 
- *The first reason is that DevOps, as an industry, is still in the Stone Ages. I don’t mean that as an insult, but rather, in the sense that the industry is still in its infancy. The terms “cloud computing,” “infrastructure as code,” and “DevOps” only appeared in the mid to late 2000s and tools like Terraform, Docker, Packer, and Kubernetes were all initially released in the mid to late 2010s. All of these tools and techniques are relatively new and all of them are changing rapidly. This means that they are not particularly mature and few people have deep experience with them, so it’s no surprise that projects take longer than expected.* 
 
- *The second reason is that DevOps seems to be particularly susceptible to yak shaving. If you haven’t heard of “yak shaving” before, I assure you, this is a term that you will grow to love (and hate).* 
 
- *Yak shaving consists of all the tiny, seemingly unrelated tasks you must do before you can do the task you originally wanted to do.* 
 
- *The third reason why DevOps takes so long—the essential complexity of this problem—is that there is a genuinely long checklist of tasks that you must do to prepare infrastructure for production. The problem is that the vast majority of developers don’t know about most of the items on the checklist, so when they estimate a project, they forget about a huge number of critical—and time-consuming—details.* 
 


 
- *The first rule of functions is that they should be small. The second rule of functions is that they should be smaller than that.* 
 
- *This is the Unix philosophy: Write programs that do one thing and do it well. Write programs to work together.* 
 
- *One of the main ways to make functions composable is to minimize side effects: that is, where possible, avoid reading state from the outside world, and instead have it passed in via input parameters; and avoid writing state to the outside world, and instead return the result of your computations via output parameters. Minimizing side effects is one of the core tenets of functional programming because it makes the code easier to reason about, easier to test, and easier to reuse. The reuse story is particularly compelling, since function composition allows you to gradually build up more complicated functions by combining simpler functions.* 
 
- *The DevOps world is full of fear: fear of downtime; fear of data loss; fear of security breaches. Every time you go to make a change, you’re always wondering, what will this affect? Will it work the same way in every environment? Will this cause another outage? And if there is an outage, how late into the night will you need to stay up to fix it this time?* 
 
- *That brings us to key testing takeaway #3: you cannot do pure unit testing for Terraform code. But don’t despair. You can still build confidence that your Terraform code behaves as expected by writing automated tests that use your code to deploy real infrastructure into a real environment* 
 
- *Typically recommend that teams have a completely separate environment (e.g., completely separate AWS account) just for automated testing—separate even from the sandbox environments you use for manual testing. That way, you can safely delete all resources that are more than a few hours old in the testing environment, based on the assumption that no test will run that long.* 
 
- *Whenever running a Go test that deploys real infrastructure, it’s safer to set an extra long timeout to avoid the test being killed part way through and leaving all sorts of infrastructure still running.* 
 
- *Static analysis There are several tools that can analyze your Terraform code without running it, including: terraform validate This is a command built into Terraform that you can use to check your Terraform syntax and types (a bit like a compiler). tflint A “lint” tool for Terraform that can scan your Terraform code and catch common errors and potential bugs based on a set of built-in rules. HashiCorp Sentinel A “policy as code” framework that allows you to enforce rules across various HashiCorp tools.* 
 
- *Property testing There are a number of testing tools that focus on validating specific “properties” of your infrastructure,: kitchen-terraform rspec-terraform serverspec inspec goss* 
 
- *One of the most important lessons I’ve learned in my career is that most large software projects fail. Whereas roughly three out of four of small IT projects (less than $1 million) are completed successfully, only one out of ten large projects (greater than $10 million) are completed on time and on budget, and more than one third of large projects are never completed at all.* 
 
- *The Golden Rule of Terraform: The master branch of the live repository should be a 1:1 representation of what’s actually deployed in production.* 
 
- *If I look at a single file and it’s written by 10 different engineers, it should be almost indistinguishable which part was written by which person. To me, that is clean code. The way you do that is through code reviews and publishing your style guide, your patterns, and your language idioms. Once you learn them, everybody is way more productive because you all know how to write code the same way. At that point, it’s more about what you’re writing and not how you write it. Nick Dellamaggiore, Infrastructure Lead at Coursera* 
 

