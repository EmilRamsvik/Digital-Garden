---
created: 2025-10-23 16:11
updated: 2025-10-24T09:30
Pages:
Author:
tags:
  - books
  - digital-garden
  - book-review
  - mlops
  - machine-learning
  - software-engineering
  - cloud-computing
  - data-engineering
  - aws
  - technical
  - data-architecture
  - serverless
  - engineering
  - technology
  - programming
---

# MLOps Engineering at Scale

# The Book in 3 Sentences
MLOps Engineering at Scale focuses on the practical aspects of building production-ready machine learning systems, emphasizing that successful ML implementation is only 5% ML code and 95% platform engineering. The book stresses the importance of deep data understanding and explains how serverless ML architectures and modern data storage solutions enable scalable ML operations.

# Impressions

Based on the quotes, this appears to be a refreshingly practical and honest take on real-world ML engineering, moving beyond the typical algorithm-focused texts. 

The author clearly understands the infrastructure and operational challenges of ML systems, providing concrete insights about data architecture and cloud platforms like AWS.

Something that is reflected in almost all the literature, from [AI Engineering](AI%20Engineering.md) and [Practical MLOps](Practical%20MLOps.md) and [Machine Learning Engineering](Machine%20Learning%20Engineering.md) and [Designing Machine Learning Systems](Designing%20Machine%20Learning%20Systems.md) is that understanding software engineering is critical for deploying such systems.

# My Top  Quotes
- Engineering an effective machine learning system depends on a thorough understanding of the project data set. If you have prior experience building machine learning models, you might be tempted to skip this step. After all, shouldn’t the machine learning algorithms automate the learning of the patterns from the data? However, as you are going to observe throughout this book, machine learning systems that succeed in production depend on a practitioner who understands the project data set and then applies human insights about the data in ways that modern algorithms can’t. 
 
- Practitioners with successful launch experience often have skills that span machine learning, software engineering, and many information technology specialties. 
 
- Successful machine learning systems consist of about 5% machine learning code. The rest is the machine learning platform. 
 
- Serverless machine learning is a model for the software development of machine learning code that is written to run on a machine learning platform hosted in a cloud-computing infrastructure 
 
- Glue is as an umbrella name for a toolkit of different AWS services that you can use to prepare your data set for analysis. 
 
- The Glue data catalog is a metadata repository designed to store information about data assets, data schemas, and data provenance. 
 
- Row-oriented storage (left) used by CSV files and traditional relational databases, is designed for transactional processing, enabling changes to a row of data at a time. Column-oriented storage (right) used by Apache Parquet and many modern data warehouses, works best with analytical queries over immutable datasets. 
 
