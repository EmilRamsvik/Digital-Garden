---
created: 2023-10-29T15:52
updated: 2024-02-05T12:12
Pages: 215
Author: Alice Zheng
finished: true
Date Finished: 2024-02-01
tags:
  - books
  - digital-garden
  - book-review
  - machine-learning
  - data-science
  - machine-learning/feature-engineering
---
# Feature Engineering for Machine Learning
# 🚀 The Book in 3 Sentences
This book is about how to make features for machine learning models and implement them into models. The book goes into natural language text, tabular data, and image data. It contains discussions about how to implement good engineering practices in feature engineering.

# 🎨 Impressions
Interesting thoughts regarding how to scale features, and that power-law distributed features often are non-ideal for machine learning models. 


# ✍️ My Top  Quotes

- *Machine learning fits mathematical models to data in order to derive insights or make predictions* 
 
- *A feature is a numeric repre‐ sentation of an aspect of raw data.* 
 
- *Mastery is about knowing precisely how something is done, having an intuition for the underlying principles, and integrating it into one’s existing web of knowledge.* 
 
- *What we call data are observations of real-world phenomena.* 
 
- *A feature is a numeric representation of raw data.* 
 
- *A simple generalization of both the square root transform and the log transform is known as the Box-Cox transform:* 
 
- *The Box-Cox formulation only works when the data is positive. For nonpositive data, one could shift the values by adding a fixed constant.* 
 
- *Interested readers may find more information on power transforms in Econometric Methods by Johnston and DiNardo (1997). Fortu‐ nately, SciPy’s stats package contains an implementation of the Box-Cox transfor‐ mation that includes finding the optimal transform parameter* 
 
- *Feature scaling is useful in situations where a set of input features differs wildly in scale. For instance, the number of daily visitors to a popular ecommerce site might be a hundred thousand, while the actual number of sales might be in the thousands.* 
 
- *N -grams retain more of the original sequence structure of the text, and therefore the bag-ofn-grams representation can be more informative. However, this comes at a cost. Theoretically, with k unique words, there could be k2 unique 2-grams (also called bigrams).* 
 
- *Hypothesis testing is a way to boil noisy data down to “yes” or “no” answers. It involves modeling the data as samples drawn from random distributions.* 
 
- *Khan Academy. “Hypothesis Testing and p-Values.” Retrieved from https:// www.khanacademy.org/math/probability/statistics-inferential/hypothesis-testing/v/ hypothesis-testing-and-p-values.* 
 
- *Tf-idf is a simple twist on the bag-of-words approach. It stands for term frequency– inverse document frequency. Instead of looking at the raw counts of each word in each document in a dataset, tf-idf looks at a normalized count where each word count is divided by the number of documents this word appears in.* 
 
- *N is the total number of documents in the dataset. The fraction N / (# documents ...) is what’s known as the inverse document frequency. If a word appears in many* 
 
- *Logistic regression is a simple, linear classifier. Due to its simplicity, it’s often a good first classifier to try.* 
 
- *Logistic regression is relatively robust (or insensitive) to hyperparameter settings.* 
 
- *A categorical variable, as the name suggests, is used to represent categories or labels. For instance, a categorical variable could represent major cities in the world, the four seasons in a year, or the industry (oil, travel, technology) of a company.* 
 
- *However, unlike other numeric variables, the values of a catego‐ rical variable cannot be ordered with respect to one another. (Oil is neither greater than nor less than travel as an industry type.) They are called nonordinal.* 
 
- *A simple question can serve as litmus test for whether something should be a catego‐ rical variable: “Does it matter how different two values are, or only that they are dif‐ ferent?”* 
 
- *The problem with one-hot encoding is that it allows for k degrees of freedom, while the variable itself needs only k–1. Dummy coding2 removes the extra degree of free‐ dom by using only k–1 features in the representation (see Table 5-2). One feature is thrown under the bus and represented by the vector of all zeros. This is known as the reference category.* 
 
- *One-hot encoding is redundant, which allows for multiple valid mod‐ els for the same problem. The nonuniqueness is sometimes problematic for interpre‐ tation, but the advantage is that each feature clearly corresponds to a category. Moreover, missing data can be encoded as the all-zeros vector, and the output should be the overall mean of the target variable.* 
 
- *Dummy coding and effect coding are not redundant. They give rise to unique and interpretable models. The downside of dummy coding is that it cannot easily handle missing data, since the all-zeros vector is already mapped to the reference category. It also encodes the effect of each category relative to the reference category, which may look strange.* 
 
- *All three encoding techniques break down when the number of categories becomes very large. Different strategies are needed to handle extremely large categorical variables.* 
 
- *Do nothing fancy with the encoding. Use a simple model that is cheap to train. Feed one-hot encoding into a linear model (logistic regression or linear support vector machine) on lots of machines.* 
 
- *B. Bin counting, popular with linear models as well as trees* 
 
- *Hash function is a deterministic function that maps a potentially unbounded inte‐ ger to a finite integer range \[1, m\].* 
 
- *A hash function is a deterministic function that maps a potentially unbounded inte‐ ger to a finite integer range \[1, m\].* 
 
- *The idea of bin counting is deviously simple: rather than using the value of the cate‐ gorical variable as the feature, instead use the conditional probability of the target under that value. In other words, instead of encoding the identity of the categorical value, we compute the association statistics between that value and the target that we wish to predict. For those familiar with naive Bayes classifiers, this statistic should ring a bell, because it is the conditional probability of the class under the assumption that all features are independent.* 
 
- *One way to deal with this is through back-off, a simple technique that accumulates the counts of all rare categories in a special bin (see Figure 5-3). If the count is greater than a certain threshold, then the category gets its own count statistics. Otherwise, we use the statistics from the back-off bin.* 
 
- *Now we will take a close look at the topic of feature dimen‐ sionality reduction using principal component analysis (PCA).* 
 
- *This concludes the discussion of PCA. The two main things to remember about PCA are its mechanism (linear projection) and objective (to maximize the variance of projected data).* 
 
- *One can also remem‐ ber PCA with the mental picture of squashing the data into a pancake that is as fluffy as possible.* 
 
- *PCA is an example of model-driven feature engineering. (One should immediately suspect that a model is lurking in the background whenever an objective function enters the scene.* 
 
- *Common applications of clustering assume that there are natural clusters to be found; i.e., there are regions of dense data scattered in an otherwise empty space.* 
 
- *Using k-means to turn spatial data into features is an example of model stacking, where the input to one model is the output of another* 
 
- *Compared to using a nonlinear classifier, k-means stacked with logistic regression is cheaper to train and store.* 
 
- *A ReLU is a simple variation of a linear function where the negative part is zeroed out.* 
 
- *“In mathematics you don’t understand things. You just get used to them.” —John von Neumann* 
 
- *3. Return ranked scores + items.* 
 
