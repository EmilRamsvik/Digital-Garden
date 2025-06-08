---
Finished: true
tags:
  - article
  - digital-garden
  - database
  - enterprise-data-warehouse
  - "#data-warehouse"
  - "#cloud"
  - "#sql"
  - "#machine-learning"
  - "#snowpark"
  - "#Snowflake"
created: 2023-09-20T00:00:00
updated: 2024-10-13T13:10
---
# Snowflake

Snowflake is a company providing a data warehouse. 

Snowflake has both storage and processing capabilities, allowing you to do a lot of the work in it.  Snowflake uses SQL to make queries.  Snowflake does not provide direct storage and computing that goes through cloud providers like [AWS](../Cloud/AWS.md) or [Azure](../Cloud/Azure.md).  The layer on top of the storage and compute provides usability for the customer. 
nd


### Snowpark
Snowpark is the "ML Framework" of Snowflake, as well as functioning as a general API for developers. The snowpark is used to do modelling and ml-ops. It is based on the XGboost and scikit-learn frameworks; their APIs are similar as much as can be done. The advantage of Snowpark is that its integration with the enterprise data warehouse makes it much easier to work with data and integrate the solutions with the users.  

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

# Links
- [Repo with Starting Guide to do ML on Snowflake](https://github.com/Snowflake-Labs/sfguide-getting-started-dataengineering-ml-snowpark-python/tree/main)
- [Snowflake Learning Resources](https://learn.snowflake.com/en/)
- [Quick Start Data Engineering Pipelines with Snowpark](https://quickstarts.snowflake.com/guide/data_engineering_pipelines_with_snowpark_python/index.html?index=..%2F..index#0)

# Thoughts 
- 


