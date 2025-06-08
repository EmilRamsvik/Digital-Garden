---
Pages: 386
Date Finished: Sep 17, 2023
Author: Chip Huen
tags:
  - books
  - machine-learning
  - data-science
  - data-engineering
  - "#system-architecture"
  - mlops
  - non-fiction
finished: true
created: 2024-01-06T15:04
updated: 2024-10-13T13:10
---
# Designing Machine Learning Systems



# 🚀 The Book in 3 Sentences

This book covers the fundamentals of designing machine learning systems. It goes through the entire lifecycle of a machine learning system and then discusses the ecosystem and the challenges and cases that need to be considered. 
# 🎨 Impressions
It is a good introduction to the entire machine learning lifecycle, made as an extension of notes from a lecture course from Stanford, it has the credibility of an academic book. It was interesting and quite easy to read. 

## How I Discovered It
I discovered it as I wanted to become more proficient in reading about data science and machine learning and understanding the whole system. 

## Who Should Read It?
Data scientists in small companies, preferably before you get too much experience. 
# ✍️ My Top  Quotes

- *This book is for anyone who wants to leverage ML to solve real-world problems. ML in this book refers to both deep learning and classical algorithms, with a leaning toward ML systems at scale, such as those seen at medium to large enterprises and fast-growing startups.* 
 
- *In November 2016, Google announced that it had incorporated its multilingual neural machine translation system into Google Translate, marking one of the first success stories of deep artificial neural networks in production at scale. According to Google, with this update, the quality of translation improved more in a single leap than they had seen in the previous 10 years combined.* 
 
- *Machine learning is an approach to learning complex patterns from existing data and using these patterns to make predictions on unseen data.* 
 
- *In English, “predict” means “estimate a value in the future.”* 
 
- *ML is especially suitable when the cost of a wrong prediction is low. For example, one of the biggest use cases of ML today is in recommender systems because with recommender systems, a bad recommendation is usually forgiving—the user just won’t click on the recommendation.* 
 
- *Deciding how much to charge for your product or service is probably one of the hardest business decisions; why not let ML do it for you? Price optimization is the process of estimating a price at a certain time period to maximize a defined objective function, such as the company’s margin, revenue, or growth rate. ML-based pricing optimization is most suitable for cases with a large number of transactions where demand fluctuates and consumers are willing to pay a dynamic price—* 
 
- *Acquiring a new user is expensive. As of 2019, the average cost for an app to acquire a user who’ll make an in-app purchase is $86.61.9 The acquisition cost for Lyft is estimated at $158/rider. This cost is so much higher for enterprise customers. Customer acquisition cost is hailed by investors as a startup killer.* 
 
- *Typically, the percentiles you’ll want to look at are p90, p95, and p99. The 90th percentile (p90) for the 10 requests above is 3,000 ms, which is an outlier.* 
 
- *For example, on the Amazon website, the customers with the slowest requests are often those who have the most data on their accounts because they have made many purchases—that is, they’re the most valuable customers.* 
 
- *In 2019, “Berkeley researchers found that both face-to-face and online lenders rejected a total of 1.3 million creditworthy Black and Latino applicants between 2008 and 2015.” When the researchers “used the income and credit scores of the rejected applications but deleted the race identifiers, the mortgage application was accepted.”* 
- *That’s an excellent idea. In fact, ML production would be a much better place if ML experts were better software engineers.* 
 
- *Bidirectional Encoder Representations from Transformers (BERT) paper first came out, people were talking about how BERT was too big, too complex, and too slow to be practical.* 
 
- *While most companies want to convince you otherwise, the sole purpose of businesses, according to the Nobel-winning economist Milton Friedman, is to maximize profits for shareholders.* 
 
- *The ultimate goal of any project within a business is, therefore, to increase profits, either directly or indirectly: directly such as increasing sales (conversion rates) and cutting costs;* 
 
- *The specified requirements for an ML system vary from use case to use case. However, most systems should have these four characteristics: reliability, scalability, maintainability, and adaptability.* 
 
- *The system should continue to perform the correct function at the desired level of performance even in the face of adversity (hardware or software faults, and even human error).* 
 
- *Whichever way your system grows, there should be reasonable ways of dealing with that growth. When talking about scalability most people think of resource scaling, which consists of up-scaling (expanding the resources to handle growth) and down-scaling (reducing the resources when not needed).* 
 
- *To adapt to shifting data distributions and business requirements, the system should have some capacity for both discovering aspects for performance improvement and allowing updates without service interruption.* 
 
- *Step 1. Project scoping A project starts with scoping the project, laying out goals, objectives, and constraints. Stakeholders should be identified and involved. Resources should be estimated and allocated. We already discussed different stakeholders and some of the foci for ML projects in production in Chapter 1. We also already discussed how to scope an ML project in the context of a business earlier in this chapter. We’ll discuss how to organize teams to ensure the success of an ML project in Chapter 11. 

- *Step 2. Data engineering A vast majority of ML models today learn from data, so developing ML models starts with engineering data. In Chapter 3, we’ll discuss the fundamentals of data engineering, which covers handling data from different sources and formats. With access to raw data, we’ll want to curate training data out of it by sampling and generating labels, which is discussed in Chapter 4.*

- *Step 3. ML model development With the initial set of training data, we’ll need to extract features and develop initial models leveraging these features. This is the stage that requires the most ML knowledge and is most often covered in ML courses. In Chapter 5, we’ll discuss feature engineering. In Chapter 6, we’ll discuss model selection, training, and evaluation*.

- *Step 4. Deployment After a model is developed, it needs to be made accessible to users. Developing an ML system is like writing—you will never reach the point when your system is done. But you do reach the point when you have to put your system out there. We’ll discuss different ways to deploy an ML model in Chapter 7.*
	 
- *Step 5. Monitoring and continual learning Once in production, models need to be monitored for performance decay and maintained to be adaptive to changing environments and changing requirements. This step will be discussed in Chapters 8 and 9.* 
 
- *Step 6. Business analysis Model performance needs to be evaluated against business goals and analyzed to generate business insights. These insights can then be used to eliminate unproductive projects or scope out new projects. This step is closely related to the first step.* 
 
- *An ML problem is defined by inputs, outputs, and the objective function that guides the learning process—* 
 
- *Classification models classify inputs into different categories. For example, you want to classify each email to be either spam or not spam. Regression models output a continuous value. An example is a house prediction model that outputs the price of a given house.* 
 
- *In my experience, ML models typically need at least 100 examples for each class to learn to classify that class.* 
 
- *Out of all task types, multilabel classification is usually the one that I’ve seen companies having the most problems with. Multilabel means that the number of classes an example can have varies from example to example.* 
 
- *Without data, there’s no data science.* 
 
- *Note that objective functions are mathematical functions, which are different from the business and ML objectives we discussed earlier in this chapter.* 
 
- *If you want to learn more about data engineering from a systems perspective, I recommend Martin Kleppmann’s excellent book Designing Data-Intensive Applications 
 
- *If it’s even remotely possible for users to input the wrong data, they are going to do it.* 
 
- *First-party data is the data that your company already collects about your users or customers. Second-party data is the data collected by another company on their own customers that they make available to you, though you’ll probably have to pay for it. Third-party data companies collect data on the public who aren’t their direct customers.* 
 
- *Overall, row-major formats are better when you have to do a lot of writes, whereas column-major ones are better when you have to do a lot of column-based reads.* 
 
- *AWS recommends using the Parquet format because “the Parquet format is up to 2x faster to unload and consumes up to 6x less storage in Amazon S3, compared to text formats.”* 
 
- *The most important thing to note about SQL is that it’s a declarative language, as opposed to Python, which is an imperative language. In the imperative paradigm, you specify the steps needed for an action and the computer executes these steps to return the outputs. In the declarative paradigm, you specify the outputs you want, and the computer figures out the steps needed to get you the queried outputs.* 
 
- *In the early days of the relational data model, data was mostly structured. When data is extracted from different sources, it’s first transformed into the desired format before being loaded into the target destination such as a database or a data warehouse. This process is called ETL, which stands for extract, transform, and load.* 
 
- *The two most common types of real-time transports are pubsub, which is short for publish-subscribe, and message queue. In the pubsub model, any service can publish to different topics in a real-time transport, and any service that subscribes to a topic can read all the events in that topic. The services that produce data don’t care about what services consume their data.* 
 
- *Once your data arrives in data storage engines like databases, data lakes, or data warehouses, it becomes historical data.* 
 
- *Structured data means that the code that writes the data has to assume the structure. Unstructured data means that the code that reads the data has to assume the structure.* 
 
- *“Interesting” in production usually means catastrophic, such as a crash or when your cloud bill hits an astronomical amount.* 
 
- *As of November 2021, AWS S3 Standard, the storage option that allows you to access your data with the latency of milliseconds, costs about five times more per GB than S3 Glacier, the storage option that allows you to retrieve your data with a latency from between 1 minute to 12 hours.* 
 
- *An ML engineer once mentioned to me that his team only used users’ historical product browsing and purchases to make recommendations on what they might like to see next. I responded: “So you don’t use personal data at all?” He looked at me, confused. “If you meant demographic data like users’ age, location, then no, we don’t. But I’d say that a person’s browsing and purchasing activities are extremely personal.”* 
 
- *Convenience sampling Samples of data are selected based on their availability. This sampling method is popular because, well, it’s convenient.* 
 
- *Snowball sampling Future samples are selected based on existing samples. For example, to scrape legitimate Twitter accounts without having access to Twitter databases, you start with a small number of accounts, then you scrape all the accounts they follow, and so on. Judgment sampling Experts decide what samples to include. Quota sampling You select samples based on quotas for certain slices of data without any randomization. For example, when doing a survey, you might want 100 responses from each of the age groups: under 30 years old, between 30 and 60 years old, and above 60 years old, regardless of the actual age distribution.* 
 
- *The higher the level of domain expertise required, the higher the potential for annotating disagreement.* 
 
- *It’s good practice to keep track of the origin of each of your data samples as well as its labels, a technique known as data lineage. Data lineage helps you both flag potential biases in your data and debug your models.* 
 
- *The canonical example of tasks with natural labels is recommender systems. The goal of a recommender system is to recommend to users items relevant to them.* 
 
- *If hand labeling is so problematic, what if we don’t use hand labels altogether? One approach that has gained popularity is weak supervision. One of the most popular open source tools for weak supervision is Snorkel, developed at the Stanford AI Lab.* 
 
- *Libraries like Snorkel are built around the concept of a labeling function (LF): a function that encodes heuristics. The preceding heuristics can be expressed by the following function: def labeling_function(note): if "pneumonia" in note: return "EMERGENT" LFs can encode many different types of heuristics. Here are some of them: Keyword heuristic Such as the preceding example Regular expressions Such as if the note matches or fails to match a certain regular expression Database lookup Such as if the note contains the disease listed in the dangerous disease list The outputs of other models Such as if an existing system classifies this as EMERGENT* 
 
- *Because LFs encode heuristics, and heuristics are noisy, labels produced by LFs are noisy. Multiple LFs might apply to the same data examples, and they might give conflicting labels.* 
 
- *A semi-supervision method that has gained popularity in recent years is the perturbation-based method. It’s based on the assumption that small perturbations to a sample shouldn’t change its label. So you apply small perturbations to your training instances to obtain new training instances. The perturbations might be applied directly to the samples (e.g., adding white noise to images) or to their representations (e.g., adding small random values to embeddings of words).* 
 
- *Active learning is a method for improving the efficiency of data labels. The hope here is that ML models can achieve greater accuracy with fewer training labels if they can choose which data samples to learn from.* 
 
- *According to Talos Intelligence, as of May 2021, nearly 85% of all emails are spam.* 
 
- *Ding et al. showed that very deep neural networks—with “very deep” meaning over 10 layers back in 2017—performed much better on imbalanced data than shallower neural networks.* 
 
- *One such technique is two-phase learning. You first train your model on the resampled data. This resampled data can be achieved by randomly undersampling large classes until each class has only N instances. You then fine-tune your model on the original data.* 
 
- *Su et al. showed that 67.97% of the natural images in the Kaggle CIFAR-10 test dataset and 16.04% of the ImageNet test images can be misclassified by changing just one pixel* 
 
- *Using deceptive data to trick a neural network into making wrong predictions is called adversarial attacks. Adding noise to samples is a common technique to create adversarial samples. The success of adversarial attacks is especially exaggerated as the resolution of images increases. Adding noisy samples to training data can help models recognize the weak spots in their learned decision boundary and improve their performance.* 
 
- *The promise of deep learning is that we won’t have to handcraft features. For this reason, deep learning is sometimes called feature learning.* 
 
- *Not all types of missing values are equal.* 
 
- *In my experience, how well a person handles missing values for a given dataset during interviews strongly correlates with how well they will do in their day-to-day jobs.* 
 
- *Missing not at random (MNAR) This is when the reason a value is missing is because of the true value itself. In this example, we might notice that some respondents didn’t disclose their income. Upon investigation it may turn out that the income of respondents who failed to report tends to be higher than that of those who did disclose.* 
 
- *Missing at random (MAR) This is when the reason a value is missing is not due to the value itself, but due to another observed variable. In this example, we might notice that age values are often missing for respondents of the gender “A,” which might be because the people of gender A in this survey don’t like disclosing their age.* 
 
- *Missing completely at random (MCAR) This is when there’s no pattern in when the value is missing.* 
 
- *When I ask candidates about how to handle missing values during interviews, many tend to prefer deletion, not because it’s a better method, but because it’s easier to do.* 
 
- *Another way to delete is row deletion: if a sample has missing value(s), just remove that sample. This method can work when the missing values are completely at random (MCAR) and the number of examples with missing values is small, such as less than 0.1%. You don’t want to do row deletion if that means 10% of your data samples are removed.* 
 
- *Before inputting features into models, it’s important to scale them to be similar ranges. This process is called feature scaling. This is one of the simplest things you can do that often results in a performance boost for your model. Neglecting to do so can cause your model to make gibberish predictions, especially with classical algorithms like gradient-boosted trees and logistic regression.* 
 
- *In practice, ML models tend to struggle with features that follow a skewed distribution. To help mitigate the skewness, a technique commonly used is log transformation: apply the log function to your feature.* 
 
- *One solution to this problem is the hashing trick, popularized by the package Vowpal Wabbit developed at Microsoft. The gist of this trick is that you use a hash function to generate a hashed value of each category. The hashed value will become the index of that category. Because you can specify the hash space, you can fix the number of encoded values for a feature in advance, without having to know how many categories there will be. For example, if you choose a hash space of 18 bits, which corresponds to 218 = 262,144 possible hashed values, all the categories, even the ones that your model has never seen before, will be encoded by an index between 0 and 262,143.* 
 
- *Because it’s a trick, it’s often considered hacky by academics and excluded from ML curricula. But its wide adoption in the industry is a testimonial to how effective the trick is. It’s essential to Vowpal Wabbit and it’s part of the frameworks of scikit-learn, TensorFlow, and gensim.* 
 
- *Feature crossing is the technique to combine two or more features to generate new features. This technique is useful to model the nonlinear relationships between features.* 
 
- *Both of these are examples of data leakage. Data leakage refers to the phenomenon when a form of the label “leaks” into the set of features used for making predictions, and this same information is not available during inference.* 
 
- *Data leakage refers to the phenomenon when a form of the label “leaks” into the set of features used for making predictions, and this same information is not available during inference.* 
 
- *When measuring feature importance for a click-through rate prediction model, the ads team at Facebook found out that the top 10 features are responsible for about half of the model’s total feature importance, whereas the last 300 features contribute less than 1% feature importance, as shown* 
 
- *Zen of Python states that “simple is better than complex,” and this principle is applicable to ML as well.* 
 
- *Simplicity serves three purposes. First, simpler models are easier to deploy, and deploying your model early allows you to validate that your prediction pipeline is consistent with your training pipeline. Second, starting with something simple and adding more complex components step-by-step makes it easier to understand your model and debug it. Third, the simplest model serves as a baseline to which you can compare your more complex models.* 
 
- *The more components a model has, the more things that can go wrong, and the harder it is to figure out which goes wrong.* 
 
- *Overfit a single batch After you have a simple implementation of your model, try to overfit a small amount of training data and run evaluation on the same data to make sure that it gets to the smallest possible loss. If it’s for image recognition, overfit on 10 images and see if you can get the accuracy to be 100%, or if it’s for machine translation, overfit on 100 sentence pairs and see if you can get to a BLEU score of near 100. If it can’t overfit a small amount of data, there might be something wrong with your implementation.* 
 
- *Evaluation metrics, by themselves, mean little. When evaluating your model, it’s essential to know the baseline you’re evaluating it against. The exact baselines should vary from one use case to another, but here are the five baselines that might be useful across use cases:* 
 
- *Random baseline If our model just predicts at random, what’s the expected performance? The predictions are generated at random following a specific distribution, which can be the uniform distribution or the task’s label distribution.* 
 
- *Simple heuristic Forget ML. If you just make predictions based on simple heuristics, what performance would you expect? For example, if you want to build a ranking system to rank items on a user’s newsfeed with the goal of getting that user to spend more time on the newsfeed, how much time would a user spend if you just rank all the items in reverse chronological order, showing the latest one first?* 
 
- *Zero rule baseline The zero rule baseline is a special case of the simple heuristic baseline when your baseline model always predicts the most common class.* 
 
- *Andrew Ng has a great lecture where he explains that if a learning algorithm suffers from high bias, getting more training data by itself won’t help much. Whereas if a learning algorithm suffers from high variance, getting more training data is likely to help.* 
 
- *The process of generating predictions is called inference. We’ll continue with where the* 
 
- *For example, the compute primitive of CPUs used to be a number (scalar) and the compute primitive of GPUs used to be a one-dimensional vector, whereas the compute primitive of TPUs is a two-dimensional vector (tensor).* 
 
- *For readers interested in learning how to make ML systems reliable from the software engineering perspective, I highly recommend the book Reliable Machine Learning,* 
 
- *In the section “Natural Labels”, we discussed a feedback loop as the time it takes from when a prediction is shown until the time feedback on the prediction is provided.* 
 
- *A degenerate feedback loop can happen when the predictions themselves influence the feedback, which, in turn, influences the next iteration of the model. More formally, a degenerate feedback loop is created when a system’s outputs are used to generate the system’s future inputs, which, in turn, influence the system’s future outputs.* 
 
- *To make this concrete, imagine you build a system to recommend to users songs that they might like. The songs that are ranked high by the system are shown first to users. Because they are shown first, users click on them more, which makes the system more confident that these recommendations are good.* 
 
- *This type of scenario is incredibly common in production, and it’s heavily researched. It goes by many different names, including “exposure bias,” “popularity bias,” “filter bubbles,” and sometimes “echo chambers.”* 
 
- *While data distribution shift is often used interchangeably with concept drift and covariate shift and occasionally label shift, these are three distinct subtypes of data shift.* 
 
- *Covariate shift When P(X) changes but P(Y|X) remains the same. This refers to the first decomposition of the joint distribution. Label shift When P(Y) changes but P(X|Y) remains the same. This refers to the second decomposition of the joint distribution. Concept drift When P(Y|X) changes but P(X) remains the same. This refers to the first decomposition of the joint distribution.* 
 
- *The first step of feature monitoring is feature validation: ensuring that your features follow an expected schema. The expected schemas are usually generated from training data or from common sense. If these expectations are violated in production, there might be a shift in the underlying distribution.* 
 
- *Excessive metrics on a dashboard can also be counterproductive, a phenomenon known as dashboard rot. It’s important to pick the right metrics or abstract out lower-level metrics to compute higher-level signals that make better sense for your specific tasks.* 
 
- *To understand failures of ML systems, we differentiated between two types of failures: software systems failures (failures that also happen to non-ML systems) and ML-specific failures. Even though the majority of ML failures today are non-ML-specific, as tooling and infrastructure around MLOps matures, this might change.* 
 
- *First, if your model is a neural network, learning with every incoming sample makes it susceptible to catastrophic forgetting. Catastrophic forgetting refers to the tendency of a neural network to completely and abruptly forget previously learned information upon learning new information.* 
 
- *The updated model shouldn’t be deployed until it’s been evaluated. This means that you shouldn’t make changes to the existing model directly. Instead, you create a replica of the existing model and update this replica on new data, and only replace the existing model with the updated replica if the updated replica proves to be better. The existing model is called the champion model, and the updated replica, the challenger.* 
 
- *Most companies do stateless retraining—the model is trained from scratch each time. Continual learning means also allowing stateful training—the model continues training on new data.* 
 
- *Most companies do stateless retraining—the model is trained from scratch each time. Continual learning means also allowing stateful training—the model continues training on new data.2 Stateful training is also known as fine-tuning or incremental learning.* 
 
- *One beautiful property that is often overlooked is that with stateful training, it might be possible to avoid storing data altogether.* 
 
- *Model iteration A new feature is added to an existing model architecture or the model architecture is changed. Data iteration The model architecture and features remain the same, but you refresh this model with new data.* 
 
- *The first use case of continual learning is to combat data distribution shifts, especially when the shifts happen suddenly. Imagine you’re building a model to determine the prices for a ride-sharing service like Lyft.6 Historically, the ride demand on a Thursday evening in this particular neighborhood is slow, so the model predicts low ride prices, which makes it less appealing for drivers to get on the road. However, on this Thursday evening, there’s a big event in the neighborhood, and suddenly the ride demand surges.* 
 
- *TikTok, for example, has successfully applied continual learning to adapt their recommender system to each user within minutes. You download the app and, after a few videos, TikTok’s algorithms are able to predict with high accuracy what you want to watch next. I don’t think everyone should try to build something as addictive as TikTok, but it’s proof that continual learning can unlock powerful predictive potential.* 
 
- *The best candidates for continual learning are tasks where you can get natural labels with short feedback loops. Examples of these tasks are dynamic pricing (based on estimated demand and availability),* 
 
- *It’s much easier to adapt models like neural networks than matrix-based and tree-based models to the continual learning paradigm.* 
 
- *The second factor is the availability and accessibility of your data. Do you need to gather data yourself into your data warehouse? Will you have to join data from multiple organizations? Do you need to extract a lot of features from scratch? Will you also need to label your data? The more questions you answer yes to, the more time it will take to set up this script. Stefan Krawczyk, ML/data platform manager at Stitch Fix, commented that he suspects most people’s time might be spent here.* 
 
- *Contextual bandits are also called “one-shot” reinforcement learning problems. In reinforcement learning, you might need to take a series of actions before seeing the rewards. In contextual bandits, you can get bandit feedback right away after an action—* 
 
- *You have time to set up only one piece of infrastructure well, make it the development environment for data scientists.” Because the dev environment is where engineers work, improvements in the dev environment translate directly into improvements in engineering productivity.* 
 
- *“Beyond Interactive: Notebook Innovation at Netflix,” Netflix included a list of infrastructure tools that can be used to make notebooks even more powerful. The list includes: Papermill For spawning multiple notebooks with different parameter sets—such as when you want to run different experiments with different sets of parameters and execute them concurrently. It can also help summarize metrics from a collection of notebooks. Commuter A notebook hub for viewing, finding, and sharing notebooks within an organization.* 
 
- *According to Frederick P. Brooks, “What one programmer can do in one month, two programmers can do in two months.”* 
 
