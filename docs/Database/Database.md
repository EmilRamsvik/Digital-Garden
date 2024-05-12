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
updated: 2024-05-08T17:46
---
# Database

In the context of business, everything is a database. Databases are the bedrock of how we design things nowadays. 

# Relational Databases

The relational database was invented at IBM (in 1970), but it was Oracle that commercialized it. Oracle made most of its money on relational databases. 





## Tasks
[Snowflake tasks](https://docs.snowflake.com/en/sql-reference/sql/create-task) are scheduled jobs that can execute SQL or Python scripts in the Snowflake database using the Snowflake warehouse, nice for updating data or migrating data. 



### Important terms 

- **Account**: In Snowflake, an account refers to your entire environment. It is the top-level organization for resources in Snowflake. An account houses all objects, data, and virtual warehouses. It is also associated with a particular region where the underlying cloud provider's data center is located. Cloud providers can be Azure, AWS, etc.
    
- **Warehouse**: A warehouse in Snowflake represents compute resources, and is used to execute all data loading, querying, and DML operations. Snowflake uses a unique architecture where storage and computing are separated, so a warehouse doesn't store data, but rather is used to process tasks. This is NOT the same as a data warehouse. 
    
- **Roles**: Roles in Snowflake provide a way to manage access controls. They define permissions for objects like databases, schemas, and tables. A role can be assigned to one or more users, and users can switch between roles based on what tasks they need to perform. There are system-defined roles like ACCOUNTADMIN, SECURITYADMIN, SYSADMIN, PUBLIC, and also user-defined roles.
    
- **Database**: In Snowflake, a database is a logical container for schemas. Each database belongs to a single Snowflake account and is completely separate from databases in other accounts (except sharing).
    
- **Schema**: A schema in Snowflake is a logical container for tables, views, and other Snowflake objects. Schemas are contained within a database.

## Migration of data in Snowflake 
#todo write more on migrations here 




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
# Thoughts 
- Acid in a database stands for Atomicity, Consistency, Isolation, and Durability, which are properties that ensure the reliability and integrity of data transactions.
- *"In the end, it is all just databases."* This is a quote from an experienced colleague. In business, this is kind of true. Don't overcomplicate; keep the data pure and protected, and ensure people can access it. 
- Data flow is difficult
- Understanding the data warehousing is probably a good way to have job security in the 21st century. But is it a career enhancer?
- 



