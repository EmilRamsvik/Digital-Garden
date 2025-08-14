---
created: 2023-10-29T15:52
updated: 2025-08-13T14:54
Pages: 310
Author: Andriy Burkov
finished: true
Date Finished: 2024-02-19
tags:
  - books
  - digital-garden
  - book-review
  - machine-learning
  - machine-learning/ml-engineering
  - machine-learning/feature-engineering
  - "#mlops"
---
# Machine Learning Engineering


# 🚀 The Book in 3 Sentences
This book is about the practical implementation of machine learning models. It goes through why machine learning should be used, how to implement it, and how to execute in all phasers of the machine learning life-cycle. 

# 🎨 Impressions
I felt it, along with a lot of other books on machine learning engineering I have read suffers from being too "FAANG" or "Big Tech", in which they have a lot of focus on metrics and processes that never materialize in 90 % of businesses. For example, the focus on model reproducibility is not something I have implemented a lot of times but never once has even a casual mention of a use case for this materialized. This is probably one of those things that have drifted from academia into business. As the book wants to highlight, it is about the practical implementation of machine learning to solve business problems, then it should try to limit the "Research Machine Learning" culture as much as possible within that book. 

Its focus on the why at the start of the book, and reasons for failure was something I quite liked and learned a lot from, this is something I will take with me. 
# ✍️ My Top  Quotes

- “The perfect project plan is possible if one first documents a list of all the unknowns.”
 
- “When you’re fundraising, it’s AI. When you’re hiring, it’s ML. When you’re implementing, it’s linear regression. When you’re debugging, it’s printf().” — Baron Schwartz
 
- In other words, if you’re looking for opportunities to create innovative ML-based solutions to business problems, you want the discipline called Applied Machine Learning, not Machine Learning Research, so most books won’t suit your needs.
 
- I’ll put it in culinary terms:
	- you’ll need to figure out what’s worth cooking / what the objectives are (decision-making and product management)
	- understand the suppliers and the customers (domain expertise and business acumen)
	- how to process ingredients at scale (data engineering and analysis)
	- how to try many diﬀerent ingredient-appliance combinations quickly to generate potential recipes (prototype phase ML engineering)
	- how to check that the quality of the recipe is good enough to serve (statistics)
	- how to turn a potential recipe into millions of dishes served eﬃciently (production phase ML engineering)
	- how to ensure that your dishes stay top notch even if the delivery truck brings you a ton of potatoes instead of the rice you ordered (reliability engineering 
 
- It promptly shatters any false sense of security you were tempted to have about building an AI system that is more “intelligent” than you are. (Um, no. Just no.* )
 
- In 2020, most organizations still spend between 31 and 90 days deploying one model, while 18 percent of companies are taking longer than 90 days — some spending more than a year productionizing
 
- The main challenges organizations face when developing ML capabilities, such as model version control, reproducibility, and scaling, are rather engineering than scientific.
 
- algorithmically training a statistical model based on that dataset.
 
- In supervised learning, the problem of predicting a class is called classiﬁcation, while the problem of predicting a real number is called regression. The value that has to be predicted by a supervised model is called a target
 
- Reinforcement learning is a subﬁeld of machine learning where the machine (called an agent) “lives’ ’ in an environment and is capable of perceiving the state of that environment as a vector of features. The machine can execute actions in non-terminal states. Diﬀerent actions bring diﬀerent rewards and could also move the machine to another state of the environment. A common goal of a reinforcement learning algorithm is to learn an optimal policy.
 
- you can manually fill an exhaustive lookup table by providing the expected output for any input (that is, the number of possible input values is not too large, or getting outputs is fast and cheap).
 
- Finally, one of the most influential cost factors is the desired accuracy of the model. The machine learning project’s cost grows superlinearly with the accuracy requirement,
 
- what is the lowest accuracy level below which the model becomes impractical.
 
- According to various estimates made between 2017 and 2020, 74% to 87% of machine learning and advanced analytics projects fail or don’t reach production.
 
- As of 2020, both data science and machine learning engineering are relatively new disciplines. There’s still no standard way to teach them. Most organizations don’t know how to hire experts in machine learning and how to compare them.
 
- This results in a significant time spent by skilled data scientists on data labeling and labeling tool development. This is a major challenge for the eﬀective execution of an AI project.
 
- As many as 76% of AI and data science teams label training data on their own, while 63% build their own labeling and annotation automation technology.
 
- The impact of using machine learning is high when, 
	1. machine learning can replace a complex part in your engineering project, or
	2. there’s a great beneﬁt in getting inexpensive (but probably imperfect) predictions.
 
- The cost of the machine learning project is highly influenced by three factors: 
	1. the diﬃculty of the problem,
	2. the cost of data, and
	3. the needed model performance quality.
 
- One way to make a more educated guess is to simplify the problem and solve a simpler one. The progress of a machine learning project is nonlinear.
 
- There are two cultures of structuring a machine learning team, depending on the organization. One culture says that a machine learning team has to be composed of **data analysts who collaborate closely with software engineers**. In such a culture, a software engineer doesn’t need to have profound expertise in machine learning but has to understand the vocabulary of their fellow data analysts or scientists. According to the other culture, **all engineers in a machine learning team must have a combination of machine learning and software engineering skills**.
 
- Lack of alignment between technical and business teams.
 
- you used a learning algorithm incapable of training a complex enough model using the data you have.
 
- ten times the number of trainable parameters (usually applied to neural networks).

### Types of Bias
- Selection bias is the tendency to skew your choice of data sources to those that are easily available, convenient, and/or cost-effective.
	- Self-selection bias is a form of selection bias where you get the data from sources that “volunteered” to provide it. Most poll data has this type of bias. 
	- Omitted variable bias happens when your featurized data doesn’t have a feature necessary for accurate prediction. For example, let’s assume that you are working on a churn prediction model and you want to predict whether a customer cancels their subscription within six months. You train a model, and it’s accurate enough; however, several weeks after deployment you see many unexpected false negatives. You investigate the decreased model performance and discover a new competitor now oﬀers a very similar service for a lower price. 
	- *Sponsorship or funding biasaﬀects the data produced by a sponsored agency. 
	- Sampling bias (also known asdistribution shift) occurs when the distribution of examples used for training doesn’t reﬂect the distribution of the inputs the model will receive in production. 
	- Prejudice or stereotype biasis often observed in data obtained from historical sources, such as books or photo archives, or from online activity such as social media, online forums, and comments to online publications. 
	- Systematic value distortion is bias usually occurring with the device making measurements or observations. 
	- Experimenter bias is the tendency to search for, interpret, favor, or recall information in a way that aﬃrms one’s prior beliefs or hypotheses. 
	- Labeling bias happens when labels are assigned to unlabeled examples by a biased process or person. 
	- Selection bias can be avoided by systematically questioning the reason why a speciﬁc data source was chosen. 
 
- A good habit is to question everything: who created the data, what were their motivations and quality criteria, and more importantly, how and why the data was created.
 
- Self-selection bias cannot be completely eliminated. It usually appears in surveys; the mere consent of the responder to answer the questions represents self-selection bias.
 
- It’s tough to avoid the omitted variable biascompletely, because, as they say, “we don’t know what we don’t know.”
 
- Sampling bias can be avoided by researching the real proportion of various properties in the data that will be observed in production, and then sampling the training data by keeping similar proportions
 
- Labeling bias can be avoided by asking several labelers to identify the same example.
 
- Concept drift is a fundamental change in the statistical relationship between the features and the label.
 
- Shallow algorithms, such as linear or logistic regression, and some ensemble methods, such as AdaBoost, are particularly sensitive to outliers.

### Good Data
- Good data contains enough information that can be used for modeling. For example, if you want to train a model that predicts whether the customer will buy a speciﬁc product, you will need to possess both the properties of the product in question and the properties of the products customers purchased in the past.
- Good data has good coverage of what you want to do with the model.
- Good data reﬂects real inputs that the model will see in production.
- You are considered lucky if you can gather good data from interactions of the user with the system. 
 
- Ablob(for Binary Large OBject).
 
- A data lake is a repository of data stored in its natural or raw format, usually in the form of object blobs or files.
 
- A data lake is typically an unstructured aggregation of data from multiple sources, including databases, logs, or intermediary data obtained as a result of expensive transformations of the original data.
 
- Common problems with data are high cost, bias, low predictive power, outdated examples, outliers, and leakage.
 
- To build an index for fast string matching, you can, for example, use the Aho–Corasick algorithm.
 
- One popular tool used in Kaggle competitions is [Boruta](https://github.com/scikit-learn-contrib/boruta_py). Boruta iteratively trains random forest models and runs statistical tests to identify features as important and unimportant. The tool exists both in the form of an R package and a Python module.
 
- Boruta works as a wrapper around the random forest learning algorithm, hence its name — Boruta is a spirit of the forests in Slavic mythology. 
 
- Principal Component Analysis (PCA) is the oldest of the techniques. It is also, by far, the fastest option. Performance comparison tests show a very weak dependence of the speed of the PCA algorithm on the size of the dataset. Therefore, you can eﬀectively use PCA as a step preceding your model training, and find the optimal value of the reduced dimensionality experimentally as part of the hyperparameter tuning process.
 
- Winsorization consists of setting all outliers to a specific percentile of the data; for example, a 90% winsorization would see all data below the 5th percentile set to the 5th percentile, and data above the 95th percentile set to the 95th percentile.
 
- A feature store is a central vault for storing documented, curated, and access-controlled features within an organization. Each feature is described by four elements: 
	-  name
	- description
	- metadata
	- deﬁnition.
 
- If the person responsible for the feature leaves the company, the product owner must be alerted automatically.
 
- At the beginning of the modeling process, try to engineer as many “simple” features as possible. A feature is simple when it doesn’t take significant time to code.
 
- At the beginning of the modeling process, try to engineer as many “simple” features as possible. A feature is simple when it doesn’t take significant time to code.
 
- When replacing an old, non-machine-learning-based algorithm with a statistical model, use the output of the old algorithm as a feature for the new model.
 
 
	- Use IDs as features when needed. This might seem counter-intuitive because unique IDs don’t contribute to generalization. However, the use of IDs allows the creating of one model that has one behavior in a general case, and diﬀerent behaviors in other cases. 
 
- Use categorical features with many values (more than a dozen) only when you want the model to have diﬀerent “modes” of behavior that depend on that categorical feature.
 
- Likewise, try to group the long tail of infrequent values under the name "Other," or merge them with similar frequent values.
 
- The feature engineering code must be carefully tested. Unit tests should cover each feature extractor. Check that each feature is generated correctly using as many inputs as possible. For each boolean feature, check that it is true when it should be true and is false when it should be false.
 
- The feature extractor has to throw an exception and die if any resource during feature extraction is unavailable. Avoid silent failures that may remain unnoticed for a long time with model performance degrading or becoming completely wrong.
 
- The feature extraction code must be independent of the remaining code that supports the model. It should be possible to update the code responsible for each feature without aﬀecting other features, the data processing pipeline, or the way the model is called.
 
- First, ensure the data conforms to the schema, as deﬁned by the schema file. Even if you initially prepared the data, it’s likely the original data and the current data are not the same.
 
- • if you observe a similar, but diﬀerent system, you can expect to get a similar, but diﬀerent machine learning model performance.
 
- Classiﬁcation, the zero rule algorithm strategy is to always predict the class most common in the training set, independently of the input value. It can look ineﬀective, but consider the following problem.
 
- You could also use an existing rule-based system, or build your own simple rule-based system. For example, if the problem is to build a model that predicts whether a given website visitor will like a recommended article, a simple rule-based system could work as follows.
 
- Validation and test sets must come from the same statistical distribution. That is, their properties have to be maximally similar, but the examples belonging to the two sets must be, obviously and ideally, diﬀerent and obtained independently of one another.
 
- The most accurate machine learning algorithms and models are so-called “black boxes.” They make very few prediction errors, but it may be diﬃcult to understand, and even harder to explain, why a model or an algorithm made a speciﬁc prediction.
 
- In contrast, kNN, linear regression, and decision tree learning algorithms are not always the most accurate. However, their predictions are easy to interpret by a non-expert.
 
- Models like SVMs and linear and logistic regression models, and not-very-deep feedforward neural networks, are extremely fast at prediction time. Others, like kNN, ensemble algorithms, and very deep or recurrent neural networks, are slower.
 
- Shortlisting candidate learning algorithms for a given problem is sometimes calledalgorithm spot-checking.
 
- In practice, we choose between high precision or high recall. It’s practically impossible to have both. This is called theprecision-recall tradeoﬀ.
 
- For dealing with the situations in which diﬀerent classes have diﬀerent importance, a useful metric iscost-sensitive accuracy. First, assign a cost (a positive number) to both types of mistakes: FP and FN. Then compute the counts TP, TN, FP, FN as usual, and multiply the counts for FP and FN by their corresponding costs before calculating the accuracy using Equation 2, above.
 
- [*Cohen’s kappa statistic](https://en.wikipedia.org/wiki/Cohen%27s_kappa) is a performance metric that applies to both multiclass and imbalanced learning problems. The advantage of this metric over accuracy is that Cohen’s kappa tells you how much better your classiﬁcation model is performing, compared to a classiﬁer that randomly guesses a class according to the frequency of each class.
 
- [Discounted cumulative gain (DCG)](https://www.evidentlyai.com/ranking-metrics/ndcg-metric) is a popular measure of ranking quality in search engines. DCG measures the usefulness, or gain, of a document based on its position in the result list. The gain is accumulated from the top of the result list to the bottom, with the gain of each result discounted at lower positions.
 
- In practice, by trying to reduce variance, you increase bias, and vice versa. In other words, reducing overﬁtting leads to underﬁtting, and the other way around. This is called the bias-variance trade-oﬀ:
 
- Regularization is an umbrella term for methods that force a learning algorithm to train a less complex model. In practice, it leads to higher bias, but significantly reduces the variance. The two most widely used types of regularization are L1 and L2 regularization.
 
- Gradient is the generalization of derivatives for functions that take several inputs or one input in the form of a vector or some other complex structure. A gradient of a function is a vector of partial derivatives.
 
- Batch normalization (which rather should be called batch standardization) consists of standardizing the outputs of each layer before the next layer receives them as input. In practice, batch normalization results in faster and more stable training, as well as some regularization eﬀect. So, it’s always a good idea to use batch normalization.
 
- Concept drift— shift in the relationship between the features and the label.
 
- Some algorithms and models, such as support vector machine(SVM), decision trees, and random forests, allow the data analyst to provide weights for each class. The loss in the cost function is typically multiplied by the weight. The data analyst may, for example, provide greater weight to the minority class.
 
- It’s important to note that model cascading is not always a bad practice. Using the output of one model, as one of many inputs for another model, is common.
 
- As Google’s engineers mentioned: “In the absence of barriers, engineers will naturally use the most convenient signal at hand, especially when working against deadline pressures.”
 
- If, despite adding more training examples and designing clever features, the performance of your model plateaus, think about diﬀerent information sources.
 
- More advanced, and often preferable way of online model evaluation and selection, is multi-armed bandit(MAB). A/B testing has one major drawback. The number of test results in groups A and B you need to calculate the value of the A/B test is high.
 
- Ideally, we would like to expose a user to a suboptimal model as few times as possible. At the same time, we need to expose users to each of the two models a number of times suﬃcient to get reliable estimates of both models’ performance. This is known as the [the exploration-exploitation dilemma](https://en.wikipedia.org/wiki/Exploration-exploitation_dilemma): on one hand, we want to explore the models’ performance enough to be able to reliably choose the better one. On the other hand, we want to exploit the performance of the better model as much as possible.
 
- Serverless deployment also simpliﬁes canary deployment or canarying. In software engineering, canarying is a strategy when the updated code is pushed to just a small group of end-users, usually unaware. Because the new version is only distributed to a small number of users, its impact is relatively low, and changes can be reversed quickly, should the new code contain bugs.
 
- Recall, canary deployment, or canarying, pushes the new model version and code to a small fraction of users while keeping the old version running for most users.
 
- The principal advantage of the dynamic deployment on the users’ devices is that the calls to the model will be fast for the user. It also reduces the charge on the organization’s servers. Downsides include the diﬃculty to deliver updates to all users and the availability of the model for third-party analyses.
 
- Multi-armed bandits allow us to deploy the new model while keeping the old one. The algorithm replaces the old model with the new one only when it is certain that it performs better.
 
- When users interact with a learning system, there’s a phenomenon known as the creep factor. It means that the user perceives the model’s predictive capacity as too high.
 
- Recommender systems need additional monitoring. These models offer recommendations to website or application users. It can be useful to monitor click-through rate (CTR), that is, the ratio of users who clicked on a recommendation to the number of total users who received recommendations from that model. If CTR is decreasing, the model must be updated.

- “Pattern Recognition and Machine Learning” by Christopher Bishop
 
