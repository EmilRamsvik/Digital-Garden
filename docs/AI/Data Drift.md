---
Finished: 
tags:
  - article
  - data-science
  - "#database"
  - "#data"
  - data-engineering
  - ai
  - data/data-drift
created: 2023-08-14T15:04:00
updated: 2024-01-07T15:44
---

# Data Drift
Data drift refers to the phenomenon where the statistical properties of a dataset used for machine learning or analysis change over time. This alteration can be due to various factors such as shifts in data collection processes, changes in the underlying distribution of the data, or modifications in the environment from which the data originates. Detecting and addressing data drift is crucial to maintaining the performance and reliability of machine learning models and analytical systems.



### Wasserstein Distance
The Wasserstein distance, also known as the Earth Mover's Distance (EMD), is a mathematical metric used to quantify the dissimilarity between two probability distributions. It measures the minimum amount of "work" required to transform one distribution into the other. In the context of comparing distributions, this "work" can be thought of as the effort needed to redistribute mass from one set of points to another, with each point carrying a certain amount of mass. Wasserstein distance only supports numerical values. 


### Jensen-Shannon Distance
In the context of data drift and probability distribution comparison, the Jensen-Shannon (JS) distance is a metric that quantifies the similarity or dissimilarity between two probability distributions. Specifically, it's a symmetrized and smoothed version of the Kullback-Leibler (KL) divergence, which measures the difference between two distributions in terms of information content.

The Jensen-Shannon distance is calculated as follows:
1. Calculate the average distribution between the two distributions by taking their arithmetic mean.
2. Compute the KL divergence between each original distribution and the average distribution.
3. Finally, the Jensen-Shannon distance is half the sum of these two KL divergences.

The Jensen-Shannon distance has several useful properties, including symmetry, boundedness, and its relationship with information theory. In the context of data drift detection, the Jensen-Shannon distance can be employed to measure the changes between two distributions over time. 

# Links
- 

# Thoughts 
- 


