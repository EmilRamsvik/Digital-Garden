---
created: 2023-10-29T15:52
updated: 2025-09-02T10:01
Pages: 540
Author: Christoph Molnar
finished: true
Date Finished: 2024-09-18
tags:
  - ai
  - book-review
  - books
  - data
  - data-science
  - digital-garden
  - explainable-ai
  - interpretability
  - interpretable-machine-learning
  - machine-learning
  - machine-learning/feature-engineering
  - machine-learning/ml-engineering
  - machine-learning/modeling
  - machine-learning/models
---
# Interpretable Machine Learning


# 🚀 The Book in 3 Sentences
This book is about methods and ways to understand AI and data modeling and how to utilize the different ways of interpreting machine learning models. It gives the basis and then dives into the different types of models and methods you can use.  It separates the models into specific to models or model families, and model agnostic. 

# 🎨 Impressions

Understand how the different ways of interpreting the models are.  Especially model-agnostic versus model-specific.

Explainable AI is difficult to explain and might not be the same as true AI. 

A lot of the model-agnostic methods are based on data or utilizing some sort of check on inference to understand the impact of changes. 

A lot of the most important things from a human-explainable AI viewpoint is finding a couple of reasons that people can understand and think is the important ones. 
# ✍️ My Top  Quotes

- Would learn patterns from past house sales. The book focuses on supervised machine learning, which covers all prediction problems where we have a dataset for which we already know the outcome of interest (e.g. past house prices) and want to learn to predict the outcome for new data.
 
- A Learner or Machine Learning Algorithm is the program used to learn a machine learning model from data. Another name is "inducer"
 
- Interpretability is the degree to which a human can understand the cause of a decision. Another one is: Interpretability is the degree to which a human can consistently predict the model's result
 
- Machine learning models can only be debugged and audited when they can be interpreted.
 
- Intrinsic interpretability refers to machine learning models that are considered interpretable due to their simple structure, such as short decision trees or sparse linear models.
 
- Post hoc interpretability refers to the application of interpretation methods after model training. Permutation feature importance is, for example, a post hoc interpretation method.
 
- Feature summary statistic : Many interpretation methods provide summary statistics for each feature. Some methods return a single number per feature, such as feature importance, or a more complex result, such as the pairwise feature interaction strengths, which consist of a number for each feature pair.
 
- Algorithm transparency is about how the algorithm learns a model from the data and what kind of relationships it can learn. If you use convolutional neural networks to classify images, you can explain that the algorithm learns edge detectors and filters on the lowest layers.
 
- An explanation usually relates the feature values of an instance to its model prediction in a humanly understandable way.
 
- *Translucency** describes how much the explanation method relies on looking into the machine learning model, like its parameters. For example, explanation methods relying on intrinsically interpretable models like the linear regression model (model-specific) are highly translucent.*  *Methods only relying on manipulating inputs and observing the predictions have zero translucency.
 
- *Fidelity**: How well does the explanation approximate the prediction of the black box model? High fidelity is one of the most important properties of an explanation, because an explanation with low fidelity is useless to explain the machine learning model.
 
- *Consistency**: How much does an explanation differ between models that have been trained on the same task and that produce similar predictions?
 
- *Accuracy** : How well does an explanation predict unseen data? High accuracy is especially important if the explanation is used for predictions in place of the machine learning model.
 
- *Comprehensibility**: How well do humans understand the explanations? This looks just like one more property among many, but it is the elephant in the room. Difficult to define and measure, but extremely important to get right.
 
 
- *Stability**: How similar are the explanations for similar instances? While consistency compares explanations between models, stability compares explanations between similar instances for a fixed model. High stability means that slight variations in the features of an instance do not substantially change the explanation
 
- *Certainty**: Does the explanation reflect the certainty of the machine learning model? Many machine learning models only give predictions without a statement about the models confidence that the prediction is correct.
 
- *Degree of Importance**: How well does the explanation reflect the importance of features or parts of the explanation? For example, if a decision rule is generated as an explanation for an individual prediction, is it clear which of the conditions of the rule was the most important?
 
- As an explanation for an event, humans prefer short explanations (only 1 or 2 causes) that contrast the current situation with a situation in which the event would not have occurred. Especially abnormal causes provide good explanations. Explanations are social interactions between the explainer and the explainee (recipient of the explanation) and therefore the social context has a great influence on the actual content of the explanation.
 
- An explanation is the answer to a why-question
 
- Humans usually do not ask why a certain prediction was made, but why this prediction was made instead of another prediction. We tend to think in counterfactual cases, i.e. "How would the prediction have been if input X had been different?".
 
- Explanations are selected . People do not expect explanations that cover the actual and complete list of causes of an event. We are used to selecting one or two causes from a variety of possible causes as THE explanation. As proof, turn on the TV news: "The decline in stock prices is blamed on a growing backlash against the company's product due to problems with the latest software update."
 
- The fact that an event can be explained by various causes is called the Rashomon Effect. Rashomon is a Japanese movie that tells alternative, contradictory stories (explanations) about the death of a samurai.
 
- Have the same influence on the prediction as the abnormal one.
 
- Explanations are truthful. Good explanations prove to be true in reality (i.e. in other situations). But disturbingly, this is not the most important factor for a "good" explanation. For example, selectiveness seems to be more important than truthfulness.
 
- An explanation that selects only one or two possible causes rarely covers the entire list of relevant causes.
 
- The easiest way to achieve interpretability is to use only a subset of algorithms that create interpretable models. Linear regression, logistic regression and the decision tree are commonly used interpretable models.
 
- Monotonicity is useful for the interpretation of a model because it makes it easier to understand a relationship.
 
- The biggest advantage of linear regression models is linearity: It makes the estimation procedure simple and, most importantly, these linear equations have an easy to understand interpretation on a modular level (i.e. the weights).
 
- The variance of the error terms is assumed to be constant over the entire feature space.
 
- Lasso stands for "least absolute shrinkage and selection operator"
 
- Linear regression and logistic regression models fail in situations where the relationship between features and outcome is nonlinear or where features interact with each other.
 
- Search for mixed models or generalized estimating equations.
 
- For example, when predicting the value of a house, the model errors are usually higher in expensive houses, which violates the homoscedasticity of the linear model. Search for robust regression.
 
- I have outliers that strongly influence my model. Search for robust regression.
 
- Search for parametric survival models, cox regression, survival analysis.
 
- If you have more categories, search for multinomial regression.
 
- I want to integrate prior knowledge into my models. Search for Bayesian inference.
 
- Trees fail to deal with linear relationships. Any linear relationship between an input feature and the outcome has to be approximated by splits, creating a step function. This is not efficient.
 
- This goes hand in hand with lack of smoothness. Slight changes in the input feature can have a big impact on the predicted outcome, which is usually not desirable.
 
- Trees are also quite unstable. A few changes in the training dataset can create a completely different tree. This is because each split depends on the parent split.
 
- Decision trees are very interpretable -- as long as they are short. The number of terminal nodes increases quickly with depth.
 
- Support or coverage of a rule: The percentage of instances to which the condition of a rule applies is called the support.
 
- The accuracy of a rule is a measure of how accurate the rule is in predicting the correct class for the instances to which the condition of the rule applies.
 
- Usually there is a trade-off between accuracy and support: By adding more features to the condition, we can achieve higher accuracy, but lose support.
 
- A decision list introduces an order to the decision rules. If the condition of the first rule is true for an instance, we use the prediction of the first rule.
 
- A decision set resembles a democracy of the rules, except that some rules might have a higher voting power.
 
- IF-THEN rules are easy to interpret. They are probably the most interpretable of the interpretable models. This statement only applies if the number of rules is small, the conditions of the rules are short (maximum 3 I would say) and if the rules are organized in a decision list or a non-overlapping decision set.
 
- Decision rules can be as expressive as decision trees, while being more compact.
 
- The research and literature for IF-THEN rules focuses on classification and almost completely neglects regression. While you can always divide a continuous target into intervals and turn it into a classification problem, you always lose information.
 
- Often the features also have to be categorical. That means numeric features must be categorized if you want to use them.
 
- The great advantage of model-agnostic interpretation methods over model-specific ones is their flexibility. Machine learning developers are free to use any machine learning model they like when the interpretation methods can be applied to any model. Anything that builds on an interpretation of a machine learning model, such as a graphic or user interface, also becomes independent of the underlying machine learning model.
 
- Explanation flexibility: You are not limited to a certain form of explanation. In some cases it might be useful to have a linear formula, in other cases a graphic with feature importances. Representation flexibility: The explanation system should be able to use a different feature representation as the model being explained. For a text classifier that uses abstract word embedding vectors, it might be preferable to use the presence of individual words for the explanation.
 
- The lowest layer is the World. This could literally be nature itself, like the biology of the human body and how it reacts to medication, but also more abstract things like the real estate market. The World layer contains everything that can be observed and is of interest. Ultimately, we want to learn something about the World and interact with it. The second layer is the Data layer. We have to digitize the World in order to make it processable for computers and also to store information. The Data layer contains anything from images, texts, tabular data and so on. By fitting machine learning models based on the Data layer, we get the Black Box Model layer. Machine learning algorithms learn with data from the real world to make predictions or find structures. Above the Black Box Model layer is the Interpretability Methods layer, which helps us deal with the opacity of machine learning models. What were the most important features for a particular diagnosis? Why was a financial transaction classified as fraud? The last layer is occupied by a Human. Look! This one waves to you because you are reading this book and helping to provide better explanations for black box models! Humans are ultimately the consumers of the explanations.
 
- ALE plots are unbiased , which means they still work when features are correlated. Partial dependence plots fail in this scenario because they marginalize over unlikely or even physically impossible combinations of feature values.
 
- ALE plots can become a bit shaky (many small ups and downs) with a high number of intervals. In this case, reducing the number of intervals makes the estimates more stable, but also smoothes out and hides some of the true complexity of the prediction model. There is no perfect solution for setting the number of intervals.
 
- Second-order ALE estimates have a varying stability across the feature space, which is not visualized in any way. The reason for this is that each estimation of a local effect in a cell uses a different number of data instances.
 
- If a machine learning model makes a prediction based on two features, we can decompose the prediction into four terms: a constant term, a term for the first feature, a term for the second feature and a term for the interaction between the two features.
 
- We measure the importance of a feature by calculating the increase in the model's prediction error after permuting the feature. A feature is "important" if shuffling its values increases the model error, because in this case the model relied on the feature for the prediction. A feature is "unimportant" if shuffling its values leaves the model error unchanged, because in this case the model ignored the feature for the prediction.
 
- It is very unclear whether you should use training or test data to compute the feature importance.
 
- Permutation feature importance is linked to the error of the model. This is not inherently bad, but in some cases not what you need.
 
- Surrogate models are trained to approximate the predictions of the underlying black box model. Instead of training a global surrogate model, LIME focuses on training local surrogate models to explain individual predictions.
 
- Local surrogate models are interpretable models that are used to explain individual predictions of black box machine learning models. Local interpretable model-agnostic explanations (LIME
 
- A prediction can be explained by assuming that each feature value of the instance is a "player" in a game where the prediction is the payout. Shapley values -- a method from coalitional game theory -- tells us how to fairly distribute the "payout" among the features.
 
- The Shapley value is the only attribution method that satisfies the properties Efficiency, Symmetry, Dummy and Additivity, which together can be considered a definition of a fair payout.
 
- Efficiency The feature contributions must add up to the difference of prediction for x and the average.
 
- Symmetry The contributions of two feature values j and k should be the same if they contribute equally to all possible coalitions.
 
- Dummy A feature j that does not change the predicted value -- regardless of which coalition of feature values it is added to -- should have a Shapley value of 0.
 
- SHAP (SHapley Additive exPlanations) by Lundberg and Lee (2016) is a method to explain individual predictions. SHAP is based on the game theoretically optimal Shapley Values.
 
- LIME weights the instances according to how close they are to the original instance. The more 0's in the coalition vector, the smaller the weight in LIME. SHAP weights the sampled instances according to the weight the coalition would get in the Shapley value estimation.
 
- KernelSHAP ignores feature dependence . Most other permutation based interpretation methods have this problem. By replacing feature values with values from random instances, it is usually easier to randomly sample from the marginal distribution. However, if features are dependent, e.g. correlated, this leads to putting too much weight on unlikely data points. TreeSHAP solves this problem by explicitly modeling the conditional expected prediction.
 
- Example-based explanation methods select particular instances of the dataset to explain the behavior of machine learning models or to explain the underlying data distribution.
 
- Example-based explanations are mostly model-agnostic, because they make any machine learning model more interpretable. The difference to model-agnostic methods is that the examplebased methods explain a model by selecting instances of the dataset and not by creating summaries of features
 
- Example-based explanations only make sense if we can represent an instance of the data in a humanly understandable way.
 
- In the form: "If X had not occurred, Y would not have occurred". For example: "If I hadn't taken a sip of this hot coffee, I wouldn't have burned my tongue".
 
- A counterfactual explanation describes a causal situation in the form: "If X had not occurred, Y would not have occurred". For example: "If I hadn't taken a sip of this hot coffee, I wouldn't have burned my tongue".
 
- A counterfactual explanation of a prediction describes the smallest change to the feature values that changes the prediction to a predefined output.
 
- There are both model-agnostic and model-specific counterfactual explanation methods,
 
- The counterfactual method does not require access to the data or the model. It only requires access to the model's prediction function, which would also work via a web API, for example.
 
- For each instance you will usually find multiple counterfactual explanations (Rashomon effect). This is inconvenient - most people prefer simple explanations over the complexity of the real world.
 
- An adversarial example is an instance with small, intentional feature perturbations that cause a machine learning model to make a false prediction.
 
- There are three golden rules in cybersecurity: 
	1) *know your adversary
	2) *be proactive and
	3) *protect yourself.
 
- A prototype is a data instance that is representative of all the data. A criticism is a data instance that is not well represented by the set of prototypes.
 
- An influential instance is a data instance whose removal has a strong effect on the trained model. The more the model parameters or predictions change when the model is retrained with a particular instance removed from the training data, the more influential that instance is.
 
- How can we find influential instances? We have two ways of measuring influence: Our first option is to delete the instance from the training data, retrain the model on the reduced training dataset and observe the difference in the model parameters or predictions (either individually or over the complete dataset). The second option is to upweight a data instance by approximating the parameter changes based on the gradients of the model parameters.
 
- The approach of making the learned features explicit is called Feature Visualization. Feature visualization for a unit of a neural network is done by finding the input that maximizes the activation of that unit.
 
- Feature visualizations give unique insight into the working of neural networks, especially for image recognition. Given the complexity and opacity of neural networks, feature visualization is an important step in analyzing and describing neural networks.
 
- The focus will be on model-agnostic interpretability tools.
 
