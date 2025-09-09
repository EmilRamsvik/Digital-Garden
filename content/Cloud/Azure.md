---
Date Started: Jun 12, 2023
tags:
  - ai
  - article
  - azure
  - cloud
  - data
  - development
  - machine-learning
  - microsoft
  - tools
Finished: true
created: 2024-01-06T15:04
updated: 2025-09-09T19:37
---
# Azure
Azure is Microsoft´s cloud service. It is like AWS, but only more microsofty. I have worked extensievley with Azure and find it to be a bit cumbersome, with rough edges. Understanding the CLI was key for my development, made things so much easier.  I think this experience is something that is shared across cloud providers. 



## Azure CLI
If you are working with Azure, take some time to learn the CLI. It is a powerful tool and in the right hands it will fix a lot of stuff that the portal cannot. 
As an example [on keyvaults and storing keys](https://learn.microsoft.com/en-us/answers/questions/1397054/ingest-or-store-private-key-in-azure-key-vault), the portal cannot store a proper keyvault private/public key. So you actually need to use the CLI. 

Nice little guide for using the CLI, which one of my old mentors taught me: 
1. ```az <resource> -h``` - See the options you have
2. ```az <resource> --list``` - Find the resources available
3. ```az <resource> --name show``` - show the resource you want.
Those commands are quite helpful. Then find the resource you need, and then do the ```-h``` command to see the next options. 


## Storage 

## Cognitive Search
Cognitive search is like Google search on the data you have available in a storage container or database. 
[Reasonably easy tutorial on cognitive search](https://learn.microsoft.com/en-us/azure/search/cognitive-search-quickstart-blob)

Cognitive search is based on indexing the documents in the database, a good overview of the search index is available from the [Azure documentation](https://learn.microsoft.com/en-us/azure/search/search-what-is-an-index)

Using the command line interface (CLI) is always a good way of understanding and learning the services.  The documentation for [cognitive search](https://learn.microsoft.com/en-us/azure/search/search-manage-azure-cli) CLI is pretty good. In my experience doing continuous integration (CI) and continuous delivery (CD) makes knowing the CLI mandatory. 

![[../../static/images/Pasted image 20230615144221.png]]
### Semantic Search
Azure Cognitive Search's Semantic Search is a feature that enhances traditional search methods by understanding the intent and contextual meaning of search queries. By leveraging AI and natural language processing, it can deliver more relevant search results, even when queries are phrased in a conversational manner or have ambiguous terms. It can also provide advanced query capabilities, like document summarisation, named entity recognition, and personalized ranking of search results.

[Demo using Cognitive Search and ChatGPT](https://github.com/Azure-Samples/azure-search-openai-demo/blob/main/README.md)


## Machine Learning Studio

## [Document intelligence](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/concept-read?view=doc-intel-4.0.0). 

Document intelligence is usually scanning documents such as pdf for their content using [OCR (Optical Character Recognition)](https://en.wikipedia.org/wiki/Optical_character_recognition).  It can retrieve a lot of information and has a very handy feature to extract tables and key value pair. I used it to create quite powerful features with LLMs. For example handling enterprise emails and requests it is quite powerful. 
Quite nice tool, can recommend. 
#### ML-Ops
[ML-Ops in Azure Examples](https://github.com/microsoft/MLOps)



## Infrastructure as Code 

### Bicep
- [GitHub Actions for testing Bicep](https://github.com/Azure-Samples/bicep-github-actions)

# Links
- [A binary large object (**BLOB** or **blob**) is a collection of binary data stored as a single entity.](https://en.wikipedia.org/wiki/Binary_large_object)
- [Daily Azure Shit](https://mastodon.social/@azureshit)

# Thoughts 
- SKU is the product tier of the resource in Azure. In Azure, the term "SKU," which stands for "Stock Keeping Unit," refers to a specific version or configuration of an Azure service or product. 
- Purge protection in the key vault is that you don't delete everything by accident. Postgres backups are, for example, linked to the Postgres resource. 
- You can mess up a lot of stuff in the Azure CLI, so be careful
- Also the documentation is lacking. 


