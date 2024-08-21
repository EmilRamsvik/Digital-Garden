---
created: 2023-10-29T15:52
updated: 2024-08-18T07:19
Pages: 359
Author: Ankur Patel
finished: true
Date Finished: 2024-08-07
tags:
  - books
  - digital-garden
  - book-review
  - machine-learning
  - unsupervised-learning
  - data
  - neural-networks
  - machine-learning/modeling
  - machine-learning/reinforcement-learning
  - machine-learning/models/knn
  - machine-learning/models/SVM
  - machine-learning/models/PCA
---
# Hands-On Unsupervised Learning Using Python


# 🚀 The Book in 3 Sentences
This book is an introduction to unsupervised machine learning techniques and practices. It introduces methods of unsupervised learning for clustering, correlations and time series analysis. It analyses models and provides guidance on how to use them.

# 🎨 Impressions
I think being good at unsupervised learning might be a hidden superpower. 
Understanding dimensionality reduction is very important; why do we do it why is it powerful, and what are the disadvantages?

I think unsupervised learning is a powerful but underutilised tool. 
# ✍️ My Top  Quotes

- *This is why labels are so powerful—they help guide the AI agent by providing it with an error measure. The AI uses the error measure to improve its performance over time.* 
 
- *To address this, we can introduce unsupervised learning as a regularizer. Regularization is a process used to reduce the complexity of a machine learning algorithm, helping it capture the signal in the data without adjusting too much to the noise.* 
 
- *By building probability distributions using unsupervised learning, we can assess how different the current data is from the training set data—if the two are different enough, we can automatically trigger a retraining.* 
 
- *Classification problems also may be referred to as qualitative or categorical problems.* 
 
- *Classification problems are also known as discrete prediction problems because each class is a discrete group. Classification problems also may be referred to as qualitative or categorical problems.* 
 
- *In regression, the AI must predict a continuous variable rather than a discrete one. Regression problems also may be referred to as quantitative problems.* 
 
- *Also, KNN is very sensitive to the choice of k. When k is set too low, KNN can overfit, and when k is set too high, KNN can underfit.* 
 
- *Unlike linear methods, KNN is highly flexible and adept at learning more complex, nonlinear relationships.* 
 
- *The choice of k is very important. If k is set to a very low value, KNN becomes very flexible, drawing highly nuanced boundaries and potentially overfitting the data. If k is set to a very high value, KNN becomes inflexible, drawing a too rigid boundary and potentially underfitting the data.* 
 
- *Instead of using a linear method, we can have the AI build a decision tree where all the instances are segmented or stratified into many regions, guided by the labels we have.* 
 
- *Best-performing supervised-learning algorithms for prediction problems.* 
 
- *Tree-based methods are difficult to interpret, especially if many rules are needed to make a good prediction.* 
 
- *Instead of building trees to separate data, we can* 
 
- *Algorithms to create hyperplanes in space that separate the data, guided by the labels that we have. The approach is known as support vector machines (SVMs).* 
 
- *One approach to learning the underlying structure of data is to identify which features out of the full set of features are most important in explaining the variability among the instances in the data.* 
 
- *One such algorithm is k-means clustering. With this algorithm, we specify the number of desired clusters k, and the algorithm will assign each instance to exactly one of these k clusters. It optimizes the grouping by minimizing the within-cluster variation (also known as inertia) such that the sum of the within-cluster variations across all k clusters is as small as possible.* 
 
- *The action taken by the agent given the current state of the environment determines the next state, and the agent’s goal is to maximize its long-term reward. This family of problems is known as finite Markov decision processes.* 
 
- *Standardization rescales the data to have a mean of zero and standard deviation of one.* 
 
- *Some machine learning solutions are very sensitive to the scale of the data, so having all the data on the same relative scale—via standardization—is a good machine learning practice. Another common method to scale data is normalization, which rescales the data to a zero to one range. Unlike the standardized data, all the normalized data is on a positive scale.* 
 
- *PCA does this by addressing the correlation among features. If the correlation is very high among a subset of the features, PCA will attempt to combine the highly correlated features and represent this data with a smaller number of linearly uncorrelated features.* 
 
- *Another linear dimensionality reduction technique is random projection, which relies on the Johnson–Lindenstrauss lemma. According to the Johnson–Lindenstrauss lemma, points in a high-dimensional space can be embedded into a much lower-dimensional space so that distances between the points are nearly preserved. In other words, even as we move from high-dimensional* 
 
- *Another linear dimensionality reduction technique is random projection, which relies on the Johnson–Lindenstrauss lemma. According to the Johnson–Lindenstrauss lemma, points in a high-dimensional space can be embedded into a much lower-dimensional space so that distances between the points are nearly preserved. In other words, even as we move from high-dimensional* 
 
- *Another linear dimensionality reduction technique is random projection, which relies on the Johnson–Lindenstrauss lemma. According to the Johnson–Lindenstrauss lemma, points in a high-dimensional space can be embedded into a much lower-dimensional space so that distances between the points are nearly preserved. In other words, even as we move from high-dimensional* 
 
- *Another linear dimensionality reduction technique is random projection, which relies on the Johnson–Lindenstrauss lemma. According to the Johnson–Lindenstrauss lemma, points in a high-dimensional space can be embedded into a much lower-dimensional space so that distances between the points are nearly preserved. In other words, even as we move from high-dimensional space to low-dimensional space, the relevant structure of the original feature set is preserved.* 
 
- *Multidimensional scaling (MDS) is a form of nonlinear dimensionality reduction that learns the similarity of points in the original dataset and, using this similarity learning, models this in a lower dimensional space:* 
 
- *Another popular nonlinear dimensionality reduction method is called locally linear embedding (LLE). This method preserves distances within local neighborhoods as it projects the data from the original feature space to a reduced space.* 
 
- *LLE discovers the nonlinear structure in the original, high-dimensional data by segmenting the data into smaller components (i.e., into neighborhoods of points) and modeling each component as a linear embedding.* 
 
- *T-distributed stochastic neighbor embedding (t-SNE) is a nonlinear dimensionality reduction technique for visualizing high-dimensional data. t-SNE accomplishes this by modeling each high-dimensional point into a two- or three-dimensional space, where similar points are modeled close to each other and dissimilar points are modeled farther away.* 
 
- *Dictionary learning, which learns the sparse representation of the original data. The resulting matrix is known as the dictionary, and the vectors in the dictionary are known as atoms. These atoms are simple, binary vectors, populated by zeros and ones. Each instance in the original data can be reconstructed as a weighted sum of these atoms. Assuming there are d features in the original data and n atoms in the dictionary, we can have a dictionary that is either undercomplete, where n < d, or overcomplete, where n > d.* 
 
- *Clustering, which attempts to group objects together based on similarity.* 
 
- *Clustering achieves this without using any labels, comparing how similar the data for one observation is to data for other observations and groups.* 
 
- *In k-means clustering, we specify the number of desired clusters k, and the algorithm will assign each observation to exactly one of these k clusters. The algorithm optimizes the groups by minimizing the within-cluster variation (also known as inertia) such that the sum of the within-cluster variations across all k clusters is as small as possible.* 
 
- *Recall that HDBSCAN will group borrowers together based on how closely packed together their attributes are in a high-dimensional space. Unlike k-means or hierarchical clustering, not all the borrowers will be grouped. Some borrowers that are very distinct from other groups of borrowers may remain ungrouped. These are outlier borrowers and are worth investigating to see if there is a good business reason they are dissimilar from other borrowers.* 
 
- *One area that unsupervised learning excels in is feature extraction, which is a method used to generate a new feature representation from an original set of features; the new feature representation is called a learned representation and is used to improve performance on supervised learning problems. In other words, feature extraction is an unsupervised means to a supervised end.* 
 
- *An autoencoder comprises two parts, an encoder and a decoder. The encoder* 
 
- *Another regularization technique is sparsity. We can force the autoencoder to take the sparsity of the matrix into consideration such that the majority of the autoencoder’s neurons are inactive most of the time—in other words, they do not fire. This makes it harder for the autoencoder to memorize the identity function even when the autoencoder is overcomplete because most of the nodes cannot fire and, therefore, cannot overfit the observations as easily.* 
 
- *Common problem with real-world data is noisiness data is often distorted in some way because of data quality issues from data capture, data migration, data transformation, etc. We need autoencoders to be robust enough against such noise so that they are not fooled and can learn from the truly important underlying structure in the data.* 
 
- *In the real world, the distinction is not quite so clear. Datasets are usually partially labeled, and we want to efficiently label the unlabeled observations while leveraging the information in the labeled set. With supervised learning, we would have to toss away the majority of the dataset because it is unlabeled.* 
 
- *The field of semisupervised learning blends the benefits of both supervised and unsupervised learning, taking advantage of the few labels that are available to uncover structure in a dataset and help label the rest.* 
 
- *Now, we will move into generative unsupervised models, which involve learning a probability distribution from an original dataset and using it to make inferences about never-before-seen data.* 
 
- *Note that RBMs use a stochastic approach to learning the underlying structure of data, whereas autoencoders, for example, use a deterministic approach.* 
 
- *There are two major categories of recommender systems—collaborative filtering recommender systems and content-based filtering recommender* 
 
- *Content-based filtering is not commonly used because it is a rather difficult task to learn the distinct properties of items—this level of understanding is very challenging for artificial machines to achieve currently.* 
 
- *Collaborative filtering requires no knowledge of the underlying items themselves. Rather, collaborative filtering assumes that users that agreed in the past will agree in the future and that user preferences remain stable over time.* 
 
- *There is a third group of data that combines cross-sectional and time series data. This is known as panel or longitudinal data.* 
 
- *Clustering time series data is a purely unsupervised approach and does not require annotation of data for training, although annotated data is necessary for validating the results as with all other unsupervised learning experiments.* 
 
- *We will use the tslearn package to access the Python-based k-shape algorithm. tslearn has a similar framework as Scikit-learn but is geared toward work with time* 
 
