---
Date Started: Jun 20, 2023
tags:
  - article
  - database
  - data
  - sql
  - postgresql
  - Snowflake
  - programming
Finished: false
created: 2023-12-30T14:48
updated: 2024-09-15T18:31
---
# Database

In the context of business, everything is a database. Databases are the bedrock of how we design things nowadays. 

# Relational Databases

The relational database was invented at IBM (in 1970), but it was Oracle that commercialized it. Oracle made most of its money on relational databases. 






# Database modeling. 

Database modeling is an important aspect of software development and should be treated accordingly. Mapping how things are done and what the function and relationship of the data are are things that should be included in the model. It is also important for the developers to gain insights and access to the domain knowledge and doing it in the database modeling phase could be quite advantageous. 

### Checklist for database modeling. 
**1. What is the purpose of this system?** 
	In this question, we are trying to ascertain what the overall goal of the data is. It is more or less the function of the data and therefore we want to understand all possible use cases so that we can cater to them during the modeling phase. 
**2. Does this database solve all problems?****
   For all the use cases, can we solve them efficiently using the data we have available today?
**3. Define the consumers and producers of the database.**** 
	Map all types of consumers and producers, their role, and their function. What are they trying to achieve when using the application?  
**4. Draw typical flows of data usage.** 
	Exercise where the different use cases are solved using the database or application. It is meant to match the functionality that is in place for the users to efficiently and seamlessly use the application. 

## Links
- [Event Modeling](https://eventmodeling.org/posts/what-is-event-modeling/)  One of the learnings from this article is that simplicity is critical. You need to understand that a team is only as good as the information flow between them. Therefore, it is essential to keep it as simple as possible in order to reduce information friction. 

# Links
- [Benchmarking Databases by Providers is difficult. Because the database providers know their databases are slow.](https://danluu.com/anon-benchmark/)
- [On Larry Ellison, the boss of Oracle and Oracle](https://news.ycombinator.com/item?id=5170246)
- [Lecture Series on Databases](https://www.youtube.com/playlist?list=PLSE8ODhjZXjZaHA6QcxDfJ0SIWBzQFKEG)
# Thoughts 
- Acid in a database stands for Atomicity, Consistency, Isolation, and Durability, which ensure data transactions' reliability and integrity.
- *"In the end, it is all just databases."* This is a quote from an experienced colleague. In business, this is true. Keep the data simple, pure and protected, and ensure people can access it. 
- Data flow is difficult.
- Understanding data warehousing is a good way to have job security in the 21st century. But is it a career enhancer?
- A schema is a collection of schema objects. Examples of schema objects include **tables, views, sequences, synonyms, indexes, clusters, database links, snapshots, procedures, functions, and packages**.
- There is a saying about database migrations: *Don't do them.* 



