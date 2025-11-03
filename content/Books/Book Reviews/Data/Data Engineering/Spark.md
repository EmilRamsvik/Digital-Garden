---
created: 2023-10-29T15:52
updated: 2025-09-02T10:13
Pages:
Author:
finished: false
Date Finished:
tags:
  - apache-spark
  - big-data
  - book-review
  - books
  - data-engineering
  - database
  - digital-garden
  - distributed-systems
  - programming
---
# Spark


# 🚀 The Book in 3 Sentences
This book dives into Apache Spark and how it works. It is about the inner workings of the spark engine and how to manipulate it. 

# 🎨 Impressions

I found it interesting, and i think re-reading the quotes after working a little time on Spark and learning by doing and then revisit. 



# ✍️ My Top  Quotes

- Apache Spark is currently one of the most popular systems for large-scale data processing, with APIs in multiple programming languages and a wealth of built-in and third-party libraries.
 
- Apache Spark is a unified computing engine and a set of libraries for parallel data processing on computer clusters.
 
- Spark’s key driving goal is to offer a unified platform for writing big data applications.
 
- A cluster, or group, of computers, pools the resources of many machines together, giving us the ability to use all the cumulative resources as if they were a single computer. Now, a group of machines alone is not powerful, you need a framework to coordinate work across them. Spark does just that, managing and coordinating the execution of tasks on data across a cluster of computers.
 
- The DataFrame concept is not unique to Spark. R and Python both have similar concepts. However, Python/R DataFrames (with some exceptions) exist on one machine rather than multiple machines. This limits what you can do with a given DataFrame to the resources that exist on that specific machine.
 
- Structured APIs apply to both batch and streaming computation. This means that when you work with the Structured APIs, it should be simple to migrate from batch to streaming (or vice versa) with little to no effort.
 
- The Structured APIs are the fundamental abstraction that you will use to write the majority of your data flows.
 
- The Structured APIs are a tool for manipulating all sorts of data, from unstructured log files to semi-structured CSV files and highly structured Parquet files.
 
- DataFrames and Datasets are (distributed) table-like collections with well-defined rows and columns.
 
- A schema defines the column names and types of a DataFrame. You can define schemas manually or read a schema from a data source (often called schema on read). Schemas consist of types, meaning that you need a way of specifying what lies where.
 
- Spark uses an engine called Catalyst that maintains its own type information through the planning and processing of work.
 
- Here’s an overview of the steps: Write DataFrame/Dataset/SQL Code. If valid code, Spark converts this to a Logical Plan. Spark transforms this Logical Plan to a Physical Plan, checking for optimizations along the way. Spark then executes this Physical Plan (RDD manipulations) on the cluster.
 
- Definitionally, a DataFrame consists of a series of records (like rows in a table), that are of type Row, and a number of columns (like columns in a spreadsheet) that represent a computation expression that can be performed on each individual record in the Dataset. Schemas define the name as well as the type of data in each column. Partitioning of the DataFrame defines the layout of the DataFrame or Dataset’s physical distribution across the cluster. The partitioning scheme defines how that is allocated. You can set this to be based on values in a certain column or nondeterministically.
 
- When working with big data, the second most common task you will do after filtering things is counting things.
 
- Spark takes advantage of the complete power of Java regular expressions. The Java regular expression syntax departs slightly from other programming languages, so it is worth reviewing before putting anything into production.
 
- As a best practice, you should always use nulls to represent missing or empty data in your DataFrames. Spark can optimize working with null values more than it can if you use empty strings or other values.
 
- One of the most powerful things that you can do in Spark is define your own functions. These user-defined functions (UDFs) make it possible for you to write your own custom transformations using Python or Scala and even use external libraries.
 
- Skewness and kurtosis are both measurements of extreme points in your data. Skewness measures the asymmetry of the values in your data around the mean, whereas kurtosis is a measure of the tail of data.
 
- Semi joins are a bit of a departure from the other joins. They do not actually include any values from the right DataFrame. They only compare values to see if the value exists in the second DataFrame. If the value does exist, those rows will be kept in the result, even if there are duplicate keys in the left DataFrame. Think of left semi joins as filters on a DataFrame, as opposed to the function of a conventional join:
 
- Natural joins make implicit guesses at the columns on which you would like to join. It finds matching columns and returns the results.
 
- The last of our joins are cross-joins or cartesian products. Cross-joins in simplest terms are inner joins that do not specify a predicate. Cross joins will join every single row in the left DataFrame to ever single row in the right DataFrame.
 
- Spark approaches cluster communication in two different ways during joins. It either incurs a shuffle join, which results in an all-to-all communication or a broadcast join.
 
- In a shuffle join, every node talks to every other node and they share data according to which node has a certain key or set of keys (on which you are joining). These joins are expensive because the network can become congested with traffic, especially if your data is not partitioned well.
 
- One thing we did not mention but is important to consider is if you partition your data correctly prior to a join, you can end up with much more efficient execution because even if a shuffle is planned, if data from two different DataFrames is already located on the same machine, Spark can avoid the shuffle.
 
- The foundation for reading data in Spark is the DataFrameReader. We access this through the SparkSession via the read attribute: spark.read After we have a DataFrame reader, we specify several values: The format The schema The read mode A series of options
 
- The line-delimited versus multiline trade-off is controlled by a single option: multiLine. When you set this option to true, you can read an entire file as one json object and Spark will go through the work of parsing that into a DataFrame. Line-delimited JSON is actually a much more stable format because it allows you to append to a file with a new record (rather than having to read in an entire file and then write it out), which is what we recommend that you use. Another key reason for the popularity of line-delimited JSON is because JSON objects have structure, and JavaScript (on which JSON is based) has at least basic types.
 
- We recommend writing data out to Parquet for long-term storage because reading from a Parquet file will always be more efficient than JSON or CSV. Another advantage of Parquet is that it supports complex types.
 
- ORC is a self-describing, type-aware columnar file format designed for Hadoop workloads.
 
- You can use the collect_list function, which creates a list of values. You can also use the function collect_set, which creates an array without duplicate values.
 
- JoinWith is roughly equal to a co-group (in RDD terminology) and you basically end up with two nested Datasets inside of one. Each column represents one Dataset and these can be manipulated accordingly. This can be useful when you need to maintain more information in the join or perform some more sophisticated manipulation on the entire result, like an advanced map or filter.
 
- You should generally use the lower-level APIs in three situations: You need some functionality that you cannot find in the higher-level APIs; for example, if you need very tight control over physical data placement across the cluster. You need to maintain some legacy codebase written using RDDs. You need to do some custom shared variable manipulation.
 
- In short, an RDD represents an immutable, partitioned collection of records that can be operated on in parallel. Unlike DataFrames though, where each record is a structured row containing fields with a known schema, in RDDs the records are just Java, Scala, or Python objects of the programmer’s choosing.
 
- In general, you should not manually create RDDs unless you have a very, very specific reason for doing so. They are a much lower-level API that provides a lot of power but also lacks a lot of the optimizations that are available in the Structured APIs.
 
- The Spark driver The driver is the process “in the driver seat” of your Spark Application. It is the controller of the execution of a Spark Application and maintains all of the state of the Spark cluster (the state and tasks of the executors). It must interface with the cluster manager in order to actually get physical resources and launch executors. At the end of the day, this is just a process on a physical machine that is responsible for maintaining the state of the application running on the cluster.
 
- Spark executors are the processes that perform the tasks assigned by the Spark driver. Executors have one core responsibility: take the tasks assigned by the driver, run them, and report back their state (success or failure) and results. Each Spark Application has its own separate executor processes.
 
- The Spark Driver and Executors do not exist in a void, and this is where the cluster manager comes in. The cluster manager is responsible for maintaining a cluster of machines that will run your Spark Application(
 
- Lastly, if you want to use RDDs, we definitely recommend using Scala or Java.
 
- Across all languages, DataFrames, Datasets, and SQL are equivalent in speed. This means that if you’re using DataFrames in any of these languages, performance is equal. However, if you’re going to be defining UDFs, you’ll take a performance hit writing those in Python or R, and to some extent a lesser performance hit in Java and Scala. If you want to optimize for pure performance, it would behoove you to try and get back to DataFrames and SQL as quickly as possible.
 
- Avoiding Cartesian joins or even full outer joins is often low-hanging fruit for stability and optimizations because these can often be optimized into different filtering style joins when you look at the entire data flow instead of just that one particular job area.
 
- Joins are a common area for optimization. The biggest weapon you have when it comes to optimizing joins is simply educating yourself about what each join does and how it’s performed. This will help you the most. Additionally, equi-joins are the easiest for Spark to optimize at this point and therefore should be preferred wherever possible.
 
- Beyond that, simple things like trying to use the filtering ability of inner joins by changing join ordering can yield large speedups. Additionally, using broadcast join hints can help Spark make intelligent planning decisions when it comes to creating query plans,
 
