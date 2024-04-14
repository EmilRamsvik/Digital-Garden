---
Pages: 400
Author: Lakshmanan Valliappa
finished: true
tags:
  - books
  - digital-garden
  - machine-learning
  - "#design-patterns"
  - "#data-science"
Date Finished: 2023-11-02
created: 2024-01-06T15:04
updated: 2024-04-09T21:09
---
# Machine Learning Design Patterns


# 🚀 The Book in 3 Sentences
This book is about machine learning design patterns and discussions around those—concepts in machine learning for this. And therefore, it is a good reminder of the concepts and core tenants of machine learning.  


# 🎨 Impressions
It was a bit of a harder read than [Designing Machine Learning Systems](Designing%20Machine%20Learning%20Systems.md), which is a bit harder to grasp and not as "profound" knowledge. Therefore, it is more difficult for me to give it a very strong recommendation.  Nevertheless, it is important to say that this is a good book.  When reading through the quotes, I realize that there were a lot of good insights from the book. 


# ✍️ My Top  Quotes
- *At its core, machine learning is a process of building models that learn from data.* 
 
- *Gradient descent optimizers require more steps to converge as the curvature of the loss function increases. This is because the derivatives of features with larger relative magnitudes will tend to be larger as well, and so lead to abnormal weight updates. The abnormally large weight updates will require more steps to converge and thereby increase the computation load.* 
 
- *“Centering” the data to lie in the \[–1, 1\] range makes the error function more spherical. Therefore, models trained with transformed data tend to converge faster and are, therefore faster/cheaper to train. In addition, the \[–1, 1\] range offers the highest floating point precision.* 
 
- *This is called dummy coding. Because dummy coding is a more compact representation, it is preferred in statistical models that perform better when the inputs are linearly independent.  Modern machine learning algorithms, though, don’t require their inputs to be linearly independent and use methods such as L1 regularization to prune redundant inputs. The additional degree of freedom allows the framework to transparently handle a missing input in production as all zeros:* 
 
- *The categorical variables have high cardinality. Instead of having feature vectors with three languages or seven days, we have feature vectors whose length is in the thousands to millions.* 
 
- *After the model is placed into production, new hospitals might be built and new physicians hired. The model will be unable to make predictions for these, and so a separate serving infrastructure will be required to handle such cold-start problems.* 
 
- *Even with simple representations like one-hot encoding, it is worth anticipating the cold-start problem and explicitly reserving all zeros for out-of-vocabulary inputs.* 
 
- *Even if an airport with a handful of flights is not part of the training dataset, its hashed feature value will be in the range \[0–9\]. Therefore, there is no resilience problem during serving—the unknown airport will get the predictions corresponding with other airports in the hash bucket. The model will not error out.* 
 
- *It is true that hashing is lossy—since we have 347 airports, an average of 35 airports will get the same hash bucket code if we hash it into 10 buckets. When the alternative is to discard the variable because it is too wide, though, a lossy encoding is an acceptable compromise.* 
 
- *Most design patterns involve some kind of a trade-off, and the Hashed Feature design pattern is no exception. The key trade-off here is that we lose model accuracy.* 
 
- *Do not choose Hashed Feature if you know the vocabulary beforehand, if the vocabulary size is relatively small (in the thousands is acceptable for a dataset with millions of examples), and if a cold start is not a concern.* 
 
- *Embeddings are a learnable data representation that maps high-cardinality data into a lower-dimensional space in such a way that the information relevant to the learning problem is preserved.* 
 
- *A feature cross is a synthetic feature formed by concatenating two or more categorical features in order to capture the interaction between them.* 
 
- *For this reason, it is advisable to pair feature crosses with L1 regularization, which encourages sparsity of features, or L2 regularization, which limits overfitting.* 
 
- *This type of model approach is also useful when the numerical representation has an intuitive interpretation; for example, a latitude and longitude pair can be used instead of urban area predictions.* 
 
- *For examples like this one, where the goal is primarily to suggest possible tags with less emphasis on getting the tag exactly right, a typical rule of thumb is to use n_specific_tag / n_total_examples as a threshold for each class.* 
 
- *This approach is called one versus rest. In the case of the Stack Overflow example where we want to tag questions as TensorFlow, Python, and pandas, we’d train an individual classifier for each of these three tags: Python or not, TensorFlow or not, and so forth.* 
 
- *The irreducible error is the inherent error in the model resulting from noise in the dataset, the framing of the problem, or bad training examples, like measurement errors or confounding factors. Just as the name implies, we can’t do much about irreducible error.* 
 
- *The other two, the bias and the variance, are referred to as the reducible error, and here is where we can influence our model’s performance. In short, the bias is the model’s inability to learn enough about the relationship between the model’s features and labels, while the variance captures the model’s inability to generalize on new, unseen examples. A model with high bias oversimplifies the relationship and is said to be underfit. A model with high variance has learned too much about the training data and is said to be overfit.* 
 
- *This also explains why bagging is typically less effective for more stable learners like k-nearest neighbors (kNN), naive Bayes, linear models, or support vector machines (SVMs) since the size of the training set is reduced through bootstrapping.* 
 
- *The boosting algorithm works by iteratively improving the model to reduce the prediction error. Each new weak learner corrects for the mistakes of the previous prediction by modeling the residuals delta_i of each step. The final prediction is the sum of the outputs from the base learner and each of the successive weak learners,* 
 
- *By iteratively focusing on the hard-to-predict examples, boosting effectively decreases the bias of the resulting model.* 
 
- *Stacking can be thought of as an extension of simple model averaging where we train k models to completion on the training dataset, then average the results to determine a prediction. Simple model averaging is similar to bagging, but the models in the ensemble could be of different types, while for bagging, the models are of the same type.* 
 
- *Splitting an ML problem is usually a bad idea, since an ML model can/should learn combinations of multiple factors.* 
 
- *In many classification situations, creating a neutral class can be helpful. For example, instead of training a binary classifier that outputs the probability of an event, train a three-class classifier that outputs disjoint probabilities for Yes, No, and Maybe. Disjoint here means that the classes do not overlap.* 
 
- *The Rebalancing design pattern provides various approaches for handling datasets that are inherently imbalanced. By this we mean datasets where one label makes up the majority of the dataset, leaving far fewer examples of other labels.* 
 
- *Precision measures the percentage of positive classifications that were correct out of all positive predictions made by the model. Conversely, recall measures the proportion of actual positive examples that were identified correctly by the model. The biggest difference between these two metrics is the denominator used to calculate them. For precision, the denominator is the total number of positive class predictions made by our model. For recall, it is the number of actual positive class examples present in our dataset.* 
 
- *By weighting classes, we tell our model to treat specific label classes with more importance during training.* 
 
- *Overfitting can happen if the model complexity is higher than can be afforded by the size and coverage of the dataset.* 
 
- *One bit of intuition as to why this works comes from the Uniform Approximation Theorem of deep learning, which, loosely put, states that any function (and its derivatives) can be approximated by a neural network with at least one hidden layer and any “squashing” activation function, like sigmoid.* 
 
- *There is no noise, so the labels are accurate for all instances.  You have the complete dataset at your disposal (you have all the examples there are). In this case, overfitting becomes interpolating the dataset.* 
 
- *In addition, recent research indicates that double descent happens in a variety of machine learning problems, and therefore it is better to train longer rather than risk a suboptimal solution by stopping early. Two splits  Isn’t the advice in the regularization section in conflict with the advice in the previous sections on early stopping or checkpoint selection?* 
 
- *A model that takes two weeks to train on GPUs can converge in hours on TPUs.* 
 
- *For example, as accelerators (GPUs, FPGAs, TPUs, and so on) have gotten faster, I/O has become a significant bottleneck in ML training.* 
 
- *Because stateless components don’t have any state, they can be shared by multiple clients.* 
 
- *The solution to any problem in computer science is to add an extra level of indirection.* 
 
- *The Feature Store design pattern simplifies the management and reuse of features across projects by decoupling the feature creation process from the development of models using those features.* 
 
- *One of the key characteristics of operationalized models is automated workflow pipelines. The development stage of the ML life cycle is a multi-step process. Building pipelines to automate these steps enables more efficient workflows and repeatable processes that improve future model development, and allows for increased agility in solving problems that arise.* 
 

