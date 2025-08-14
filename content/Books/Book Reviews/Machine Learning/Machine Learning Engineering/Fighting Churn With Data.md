---
created: 2023-10-29T15:52
updated: 2025-08-13T14:54
Pages: 352
Author: Carl Gold
finished: true
Date Finished: 2024-09-19
tags:
  - books
  - digital-garden
  - book-review
  - data/churn
  - machine-learning
  - statistics
---
# Fighting Churn With Data


# 🚀 The Book in 3 Sentences
This book is about the concept of churn and how to apply data to solve the problem of churn. It goes through the different aspects of classifying customers and making cohorts of customers. It also delves into the problem of understanding churn and the likelihood of churn.  

# 🎨 Impressions

There are no easy ways of reducing churn. It will take a lot of effort. 
I feel like the only way to be good at churn reduction is either 
1. Have a great product
2. Use [dark-patterns](https://en.wikipedia.org/wiki/Dark_pattern)

This is a dilema. I think one is extremely difficult (Making awesome products takes a lot of effort, skill and luck.) and one is morally wrong. 

# ✍️ My Top  Quotes

- Customer churn (cancelations) and engagement are life-and-death issues for every company that offers an online product or service.
 
- Such services are often sold by subscription, but your organization does not need to sell subscriptions in order to take advantage of this book. All you need is a product with repeat customers or users and a desire to keep them coming back.
 
- Churn—When a customer quits using a service or cancels their subscription.
 
- The word churn originated with the term churn rate, which refers to the proportion of customers departing in a given period, as we will discuss in more detail later.
 
- Customer retention—Keeping customers using a service and renewing their subscriptions (if there are subscriptions). Customer retention is the opposite of churn.
 
- Saving churns, increasing engagement, and upsells are all important goals for services with repeated customer interactions.
 
- Churn measurement—Uses subscription data to identify churns and create churn metrics. The churn rate is an example of a churn metric. The subscription database also allows identification of customers who churned and who renewed and exactly when they did; this data is needed for further analysis.
 
- Behavioral measurement—Uses the event data warehouse to create behavioral metrics that summarize the events pertaining to each subscriber. Creating behavioral metrics is a crucial step that allows the events in the data warehouse to be interpreted.
 
- Churn analysis—Uses behavioral metrics for identified churns and renewals. The churn analysis identifies which subscriber behaviors are predictive of renewal and which are predictive of churn and can create a churn risk prediction for every subscriber.
 
- There are some general principles for churn-reducing interventions, but these require customization for each product’s circumstances.
 
- The bad news is that people are (mostly) rational and self-interested, and your customers already know your product.
 
- To reduce churn, you need to increase value, but doing so is harder than getting people to sign up in the first place. Because your customers already know what the service is like, promises made by marketing or sales representatives won’t get much traction.
 
- If a silver bullet means a low cost and reliable method, there are no silver bullets to reduce churn!
 
- Price reduction is a “diamond bullet” against churn: it always works, but you can’t afford it.
 
- Most services consider down sells just another form of churn.
 
- Churn-reduction efforts are at risk of miscommunication and lack of coordination between the multiple teams involved.
 
- Also, in a typical situation, the data person can’t do anything to reduce churn on their own. Reducing churn depends on actions taken by specialists in different parts of the business, not by a person who is wrangling the data. These coworkers are diverse, and I will refer to them as the businesspeople for lack of a better term. I’m not implying that the data person is not part of the business; but data people usually have no direct responsibility for concrete business outcomes (like revenue), whereas the people in those other roles usually do.
 
- The data person’s goal is to make businesspeople more effective at churn-reducing interventions.
 
- The best way to make data into a weapon in the fight against churn is to use the data to produce effective customer measurements and get those measurements into the hands of the business’s churn fighters.
 
- Customer metric—Any measurement you make on all customers individually.
 
- For a customer metric to be great for fighting churn, it should have the following characteristics: (1) easily understood by the business; (2) clearly associated with churn and retention, so it is obvious what a healthy customer looks like; (3) segments customers in a way that’s useful for targeted interventions that increase engagement; and (4) useful to multiple functions of the business (product, marketing, support, etc.).
 
- The main deliverable to the business from the data analysis project is a set of customer metrics.
 
- To succeed in this environment, the process of using the data must be parsimonious and agile. Parsimony means using the minimum amount of data and the fewest analytic steps required to get the job done. Agility means responding to change quickly and efficiently.
 
- Your goal is to deliver actionable knowledge to the businesspeople. Listen to them, and try to answer their questions first. Do not exhaustively test every hypothesis or evaluation metric.
 
- User inactivity can be seen as churn for the free tier of a freemium service, and the same applies for apps or ad-supported products with no explicit subscription.
 
- Event—In the context of fighting churn, any user interaction or result that the data warehouse tracks. Events are time-stamped and pertain to a single account or user.
 
- Consequently, a cancellation event does not necessarily mean a churn will occur, because the customer still might re-sign before much time has passed.
 
- The bottom line is that the most important events are those that are closest to the customer achieving the goal or purpose of the service.
 
- Monthly recurring revenue (MRR) is a standard metric for calculating the amount a customer pays to use a subscription service: it is the recurring amount a customer pays each month to use a service, but not including any setup fees or irregular charges. (I will say more about MRR and how to calculate it in chapter 3.) The amount customers pay can also be analyzed with a metric cohort approach to look for a relationship with churn, which is shown for Versature
 
- Churn also applies to all products and services where customers or users repeatedly interact with the product over long periods of time, whether or not there is a formal subscription or any form of payment.
 
- – Useful in multiple functions of the business (i.e., product, marketing, support, and so on
 
- Retention rate can be easily calculated from the churn rate and vice versa. Which measurement you look at is a matter of preference.
 
- Net retention is known as net because it combines the effects of churns, upsells, and down sells.
 
- One important difference between churn based on subscriptions and churn based on activity is that activity-based churn requires a wait time for every customer to know whether they have churned. On a subscription, you know a churn is a churn the day after the subscription ends without a replacement; but for users on a system without a subscription, you never know if an event is the last event defining a churn until some time later.
 
- You can calculate the churn rate on nonsubscription products based on the recency of activity.
 
- To convert monthly churn rate to annual, use the fact that annual retention is monthly retention to the twelfth power, and retention is one minus churn.
 
- Measuring churn over a time window that is different from the typical subscription length (or typical customer active lifetime) can result in errors in the churn rate.
 
- Seasonality—Variations that occur at particular times of the year.
 
- Most human behaviors follow weekly cycles. Consequently, for metrics using a period of one month or less, it is best to measure using time windows that are multiples of seven days.
 
- For products where a typical customer lifetime is a few months or less, you may need to update metrics every day. But for products where a customer’s typical lifetime is several months or more, it is usually adequate to calculate metrics once a week.
 
- When you quality-check metric results, always use methods that make it obvious when results are not produced in addition to when bad results are produced. That means picking the dates to check independently from the data being checked.
 
- Your knowledge of the business is not good enough to judge whether the observed counts of events per month is reasonable, then you must get help from someone in your organization who does. Do this before you spend a lot of time calculating behavioral metrics and doing churn analysis.
 
- It’s easy to detect anomalies visually—arguably more effective than almost any algorithm. The other reason I recommend the manual approach is that it’s a good way to get to know your data.
 
- I refer to the length of time an account has been a customer as the account tenure rather than something along the lines of account age because age can be confused with the actual age of a person (or company).
 
- Account tenure is important in analyzing churn because it can relate to churn in significant ways: there can be particular points in the customer life cycle when churn is most (or least) likely, or churn can generally decrease (or increase) with longer account tenure.
 
- Account tenure measures the length of time for which there is a continuous subscription for a single account through one or more subscriptions that can overlap or that can include short gaps.
 
- Account tenure—The length of time a customer uses a product on their current, uninterrupted sequence of subscriptions or their current uninterrupted period of activity, possibly including a relatively short time gap between subscriptions or activity.
 
- The terminology of subscription business management software systems, each individual sale of some number of units for a specific time period is often referred to as a charge segment, a rate plan charge, or just a charge.
 
- Charge segment—A single recurring contract for a certain quantity of some units. Also referred to as a rate plan charge or just a charge.
 
- Billing period—Measures how often the customer is billed.
 
- It is easier to convince customers to stay before they churn than to sign up anew after they churn. The period before churn, therefore, is the focus of the analysis.
 
- Observe customers before they churn. Right! I call this observing customers with a lead time in making the observation, which means making the observations before the thing you are really interested in (the renewal or churn).
 
- The goal of the analysis is to identify and understand customers who are still making up their minds about churn, because that is when you have the best chance of influencing them.
 
- Active period—A span of time when a subscriber has at least one active subscription.
 
- If an account is not in an active period, the end of the last active period was a churn.
 
- Active period derived from events—A span of time when a user has had at least one event. There can be gaps between events up to the limit, without disrupting the active period. The definition of active periods from events is similar to the definition of active periods from multiple subscriptions
 
- Active week —A seven-day period when an account has at least one event.
 
- In the database table, though, the data is normalized so the values of all metrics are in a single column, and another column identifies which metrics are on a given row. In the database, the behavioral snapshot for a single account on a single date is spread over many rows. This is often referred to as wide data versus tall data. An analytic dataset is wide because it has many columns for all the different variables; a database table is tall because the data is all stacked up in one column. Converting data from tall to wide is often known as flattening the data, and that is what you must do to create the churn dataset. (It is also referred to as pivoting the data by those who have seen this done with the Pivot function in a spreadsheet.
 
- Segmentation—Selecting a set of customers according to a set of criteria.
 
- Churn analysis dataset is a table of behavioral snapshots of customers, including both customers who churned and customers who did not churn.
 
- Churn leading indicators are behaviors that suggest a high likelihood of churn at a time when the customer has not yet made up their mind. Churn leading indicators are usually the focus in fighting churn.
 
- Churn lagging indicators are behaviors that customers often engage in after they have already decided to churn. Churn lagging behaviors are usually not the underlying cause of churn.
 
- If you need to use statistics to understand your experiment, then you ought to have done a better experiment
 
- —Ernest Rutherford,
 
- ☐ A churn cohort analysis is a comparison of churn rates in different metric cohorts.
 
- The fact that churn rates fall with behavior and then level off is both useful and a problem. It’s useful because it’s easy to identify a healthy level for the metric: the level where churn rates stop declining. It’s a problem because after a certain point, that metric no longer helps you understand churn or segment customers based on churn risk.
 
- Skew A statistical measure of how symmetric or lopsided the distribution of the metric is. This  kind of lopsidedness occurs in the cohort analyses earlier in this chapter. If the skew is zero, the low and high values are symmetrically distributed around the mean. If the skew is positive, there are more observations of the metric that are higher than the mean than observations that are smaller than the mean. If the skew is negative, the opposite is true: more observations are smaller than the mean than those that are greater than the mean.
 
- Generally, skews below 3 or 4 are not significant, but metrics with skews of 5 or greater are significantly skewed.
 
- Customers who don’t have to pay may be on temporary free trials, or they may be in some special category of customers, like partners who have permanent free use of the product. You might have a similar situation when some customers pay a nominal amount that is much less than what usual customers pay. The problem with nonpaying (or low-paying) customers is that they tend not to churn because the product doesn’t cost them anything, but they don’t necessarily use the product much.
 
- If you have customers who pay and some who do not, you should remove the nonpaying customers before trying to do cohort analysis or the other analyses described in later chapters.
 
- A disengaging behavior is a customer behavior that leads to an increased risk of churn the more often it is performed.
 
- Disengaging behaviors usually show a weak relationship with increasing churn—typically less than the reduction in churn that comes from using the product even a small amount.
 
- You usually don’t intervene to reduce churn with the most disengaged customers.
 
- It is also common to use interventions (such as emails, calls, or training) to target the customers at some intermediate level of risk.
 
- You usually don’t intervene to reduce churn with the most disengaged customers.  The reasoning is that the highest-risk (lowest-use) customers can be so disengaged that intervention will have no effect and would be wasted. This consideration is most important when intervention has a cost associated with it or when you think that unwanted communication might disengage customers further.
 
- Metric cohort analysis usually shows that customers who use a product more churn less.
 
- Each cohort should have at least 200 to 300 observations, and preferably thousands. If you don’t have a lot of observations for your customers, use fewer cohorts.
 
- Metric scores are often more correlated than the underlying metrics on their natural scale, especially when the metrics are heavily skewed. This is another important reason for using metric scores in your analysis.
 
- Because each metric score measures the position of the customer with respect to the average, it is okay to average together scores of different types of metrics.
 
- For correlated metrics, it is better to analyze churn in cohorts using the average score in place of individual metrics.
 
- Hierarchical clustering is a greedy, agglomerative clustering algorithm: ☐ Agglomerative means the algorithm works by combining similar items in a bottomup manner. Groups are formed starting from just two similar elements, and more elements are added to form larger groups of similar items as the algorithm progresses. ☐ Greedy means that the algorithm works by picking the two elements that appear most similar, and after those two are grouped, the next most similar item is grouped at each stage. ☐ Hierarchical in this context refers to the fact that greedy agglomeration implies a structure or hierarchy between the items. There are the two most similar items, and after that, there is the next most similar, and so on.
 
- Your job is to shield your business colleagues from as much of the jargon as possible. So do not try to impress them with technical terms! Rather, try to simplify things to a common language.
 
- A ratio metric is a metric that is made by taking the ratio of the values of two other metrics. Each value of the new metric is a value of one metric divided by the value of another metric.
 
- Percentage of total metrics reveals the relative balance between a set of closely related, highly correlated activities.
 
- When two metrics are two parts of a whole, a percentage ratio is more interpretable than a simple ratio.
 
- Formula, which I call the fat-tails formula because it transforms a metric into a score when there are extreme outliers in both negative and positive directions. The condition of having both positive and negative extreme values is called fat tails because tails refer to the extremes of the distribution.
 
- Another test for fat-tailed metrics is to check for a high value on the statistic called kurtosis, a measurement designed to detect fat-tailed distributions. I am omitting it for simplicity because in churn cases, the fat-tailed metrics are also skewed.
 
- Do not confuse the time period over which you make an average behavioral measurement with the time period with which you choose to describe the behavior. The time periods don’t have to be the same. You can describe all your metrics on one time scale, even if the metrics are measured over different-length time windows.
 
- Do not make estimates for one-month averages until you’ve observed at least one week of behavior, and preferably two.
 
- To understand churn, you should use average metrics with longer observation periods than the description periods and scaling to make comparable estimates of the averages for new accounts. Simple count metrics should be used only to measure use of a contracted quantity, in which case the exact count in the contract period matters.
 
- The first thing to understand about multiuser products is that it’s still best to understand churn at the subscription or account level because all the users share one subscription; if the subscription is not renewed, all the users churn together.
 
- Churn does not occur when individual users become inactive on a multiuser product.
 
- License utilization is a metric that is defined as the ratio of the number of users to the maximum number of allowed users. Sometimes, the number of users is measured by creation of user accounts, but for churn, I prefer to measure the actual or active license use by making a ratio of the active users divided by the number of licensed users.
 
- An interaction metric is the product (multiplication) of two other metrics.
 
- An interaction term is a bit like an and operation in computer science. If you have a computer science background, you may be thinking that you could make metrics with a Boolean operation like “Assign a 1 when two metrics are both above a certain level.” You can think of a multiplicative interaction as being a more nuanced alternative. An interaction isn’t just 0 or 1 when both metrics are high; it measures how high both metrics are as a real value. Interaction terms also have interesting statistical properties when applied to scores or metrics that can take negative values, because when either one metric or the other is negative, the interaction measurement takes on a negative value.
 
- If interaction measurements are so interesting and widely used in statistics, you may be wondering why I don’t recommend them for churn analysis. The simple answer is that no one in the business world understands interaction terms, but ratios are easy to understand.
 
- A spurious relationship between a metric and an outcome is a relationship that occurred due to random chance, not due to a repeatable, causal relationship. As a result, the relationship is not likely to recur.
 
- You mainly consider ratio metrics that make intuitive sense to someone in the business.
 
- A churn probability forecast for a customer is a prediction that if you have a cohort of customers with that same forecast, you expect the percentage given by the probability to churn. A churn probability forecast never tells you whether a single customer definitively will or won’t churn.
 
- Engagement is a state of involvement and commitment. For this discussion, involvement means use of the product, and commitment means likelihood of renewal. It makes sense that more engagement should lead to a higher chance of retention. For now, don’t worry that engagement itself is a subjective state.
 
- Customer engagement cannot be measured directly, but you can estimate it from customer metrics for the purpose of predicting churn probability by matching the observed churn with the S curve.
 
- Customer engagement is estimated from a model in which engagement weights are multiplied by the scores for each metric and then added together.
 
- The retention impact of a metric or group of metrics is the difference that it makes to the retention probability for a customer to be one standard deviation above the average in this metric, assuming that all the other metrics are exactly average.
 
- Grouping correlated metrics helps reduce information overload when there are many metrics in regression analysis.
 
- Calibration refers to the degree of correspondence between the estimated probabilities of churn and retention produced by the model and the actual churn experienced by the customers.
 
- The most important check of calibration is that the average churn rate predicted by the model should match the churn rate in the data.
 
- A fat tail in the churn probability distribution is when the number of customers with higher churn probabilities is large enough to show up clearly in the histogram.
 
- A spiked tail in the churn probability distribution is when there are certain ranges of churn probabilities in the tail with abnormally high numbers of customers. Sometimes, these numbers are related to identifiable behaviors such as lacking a particular behavior or having monthly versus annual billing.
 
- A multipeak distribution is another way to describe this type of distribution, although you usually describe the churn probability distribution as multipeak only when two or more peaks in the histogram shape have similar height. No case study example of this type was available.
 
- A thin tail is when most of the customers are packed in a narrow probability range, but there is a small number of customers with much higher churn probability. In a thin tail, the number is so small that these customers are not visible in the histogram;
 
- Forecasts for extreme outliers can cause confusion and doubt for businesspeople when you present the model results to them.
 
- Outlier clipping means reducing the value of extreme outliers so that they are still near the high (or low) end of possible values but not quite as extreme.
 
- Customer lifetime value is the amount you expect a customer to be worth to your business, including the revenue and costs you foresee, over the customer’s entire lifetime. This forecast includes future payments.
 
- Customer acquisition cost (CAC) is the total amount spent on marketing and sales per customer acquired. CAC usually depends on the channel or campaign through which the customer was acquired.
 
- Cost of goods sold (COGS) is the total amount spent to maintain the service for existing customers, including things like cloud computing costs and the cost of providing customer support. COGS can depend on the type of customer.
 
- Future lifetime value (FLV) is the sum of the recurring payments and maintenance costs, at any time after the first period.
 
- FLV emphasizes the future view of CLV for retention, which ignores acquisition and past revenue and costs.
 
- The standard accuracy measurement is inappropriate for churn because churn is rare, so the measurement can be gamed by predicting that no one will churn. More generally, accuracy on churned customers makes only a small contribution to the measurement.
 
- 0.6–0.7 Healthy range for weakly predictable churn. 0.7–0.8 Healthy range for highly predictable churn.
 
- 0.8–0.85 Extremely predictable churn. This result is suspicious for a consumer product and usually is possible only for a business product with informative events and advanced metrics. > 0.85 Something probably is wrong. Normally, churn is not this predictable, even for business products.
 
- The top decile lift of a predictive churn model is the ratio of the churn rate in the top decile of customers predicted to be most at risk to the overall churn rate.
 
- Lift is the relative increase in responses due to some treatment relative to the baseline.
 
- The same reasoning applies to churn forecasting. If your market, product, or competition changes during the time spanned by your dataset, it might be hard to forecast churn accurately in the time after the change. If you shuffle the data, you can get a different result than you would have if you had been forecasting for your customers at that time.
 
- Although you may optimistically think you would refit a new model every month, in reality, many companies “set it and forget it.” Even if you are very determined, you will probably refit your own model only a few times a year after you finish the initial development.
 
- A lookahead bias is an error that occurs when you estimate accuracy in a historical simulation using information that would not be available in real time for forecasting on active customers.
 
- Backdated records for events, subscriptions, or other customer data can lead to lookahead bias in your forecasts and cause the backtest to appear more accurate than what you would achieve in real-time forecasting.
 
- Cross-validation is the process of optimizing a forecasting model by comparing the accuracy and other characteristics of models created with different parameters.
 
- Cross-validation is a common task in data science and machine learning, and what the CV means in the GridSearchCV object you were introduced to earlier. The GridSearch part of the name refers to the fact that a typical cross-validation works on a sequence or multiple sequences of parameters. If there were two parameters, each with its own sequence of values, the combinations of those two sequences would define a grid. In fact, there can be any number of parameters.
 
- A machine learning model is any predictive algorithm that has the following two characteristics: (1) the algorithm learns to make the prediction by processing sample data (as compared with making predictions with rules set by a human programmer), and (2) the algorithm is not the regression algorithm.
 
- A decision tree is an algorithm for predicting an outcome (such as a customer’s churning or not churning) that consists of a binary tree made up of rules or tests.
 
- A random forest is an algorithm for predicting an outcome such as a customer’s churning by randomly generating a large set of decision trees (a forest). All the trees try to predict the same outcome, but each does so according to a different set of learned rules. The final prediction is made by averaging the predictions of the forest.
 
- Boosting is a machine learning ensemble in which the ensemble members are added so that they correct the errors of the existing ensemble.
 
- Rather than randomly adding decision trees, as in a random forest, you create each new tree in a boosting ensemble to correct wrong answers made by the existing ensemble, rather than repredicting on the correct examples. Internal to the boosting algorithm, successive trees are generated to correct the observations that were not correctly classified by earlier trees. Also, the weight assigned to successive trees in the vote is made to best correct the mistakes, not an equal vote like in random forests. These improvements make boosted forests of decisions trees more accurate than a truly random forest of decision trees.
 
- State-of-the-art machine learning models have so many parameters that the only way to make sure you pick the best values is to cross-validate a large number of them. That is, you test a sequence of plausible values for each parameter and choose the ones that have the best values on a crossvalidation test.
 
- XGBoost doesn’t necessarily give calibrated churn probability forecasts. The XGBoost model is optimized for accuracy as measured by the classification of churns, not matching observed churn rates.
 
- Demographics are facts about individual customers, and firmographics are facts about customers that are companies (firms).
 
- Demographics and firmographics generally are unchanging facts about the customer or facts that change only rarely. Demographics and firmographics do not include product use or subscription-derived metrics, but they can include facts about how the customer signed up or about the hardware a customer uses to access an online service.
 
- Channel (short for the sales channel)—The sales channel refers to how the customer found the product and signed up. All users sign up through one method, so the channel is a required field with no null values in the social network simulation.
 
- Do not overthink your category groups or spend too much time on them. Remember the need for agility in your analysis. Do something that gives you a manageable result for a first pass, take feedback from your business colleagues, and iterate from there.
 
- Demographic categories are often related to churn and engagement because customers from different demographics behave differently. But if you use detailed behavioral metrics, you will usually find that behaviors are the underlying drivers of retention in a predictive forecast.
 
