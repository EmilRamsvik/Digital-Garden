---
Date Started: Jun 12, 2023
tags:
  - azure
  - microsoft
  - cloud
  - article
Finished: 
created: 2024-01-06T15:04
updated: 2024-01-11T18:29
---
# Azure



## Storage 

## Cognitive Search
Cognitive search is like Google search on the data you have available in a storage container or database. 
[Reasonably easy tutorial on cognitive search](https://learn.microsoft.com/en-us/azure/search/cognitive-search-quickstart-blob)

Cognitive search is based on indexing the documents in the database, a good overview of the search index is available from the [Azure documentation](https://learn.microsoft.com/en-us/azure/search/search-what-is-an-index)

Using the command line interface (CLI) is always a good way of understanding and learning the services.  The documentation for [cognitive search](https://learn.microsoft.com/en-us/azure/search/search-manage-azure-cli) CLI is pretty good. In my experience doing continuous integration (CI) and continuous delivery (CD) makes knowing the CLI mandatory. 

[Make better indexers with Powerskills Repo]( https://github.com/Azure-Samples/azure-search-power-skills)

![[../../static/images/Pasted image 20230615144221.png]]
### Semantic Search
Azure Cognitive Search's Semantic Search is a feature that enhances traditional search methods by understanding the intent and contextual meaning of search queries. By leveraging AI and natural language processing, it can deliver more relevant search results, even when queries are phrased in a conversational manner or have ambiguous terms. It can also provide advanced query capabilities, like document summarisation, named entity recognition, and personalized ranking of search results.

[Demo using Cognitive Search and ChatGPT](https://github.com/Azure-Samples/azure-search-openai-demo/blob/main/README.md)


## Machine Learning Studio


#### ML-Ops
[ML-Ops in Azure Examples](https://github.com/microsoft/MLOps)



## Infrastructure as Code 

### Bicep
- [GitHub Actions for testing Bicep](https://github.com/Azure-Samples/bicep-github-actions)

# Links
- [A binary large object (**BLOB** or **blob**) is a collection of binary data stored as a single entity.](https://en.wikipedia.org/wiki/Binary_large_object)
- 

# Thoughts 
- SKU is the product tier of the resource in Azure. In Azure, the term "SKU," which stands for "Stock Keeping Unit," refers to a specific version or configuration of an Azure service or product. 
- Purge protection in the key vault is that you don't delete everything by accident. Postgres backups are, for example, linked to the Postgres resource. 


