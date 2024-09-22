---
created: 2023-10-29T15:52
updated: 2024-09-22T08:49
Pages: 
Author: Christoph Molnar
finished: true
Date Finished: 2024-07-29
tags:
  - books
  - digital-garden
  - book-review
  - machine-learning
  - modeling
  - data-science
  - statistics
  - bayesian
---
# Modelling Mindsets


# 🚀 The Book in 3 Sentences
This book is mostly about different ways of thinking about models, in the context of making models of real-world phenomena. It dives into the cons and benefits of each mindset and tries to explain how knowing each is a good advantage.


# 🎨 Impressions

It is similar to the Bernoullis Fallacy book in that it delves into Bayesian versus frequentist statistical modelling.  It is also interesting when it comes to comparison with books such as [Calling Bullshit](Science/Math/Statistics/Calling%20Bullshit.md) and [A Field Guide to Lies](Science/Math/Statistics/A%20Field%20Guide%20to%20Lies.md) which talks about the pitfalls of some of these mindsets. 
It is important to have more than one mindset. 

I have not experienced Likelihoodism as a mindset before, so interesting to learn more about that. 

"A Modelling mindset limits the questions that can be asked" - Very interesting thought and makes sense. 
# ✍️ My Top  Quotes

- *Data are noisy and high-dimensional – most of the information will be irrelevant to the task. No matter how long a human analyzes the data, it’s difficult to gain insights just by sheer human willpower.* 
 
- *A model simplifies and represents an aspect of the world.* 
 
- *For our purpose, we’ll go with this definition: a mathematical model that consists of variables and functions.* 
 
- *Mindsets differ in how they interpret probabilities – or whether probabilities are central to the mindset at all.* 
 
- *In supervised machine learning, for example, everything becomes a prediction problem, while in Bayesian inference, the goal is to update beliefs about the world using probability theory.* 
 
- *A modelling mindset limits the questions that can be asked.* 
 
- *Premise: The world is best approached through probability distributions. Consequence: Estimate aspects of these distributions using statistical models to reason under uncertainty.* 
 
- *Another assumption is homoscedasticity: The variance of the target is independent of other variables.* 
 
- *Homoscedasticity can be checked with a residual* 
 
- *Homoscedasticity can be checked with a residual plot, which shows on the x-axis the values of a variable and on the y-axis the residuals (actual target minus its predicted value) against each of the other variables.* 
 
- *Once you understand frequentist inference, you can understand the analysis section of many research articles.* 
 
- *The focus on p-values encourages p-hacking: the search for significant results to get a scientific paper published. P-hacking leads to many false findings in research.* 
 
- *Parameters are variables. Therefore, the modeling goal has to be the parameter distribution given the data. But there is a problem. It’s unclear how parameters given data are distributed. The distribution of data given parameters is more natural to estimate. Fortunately, a mathematical “trick” helps: Bayes’ theorem.* 
 
- *The first consideration in choosing a prior is the parameter space, which is the set or range of values that the parameters can take on. For example, can the parameter only take on positive values? Then the prior must have a probability of zero for negative values, for example, the Gamma distribution* 
 
- *Likelihoodism is the purist among the statistical modeling mindsets: it fully embraces the likelihood function as evidence for a statistical hypothesis.* 
 
- *“The likelihood principle asserts that two observations that generate identical likelihood functions are equivalent as evidence* 
 
- *Imagine two experiments that produce the same data: Flip the coin 12 times. Observe 9 heads. Flip the coin until the tail appears 3 times. The third tail appears on the 12th flip. Same outcome but different stopping criteria. Should both experiments come to the same conclusion about the fairness of the coin? Depends on the mindset. Both experiments have the same likelihood, up to a constant factor. Likelihoodists would say that both experiments carry the same evidence. Frequentists might use a hypothesis test with a confidence level of 5%. Since the experiments have different stopping criteria, the frequentist uses different tests. As a result, the frequentist would reject the null hypothesis in experiment 2), but would not reject it in experiment 1).* 
 
- *If the likelihood for hypothesis A is larger than for hypothesis B, given some data, then the data counts as evidence that supports A over B, and the ratio of the likelihoods measures the strength of this evidence* 
 
- *There are many individual methods that aim to provide causal modeling. One example is “honest causal forests,” which are based on random forests and used to model heterogeneity in treatment effects (Athey and Imbens 2016).* 
 
- *Causal modeling is mainly a recipe for translating causal models into statistical estimators in the following four steps (Pearl 2009): Formulate causal estimand. Construct causal model. Identify statistical model. Estimate effect.* 
 
- *Identification can be complicated, but there are at least some simple rules that give first hints for which variables to include and which to exclude: Include all confounders and the common causes of both the variable of interest and the outcome. For example, in Figure 8.2, the number of cars confounds the relation between the number of streets and air quality. Exclude colliders. The number of bicycles is a collider. Adding colliders to a model opens an unwanted dependence between the cause of study and the target. Consider mediators. The number of trees mediates the effect of streets on air quality. Inclusion in the model depends on the goal of the analysis (direct, indirect, or total effect of streets).* 
 
- *Unsupervised learning is a good approach to the curse of dimensionality, but even so, unsupervised learning can suffer greatly from the curse. The more features, the more difficult the interpretation of clusters becomes, for example.* 
 
