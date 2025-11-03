---
created: 2023-12-04T13:14
updated: 2025-09-09T19:45
tags:
  - article
  - data-architecture
  - data-engineering
  - data-science
  - data-storage
  - data-warehouse
  - data/data-lake
  - data/lakehouse
  - data/snowflake
  - data/warehouse
  - data/warehouse/fabric
  - data/warehouse/snowflake
  - database
  - date/engineering
  - digital-garden
  - machine-learning
Finished: false
---

# Data Warehouse

When talking about a data warehouse, data lakehouse or data lake, it mostly refers to having a common place to store, manipulate and apply data. 

Why is this important? It provides a common place for all types of data-related work and makes it better for data scientists and data engineers to actually do their jobs. 
From a personal perspective, my read on data warehouses is that it is a must if you want to apply data science and machine learning (traditional is the most likely). As a data scientist, it makes working and understanding data so much easier. So, if a company wants to get serious when it comes to data, then a data warehouse. 


### Data Lake
As data storage costs have fallen dramatically, there has been a movement to create data lakes, aka just throwing all types of files and data into a big ass lake and hoping that it might be useful. I understand the sentiment, but I feel like this is some sort of hoarder mentality of thinking it might be useful. 

### Slowly Changing Dimensions
It's a concept used to manage historical changes within dimension tables. When dimension data changes over time, those changes need to be handled gracefully to preserve historical accuracy in analyses and reports. There are several strategies, but here are the three most common types:
**Type 1 - Overwrite**: In this method, when a change occurs in the dimension data, the existing records are updated with the new data. This effectively erases the historical state. Type 1 is used when it's unnecessary to keep historical data.
**Type 2 - Create a New Record**: This approach adds a new record in the dimension table with the new information, keeping the old data intact. Each record usually has a start and an end date to indicate the period of validity, along with a current indicator. *I like this one.*
**Type 3 - Add a Column**: Here, instead of creating a new record, a new column is added to the existing record to capture the change. This is used when the nature of changes is predictable, and the history is limited to tracking the current and previous states.

## Microsoft [Fabric](Fabric/Fabric.md)
Microsoft Fabric is like an MS copy of data warehouses such as Snowflake and Databricks; it is more of a comprehensive platform with more to offer. 



## [Snowflake](../../Database/Snowflake.md)

# Links
- 

# Thoughts 
- *"I have never seen a data lake that wasnt a data swamp"* - Andriy Burkov


