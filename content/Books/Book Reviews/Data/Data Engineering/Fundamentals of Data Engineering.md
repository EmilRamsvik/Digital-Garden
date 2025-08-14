---
Pages: 447
Author: Joe Reis
finished: true
tags:
  - books
  - digital-garden
  - data-engineering
  - data-science
  - data-drift
  - programming
  - "#ETL"
Date Finished: 2023-12-05
created: 2024-01-06T15:04
updated: 2025-08-13T14:55
---
# Fundamentals of Data Engineering


# 🚀 The Book in 3 Sentences
This book covers the fundamentals of data engineering and how to solve problems. of data engineering without going to much into detail of the programming. It introduces concepts such as data warehouse and Kafka and data pipelines and ETL. 

# 🎨 Impressions
It was an okay is book, not super intersting but nice to have read. 

It is often refrered to 


# ✍️ My Top  Quotes

- We often jokingly refer to ourselves as recovering data scientists. We both had the experience of being assigned to data science projects, then struggling to execute these projects due to a lack of proper foundations.
 
- The big idea of this book is the data engineering lifecycle: data generation, storage, ingestion, transformation, and serving. Since the dawn of data, we’ve seen the rise and fall of innumerable specific technologies and vendor products, but the data engineering life cycle stages have remained essentially unchanged.
 
- We assume that infrastructure and systems are ephemeral and scalable, and that data engineers will lean toward deploying managed services in the cloud.
 
- Data engineering is a set of operations aimed at creating interfaces and mechanisms for the flow and access of information.
 
- Another famous and succinct description of big data is the three V’s of data: velocity, variety, and volume.
 
- Once a new technology rolls over you, if you’re not part of the steamroller, you’re part of the road. ​—​Stewart Brand
 
- The need for production-ready data science is a significant driver behind the emergence of the data engineering profession.
 
- We divide the data engineering lifecycle into the following five stages: Generation Storage Ingestion Transformation Serving data
 
- The feature store is a recently developed tool that combines data engineering and ML engineering. Feature stores are designed to reduce the operational burden for ML engineers by maintaining feature history and versions, supporting feature sharing among teams, and providing basic operational and orchestration capabilities, such as backfilling.
 
- Schema metadata describes the structure of data stored in a system such as a database, a data warehouse, a data lake, or a filesystem; it is one of the key differentiators across different storage systems.
 
- Ethical behavior is doing the right thing when no one else is watching. ​—​Aldo Leopold
 
- Metaflow is an open source project out of Netflix that aims to improve data science orchestration.
 
- At this writing, several nascent open source projects aim to mimic the best elements of Airflow’s core design while improving on it in key areas. Some of the most interesting examples are Prefect and Dagster, which aim to improve the portability and testability of DAGs to allow engineers to move from local development to production more easily. Argo is an orchestration engine built around Kubernetes primitives; Metaflow is an open source project out of Netflix that aims to improve data science orchestration. We must point out that orchestration is strictly a batch concept. The streaming alternative to orchestrated task DAGs is the streaming DAG. Streaming DAGs remain challenging to build and maintain, but next-generation streaming platforms such as Pulsar aim to dramatically reduce the engineering and operational burden.
 
- DataOps maps the best practices of Agile methodology, DevOps, and statistical process control (SPC) to data.
 
- One of the tenets of the DataOps Manifesto is “Embrace change.”
 
- As Werner Vogels is famous for saying, “Everything breaks all the time.”
 
- Data architecture reflects the current and future state of data systems that support an organization’s long-term data needs and strategy.
 
- In the big data era, we saw a Cambrian explosion of data-processing frameworks inside the Hadoop ecosystem.
 
- Jeff Bezos is credited with the idea of one-way and two-way doors.1 A one-way door is a decision that is almost impossible to reverse. For example, Amazon could have decided to sell AWS or shut it down. It would be nearly impossible for Amazon to rebuild a public cloud with the same market position after such an action. On the other hand, a two-way door is an easily reversible decision: you walk through and proceed if you like what you see in the room or step back through the door if you don’t.
 
- Good data architecture is flexible and easily maintainable.
 
- Design for automation. Be smart with state. Favor managed services. Practice defense in depth. Always be architecting.
 
- Recovery time objective The maximum acceptable time for a service or system outage. The recovery time objective (RTO) is generally set by determining the business impact of an outage.
 
- Per the EABOK, an architect’s job is to develop deep knowledge of the baseline architecture (current state), develop a target architecture, and map out a sequencing plan to determine priorities and the order of architecture changes.
 
- When the architecture of the system is designed to enable teams to test, deploy, and change systems without dependencies on other teams, teams require little communication to get work done. In other words, both the architecture and the teams are loosely coupled.
 
- In 2002, Bezos wrote an email to Amazon employees that became known as the Bezos API Mandate: All teams will henceforth expose their data and functionality through service interfaces. Teams must communicate with each other through these interfaces. There will be no other form of interprocess communication allowed: no direct linking, no direct reads of another team’s data store, no shared-memory model, no back-doors whatsoever. The only communication allowed is via service interface calls over the network. It doesn’t matter what technology they use. HTTP, Corba, Pubsub, custom protocols—doesn’t matter. All service interfaces, without exception, must be designed from the ground up to be externalizable. That is to say, the team must plan and design to be able to expose the interface to developers in the outside world. No exceptions. The advent of Bezos’s API Mandate is widely viewed as a watershed moment for Amazon.
 
- With the FinOps Foundation and O’Reilly’s Cloud FinOps. We also suggest that data engineers involve themselves in the community process of creating FinOps practices for data engineering— in such a new practice area, a good deal of territory is yet to be mapped out.
 
- If you’d like to learn more about breaking apart a monolith, we suggest reading the fantastic, pragmatic guide Software Architecture: The Hard Parts by Neal Ford
 
- Projects roughly fall into two buckets: brownfield and greenfield. Brownfield projects Brownfield projects often involve refactoring and reorganizing an existing architecture and are constrained by the choices of the present and past. Because a key part of architecture is change management, you must figure out a way around these limitations and design a path forward to achieve your new business and technical objectives
 
- A popular alternative to a direct rewrite is the strangler pattern: new systems slowly and incrementally replace a legacy architecture’s components.
 
- On the opposite end of the spectrum, a greenfield project allows you to pioneer a fresh start, unconstrained by the history or legacy of a prior architecture. Greenfield projects tend to be easier than brownfield projects, and many data architects and engineers find them more fun!
 
- There’s also a temptation to do resume-driven development, stacking up impressive new technologies without prioritizing the project’s ultimate goals. Always prioritize requirements over building something cool.
 
- A data warehouse is a central data hub used for reporting and analysis. Data in a data warehouse is typically highly formatted and structured for analytics use cases. It’s among the oldest and most well-established data architectures.
 
- In 1990, Bill Inmon originated the notion of the data warehouse, which he described as “a subject-oriented, integrated, nonvolatile, and time-variant collection of data in support of management’s decisions.” Though technical aspects of the data warehouse have evolved significantly, we feel this original definition still holds its weight today.
 
- The organizational data warehouse architecture has two main characteristics: Separates analytics processes (OLAP) from production databases (online transaction processing) This separation is critical as businesses grow. Moving data into a separate physical system directs load away from production systems and improves analytics performance. Centralizes and organizes data Traditionally, a data warehouse pulls data from application systems by using ETL. The extract phase pulls data from source systems. The transformation phase cleans and standardizes data, organizing and imposing business logic in a highly modeled form.
 
- Google BigQuery, Snowflake, and other competitors popularized the idea of separating compute from storage. In this architecture, data is housed in object storage, allowing virtually limitless storage.
 
- A data mart is a more refined subset of a warehouse designed to serve analytics and reporting, focused on a single suborganization, department, or line of business; every department has its own data mart, specific to its needs.
 
- Data marts exist for two reasons. First, a data mart makes data more easily accessible to analysts and report developers. Second, data marts provide an additional stage of transformation beyond that provided by the initial ETL or ELT pipelines.
 
- Instead of imposing tight structural limitations on data, why not simply dump all of your data—structured and unstructured—into a central location? The data lake promised to be a democratizing force, liberating the business to drink from a fountain of limitless data. The first-generation data lake, “data lake 1.0,” made solid contributions but generally failed to deliver on its promise.
 
- Despite the promise and hype, data lake 1.0 had serious shortcomings. The data lake became a dumping ground; terms such as data swamp, dark data, and WORN were coined as once-promising data projects failed.
 
- In particular, the data lakehouse supports atomicity, consistency, isolation, and durability (ACID) transactions, a big departure from the original data lake, where you simply pour in data and never update or delete it. The term data lakehouse suggests a convergence between data lakes and data warehouses.
 
- Additional Resources “Separating Utility from Value Add” by Ross Pettit “Tactics vs. Strategy: SOA and the Tarpit of Irrelevancy” by Neal Ford The Information Management Body of Knowledge website “The Modern Data Stack: Past, Present, and Future” by Tristan Handy “Potemkin Data Science” by Michael Correll “A Comparison of Data Processing Frameworks” by Ludovik Santos “Modern CI Is Too Complex and Misdirected” by Gregory Szorc “Questioning the Lambda Architecture” by Jay Kreps “End-to-End Serverless ETL Orchestration in AWS: A Guide” by Rittika Jindal “A Brief Introduction to Two Data Processing Architectures—Lambda and Kappa for Big Data” by Iman Samizadeh “How to Beat the Cap Theorem” by Nathan Marz “The Log: What Every Software Engineer Should Know About Real-Time Data’s Unifying Abstraction” by Jay Kreps “Run Your Data Team Like a Product Team” by Emilie Schario and Taylor A.
 
- “[What’s Wrong with MLOps?” by Laszlo Sragner](https://laszlo.substack.com/p/whats-wrong-with-mlops)
 
- [Falling Back in Love with Data Pipelines” by Sean Knapp](https://devops.com/falling-back-in-love-with-data-pipelines/)
 
- There is a continuum of simple to complex technologies, and a team’s size roughly determines the amount of bandwidth your team can dedicate to complex solutions.
 
- We sometimes see small data teams read blog posts about a new cutting-edge technology at a giant tech company and then try to emulate these same extremely complex technologies and practices. We call this cargo-cult engineering, and it’s generally a big mistake
 
- Technology, speed to market wins. This means choosing the right technologies that help you deliver features and data faster while maintaining high-quality standards and security.
 
- We’ve discussed, typical cloud spending is inherently opex: companies pay for services to run critical data processes rather than making up-front purchases and clawing back value over time.
 
- The goal of FinOps is to fully operationalize financial accountability and business value by applying the DevOps-like practices of monitoring and dynamically adjusting systems.
 
- Going multicloud can introduce significant complexity. Companies must now manage a dizzying array of services across several clouds; cross-cloud integration and security present a considerable challenge; multicloud networking can be diabolically complicated.
 
- The last thing you want is for your technology choice to be stuck in limbo while waiting for budget approval. As the old saying goes, time kills deals.
 
- Of course, the monolith has cons. For one thing, monoliths are brittle. Because of the vast number of moving parts, updates and releases take longer and tend to bake in “the kitchen sink.” If the system has a bug—hopefully, the software’s been thoroughly tested before release!—it can harm the entire system.
 
- Atomicity, consistency, isolation, durability). Consistency means that any database read will return the last written version of the retrieved item. Isolation entails that if two updates are in flight concurrently for the same thing, the end database state will be consistent with the sequential execution of these updates in the order they were submitted. Durability indicates that committed data will never be lost, even in the event of power loss.
 
- By contrast, a stream is an append-only log of event records.
 
- Data is stored in a table of relations (rows), and each relation contains multiple fields (columns); see Figure 5-7. Note that we use the terms column and field interchangeably throughout this book. Each relation in the table has the same schema (a sequence of columns with assigned static types such as string, integer, or float).
 
- Graph databases explicitly store data with a mathematical graph structure (as a set of nodes and edges).
 
- Webhooks are a simple event-based data-transmission pattern. The data source can be an application backend, a web page, or a mobile app. When specified events happen in the source system, this triggers a call to an HTTP endpoint hosted by the data consumer. Notice that the connection goes from the source system to the data sink, the opposite of typical APIs. For this reason, webhooks are often called reverse APIs.
 
- A data contract is a written agreement between the owner of a source system and the team ingesting data from that system for use in a data pipeline.
 
- Automation There’s the automation impacting the source system, such as code updates and new features.
 
- Like Memcached, Redis is a key-value store, but it supports somewhat more complex data types (such as lists or sets) Redis also builds in multiple persistence mechanisms, including snapshotting and journaling. With a typical configuration, Redis writes data roughly every two seconds.
 
- Hadoop is similar to object storage, but with a key difference: Hadoop combines compute and storage on the same nodes, where object stores typically have limited support for internal processing.
 
- The data lake was originally conceived as a massive store where data was retained in raw, unprocessed form.
 
- The data lakehouse is an architecture that combines aspects of the data warehouse and the data lake. As it is generally conceived, the lakehouse stores data in object storage just like a lake. However, the lakehouse adds to this arrangement features designed to streamline data management and create an engineering experience similar to a data warehouse.
 
- A data catalog is a centralized metadata store for all data across an organization. Strictly speaking, a data catalog is not a top-
 
- A data catalog is a centralized metadata store for all data across an organization. Strictly speaking, a data catalog is not a top-level data storage abstraction, but it integrates with various systems and abstractions. Data catalogs typically work across operational and analytics data sources, integrate data lineage and presentation of data relationships, and allow user editing of data descriptions.
 
- Deleting any raw files in the underlying object store. Databricks and other data lake management technologies sometimes also support a notion of deep copying, whereby all underlying data objects are copied.
 
- Hot data Hot data has instant or frequent access requirements. The underlying storage for hot data is suited for fast access and reads, such as SSD or memory.
 
- Warm data is accessed semi-regularly, say, once per month. No hard and fast rules indicate how often warm data is accessed, but it’s less than hot data and more than cold data.
 
- On the other extreme, cold data is infrequently accessed data. The hardware used to archive cold data is typically cheap and durable, such as HDD, tape storage, and cloud-based archival systems. Cold data is mainly meant for long-term archival, when there’s little to no intention to access the data. Though storing cold data is cheap, retrieving cold data is often expensive.
 
- Data is an asset that (hopefully) has an ROI. On the cost side of ROI, an obvious storage expense is associated with data. Consider the timeline in which you need to retain data.
 
- We can think about software engineering in the context of storage in two ways. First, the code you write should perform well with your storage system. Make sure the code you write stores the data correctly and doesn’t accidentally cause data, memory leaks, or performance issues. Second, define your storage infrastructure as code and use ephemeral compute resources when it’s time to process your data.
 
- Data ingestion is the process of moving data from one place to another.
 
- Whereas data ingestion is data movement from point A to B, data integration combines data from disparate sources into a new dataset.
 
- A data pipeline is the combination of architecture, systems, and processes that move data through the stages of the data engineering lifecycle.
 
- Events that cannot be ingested need to be rerouted and stored in a separate location called a dead-letter queue.
 
- ODBC uses a driver hosted by a client accessing the database to translate commands issued to the standard ODBC
 
- The bulk of software engineering is just plumbing. ​—​Karl Hughes
 
- Engineers should also be aware of the file formats to export. CSV is still ubiquitous and highly error prone at the time of this writing. Namely, CSV’s default delimiter is also one of the most familiar characters in the English language—the comma! But it gets worse.
 
- Accessing and sending data both from secure FTP (SFTP) and secure copy (SCP) are techniques you should be familiar with, even if data engineers do not typically use these regularly (IT or security/secOps will handle this).
 
- Webhooks, as we discussed in Chapter 5, are often referred to as reverse APIs. For a typical REST data API, the data provider gives engineers API specifications that they use to write their data ingestion code. The code makes requests and receives data in responses.
 
- Traditional approach is a careful command-and-control review process. Working with clients at large enterprises, we have been quoted lead times of six months for the addition of a single field. This is an unacceptable impediment to agility. 
 
- We often refer to data as a silent killer. If quality, valid data is the foundation of success in today’s businesses, using bad data to make decisions is much worse than having no data.
 
- One of the inherent differences between DevOps and DataOps is that we expect software regressions only when we deploy changes, while data often presents regressions independently because of events outside our control.
 
- A common technique for improving query performance is to pre-join data. If you find that analytics queries are joining the same data repeatedly, it often makes sense to join the data in advance and have queries read from the pre-joined version
 
- A database commit is a change within a database, such as creating, updating, or deleting a record, table, or other database objects.
 
- A data warehouse is a subject-oriented, integrated, nonvolatile, and time-variant collection of data in support of management’s decisions. The data warehouse contains granular corporate data. Data in the data warehouse is able to be used for many different purposes, including sitting and waiting for future requirements which are unknown today.
 
- The second salient characteristic of the data warehouse is that it is integrated. Of all the aspects of a data warehouse, integration is the most important. Data is fed from multiple, disparate sources into the data warehouse. As the data is fed, it is converted, reformatted, resequenced, summarized, etc. The result is that data—once it resides in the data warehouse —has a single physical corporate image.
 
- I’ve always been a fan of ETL because of the fact that ETL forces you to transform data before you put it into a form where you can work with it. But some organizations want to simply take the data, put it into a database, then do the transformation… I’ve seen too many cases where the organization says, oh we’ll just put the data in and transform it later. And guess what? Six months later, that data \[has\] never been touched.
 
- Data wrangling takes messy, malformed data and turns it into useful, clean data. This is generally a batch transformation process.
 
- Data wrangling has long been a major source of pain and job security for ETL developers. For example, suppose that developers receive EDI data from a partner business regarding transactions and invoices, potentially a mix of structured data and text.
 
- ETL scripts are notorious for breaking the DRY principle.
 
- It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you’ll do things differently. ​—​Warren Buffett
 
- Above all else, trust is the root consideration in serving data; end users need to trust the data they’re receiving.
 
- Data validation is analyzing data to ensure that it accurately represents financial information, customer interactions, and sales. Data observability provides an ongoing view of data and data processes.
 
- When engineers recognize the need to focus on value and use cases, they become much more valuable and effective in their roles.
 
- A good definition of a data product is a product that facilitates an end goal through the use of data. ​—​DJ Patil
 
- Jupyter stands for Julia, Python, and R —
 
- Data scientists are notorious for doing most development on their local machines.
 
- Data engineers should avoid using CSV files in pipelines because they are highly error-prone and deliver poor performance.
 
- JavaScript Object Notation (JSON) has emerged as the new standard for data exchange over APIs, and it has also become an extremely popular format for data storage.
 
- JSON Lines (JSONL) is a specialized version of JSON for storing bulk semistructured data in files. JSONL stores a sequence of JSON objects, with objects delimited by line breaks.
 
- Parquet stores data in a columnar format and is designed to realize excellent read and write performance in a data lake environment. Parquet solves a few problems that frequently bedevil data engineers. Parquet-encoded data builds in schema information and natively supports nested data, unlike CSV. Furthermore,
 
