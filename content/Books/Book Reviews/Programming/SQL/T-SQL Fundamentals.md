---
created: 2023-10-29T15:52
updated: 2025-09-02T10:06
Pages:
Author:
finished: true
Date Finished:
tags:
  - book-review
  - books
  - data-engineering
  - data-warehouse
  - database
  - digital-garden
  - programming
  - programming/declarative-language
  - sql
  - sql-server
  - t-sql
---
# T-SQL Fundamentals


# 🚀 The Book in 3 Sentences
This is a book about transact SQL.  It goes deep into the dialect of SQL and how to apply it. 

# 🎨 Impressions
I learned about true and false not being only true and false but also null. Nice to know. 


# ✍️ My Top  Quotes

- T-SQL (also known as Transact-SQL), which is the Microsoft SQL Server dialect of the ISO and ANSI standards for SQL.
 
- Unlike many programming languages, which use an imperative programming paradigm, SQL uses a declarative one. That is, SQL requires you to specify what you want to get and not how to get it, letting the RDBMS figure out the physical mechanics required to process your request.
 
- Loosely speaking, a predicate is a property or an expression that either holds or doesn’t hold—in other words, is either true or false.
 
- Normalization is a formal mathematical process to guarantee that each entity will be represented by a single relation. In a normalized database, you avoid anomalies during data modification and keep redundancy to a minimum without sacrificing completeness.
 
- The first normal form says that the tuples (rows) in the relation (table) must be unique and attributes should be atomic.
 
- The second normal form involves two rules. One rule is that the data must meet the first normal form. The other rule addresses the relationship between nonkey and candidate-key attributes. For every candidate key, every nonkey attribute has to be fully functionally dependent on the entire candidate key. In other words, a nonkey attribute cannot be fully functionally dependent on part of a candidate key. To put it more informally, if you need to obtain any nonkey attribute value, you need to provide the values of all attributes of a candidate key from the same tuple.
 
- OLTP: online transactional processing  DSA: data-staging area  DW: data warehouse  ETL: extract, transform, and load
 
- When it serves an entire organization, such an environment is called a data warehouse; when it serves only part of the organization (such as a specific department) or a subject matter area in the organization, it is called a data mart.
 
- A data warehouse (DW) is an environment designed for data-retrieval and reporting purposes. When it serves an entire organization, such an environment is called a data warehouse; when it serves only part of the organization (such as a specific department) or a subject matter area in the organization, it is called a data mart.
 
- The simplest data-warehouse design is called a star schema. The star schema includes several dimension tables and a fact table.
 
- You can think of a database as a container of objects such as tables, views, stored procedures, and other objects. Each instance of SQL Server can contain multiple databases,
 
- The model database is used as a template for new databases. Every new database you create is initially created as a copy of model.
 
- The msdb database is used mainly by a service called SQL Server Agent to store its data.
 
- Microsoft recommends that when you refer to objects in your code you always use the two-part object names.
 
- The FROM clause is the very first query clause that is logically processed.
 
- A CASE expression is a scalar expression that returns a value based on conditional logic. It is based on the SQL standard. Note that CASE is an expression and not a statement; that is, it doesn’t take action such as controlling the flow of your code. Instead, it returns a value. Because CASE is a scalar expression, it is allowed wherever scalar expressions are allowed, such as in the SELECT, WHERE, HAVING, and ORDER BY clauses and in CHECK constraints.
 
- The FORMAT function is usually more expensive than alternative T-SQL functions that you use to format values. You should generally refrain from using it unless you are willing to accept the performance penalty.
 
- Square brackets with a character range (such as \[A-E\]) represent a single character that must be within the specified range.
 
- The CAST, CONVERT, and PARSE functions are used to convert an input value to some target type.
 
- Table operators are logically evaluated from left to right. Rearranging the order in which outer joins are processed might result in different output, so you cannot rearrange them at will.
 
- SQL supports writing queries within queries, or nesting queries. The outermost query is a query whose result set is returned to the caller and is known as the outer query. The inner query is a query whose result is used by the outer query and is known as a subquery.
 
- T-SQL supports a predicate called EXISTS that accepts a subquery as input and returns TRUE if the subquery returns any rows and FALSE otherwise.
 
- One of the benefits of using the EXISTS predicate is that you can intuitively phrase queries that sound like English.
 
- Recall that unlike IN, EXISTS uses two-valued predicate logic. EXISTS always returns TRUE or FALSE and never UNKNOWN.
 
- When no NULLs are involved in the data, IN and EXISTS give you the same meaning in both their positive and negative forms (with NOT). When NULLs are involved, IN and EXISTS give you the same meaning in their positive form but not in their negative form.
 
- A table expression is a named query expression that represents a valid relational table.
 
- T-SQL supports four types of table expressions: derived tables, common table expressions (CTEs), views, and inline table-valued functions (inline TVFs).
 
- Table expressions are not physically materialized anywhere—they are virtual. When you query a table expression, the inner query gets unnested.
 
- The syntax for inline aliasing is **expression AS alias**. Note that the word AS is optional in the syntax for inline aliasing; however, I find that it helps the readability of the code and recommend using it.
 
- Set operators are operators that combine rows from two query result sets (or multisets). Some of the operators remove duplicates from the result, and hence return a set, whereas others don’t, and hence return a multiset. T-SQL supports the following operators: UNION, UNION ALL, INTERSECT, and EXCEPT.
 
- The UNION (implicit DISTINCT) operator unifies the results of the two queries and eliminates duplicates.
 
- The INTERSECT operator (implied DISTINCT) returns only distinct rows that appear in both input query results.
 
- Pivoting rotates data from a state of rows to columns, and unpivoting rotates data from columns to rows, similar to pivot tables in Excel.
 
- Window function is a function that, for each row, computes a scalar result value based on a calculation against a subset of the rows from the underlying query. The subset of rows is known as a window and is based on a window descriptor that relates to the current row. The syntax for window functions uses a clause called OVER, in which you provide the window specification.
 
- Every pivoting request involves three logical processing phases, each with associated elements: 1. A grouping phase with an associated grouping or on rows element 2. A spreading phase with an associated spreading or on cols element 3. An aggregation phase with an associated aggregation element and aggregate function
 
- Unpivoting is a technique that rotates data from a state of columns to a state of rows. Usually, it involves querying a pivoted state of the data and producing from each source row multiple result rows, each with a different source column value. A common use case is to unpivot data you imported from a spreadsheet into the database for easier manipulation.
 
- The solution is to use the CROSS APPLY operator instead of the CROSS JOIN operator. They are similar, but the former evaluates the left side first and then applies the right side to each left row, making the left side’s elements accessible to the right side.
 
- Unpivoting data involves producing two result columns from any number of source columns—one to hold the source column names as strings and another to hold the source column values.
 
- T-SQL supports another function, called GROUPING_ID, that can further simplify the process of associating result rows and grouping sets. You provide the function with all elements that participate in any grouping set as inputs—for example, GROUPING_ID(a, b, c, d)—and the function returns an integer bitmap in which each bit represents a different input element—the rightmost element represented by the rightmost bit.
 
- Solving a pivoting problem is all about identifying the elements involved: the grouping element, spreading element, aggregation element, and aggregate function. After you identify those, you simply fit them into the “template” query for pivoting—whether it’s the solution with the grouped query or the solution using the PIVOT operator.
 
