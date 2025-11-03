---
created: 2023-10-29T15:52
updated: 2025-10-13T13:59
Pages: 581
Author: Roberto Zagni
finished: true
Date Finished: 2024-05-06
tags:
  - book-review
  - books
  - cloud
  - data
  - data-engineering
  - data-modeling
  - data/data-engineering
  - data/data-pipeline
  - database
  - dbt
  - digital-garden
  - snowflake
  - sql
---
# Data Engineering with dbt


# 🚀 The Book in 3 Sentences
This is a book about data engineering, with a sprinkle of dbt as well. What it is not is a book on dbt, it most definitely is a book on data engineering. It contains data engineering knowledge and ways of working. 

# 🎨 Impressions
It is not necessarily a book I would highly recommend, because it falls between theoretical data engineering and practical dbt skills, failing to solve any of those specifically well. I might rather recommend reading the book on data management and Kimbal schema and data engineering and the docs on dbt to get the same result but better.

This is of course relevant to [Data Engineering](../../../../Data%20Engineering/Data%20Engineering.md) and [dbt](../../../../Data%20Engineering/dbt.md) concepts. 
### Interesting consepts on data "traps"
- [Fan trap](https://docs.sisense.com/main/SisenseLinux/chasm-and-fan-traps.htm)
- Chasm trap



# ✍️ My Top  Quotes

- Data Control Language (DCL): DCL contains the GRANT and REVOKE commands, which are used to manage the privileges that control the access to database resources and objects
- Transaction Control Language (TCL): TCL contains the commands to manage transactions
 
- When working with dbt, we use the DDL and DML commands only in macros. We do not use the DDL and DML commands in models because dbt will generate the required commands for our models based on the metadata attached to the model.
 
- • REMOVE: Removes a file from a Snowflake stage
 
 
- When the FROM clause lists more than one table object, the result is the Cartesian product of the elements in these tables. To avoid a Cartesian explosion, it is important to include a WHERE clause that restricts the combinations, keeping only the ones we want.
 
- The Cartesian product is the result of pairing the rows of all the objects in the product in all possible ways. This means that the number of rows
 
- The Cartesian product is the result of pairing the rows of all the objects in the product in all possible ways.
 
- The expression Cartesian explosion is often used to refer to the fact that the number of rows returned by the Cartesian product increases very quickly and can easily create performance issues.
 
- Providing the relevant WHERE clause will help with reducing the result by many orders of magnitude even if the keys don’t match so precisely.
 
- The big difference is that with GROUP BY, you get only one row per group, while with window functions, all the rows are returned, with the function calculated on the desired subset of rows.
 
- Dbt Core: This is open source software created by dbt Labs, developed in Python, that you can freely download and use locally from the command line on many operating systems, such as Windows, Mac, and Linux. It provides all the core functionalities of dbt and can also be used for commercial projects.
 
- In Snowflake, field names are case insensitive if not quoted
 
- Data does not exist in a vacuum. Pure data without any surrounding knowledge rarely has any value. Data has a lot of value when you can put it into context and transform it into information.
 
- Data modeling encompasses the activities to provide a clear context for your data, at multiple levels. In the most common interpretation, a data model is a visual representation of the data, in the context you are analyzing.
 
- An important part of data modeling is naming, such as in the example that we have seen previously, which provides the basic layer of semantics, while another important aspect is to explain how different pieces of data are related to each other.
 
- Attribute: An attribute is a property of an entity for which we want to store values, such as a car plate, a customer, or the total amount of a transaction  
- Relationship: A relationship is a connection between two entities that are related to each other and captures how they are related, such as the ownership relation between a car and its owner, or the purchasing relation between a customer and a product
 
- Natural Key (NK): This is a key that has a business significance and uniquely identifies the instances of the entity in the given context. An NK also exists outside of the database world. It is something printed on forms or that a person might use to identify an instance of the entity in the real world.
 
- One-to-one cardinality: In this case, both entities could have a reference, an FK, to the other entity, but that is usually not a good idea as you get into the chicken-egg problem, and you also risk having inconsistencies.
 
- One-to-many cardinality: This is the most common cardinality and the simplest case, as the many side will have an FK toward the one side.
 
- Many-to-many cardinality: This is a case where model and reality cannot align. An FK in an instance on any of the two sides can only contain one reference to the other side and cannot therefore correctly contain the multiple references needed for a many-to-many relationship.
 
- The fan trap problem causes the calculations done on measures joined from the one side of the one-tomany relationship to be wrong.
 
- A chasm trap is an unmanaged and often unintentional many-to-many relationship. Because it is unmanaged, it becomes an unintended partial Cartesian product.
 
- The difference between a chasm trap and a real many-to-many relationship is that in the latter you have the mapping table that limits the Cartesian product to only those occurrences that make sense.
 
- In a star schema, a fact table containing the events or records containing the measures of interest is surrounded by several dimension tables. A dimension table is a denormalized table that contains the descriptive data at the lowest level of detail that you want to access and should not contain measures (in the original Kimball definition) to avoid the fan trap issue.
 
- The following figure shows a typical star schema organized around an Order fact:
 
- In a star schema, a fact table containing the events or records containing the measures of interest is surrounded by several dimension tables. A dimension table is a denormalized table that contains the descriptive data at the lowest level of detail that you want to access and should not contain measures (in the original Kimball definition) to avoid the fan trap issue. A measure is a number that you want to use for calculations.
 
 
- A data mart is a collection of data, generally a small subset of all the available data, that is selected to satisfy the BI needs of a specific business area, such as a department, or use case.
 
- Another limitation according to the Kimball rules is that facts are only connected to dimensions, not other facts.
 
- The data mesh approach was born in some of the most tech-heavy companies to obviate a very common problem that affects most of the data engineering industry: data ownership.
 
- The pain is real and widespread: the people in charge of building the enterprise-wide unified data platform have no knowledge of the source data and the business; they receive at best weak support from their colleagues that run the business applications and have little to no opportunity or ability to interact with the key people that really understand the business and how data is used and interpreted on the business side.
 
- The solution in the tech-heavy companies that invented the data mesh has been to use the same approach that has worked for application software delivery. They took the microservice architecture and the DevOps way of working and applied it to the data realm creating the data mesh. The data mesh can be thought of in a simplistic way as a microservice architecture where a microservice is a data warehouse.
 
- An application that allows doing something using the underlying data that you do not have but is in the system providing the product.  An example could be the verification that a customer is active or is authorized to place an order of some amount. Another could be a customer-facing application to require the estimation of their house value or a quote for the car insurance. 
- An interface that allows retrieving data with a clear semantic.  An example could be the marketing department providing recent customer actions or touchpoints, a production site making available the status of an assembly line, or the logistics department making available data about distance, fuel consumption, or CO2 produced by their trucks or associated with their deliveries.
 
- The flexibility of dbt also allows having multiple dbt projects interacting through clear APIs, which are the sources for one project and the exposures for the other.
 
- Data engineering is the discipline of taking data that is born elsewhere, generally in many disparate places, and putting it together to make more sense to business users than the individual pieces of information in the systems they came from.
 
- To put it another way, data engineers do not create data; they manage and integrate existing data.
 
- Data comes from “ datum ”, and it means “given.”
 
- These ideas are exemplified by the four-eyes principle, requiring each piece of code to be seen and approved by at least two people (through pairing, pull requests, or code walkthroughs), and the boy scout rule, which prompts you to ensure a piece of code you touch is left in better shape than it was before you touched it, independently of the person that wrote it, therefore improving the work over time.
 
- SRP: The single-responsibility principle says that a model should have one, and only one, reason to change. In practice, this means that a model should focus on doing one thing, hopefully doing it well and making obvious what it does.
 
- OCP: The open/closed principle says that a model should be open for extension and closed for (interface) modification. This means that the models that we use as connecting points between systems and models should be stable in the interfaces they expose and should also be easily extensible.
 
- ISP: The interface segregation principle says that a client should not depend upon an interface it does not use. Seems trivial, but we all have seen customer dimensions with over 100 columns. Again, it is quite simple to adhere to this principle in the data world by using a view that provides access to the underlining refined data exposing only the required information, and not everything available “just because.” In this way, we limit the “blast radius” of eventual changes that make some fields unavailable or change semantics.
 
- LSP: The least surprise principle says that a model should do what seems obvious it would do from its name and position in a project.
 
- The seed loading mechanism in dbt is not a general-purpose way to load high amounts of data from CSV files – it is only intended as a utility tool to load small amounts of data (up to hundreds or a few thousands of lines) that are strictly connected with the current project and do not make much sense to maintain or load in a different place or with a different tool.
 
- Intermediate transformation (TR): This is a catch-all type for models that you create for intermediate calculations that do not represent a proper business concept or that cannot exist by themselves, in the sense that you will not expect other developers to use such a model without knowing the specific caveats.
 
- Refined model (REF): This is the type for models that represent a recognizable business concept, at any level, with the level needing to be clear from the name if it is not for general use. We expect that anyone needing this concept at that level should reuse this model and not build their own.
 
- Mapping model (MAP): This is the type for models that support conversion from one reference system to another, by providing the mapping for keys in one system to the equivalent key in the other system.
 
- Master Data Dimension (MDD) model: This is the type for models that implement dimensions provided directly from the master data management system.
 
- Aggregated (AGG) model: This is the type for models that contain aggregated or summarized data.
 
- Pivoted (PIVOT) model: This is the type for models that contain pivoted data. This is a specialized model type that you can use if you happen to deal with pivoted data. It is listed here to make clear that you can create new model types according to your needs. The goal should always be to provide clear communication of what the model does.
 
- Applying the You Aint Gonna Need It (YAGNI) principle, you should not introduce things (features, models, and any other complication) until they are really needed. Following this principle is essential in big projects, and for this reason, we think that adding a temporary or skeleton REF model would only be a good idea when you already have a good plan on how to develop it, you are ready to do that development in a short time frame, and splitting the model in two would ease the work of the development team.
 
- Pre-hooks and post-hooks are dbt features that allow you to execute one or more SQL queries before or after the creation of a model, including seed tables.
 
- Copying and pasting code is one of the safest ways to quickly reach maintenance hell. It wastes time and is error prone and maintenance will quickly get out of scale, as every change will need to be made manually in all the places that you have copied and pasted the code, but good luck finding them all!
 
- Remember that in dbt Cloud, the environment variables have strict names that must start with DBT_ orDBT_ENV_SECRET_. The difference between the two is the ability of dbt Cloud to remove its printed values from logs and not show or print out the secret ones in the UI.
 
- Dbt_profiler package This package provides macros to profile the content of your relations, providing many measures for each column, such as the proportion of not null, min, max, and the number of distinct values.
 
- This dbt package builds a data mart to analyze the executions and usage of dbt components, such as models, tests, and exposures, ultimately describing the dbt project where you install the package. snowflake_spend package
 
- We will use the MD5 hashing algorithm, which produces a 128-bit digest, generally represented by 16 bytes or 32 hexadecimal characters. Using MD5, the collision risk is so low that in a table with 200 billion hashes, the chance of collision is negligible (p=10-18) being 10,000 times less probable than the odds of a meteorite landing on the data center holding your data (p=10-14). In any case, we can easily test that we do not have collisions.
 
- Test categories from version 0.8.0 of the dbt_expectations package: table shape, missing values, unique values and types, sets and ranges, string matching, aggregate functions, and multi-column and distributional functions.
 
- Writing dbt tests on sources is so simple and quick that it is often the single best way to get acquainted with some new data that you do not know well enough.
 
- Of course, one ideal way to do such explorations is to use the dbt_profiler package, but if you do not have that installed, using tests is a quick and commonplace way to check your initial expectations and document your findings with the rest of your team.
 
- The Primary Key (PK) and the Business Key (BK): Getting the PK/BK right is essential to be able to identify an entity and store their history of changes. They enable us to join facts and dimensions, and the BK is essential to be able to identify the same entity across different systems.
 
- Business rules (BRs): BRs come in many flavors and are the spice that gives most of the value to our data platform. It is impossible to make a complete list of BR types, as they can range from calculations to ways of connecting entities to ways of formatting data.
 
- PKs and BKs are essential, and we must do all that we can to get them right; otherwise, we will be unable to properly join data or store the history of changes, and we will likely generate duplicates.
 
- With over two decades of experience working in different countries, companies, sectors, and functions, I can say that developers love their work, and they hate doing nothing or, even worse, stupid, pointless things.
  
- Remember that with dbt, it is easier to let all the columns to flow forward in the ELT than to remove some from the flow, and the drawback of that in a columnar database is pretty much only the cost of cheap storage, so the common scenario is that a model has all the columns from the models that it is derived from.
 
- Fact: The fact is the table at the center of the star schema, providing the numbers that describe what has happened in the organization that is what we want to analyze.
 
- Base fact as the native information that an organization produces. These are often the facts that are named by the business when they make their requests, and this is what we usually get from the organization’s systems.
 
- Enter the composite fact. A composite fact is created by putting together information from multiple base facts, using the relations that exist naturally between the base facts.
 
- The general progression of this S2 story, which generally overlaps with the final part of the S1 story, is a kind of recursive process to find where is and how to connect the required information that is not yet available to produce the desired refined models.
 
- S4 – an acceptance test of the data produced in the data mart
 
- Manual acceptance test: This is still the most common case where you ask the business or colleagues from another team to verify that the data that you produced is correct.
 
- The most important aspect for a team to be able to work together is alignment, which I will simply define as the ability and desire of team members to go in the same direction. It is important to reflect on both dimensions – ability and desire.
 
- Team members must be able to work in the same direction; they must know and clearly understand the expected common direction (that must be the same of the management),
 
- The main difference when using the build command is that it will execute and immediately test each node so that nodes that depend on a resource that fails to execute or have a failing test will not be executed.
 
- Hooks The hook feature allows you to attach the execution of arbitrary SQL to specific moments in the life cycle of models and project runs.
 
- on-run-end: The SQL will be run at the end of the dbt command
 
- Hooks allow you to run arbitrary SQL, but the most common use has been to apply grants to models when they are built.
 
- Source definition: The source definition’s role is to reference external data in a way that’s easy and flexible to manage, adding semantics by naming groups of inputs and flexibility through a layer of indirection.
 
- Snapshot: The snapshot’s role is to store changes in an input entity when you receive periodic snapshots from the source. It is a core dbt component
 
- DIM model: The DIM model’s role is to represent a Kimball-style dimension or hierarchy.
 
- REPORT model: The REPORT model’s role is to represent a table that can power a report.
 
- Master Data Dimensions (MDDs): This is the dimension that contains the “gold records” of the business concept. Often, there is not a full dimension but only a list of master data codes, maybe with a name or description for human use.
 
- Mapping tables (MAPs): This is a table that allows us to convert the codes from one domain into another – for example, converting Italian product codes into EMEA codes. These mapping tables are at the heart of every MD initiative as they are the tools for making data interoperable.
 
- The far superior solution, called self-completing dimension, is to keep the correct data in the facts, loading them independently of each dimension, and instead add the orphan FKs from the facts in the dimensions, completing them with a copy of a default record for each orphan FK from the facts.
 
- Ingesting data into the platform is still one of the key aspects of building any data platform – without data, there is no data platform.
 
- EXTERNAL TABLE: In Snowflake, it is possible to define external tables that point to a folder in a container on an external storage service and the table will parse the files according to the provided file format and expression for the fields.
 
- The organization of the fields in a file or table is called the schema of the file/table and it includes the name, type, and eventual organization (nesting) of columns. The name “schema” is overused in data, but this is the most common use.
 
