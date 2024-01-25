---
Finished: true
tags:
  - article
  - digital-garden
  - data-science
  - data-engineering
  - feature-engineering
  - encoding
  - embedding
  - one-hot-encoding
created: 2024-01-06T15:04
updated: 2024-01-24T14:52
---


# Feature Engineering



# Encoding 
## Dummy vs One-hot
There is a difference between dummy and one-hot encoding
- One-hot encoding creates a binary column for each category, and each data point has exactly one "hot" (1) value.
- Dummy encoding creates "n-1" binary columns for "n" categories, and each data point has a combination of 0s and 1s, with one category implicitly represented by all 0s.
This difference is subtle but important. When using machine learning models, it is best to use a one-hot encoding. 

## Ordinal Encoding
Ordinal encoding is smart to use when there is some kind of systemic relationship between the values to be encoded. For example, if the size of the city might matter, you can adjust the ordinal encoding to be ranked by size. This might help the relationship. However, you could also just infer the size of the city as a feature in itself to not only imply the relationship. When doing machine learning, it might be smart to not only understand what the categories and features represent but also if any underlaid patterns affect the target. 


## Hashing
Hashing is a good way to keep a state of records the same, as the hash of a data set or row will always bee the same, this makes it easier to keep datasets and be consistent when having holdout-validation sets.


## Embeddings
- **Label Encoding** is like assigning each category a unique ID. Simple but can imply false numerical relationships.
- **Embeddings** are like giving each category a unique, learnable fingerprint. More complex but can capture deeper relationships and nuances.

Label encoding and embeddings are often used together, especially in the context of neural networks. Here's how they typically work in tandem:

##### **Label Encoding First:**
- Neural networks, and in particular embedding layers, expect numerical input. However, they cannot directly process categorical variables (like strings of port names or vessel IDs).
- Label encoding is a preprocessing step where each unique categorical value is converted into a unique integer. This transformation is necessary because embedding layers require numerical input.
##### **Followed by Embeddings:**
- Once the categorical data is converted into integers via label encoding, these integers are used as indexes to lookup vectors in an embedding matrix.
- The embedding matrix is part of the neural network and is learned during the training process. Each row in the matrix corresponds to one category (represented by the integer from label encoding) and contains a vector that represents that category in a multi-dimensional space.
##### **Why Use Both?**
- **Dimensionality Reduction:** Embedding layers effectively reduce the dimensionality of the input space. If you have thousands of categories, one-hot encoding would create a very sparse and high-dimensional input vector. Embeddings condense this information into a much smaller and denser vector.
- **Capturing Relationships:** Embeddings can capture more complex relationships between categories, which is not possible with just label encoding.


# Links
- 

# Thoughts 
- 


