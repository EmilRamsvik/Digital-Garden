---
created: 2025-10-23 16:14
updated: 2025-10-23T16:14
Pages:
Author:
tags:
  - books
  - digital-garden
  - book-review
  - database
  - sql
  - software-development
  - programming
  - best-practices
  - antipatterns
  - technology
  - computer-science
  - software-architecture
  - database-design
  - technical
  - software-engineering
---

# SQL Antipatterns, Volume 1

# The Book in 3 Sentences
SQL Antipatterns Volume 1 is a comprehensive guide to identifying and avoiding common database design and implementation mistakes. It systematically covers antipatterns in logical database design, physical implementation, querying, and application development, providing practical solutions and best practices for each case.

The book emphasizes the importance of proper database fundamentals like primary keys, referential integrity, and appropriate data types while warning against common pitfalls like improper use of floating-point numbers, naive tree structures, and SQL injection vulnerabilities.

# Impressions

This is a remarkably practical and well-structured guide that goes beyond just listing problems to explain why certain practices become antipatterns. The author's use of memorable analogies (like "Jaywalking" for avoiding intersection tables) and relevant quotes makes complex concepts more accessible. While technical, the writing maintains a clear, sometimes humorous tone that keeps the reader engaged.
# My Top  Quotes


- In SQL, the terms query and statement are somewhat interchangeable, being any complete SQL command that you can execute. 
 
- An antipattern is a technique that is intended to solve a problem but that often leads to other problems. 
 
- Logical Database Design Antipatterns Before you start coding, you should decide what information you need to keep in your database and the best way to organize and interconnect your data. This includes planning database tables, columns, and relationships. 
 
- Physical Database Design Antipatterns After you know what data you need to store, you implement the data management as efficiently as you can using the features of your RDBMS technology. This includes defining tables and indexes and choosing data types. 
 
- Query Antipatterns You need to add data to your database and then retrieve data. SQL queries are made with data manipulation language—statements such as SELECT, UPDATE, and DELETE. 
 
- Application Development Antipatterns SQL is supposed to be used in the context of applications written in another language, such as C++, Java, PHP, Python, or Ruby. There are right ways and wrong ways to employ SQL in an application, and this part of the book describes some common blunders. 
 
- Before you start coding, you should decide what information you need to keep in your database and the best way to organize and interconnect your data. This includes planning database tables, columns, and relationships. 
 
- Programmers commonly use comma-separated lists to avoid creating an intersection table for a many-to-many relationship. This antipattern is called Jaywalking, because jaywalking is also an act of avoiding an intersection. 
 
- You hear phrases like the following spoken by your project team, treat it as a clue that the Jaywalking antipattern is being employed: “What is the greatest number of entries this list must support?” This question comes up when you’re trying to choose the maximum length of the VARCHAR column. “Do you know how to match a word boundary in SQL?” If you use regular expressions to pick out parts of a string, this could be a clue that you should store those parts separately. “What character will never appear in any list entry?” 
 
- If you hear a question or a statement like the following, it’s a clue that the Naive Trees antipattern is being employed: “How many levels do we need to support in trees?” You’re struggling to get all descendants or all ancestors of a node, without using a recursive query. You could compromise by supporting only trees of a limited depth, but the next natural question is, how deep is deep enough? “I dread having to touch the code that manages the tree data structures.” You’ve adopted one of the more sophisticated solutions of managing hierarchies, but you’re using the wrong one. Each technique makes some tasks easier, but usually at the cost of other tasks that become harder. You may have chosen a solution that isn’t the 
 
- One chief strength of the Nested Sets design is that when you delete a nonleaf node, its descendants are automatically considered direct children of the deleted node’s parents. 
 
- Recursive queries using WITH or CONNECT BY PRIOR make it more efficient to use the Adjacency List design, provided you use a version of SQL database that supports the syntax. 
 
- Adjacency List is the most conventional design, and many software developers recognize it. It has the advantage over the other designs that it’s normalized. In other words, it has no redundancies, and it’s not possible to create conflicting data. 
 
- The objective is to make sure every table has a primary key, but confusion about the nature of a primary key has resulted in an antipattern. Everyone who has been introduced to database design knows that a primary key is an important, even mandatory, part of a table. This is true; primary keys are integral to good database design. A primary key is guaranteed to be unique over all rows in the table, so this is the logical mechanism to address individual rows and to prevent duplicate rows from being stored. A primary key is also referenced by foreign keys to create table associations. 
 
- This isn’t reliable when you have concurrent clients both querying for the next value to use. The same value could be used by both clients. This is called a race condition. 
 
- To avoid the race condition, you have to block concurrent inserts while you read the current maximum value and then use it in a new row. To do this, you have to lock the whole table—row-level locking isn’t enough. Table locks create a bottleneck because they cause concurrent clients to queue up for access. 
 
- “I don’t think I need a primary key in this table.” The developer who says this is confusing the term primary key with pseudokey. Every table must have a primary key constraint to prevent duplicate rows and identify individual rows. They might want to use a natural key or a compound key instead. 
 
- A primary key is a constraint, not a data type. You can declare a primary key on any column or set of columns, as long as the data types support indexing. 
 
- Referential integrity is an important part of proper database design and operation. When you declare a foreign key constraint for a column or set of columns, the values in these columns must exist in the primary key or unique key columns of the parent table. 
 
- This may seem unlikely, but as Gordon Letwin, architect of DOS 4, famously said, “One in a million is next Tuesday.” That still leaves a broken reference—a bug reported by 
 
- This may seem unlikely, but as Gordon Letwin, architect of DOS 4, famously said, “One in a million is next Tuesday.” 
 
- The Japanese phrase poka-yoke means “mistake proofing.” 
 
- A third solution mimics inheritance, as though tables were object-oriented classes. Create a single table for the base type, containing attributes common to all subtypes. Then for each subtype, create another table, with a primary key that also serves as a foreign key to the base table. 
 
- “This tagging schema allows you to associate a tag (or other attribute) with any other resource in the database.” As in EAV, you should be suspicious of any claims of unlimited flexibility, because it likely means that it breaks some rules. 
 
- “You can’t declare foreign keys in our database design.” This is another red flag. Foreign keys are a fundamental feature of relational databases, and a design that can’t work with proper referential integrity has a lot of problems. 
 
- Two forms of the antipattern: Split a single long table into multiple smaller tables, using table names based on distinct data values in one of the table’s attributes. Split a single column into multiple columns, using column names based on distinct values in another attribute. You can’t get something for nothing; to meet the goal of having few rows in every table, you have to either create tables that have too many columns or else create a greater number of tables. 
 
- You can gain the benefits of splitting a large table without the drawbacks by using a feature that is called either horizontal partitioning or sharding. You define a logical table with some rule for separating rows into individual partitions, and the database manages the rest. Physically, the table is split, but you can still execute SQL statements against the table as though it were whole. 
 
- The proposals for a standard binary format for floating-point numbers dates back to 1979. It was formally made a standard in 1985, and it is now widely implemented in software, most programming languages, and microprocessors. The format has three fields to encode a floating-point value: a field for a fraction portion of the value, a field for the exponent to which to raise the fraction, and a single-bit sign field. 
 
- IEEE 754 Format The proposals for a standard binary format for floating-point numbers dates back to 1979. It was formally made a standard in 1985, and it is now widely implemented in software, most programming languages, and microprocessors. The format has three fields to encode a floating-point value: a field for a fraction portion of the value, a field for the exponent to which to raise the fraction, and a single-bit sign field. 
 
- One advantage of IEEE 754 is that by using the exponent, it can represent fractional values that are both very small and very large. The format not only supports real numbers, but the range of values it supports is greater than integers in fixed-point format. The double-precision format supports an even greater range of values. So, these formats are useful for scientific applications. 
 
- Virtually any use of FLOAT, REAL, or DOUBLE PRECISION data types is suspect. Most applications that use floating-point numbers don’t require the range of values supported by IEEE 754 formats. 
 
- Instead of FLOAT or its siblings, use the NUMERIC or DECIMAL SQL data types for fixed-precision fractional numbers. 
 
- Science is feasible when the variables are few and can be enumerated; when their combinations are distinct and clear. Paul Valéry 
 
- Many people choose to specify the valid data values when they define the column. The column definition is part of the metadata—the definition of the table structure itself. For example, you could define a check constraint on the column. This constraint disallows any insert or update that would make the constraint false. 
 
- Shouldn’t need to are weasel words, and this says something quite different from can’t. 
 
- Whenever a theory appears to you as the only possible one, take this as a sign that you have neither understood the theory nor the problem which it was intended to solve. Karl Popper 
 
- The best technique for improving performance in your database is to use indexes well. An index is a data structure that the database uses to correlate values to the rows where these values occur in a given column. An index provides an easy way for the database to find values more quickly than the brute-force method of searching the whole table from top to bottom. 
 
- Likewise in a database index, if a given value appears on many rows in the table, it’s more trouble to read the index than simply to scan the entire table. In fact, in these cases it can actually be more expensive to use that index. 
 
- You can use the mnemonic MENTOR to describe a checklist for analyzing your database for good index choices: Measure, Explain, Nominate, Test, Optimize, and Rebuild. 
 
- Measure You can’t make informed decisions without information. Most databases provide some way to log the time to execute SQL queries so you can identify the operations with the greatest cost. 
 
- Microsoft SQL Server and Oracle both have SQL Trace facilities and tools to report and analyze trace results. Microsoft calls this tool the SQL Server Profiler, 
 
- Explain Having identified the query that has the greatest cost, your next step is to find out why it’s so slow. Every database uses an optimizer to pick indexes for your query. You can get the database to give you a report of its analysis, called the query execution plan (QEP). 
 
- In general, the QEP shows you which tables are involved in a query, how the optimizer chooses to use indexes, and what order it will access the tables. The report may also include statistics, such as the number of rows generated by each stage of the query. 
 
- Nominate Now that you have the optimizer’s QEP for your query, you should look for cases where the query accesses a table without using an index. Some databases have tools to do this for you, collecting query trace statistics and proposing a number of changes, including creating new indexes that you’re missing but would benefit your query. 
 
- Test This step is important: after creating indexes, profile your queries again. It’s important to confirm that your change made a difference so you know that your work is done. 
 
- Optimize Indexes are compact, frequently used data structures, which makes them good candidates for keeping in cache memory. Reading indexes in memory improves performance an order of magnitude greater than reading indexes via disk I/O. 
 
- Rebuild Indexes provide the most efficiency when they are balanced. Over time, as you update and delete rows, the indexes may become progressively imbalanced, similar to how filesystems become fragmented over time. In practice, you may not see a large difference between an index that is optimal vs. one that has some imbalance. You want to get the most out of indexes, so it’s worthwhile to perform maintenance on a regular schedule. 
 
- You can use null in place of a value that is not available at the time the row is created, such as the date of termination for an employee who is still working. 
 
- A given column can use a null value when it has no applicable value on a given row, such as the fuel efficiency rating for a car that is fully electric. 
 
- A function can return a null value when given invalid inputs, as in DAY(’2021-12-32’). 
 
- Outer join uses null values as placeholders for the columns of an unmatched table in an outer join. 
 
- Unlike in most programming languages, SQL treats null as a special value, different from zero, false, or an empty string. This is true in standard SQL and most brands of database. 
 
- Using null is not the antipattern; the antipattern is using null like an ordinary value or using an ordinary value like null. 
 
- It’s recommended to declare a NOT NULL constraint on a column for which a null would break a policy in your application or otherwise be nonsensical. It’s better to allow the database to enforce constraints uniformly rather than rely on application code. 
 
- Modern SQL products implement window functions, which you can use to filter for the first (or last) row in a group. 
 
- Some people, when confronted with a problem, think “I know, I’ll use regular expressions.” Now they have two problems. Jamie Zawinski 
 
- One fundamental principle of SQL (and relational theory from which SQL is derived) is that a value in a column is atomic. That is, you can compare a value to another value, but you always compare the whole value when you do that. Comparing substrings is bound to be inefficient or inaccurate in SQL. 
 
- SQL is a very expressive language—you can accomplish a lot in a single query or statement. That doesn’t mean it’s mandatory or even a good idea to aim to solve every problem in one line of code. 
 
- One common consequence of producing all your results in one query is a Cartesian product. This happens when two of the tables in the query have no condition restricting their relationship. 
 
- If you can read passwords, so can a hacker. 
 
- Quote me as saying I was misquoted. Groucho Marx 
 
- The solution most frequently cited as a panacea to SQL injection is to use query parameters. Instead of interpolating dynamic values into your SQL string, leave parameter placeholders in the string as you prepare the query. Then provide a parameter value as you execute the prepared query. 
 
- Using GUIDs has at least two advantages over pseudokey generators: You can generate pseudokeys on multiple database servers concurrently without using the same values. No one will complain about gaps—they’ll be too busy complaining about typing thirty-two hex digits for primary key values. 
 
- This antipattern is called Diplomatic Immunity because it assumes that the rules of application development don’t apply to database development. 
 
- Humans are allergic to change. They love to say, “We’ve always done it this way.” I try to fight that. That’s why I have a clock on my wall that runs counterclockwise. Rear Adm. Grace Murray Hopper 
 
