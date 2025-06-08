---
Finished: true
tags:
  - machine-learning
  - data-science
  - design-sprint
  - workshop
  - "#ideating"
created: 2023-04-23T15:04:00
updated: 2024-03-23T17:56
---


The ML Design Sprint is a modification of the [design sprint workshop](http://www.gv.com/sprint/), where the goal is to give the project relevant context on the problem, the data, and the resources available. The goal of the ML Design Sprint is to decide on the goal of the model, the input features of the model, and how the model should be evaluated. The design sprint brings together Subject Matter Experts, Users, Product Owners Data Scientists, and ML Engineers together to quickly understand the problem, the potential solutions, and the risks. ML Design Sprint should shorten the duration of the scoping and exploratory analysis phases by bringing the analysts and experts together. 

# Day 1 Discovery

Day 1 should be set aside to get to know the persons, the problems, and the data.  The goal is that all participants should be familiar with what we are trying to do, and what tools we have available. Before the start of day 1, all participants should have gotten information about the exercises and the preliminary documents made on the project in order to prepare for the workshop. 

### Team Introduction and Comfort-Building Exercise

In this exercise, participants will have the opportunity to share their personal and professional backgrounds and experiences, while also acknowledging their current understanding of machine learning. This is aimed at creating a comfortable environment for everyone, regardless of their level of familiarity with machine learning.

**Step 1: Personal Introduction**
Each participant can share:

- Their name, role in the organization, and a brief overview of their professional background.
- Any experience they have that might be relevant to the project, even if not directly related to machine learning. For example, they might have experience with data analysis, project management, domain expertise, etc.

**Step 2: Encounter with Machine Learning**
Participants can discuss any exposure they have had to machine learning:

- Any courses, webinars, or workshops they've attended on machine learning.
- Personal projects or hobbies that involved machine learning, even at a very basic level.
- Their understanding of machine learning in their own words, even if it's limited.

**Step 3: Expectations and Concerns**
Participants can express their thoughts about the upcoming project:

- What they are most excited about for this project?
- Any apprehensions they have regarding the project, given their limited experience with machine learning.
- How they see their current skills contributing to the project.

**Step 4: Learning Aspirations**
Lastly, participants can share their learning aspirations:

- What they hope to learn about machine learning through the course of this project.
- How they see this new knowledge fitting into their professional growth.

This exercise should help to create a comfortable, inclusive atmosphere where all participants, regardless of their level of machine learning knowledge, feel valued and empowered to contribute to the project. The focus on personal growth and learning aspirations also helps to instill a positive, growth-oriented mindset for the duration of the project.

#### Goal 
*Everyone in the team understands the team-members role and backgrounds.* 

### Familiarization with Machine Learning Exercise
*Optional*

After introductions, it would be good to gauge the group's understanding of machine learning. You could conduct an exercise where participants explain key ML concepts in their own words. Concepts could include:

- Supervised Learning
- Unsupervised Learning
- Reinforcement Learning
- Deep Learning
- [Bias/Variance trade-off](http://scott.fortmann-roe.com/docs/BiasVariance.html)
- Feature Engineering
- Model Evaluation Metrics
- Cross-Validation
- Inference vs Training
- Model Serving. 

You can set this up as a discussion activity, or have each participant prepare a brief explanation for a chosen concept. This exercise will allow everyone to get on the same page about basic machine learning terminology and principles.

#### Goal
*All team members have a rudimentary understanding of machine learning concepts and how it works on a high level. All team members have access to resources on machine learning and can study themselves if they want to.* 

### Problem Understanding Exercise

The next step is to get a clear understanding of the problem you're all trying to solve. 

1. Ask participants to define the problem in their own words.
2. Ask them to brainstorm the kind of data that might be useful for solving the problem.
3. Discuss the potential impact of solving this problem: how will it benefit the company, customers, or broader society?
4. Discuss potential difficulties and roadblocks that could arise during the project.

This exercise will help ensure that everyone has a good grasp of the problem and is aware of what needs to be accomplished.

#### Goal
*Everyone in the team can explicitly state the problem in Machine Learning terms and why it is important to solve it. This should be documented.*

### Business Process and Data Identification Exercise

To start this exercise, first, explain the business process that you're dealing with to all participants, or if they are already familiar with it, have a brief discussion to ensure everyone is on the same page. It might be useful to visualize the process on a whiteboard or shared digital workspace, detailing the steps involved. 

**Step 1: [Business Process Mapping](https://www.techtarget.com/searchcio/definition/process-mapping)**
Start by asking the participants to map out the business process, either individually or in small groups. This should include all stages of the process, from start to finish, including inputs, outputs, and the tasks in between.

**Step 2: Identifying Potential Data Points**
Once the process is clearly mapped out, have a group discussion to identify potential data points that could be extracted from each step of the process. These could be numerical data, categorical data, or even text data. 

For example, in a customer service process, potential data points could be the number of customer complaints received, types of complaints, response times, resolution rates, customer satisfaction scores, etc. 

**Step 3: Discussion on Data Quality**
After identifying potential data points, discuss any potential issues that might be encountered with this data. Are there likely to be missing values or outliers? If so, how might these be dealt with? Also, discuss the potential quality of the data - is it likely to be accurate and reliable? Are there any placeholder data that replaces missing values, why are those chosen?

**Step 4: Visualizing Potential Data**
*Optional*
Ask the participants to visualize what the data might look like once collected. They can use hypothetical values to sketch diagrams or charts showing potential trends or patterns.

This exercise will help everyone understand the business process in depth and identify the potential data that could be extracted from it. It will also give everyone a better understanding of how the data they will be working with is generated and what issues they might encounter when handling it.

#### Goal
*The business process is explicitly stated in a map and actual and potential data sources identified.* 

### Goal Establishment Exercise

1. **Brainstorming Goals:** Begin with an open discussion where everyone suggests what they think the goals of the project should be. Write these suggestions on a whiteboard or shared digital workspace.

2. **Defining SMART Goals:** After you have a list of potential goals, guide the team in refining these into [SMART](https://www.atlassian.com/blog/productivity/how-to-write-smart-goals) goals:
	1. Specific
	2. Measurable,
	3. Achievable
	4. Relevant
	5. Time-Bound.
	For example, "improving the model's accuracy" could be refined to "improving the model's accuracy to 95% on the validation set within the next two months."

4. **Prioritizing Goals:** Once you have a list of SMART goals, discuss them as a group and decide which ones are the most important. This could be based on factors like business impact, feasibility, and resources available.

5. **Assigning Ownership:** Assign each goal to a team or individual who will be responsible for driving it forward. Make sure everyone is clear on what they need to do to achieve their assigned goals.

This exercise will help establish a clear, shared vision of what the team is trying to accomplish. 

#### Goal 
*Goals for the machine learning model is established according to SMART principles.* 

### "How Might We" Session

After the goals are established, you can move on to a ["How Might We" (HMW)](https://www.youtube.com/watch?v=sRGk5oKXgCk) session. This is a method used in design thinking to turn problems into opportunities for solutions. 

1. **Identify Problems:** Based on the goals you've established, identify potential problems or challenges. For example, if one of your goals is to improve model accuracy to 95%, a problem might be that the current model is overfitting to the training data.

2. **Formulate HMW Questions:** Turn these problems into "How Might We" questions. In the above example, this could be "How might we reduce the overfitting of our current model?"

3. **Brainstorm Solutions:** Once you have a list of HMW questions, have the team brainstorm potential solutions to each one. Encourage wild and diverse ideas - this is a chance to think outside the box. 

4. **Evaluate & Prototype:** Evaluate the solutions and select a few promising ones to move forward with. Depending on the complexity of the solutions, you may want to prototype or storyboard them to get a clearer sense of how they might be implemented.

5. **Assign Ownership:** Just as with the goals, assign ownership of each HMW question and its potential solutions to a team or individual.

The HMW session is a great way to foster creativity and get the team actively involved in problem-solving. By the end of it, everyone should have a clear understanding of the project's goals and some initial ideas on how to achieve them.

#### Goal
*"How might we" questions and solutions documented and ownership assigned to each one.* 

# Day 2 Solution
Day 2 of the workshop will delve deeper into the analysis of the dataset and the evaluation of machine learning models. As preparation, the data scientists should conduct a preliminary exploration of the data to better understand the characteristics and potential challenges it presents. Here's what should be looked at:

**For numerical data:**
- Identify the range of values that each numerical feature can take. This will help understand the scale of these features and may hint at potential outliers.
- Examine the distribution of each feature's values. This could indicate whether any transformation (like normalization or standardization) might be required.
- Count the number of missing (NaN) values for each feature. This is crucial as missing data can affect the performance of many machine learning algorithms.
- Compute correlations between numerical features. This could help identify redundant features or relationships that could be exploited for feature engineering.

**For text data:**
- Count the number of unique entries for each text feature. This can help identify whether the text feature is categorical or free text.
- Similar to numerical data, identify the number of missing (NaN) values in text features.
- If the text feature is categorical, identify the most common categories. This can give a sense of the feature's skewness and whether any categories are particularly dominant.
- If it is free text, consider computing some basic statistics about the text length, such as mean length, maximum length, and minimum length.
- Compute correlations between text features and numerical target variables or labels. This can be done by transforming text features into numerical ones through techniques like one-hot encoding, ordinal encoding, or TF-IDF and then computing correlations.

This preliminary work will help the data scientists get a preliminary feel for the data they're working with. It will also enable them to spot potential issues that need to be addressed, such as missing values and outliers, and to identify opportunities for feature engineering. This is used in the exercise below.

### In-depth Data Analysis and Feature Understanding Exercise

This exercise will allow the participants to interact deeply with the actual dataset and understand the nuances of each feature.

**Step 1: Feature Introduction**
Present the dataset to the participants with all its features. For each feature, discuss what it represents, its data type (numerical, categorical, ordinal, nominal, etc.), and its relevance to the business problem.

**Step 2: Feature Understanding Exercise**
Now, for each feature, ask participants to analyze it closely. They should answer questions like:

1. What is the range of values this feature takes?
2. Are there any obvious outliers in the data? If yes, what could be the potential reasons and how should they be handled?
3. Are there any missing values? If yes, what could be the potential reasons and how should they be handled?
4. How is this feature likely to influence the outcome variable?

This can be done in the form of a group discussion, or you could divide the participants into teams and assign each team a subset of the features.

**Step 3: Feature Relationships**
Ask participants to examine relationships between features. They should consider:

1. Are there any obvious correlations or associations between different features?
2. Do any features interact with each other in a way that might impact the model?
3. How does each feature correlate with the target variable?

Participants can use visualization techniques (scatter plots, correlation matrices, etc.) to aid in understanding these relationships.

**Step 4: Feature Engineering Ideas**
Based on their understanding of the features, ask the participants to brainstorm potential feature engineering opportunities. Could any features be combined, transformed, or expanded to create new, more informative features?

This exercise encourages an in-depth understanding of the data, helps participants appreciate the importance of feature selection and engineering, and highlights the need to handle missing values and outliers carefully.

#### Goal
*The goal of this exercise should be to have, for each feature, documented the following.* 
- *What is the variable describing?*
- *What type of variable is it? (Categorical, Numerical, Text, etc.)*
- *What are its relationships with other variables?* 
- *How does the variable behave? Any extreme values?*
- *How should missing values be handled? Remove, most common, etc.* 
- *How can new features be created using feature engineering? 

### Model Evaluation Exercise

This exercise will allow participants to explore different methods to evaluate the performance of machine learning models. Depending on the nature of the problem (classification, regression, etc.), various metrics and techniques could be discussed.

**Step 1: Introduction to Evaluation Metrics**

Start with a presentation on various evaluation metrics that are used for different types of machine learning problems. 

For classification problems, introduce metrics such as:
	- [Accuracy](https://developers.google.com/machine-learning/glossary#accuracy)
- [Precision](https://developers.google.com/machine-learning/glossary#precision)
- [Recall](https://developers.google.com/machine-learning/glossary#recall)
- [Area Under the ROC Curve (AUC-ROC)](https://developers.google.com/machine-learning/glossary#pr-auc-area-under-the-pr-curve)
- [Log Loss](https://developers.google.com/machine-learning/glossary#log-loss)
- [Confusion Matrix](https://developers.google.com/machine-learning/glossary#confusion-matrix)

For regression problems, discuss metrics like:

- [Mean Absolute Error (MAE)](https://developers.google.com/machine-learning/glossary#mean-absolute-error-mae)
- [Mean Squared Error (MSE)](https://developers.google.com/machine-learning/glossary#mean-squared-error-mse)
- [Root Mean Squared Error (RMSE)](https://developers.google.com/machine-learning/glossary#root-mean-squared-error-rmse)
- [R-squared](https://developers.google.com/machine-learning/glossary#r-squared)

**Step 2: Understanding Evaluation Metrics**
*Optional*
After introducing these metrics, assign each participant (or a group of participants) a specific metric. Ask them to prepare a short presentation explaining how this metric is calculated when it should be used, and its pros and cons. This exercise will ensure that everyone gets a detailed understanding of at least one metric and a broad understanding of all of them.

**Step 3: Discussion on Model Evaluation Techniques**
*Optional*
Next, discuss different model evaluation techniques like train-test split, K-Fold Cross-Validation, Stratified K-Fold Cross-Validation, and Leave-One-Out Cross-Validation. Talk about the scenarios in which each technique is most useful, and discuss the pros and cons.

**Step 4: Choosing the Right Metric**

Finally, have a group discussion about what metric(s) would be most appropriate for the machine learning problem at hand. The choice of metric can depend on many factors, including the business problem, the data, the model, and the costs of different types of errors. This discussion should give participants a sense of how to make this important decision.

This exercise will provide participants with a solid understanding of how to evaluate machine learning models, which is crucial for ensuring that a model will perform well in practice.

The choice of metric should be grounded in the business problem, reflect the nature of the problem, and explain why it was chosen based on the business success criteria. 

#### Goal
*Evaluation metrics of the model chosen and the reason why documented.* 




