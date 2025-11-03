---
created: 2023-12-04T13:14
updated: 2025-10-29T13:45
tags:
  - article
  - data
  - data-engineering
  - data/data-engineering
  - data/warehouse
  - database
  - digital-garden
  - distributed-computing
  - programming
  - spark
  - system-thinking
Finished: false
---

# Data Engineering


# Spark
Apache Spark is an open-source, distributed computing system that provides an interface for programming entire clusters with implicit data parallelism and fault tolerance. Spark extends the MapReduce model to efficiently cover more types of computations, which include interactive queries and stream processing. One of Spark's key features is its in-memory cluster computing which increases the processing speed of an application.
The MapReduce model is from Google; it's one of their super duper innovations for working with data. 

[Spark](../Books/Book%20Reviews/Data/Data%20Engineering/Spark.md) book has some intersting insights. 

## [SQL](../Programming/SQL.md)

SQL is a language for data manipulation and transformation. It is quite important for data analysts. 

SQL with CTE is data analytics and data engineering, developers will do just fine without. 

Note: There are a multitude of low-code data transformation tools out there, but buyer beware, they are usually not that great. 
## Data Mesh
Data mesh is a concept where the makers of the data are also the ones responsible for owning and maintaining the data. 

[Intersting overview of data mesh](https://www.datamesh-architecture.com/)

# Links
- [Reddit Data Engineering Wiki](https://dataengineering.wiki/Index)
- [Data Engineer Handbook /Awesome Data Engineering](https://github.com/DataExpert-io/data-engineer-handbook)
- [4 Levels of data engineering](https://www.youtube.com/shorts/_eMnqdrZx_Q) - 

# Thoughts 
- Data engineering is more software than analytics. 
- Data engineering is a lot more structured and require intelligent design than data science. 
- When making pipelines quering APIs, might be smart to not have them execute at whole hours (00:00, 01:00, 12:00 etc.). Why? Because everyone else is :)


