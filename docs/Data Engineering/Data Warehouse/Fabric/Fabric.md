---
created: 2023-12-04T13:14
updated: 2024-10-13T13:13
tags:
  - article
  - digital-garden
  - data
  - database/sql
  - data/warehouse/fabric
  - data/warehouse/lakehouse
  - data/warehouse/lake
  - data/warehouse
  - microsoft
  - microsoft/fabric
  - microsoft/power-bi
  - azure
Finished: true
---

# Fabric
In the fabric section, I write as much as I am able about the Microsoft data warehouse ecosystem and use Microsoft Fabric as an overarching theme for all things considered. I will not cover Databricks or Snowflake on Azure here, as they have their own sections.



## Azure Data Explorer


Things that are good with ADX (Azure Data Explorer) 

- Parse text and JSON into SQL 
- Easily set up data pipelines. 
- Kusto learning opportunity. 



### Fabric Experiences

- Be careful about user sessions; I had an issue where I started working on a Monday in my old tab, and after saving the session, getting an error and having to figure out how to get the changes I had made saved.  
- In general, savings have been a big issue. Sometimes, it feels like I am back ragequiting on my old Windows machine. 
- Sometimes, the error messages you will get from Fabric are very confusing and sometimes downright misleading; therefore, make incremental changes and do not trust that the error message is correct. 
- When deploying to a new workspace, you need to have all the related items when deploying, so if a notebook uses an environment, then you need to add that environment to the deployment as well.



# Links
- [Good blog on Fabric](https://www.kevinrchant.com/)
- [Old Reddit post on deployment pipelines for ](https://www.reddit.com/r/MicrosoftFabric/comments/1dtfeyh/fabric_is_not_production_ready_until_deployment/)
- [Mounting a lakehouse](https://fabric.guru/how-to-mount-a-lakehouse-and-identify-the-mounted-lakehouse-in-fabric-notebook)

# Thoughts 
- Everyone seems quite happy with the Kusto Query Language (KQL). 
- The deployment pipelines on Fabric sucks, it is the culmination of a lot of oversimplifications and abstraction which in my opinion is due to Demo Driven Development (DDD) which is to dazzle people in demos to make the product look easy to use and have a lot of bugs. 


