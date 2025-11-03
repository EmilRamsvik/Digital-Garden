---
created: 2025-10-23 16:04
updated: 2025-10-23T16:04
Pages: 350
Author: Derar Alhussein
tags:
  - books
  - digital-garden
  - book-review
  - data-engineering
  - databricks
  - apache-spark
  - cloud-computing
  - etl
  - data-lakehouse
  - delta-lake
  - streaming
  - certification
  - data-governance
  - big-data
  - study-guide
  - data-architecture
---

# Databricks Certified Data Engineer Associate Study Guide 

# The Book in 3 Sentences
The Databricks Data Engineer Study Guide provides a comprehensive overview of the Databricks Data Intelligence Platform, focusing on its data lakehouse architecture, ETL pipeline development, and data governance features. It covers essential concepts from Delta Lake fundamentals to advanced topics like Delta Live Tables and Unity Catalog, serving as a preparation resource for the Databricks certification exam.

# Impressions

The content is highly technical but well-structured, breaking down complex concepts into digestible sections. The material strikes a good balance between theoretical foundations and practical implementation details. What stands out is its thorough coverage of modern data engineering concepts, particularly the emphasis on data quality, governance, and the medallion architecture pattern.

# My Top  Quotes

- The Databricks Data Intelligence Platform is an AI-powered data lakehouse platform built on Apache Spark. A data lakehouse represents a hybrid solution that combines the best aspects of data lakes and data warehouses. Specifically, it integrates the openness, scalability, and cost efficiency of data lakes with the reliability, strong governance, and performance features of data warehouses. 
 
- Data warehouse An organized library where books (data) are carefully curated, processed, and stored in a specific format, facilitating efficient analysis and querying. 
 
- Data lake A vast, inexpensive, and unstructured repository where all the books are stored without extensive organization or processing. 
 
- A DBU is a measure of processing capacity per hour, which helps estimate the costs associated with running the cluster. 
 
- Magic commands in Databricks notebooks are special cell instructions that provide additional functionality in the notebook environment. These commands, which are prefixed with a %, allow you to execute tasks that go beyond standard code execution. 
 
- Delta Lake is an open-source storage layer that brings reliability to data lakes by adding a transactional storage layer on top of data stored in cloud storage. ​—​Databricks 
 
- The Delta Lake transaction log, often referred to as the Delta Log, is an ordered record of every transaction performed on the table since its creation. As a result, it functions as the source of truth for the table’s state and history. 
 
- However, since Parquet files are immutable—meaning their contents cannot be changed after they are written—Delta Lake takes a unique approach to updates. Instead of directly modifying the record within the existing file, the Delta module makes a copy of the data from the original file and applies the necessary updates in a new data file, part 3.parquet. 
 
- A managed table is the default type in Databricks, where the table and its associated data are managed by the metastore, typically the Hive metastore or Unity Catalog. When you create a managed table, the table data is stored in a location controlled by the metastore. 
 
- In contrast to managed tables, an external table in Databricks is a table where only its metadata is managed by the metastore, while the data files themselves reside outside the database directory. 
 
- When you drop a table, it deletes its metadata from the metastore. This means that the table’s definition, including its schema, column names, data types, and other relevant information, is no longer stored in the metastore. 
 
- Databricks also supports CTAS, or CREATE TABLE AS SELECT, statements. CTAS statements allow the creation and population of tables at the same time based on the results of a SELECT query. 
 
- Partitioning can significantly enhance the performance of large Delta tables by facilitating efficient data retrieval. However, it’s important to note that for small to medium-sized tables, the benefits of partition may be negligible or outweighed by drawbacks. 
 
- Shallow cloning is an ideal option for scenarios where, for example, you need to test applying changes on a table without altering the current table’s data. This makes it particularly useful in development environments where rapid iteration and experimentation are common. 
 
- The TRANSFORM function is another essential higher-order function that facilitates the application of a transformation to each item in an array, extracting the transformed values. 
 
- Spark Structured Streaming is a scalable stream processing engine that revolutionizes the way data streams are processed and queried. It enables querying of infinite data sources, automatically detecting new data as it arrives and persisting results incrementally into target data sinks, 
 
- The COPY INTO command is a SQL statement that facilitates the loading of data from a specified file location into a Delta table. This command operates in an idempotent and incremental manner, meaning that each execution will only process new files from the source location, while previously ingested files are ignored. 
 
- The second method for loading data incrementally from files in Databricks is Auto Loader. It leverages Structured Streaming in Spark to efficiently process new data files as they become available in a storage location. Notably, Auto Loader offers scalability by allowing for handling billions of files and supporting real-time ingestion rates of millions of files per hour. 
 
- As a general best practice, Databricks recommends using Auto Loader when ingesting data from cloud object storage. 
 
- A medallion architecture is a robust approach for efficiently processing data through multiple stages of transformation. 
 
- A medallion architecture, also referred to as multi-hop architecture, is a data design pattern that logically organizes data in a multi-layered approach. Its primary objective is to gradually enhance both the structure and the quality of data as it progresses through successive processing layers. 
 
- Our journey of implementing a medallion architecture begins in the bronze layer, which is the foundational layer for data ingestion. It serves as the initial repository that captures all incoming data in its rawest form, before any transformation or cleansing occurs. 
 
- In the silver layer, our focus shifts to refining and enhancing the data acquired from the bronze layer. At this stage, we refine the raw data by adding contextual information, formatting values, and performing data quality checks. Our objective is to ensure that the data is clean, structured, and optimized for downstream processing and analysis. 
 
- In the gold layer, we concentrate on providing high-level aggregations and summaries. This layer is important for supporting business intelligence and analytics applications by presenting the data in its most refined form. 
 
- The medallion architecture provides a structured and incremental approach to data processing, which is highly beneficial for modern data engineering tasks. By organizing data into distinct layers based on its level of refinement, this architecture enables you to efficiently process and analyze data, while ensuring data quality and accuracy. This makes it the ideal choice for building data pipelines in the lakehouse that can support a wide range of data-driven applications and analytics. 
 
- Delta Live Tables (DLT) is a powerful tool that enables you to build production data pipelines with ease. By providing a simple and intuitive way to manage data pipelines, DLT empowers you to focus on extracting insights from your data. 
 
- Delta Live Tables is a declarative ETL framework powered by Apache Spark for building reliable and maintainable data pipelines. It’s designed to simplify the process of creating large-scale data processing pipelines, while maintaining table dependencies and data quality. 
 
- DLT provides several advantages over Apache Spark and other traditional ETL frameworks, including the following: Simplified pipeline construction DLT offers a declarative approach to pipeline construction, enabling you to write less code and thereby reduce complexity and development time. Maintain table dependencies DLT uses directed acyclic graphs (DAGs) to efficiently manage table dependencies within data pipelines, enhancing their reliability and maintainability. Support for data quality control DLT provides built-in support for data quality control, ensuring the production of high-quality data outputs. 
 
- SQL support Cannot create streaming tables in Spark SQL syntax only. It needs to pass by PySpark to register streaming tables. Supports creating streaming  tables in SQL via CREATE STREAMING TABLE syntax. Data quality control Supports basic data quality control using Delta Lake table constraints. Provides advanced data quality control using DLT expectations. 
 
- One of the most notable differences between DLT and Spark Structured Streaming lies in their Python syntax. Spark Structured Streaming employs the readStream and writeStream methods to define incremental tables. In contrast, DLT simplifies this process through the use of the @dlt.table decorator, which defines incremental tables without the need for explicit stream writing. This decorator abstracts the complexities of streaming data management, including checkpointing, which is automatically managed by DLT. 
 
- Another significant difference between DLT and Spark is their support for data quality control.  Apache Spark lacks native support for data quality control, leaving it up to developers to implement their own solutions. While Delta Lake table constraints (e.g., check constraints) do help in this area, DLT, by contrast, can natively enforce advanced data quality standards using DLT expectations. These expectations provide enhanced capabilities for validation conditions, actions, and tracking violations. This built-in support for advanced data quality control makes DLT a more robust and reliable choice for data processing. 
 
- AS <batch query> Input data source Input data source must be a streaming source, such as Auto Loader Append-only table read via STREAM function 
 
- AS <batch query> Input data source Input data source must be a streaming source, such as Auto Loader Append-only table read via STREAM function Input data dataset is static, or contains data updated, deleted, or overwritten 
 
- Live views in DLT are temporary view objects that are scoped to the DLT pipeline they belong to. Unlike tables in DLT, live views are not persisted to the catalog, and they exist only for the duration of the current pipeline run. This makes them ideal for intermediate data transformations and quality checks, where the results do not need to be saved for long-term access. 
 
- One of the advanced features of DLT is the ability  to enforce  data quality through constraints, which are specified using the CONSTRAINT keyword in SQL syntax. This capability allows defining conditions that data must meet to be considered valid, thereby enhancing the overall data integrity and reliability. 
 
- The CONSTRAINT keyword allows for the definition of conditions that the data must satisfy. If the data fails to meet these conditions, it is considered a violation. The ON VIOLATION clause specifies the action that should be taken when such violations occur. This clause can significantly influence how data is handled during the pipeline processing. 
 
- The ON VIOLATION clause provides three main actions that can be taken when a constraint is violated: DROP ROW This action removes records that do not meet the specified constraints. It ensures that only data conforming to the defined quality rules is retained in the dataset. This mode is useful for cleansing data by removing invalid entries automatically. FAIL UPDATE In this mode, any violation of the constraints causes the entire pipeline to fail. This strict approach ensures that no invalid data passes through, thus maintaining the highest level of data integrity. This action is beneficial in scenarios where data correctness is critical, and any deviation from the expected quality must be addressed immediately. No action (default) If the ON VIOLATION clause is omitted, records that violate the constraints are still included in the dataset, but the violations are reported in the metrics. This approach allows for tracking data quality issues without interrupting the pipeline’s operation. It provides visibility into the data quality problems while allowing the workflow to proceed. 
 
- Remember, sources that update, delete, or overwrite data break the append-only requirement of streaming source, preventing us from creating DLT streaming tables. 
 
- Sources that update, delete, or overwrite data break the append-only requirement of streaming source, preventing us from creating DLT streaming tables. By employing materialized views, we ensure that the entire dataset from the source is reprocessed with each pipeline run, thus handling any new changes in the data. 
 
- CDC feeds can be delivered from the source in various formats. Two common methods are as follows: Data stream The CDC events are continuously streamed from the source to the target system, allowing for near-real-time data synchronization. JSON files The CDC events can be periodically captured and stored in JSON files, which are then processed to apply the changes to the target system. 
 
- Capturing and replicating data changes is a crucial aspect of building robust ETL pipelines, as it ensures that the data reflects the latest source modifications. This process, known as change data capture (CDC), 
 
- Change data capture (CDC) is a process that identifies and captures changes made to data in a data source and delivers a record of those changes to a target. This technique is essential for keeping data systems synchronized and ensuring that any updates in the source are accurately reflected in the target. 
 
- CDC data typically originates from two main sources: databases with built-in CDC features, and third-party software known as CDC agents. 
 
- Delta Live Tables provides robust support for processing CDC feeds using the APPLY CHANGES INTO command. 
 
- Databricks Jobs is an integrated workflow orchestration tool within the Databricks platform. It is designed to facilitate the creation, scheduling, and monitoring of complex data workflows in the lakehouse environment. This feature can be leveraged to automate the processing of data pipelines, train and deploy machine learning models, and execute various data analysis activities. 
 
- Databricks SQL (DBSQL) is a data warehousing solution specifically designed for scalable business intelligence applications. It offers features for executing and managing SQL queries, creating interactive dashboards, and setting up alerts, all while maintaining unified governance. With Databricks SQL, teams can easily analyze and visualize large datasets, share insights, and make data-driven decisions. 
 
- SQL warehouses are the backbone of Databricks SQL, providing the computational power necessary to run SQL queries at scale. They are essentially compute clusters based on Apache Spark and the Photon engine. These clusters are highly optimized for SQL workloads and provide some additional benefits that enhance performance and increase concurrency compared to traditional clusters. This enables you to efficiently manage and execute your queries and dashboards. 
 
- A key feature of SQL Warehouses is the provisioning of SQL endpoints, which allow external business intelligence (BI) or other SQL-based tools to connect and access data in the lakehouse. 
 
- Data governance is a strategic approach to managing data within an organization, ensuring that data is accurate, secure, and used responsibly. It involves the development and enforcement of policies and procedures to control data across various stages of its lifecycle—from ingestion and storage to processing and sharing. 
 
- Data cataloging Effective data governance requires a comprehensive understanding of an organization’s data assets. A data catalog plays a crucial role in this process by serving as a centralized repository for metadata, which facilitates efficient data discovery and access. Data security Robust data governance involves defining data access permissions to ensure that only authorized individuals or groups can access specific data. This practice is essential for maintaining data confidentiality and ensuring compliance with regulations such as the European General Data Protection Regulation (GDPR). Monitoring and auditing Comprehensive auditing of data access and usage is a fundamental aspect of strong data governance. It involves monitoring who is accessing the data, as well as when and how it is being used. This practice helps organizations ensure compliance with data protection regulations and reduce the risk of unauthorized access. Data lineage Data lineage refers to the tracking and visualization of the flow of data assets from their origin to their final destination. This is vital for data governance as it ensures transparency, data reliability, and compliance. By mapping dependencies between different resources, data lineage facilitates troubleshooting and identifying potential impacts of changes. Data discovery A key element of data governance is ensuring that data is easily discoverable, allowing data teams to efficiently locate data assets across the organization. This helps prevent data duplication and promotes better data utilization. 
 
- The DENY operation is used to explicitly prevent a user or group from accessing specific resources or performing certain actions. This operation takes precedence over any other permissions that might otherwise allow access, ensuring that certain users or groups are definitively blocked from specific actions. 
 
- The SHOW GRANTS operation allows administrators to view the current permissions assigned to a specific object. This command is useful for auditing and verifying access controls, ensuring that only authorized users have the necessary permissions. 
 
- The REVOKE operation removes permissions that were previously granted to a user or group. This operation is essential for dynamically managing access as organizational roles and requirements change. 
 
- SELECT privilege This privilege grants read access to an object. Users with the SELECT privilege can query and retrieve data from the database object, such as a table, but cannot modify it: 
 
- The MODIFY privilege allows users to add new data, delete existing data, and make modifications to the data within the object. This is translated by the ability to perform INSERT, UPDATE, and DELETE operations on a table: 
 
- With the CREATE privilege, a user can create new objects. This is typically used for creating tables, views, or other schema objects within the database: 
 
- READ_METADATA privilege This privilege permits users to view an object along with its metadata. Metadata includes information about the structure of the object and its properties. 
 
- The USAGE privilege, while not providing any direct access or ability on its own, is a prerequisite for performing any other actions on a database object. It is often combined with other privileges to enable their functionalities: 
 
- Unity Catalog (UC) is an open source, centralized governance solution that spans across all your workspaces on any cloud. It unifies governance for all data and AI assets in your lakehouse, including files, tables, machine learning models, and dashboards. This centralization ensures consistent access controls, and simplified data management, which enhances overall data governance and security. 
 
- There are three main components to the changes implemented by Unity Catalog: Centralized user and group management Unity Catalog utilizes the account console for managing users and groups, which can then be assigned to multiple workspaces. This approach means that user and group definitions are consistent across all workspaces assigned to Unity Catalog. Separation of metastore management Unlike the workspace-specific metastore  used previously, Unity Catalog’s metastores are managed centrally per cloud region through the account console. A single Unity Catalog metastore can serve multiple workspaces, allowing them to share the same underlying storage. This consolidation simplifies data management, improves data accessibility, and reduces data duplication, as multiple workspaces can access the same data without needing to replicate it across different environments. Centralized access control Access controls within Unity Catalog are controlled centrally and apply across all workspaces. This ensures that defined policies and permissions are enforced consistently across the organization, thereby enhancing overall security. 
 
- Metastore The metastore is the top-level entity in Unity Catalog, containing catalogs and managing metadata and access control. It operates independently from workspaces, providing enhanced security and a unified governance model. 
 
- Catalogs Within each metastore, catalogs act as high-level containers for organizing data objects. They represent the first part of the three-level namespace. A metastore can contain multiple catalogs, allowing for flexible and scalable data organization. Schemas (databases) Schemas reside within catalogs and represent the second part of the three-level namespace. They are commonly referred to as databases. Schemas group related data and AI assets, facilitating organized data management. Data and AI assets These are the third part of the three-level namespace. They reside within schemas and represent the actual data structures and AI artifacts managed by Unity Catalog, such as tables, views, storage volume, registered machine learning models, and functions. Storage access objects Unity Catalog allows you to set custom locations in cloud storage for storing managed and external tables. This introduces new securable objects to govern data access to these locations: storage credentials and external locations. A storage credential abstracts long-term access keys from cloud storage providers, while an external location links a given storage location with a storage credential. Delta sharing entities Unity Catalog also supports Delta Sharing, an open protocol designed for the efficient exchange of large datasets. Within Unity Catalog, shares represent collections of assets that can be shared with designated consumers (Recipients). 
 
- Unity Catalog categorizes identities into three types: users, service principals, and groups. 
 
- Users Users are individuals who interact with the Databricks environment. Each user is uniquely identified by their email address, which serves as a unique identifier. Users can be assigned various roles, including administrative roles, allowing them to perform advanced tasks such as managing metastores, assigning metastores to workspaces, and managing other users. Service principals Service principals are designed to represent automated tools or applications. They are identified by an application ID, which ensures that automated processes have a distinct identity separate from human users. Service principals can be assigned administrative roles similar to users, allowing them to perform essential tasks programmatically. This capability is particularly useful for facilitating automation and integration with other systems. Groups Groups are collections of users and service principals, treated as a single entity. Groups simplify the management of permissions by allowing administrators to assign roles and privileges to a group rather than to individual users. Groups can be nested within other groups. For example, a parent group named “Employees” could contain subgroups such as “HR” and “Finance.” This nesting capability mirrors organizational units or functional departments and allows for efficient delegation of access rights at different levels. Additionally, principals can belong to multiple non-nested groups. 
 
- Unity Catalog offers the following features designed to enhance data management, accessibility, and traceability: Automated lineage This feature tracks and visualizes the origin and usage of data assets across notebooks, workflows, queries, and dashboards, providing transparency and traceability. Data search and discovery Unity Catalog offers capabilities for tagging and documenting data assets along with a powerful search interface, making it easier for users to find data. System tables Unity Catalog provides access to your account’s operational data through system tables, including audit logs, billable usage, and lineage information. This facilitates better monitoring and management of your data lakehouse. 
 
- The questions expected during the exam are distributed across several core topics, ensuring comprehensive coverage of the platform’s capabilities. The distribution is as follows: 1. Databricks Lakehouse Platform—24% 11 questions out of 45 will focus on the use and benefits of the Databricks Data Intelligence Platform. This includes understanding its architecture and core components, particularly Delta Lake. 2. Building ETL Pipelines—29% 13 questions will cover the creation of ETL pipelines using Apache Spark SQL and Python. This section emphasizes practical knowledge of transforming and processing batch datasets and working with higher-order functions and user-defined functions (UDFs) in Spark. 3. Incremental Data Processing—22% 10 questions will delve into processing data incrementally. This topic involves understanding how to manage streaming data and design incremental medallion architectures. 4. Production Pipelines—16% 7 questions will explore topics on constructing production pipelines and performing Databricks SQL analytics. This involves implementing DLT pipelines, creating end-to-end workflows, and visualizing data using Databricks Dashboards. 5. Data Governance and Security—9% 4 questions will assess knowledge of data governance and security practices. This includes understanding access controls in Hive and Unity Catalog to ensure secure and compliant data management. 
 
- One of the primary resources for exam preparation is the official Databricks practice test, which is accessible in PDF format. This static practice exam can be downloaded directly. 
 
