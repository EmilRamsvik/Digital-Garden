---
created: 2023-12-04T13:14
updated: 2025-09-02T10:14
tags:
  - article
  - best-practices
  - data
  - data-engineering
  - data-modeling
  - data-pipeline
  - data-transformation
  - data-warehouse
  - data/snowflake
  - database
  - dbt
  - digital-garden
  - enterprise-data-warehouse
  - sql
Finished: false
---

# DBT
dbt is an open-source command-line tool that enables data transformation and modeling in a structured and efficient manner. It allows data engineers and analysts to define and manage the data transformation pipeline using SQL queries. With dbt, you can write modular and reusable SQL code called "models," which define the transformations required to convert raw data into structured and analysis-ready data. These models can be organized, tested, and documented within the dbt framework. dbt leverages the power of SQL and provides a layer of abstraction on top of the data warehouse, making it easier to develop, test, and maintain complex data transformations. It promotes best practices such as version control, testing, and documentation, enabling collaborative and maintainable data modeling workflows. dbt integrates with various data warehouses and can be used in conjunction with other data tools and orchestration platforms to create a robust and reliable data pipeline.

# Why DBT
The killer feature of dbt is abstracting away the complexities and leaving only the modeling as a complexity. It gives data analysts a tool to work with data and do it in the right way. What are those ways

- Version control
- Dev-Ops pipelines (CI/CD)
- References
- Documentation
And a host of other features. 

This means your data engineer time can be released to work on other things, such as data connections (Extract Load) or modeling the data as analytics engineers. 

### DML
Data Manipulation Language (DML) is a class of SQL statements that are used to query, edit, add and delete row-level data from database tables or views. The main DML statements are `SELECT`, `INSERT`, `DELETE`, and `UPDATE`.

### DDL 
Data Definition Language (DDL) is a group of SQL statements that you can execute to manage database objects, including tables, views, and more. Using DDL statements, you can perform powerful commands in your database such as creating, modifying, and dropping objects. DDL commands are usually executed in a SQL browser or stored procedure.


## Naming conventions
-**Sources**
- The raw data that has already been loaded
**staging**
- Clean and standardize the data
- One-to-one with source
**Intermediate**
- Models between staging and final models
- Always built on staging models
**Fact**
- Things that are ccuring or have occured

**Dimension**
- People places or things.
- Things that might change. ~~~~
[See also medallion architecture](https://www.databricks.com/glossary/medallion-architecture)

# Links
- [Structure DBT projects](https://docs.getdbt.com/best-practices/how-we-structure/1-guide-overview)
- [Elementary Data](https://www.elementary-data.com/)
- [DBT Learn is quite a nice place to start learning DBT](https://www.getdbt.com/dbt-learn)
- [On Configs and Properties](https://docs.getdbt.com/reference/configs-and-properties)
- [Best Practices, please read and then read twice](https://docs.getdbt.com/best-practices)
- [Data Testing best practices](https://www.datafold.com/blog/7-dbt-testing-best-practices?) - Ignore all the promotions and this article is quite nice. j
- Understanding the structure of the YAML file will enable you to become a great dbt developer. It is a powerful feature with docs that are lacking. 
- Try to become good at following best practices and following the standards set by dbt, that helps immensely.  
- Take time to read up on the model properties and configs. The most specific config dominates, so a model_prop.yaml file will take precedence over dbt_prroject.yml.
- [The plus prefix in YAML schemas made me confused, so here are the official docs on what they mean.](https://docs.getdbt.com/reference/resource-configs/plus-prefix)  

