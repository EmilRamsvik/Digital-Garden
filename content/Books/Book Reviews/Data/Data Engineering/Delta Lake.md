---
created: 2025-10-23 16:09
updated: 2025-10-24T08:41
Pages:
Author:
tags:
  - books
  - digital-garden
  - book-review
  - technology
  - big-data
  - apache/spark
  - data/lakes
  - data/architecture
  - streaming
  - data/warehousing
  - acid
  - databricks
  - data/processing
  - data/quality
  - data/governance
  - distributed-systems
  - cloud-computing
---

# Delta Lake

# The Book in 3 Sentences
Delta Lake is an open-source storage layer that brings ACID transactions and robust metadata handling to data lakes, enabling the "lakehouse" architecture that combines data lake flexibility with data warehouse features.

It provides a comprehensive system for managing data through bronze (raw), silver (cleaned), and gold (curated) layers, with features like change data feed, schema evolution, and advanced optimization techniques like Z-Ordering and Bloom filters.

The platform integrates with modern data tools and supports both batch and streaming workflows, making it particularly valuable for large-scale data processing and sharing.

# Impressions

The content reveals Delta Lake as a thoughtfully designed system that addresses many real-world data engineering challenges. What stands out is how it bridges the gap between traditional data warehouses and modern data lakes while maintaining flexibility and performance. 

The emphasis on data quality through the medallion architecture and the inclusion of advanced optimization features shows a mature understanding of enterprise data needs.


Delta Lake is popularized through Databricks, it is open source format and quite popular in the big data / data engineering community. Snowflake uses Iceberg which is similar technology.

# My Top  Quotes
- Data lakes are scalable storage repositories (HDFS, cloud object stores such as Amazon S3, ADLS Gen2, and GCS, and so on) that hold vast amounts of raw data in their native format until needed 
 
- Delta Lake is an open source storage layer that supports ACID transactions, scalable metadata handling, and unification of streaming and batch data processing. It was initially designed to work with Apache Spark and large-scale data lake workloads. 
 
- The transaction log, also known as the Delta log, is a critical component of Delta Lake. It is an ordered record of every transaction performed on a Delta Lake table. The transaction log ensures ACID properties by recording all changes to the table in a series of JSON files. 
 
- Metadata in Delta Lake includes information about the table’s schema, partitioning, and configuration settings. 
 
- A Delta Lake table’s schema defines the data’s structure, including its columns, data types, and so on. The schema is enforced on write, ensuring that all data written to the table adheres to the defined structure. Delta Lake supports schema evolution (add new columns, rename columns, etc.), allowing the schema to be updated as the data changes over time. 
 
- Apache Arrow is a development platform for in-memory analytics and aims to provide a standardized, language-independent columnar memory format for flat and hierarchical data, as well as libraries and tools for working with this format. 
 
- Since a Delta Lake table is composed of Parquet files internally, the transaction log is the biggest difference when converting a Parquet table to a Delta Lake table. 
 
- Kafka is a distributed event store and stream processing framework that provides a unified, high-throughput, low-latency platform for handling real-time data feeds. 
 
- Between your raw (bronze), cleansed (silver), and curated (gold) datasets. 
 
- The vacuum command will clean up deleted files or versions of the table that are no longer current, which can happen when you use the overwrite method on a table. If you overwrite the table, all you are really doing is creating new pointers to new files that are referenced by the table metadata. 
 
- An often overlooked but very helpful thing to have for any data processing pipeline is insight into the operations that are taking place. Having metrics that help us to understand the speed and scale at which processing is taking place can be valuable information for cost estimating, capacity planning, or troubleshooting when issues arise. 
 
- One fairly standard application of Auto Loader is to use it as a part of the medallion architecture design, with a process ingesting files and feeding the data into Delta Lake tables with additional levels of transformation, enrichment, and aggregation up to gold layer aggregate data tables. This is quite commonly done with additional data layer processing taking place, with Delta Lake as both the source and the sink of streaming processes, which provides low-latency, high-throughput, end-to-end data transformation pipelines. 
 
- “Change data capture (CDC) is a method for extracting each change event (insert, update, delete) that occurs in a database. 
 
- Bringing this back around to our initial inquiry, tracking changes is supported in Delta Lake via a feature called Change Data Feed (CDF). What CDF does is to let you track the changes to a Delta Lake table. Once it is enabled, you get all the changes to the table as they occur. Updates, merges, and deletes will be put into a new _change_data folder, while append operations already have their own entries in the table history, so they don’t require additional files. 
 
- In the past you’ve been able to do this with other methods, such as leveraging external libraries to create UUIDs or using hashing methods to create unique keys. Delta Lake offers some advantages over these methods. By baking the ability to generate columns into the foundation of the format, you can avoid running into issues that stem from the nondeterminism of many of these previous methods and get simpler ID columns that are more human-readable than the results of the hashing methods. 
 
- The lakehouse is an open data management architecture that combines the flexibility, cost efficiency, and scale of the data lake with the data management, schema enforcement, and ACID transactions of the traditional data warehouse. ​—​Databricks 
 
- The bronze layer represents the initial point for our data lineage within the lakehouse. A common practice here is to apply minimal transformations (if any) on the data. These are the transformations that can’t be ignored, like converting the source format into a compatible type for writing to Delta Lake. 
 
- Because we are ingesting data that is as close to “raw” as possible, we need to remember to maintain a limited schema and do as little to transform the data as possible. 
 
- While the bronze layer represents the initial point of lineage in the medallion architecture, the silver layer represents the point at which raw data is filtered, cleaned, and dressed up, and even augmented by joining across one or many other tables. 
 
- Data in the gold layer has undergone multiple transformations and has been specifically curated, and it has a specific place in the data world. 
 
- You can partition a Delta table by a column or even by multiple columns. The most commonly used partition column is date, but in high-volume processes it’s not uncommon to find tables with multiple levels of partitioning using even hour and minute columns. 
 
- The easiest way to think about what partitioning does is that it breaks a set of files into sorted directories tied to your partitioning column( 
 
- The OPTIMIZE operation on its own is intended to reduce the number of files contained in a Delta Lake table 
 
- In Databricks (DBR 8.3 and above), you can additionally run an ANALYZE TABLE command to collect additional statistics, such as the number of distinct values, average length, and maximum length. These added statistics values can yield further performance improvements, so be sure to leverage them if you’re using a compatible compute engine. 
 
- Z-Ordering creates clusters of records using a space-filling curve. The implication of doing this is that the files in your tables are arranged according to the clustering of the data. This means that when statistics are collected on the files, you get boundary information that aligns with how your record clusters are segregated in the process. 
 
- A Bloom filter index is a hashmap index that identifies whether a value probably exists in a file or definitely does not. 
 
- The fpp value in the parameters is short for false positive probability. 
 
- Enabling additional features such as delta.randomFilePrefixes for high transaction rates with cloud providers allows you as an engineer to achieve massive scale with improved efficiency, as doing so removes potential barriers caused by prefix limitations. 
 
- The moral of the story of the DoorDash decision to adopt Delta Lake is this: even for data systems with multiple types of tooling operating at massive scale and with a need to support things like efficiently capturing data from real-time event 
 
- The term data product represents the code, data, and metadata, as well as the logical infrastructure required to build, produce, and manage a given curated data product. 
 
- Zhamak Dehghani introduced the novel idea of data products as part of her architectural paradigm the data mesh, where she proposed a rule that any curated data product must be purpose-built and capable of being used as is without requiring additional joins to other tables. 
 
- Essentially, in its most basic form, a data catalog is a tool that enables a user to locate the high-quality data they need to get their job done. At a minimum, the data catalog provides information about the components of a data product—the catalog, database (schema), tables, and views—along with a simple search component called the data discovery layer (or service). 
 
- Metastore Unity Catalog utilizes a centralized metadata layer called the metastore. This provides the ability to catalog and share data assets across the lakehouse, within regions, and even across clouds. 
 
- The namespace within Unity Catalog provides the following convention: \{catalog\}.\{database/schema\}.\{table\}. The namespace is a component of the metastore and enables us to organize our data and assets hierarchically. 
 
- The Delta Sharing Protocol provides an open solution to securely share live data from our lakehouse to any compute platform. 
 
