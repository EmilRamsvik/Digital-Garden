---
created: 2023-10-29T15:52
updated: 2025-09-02T10:13
Pages: 252
Author: Daniel Vaughan
finished: true
Date Finished: 2024-04-15
tags:
  - book-review
  - books
  - business
  - business-communications
  - communication
  - corporate
  - data
  - data-analysis
  - data-science
  - data-science-strategy
  - data-storytelling
  - data/communication
  - data/hypothesis-testing
  - data/lift-analysis
  - decision-making
  - digital-garden
  - metrics
  - stakeholder-communication
  - stakeholder-management
  - value-proposition
---
# Data Science the Hard Parts


# 🚀 The Book in 3 Sentences
This book dives into the difficult aspects of data science. The difficult aspects are business value proposition, communication and measuring impact. These topics are discussed and methods for doing this the right way are presented. 

# 🎨 Impressions
I liked this book, mostly the first part, as the second part was more of a walkthrough of hypothesis testing, and I felt I slipped a bit on that part. 
The most important aspect was that a data science output in itself is just information; therefore, the only concrete value from such a project is the actions that come from it. 
The aspect of communication discussed is important; as a data scientist, you are responsible for outputting models, communicating the results, and acting as an evangelist. My experience so far reflects this as well. So it was very nice to know that I am not the only one. 
I did find the concept of [lift](https://en.wikipedia.org/wiki/Lift_(data_mining)) to be quite interesting, and I would like to work more on this concept. 
Another important aspect is that a data scientist owns the data, which is a huge advantage in all discussions. 
# ✍️ My Top  Quotes

- I’ll posit that learning and practicing data science is hard. It is hard because you are expected to be a great programmer who not only knows the intricacies of data structures and their computational complexity but is also well versed in Python and SQL. Statistics and the latest machine learning predictive techniques ought to be a second language to you, and naturally you need to be able to apply all of these to solve actual business problems that may arise.
 
- But the job is also hard because you have to be a great communicator who tells compelling stories to nontechnical stakeholders who may not be used to making decisions in a data-driven way.
 
- In my book Analytical Skills for AI and Data Science (O’Reilly), I presented this general approach to value creation with data: 
	 The idea is simple: data by itself creates no value. The value is derived from the quality of the decisions that are made.
 
- Data scientists have one advantage over the rest of the organization: they own the data and are constantly asked to calculate and present the key metrics of the team.
 
- I’ve seen this mistake over and over: a data scientist spends a lot of time running their model or analysis, and when it’s time to deliver the presentation, they just read the nice graphs and data visualizations they have.
 
- Whenever I decide to start a new project, I always solve the problem backwards: how can the decision-maker use the results of my analysis or model? What are the levers that they have? Is it even actionable? Never start without the answers to these questions.
 
- Once you have figured out the so what, it’s a great practice to write it down. Don’t let it play a secondary role by focusing only on the technical stuff.
 
- The best data scientists I’ve seen are go-getters who own the project end to end: they ensure that every team plays its part. They develop the necessary stakeholder management and other so-called soft skills to ensure that this happens.
 
- Don’t be afraid to make product recommendations even when the product manager disagrees with you, or to suggest alternative communication strategies when your marketing stakeholder believes you’re trespassing.
 
- Your aim is to create measurable value. How do you do that? Here’s one trick that applies more generally. A data scientist does X to impact a metric M with the hope it will improve on the current baseline. You can think of M as a function of X: Impact of X = M ( X ) - M ( baseline ) Let’s put this principle into practice with a churn prediction model: X Churn prediction model
 
- Your aim is to create measurable value. How do you do that? Here’s one trick that applies more generally. A data scientist does X to impact a metric M with the hope it will improve on the current baseline. You can think of M as a function of X: Impact of X = M ( X ) - M ( baseline 
 
- Do you see how value is derived from actions and not from data or a model? So let’s adjust the principle to make it absolutely clear that actions (A) affect the metric: Impact of X = M ( A ( X ) ) - M ( A ( baseline 
 
- You can have a great ML model that is predictive and hopefully interpretable. But if the actions taken by the actual decision-makers don’t impact the metric, the value of your team will be zero (so what).
 
- I’ve found [Survival of the Savvy](../../Science/Sociology/Bureaucracy/Survival%20of%20the%20Savvy.md): High-Integrity Political Tactics for Career and Company Success by Rick Brandon and Marty Seldman (Free Press) quite useful for dealing with company politics in a very pragmatic way.
 
- Metrics are measurable by definition.
 
- Funnels are a sequence of actions that go one after the other.
 
- Stock-flow decompositions are useful when you care about a metric that accumulates. Let’s start by defining these concepts: a stock variable is one that accumulates and is measured at a specific point in time. Flow variables don’t accumulate and are measured over a period of time. A useful analogy is a bathtub: the volume of water at time t is equal to the volume at time t − 1, plus the water that came in through the faucet between these two moments in time, minus the water that went down the drain.
 
- Another common scenario is trying to improve revenue. The trick here is to multiply and divide by a reasonable metric to arrive at submetrics that are most easily leveraged: Revenue = Revenue UnitsSold × Units Sold = Unit Price × Sales This shows how to decompose revenue as the product of unit (average) price and sales: R = p × q . To increase revenue you can either increase the price or sales.
 
- Desirable properties that good metrics should have. A good metric must be measurable, actionable, relevant, and timely.
 
- Funnel-type decompositions are easy to use, and once you get used to them, you’ll start to see funnels everywhere.
 
- Finding root causes for changes in time is usually very hard. You need enough variation in the drivers to estimate impacts.
 
- Growth decompositions are useful to get hints about the underlying root causes.
 
- Believe that a natural growth path in data science (DS) is to go from making things overly complex to doing smart simplification. By smart I mean what Einstein expressed when saying you should aim at making “everything as simple as possible, but not simpler.”
 
- The[ Laws of Simplicity](http://lawsofsimplicity.com/) by John Maeda (MIT Press) takes a designer’s point of view on how to achieve simplicity.
 
- The KPI is a function of your ML model performance metric. I emphasize the function part because you need to be able to convert the performance metric into a monetary value, like revenue, to make it comparable with the costs.
 
- Consider the lift of having women as CEOs in the US. Under a random selection baseline, there should be roughly 50% female CEOs. One study estimates this number at 32%. The lift of the current job market selection mechanism is 0.32/0.5 = 0.64, so women are underrepresented relative to the baseline population frequency.
 
- As the name suggests, the lift measures how much the aggregate in one group increases or decreases relative to the baseline. A ratio larger or smaller than one is known as uplift or downlift, respectively. If there’s no lift, the ratio is one.
 
- You can compute lifts with classifier models by showing the predictive performance of the model relative to the overall sample. I presented a churn prediction example and computed lifts for true positive rates across score deciles.
 
- A lift is a ratio of an aggregate metric for one group to another. Averages are the most common aggregation method.
 
- More generally, lifts can be applied to understand the extent of self-selection or survivorship bias in your sample.
 
- Data Mining: Practical Machine Learning Tools and Techniques by Ian Witten et al.
 
- To have end-to-end ownership, it is critical to persuade your stakeholders to take action with your results.
 
- What is the objective that you want to achieve? In general narratives, it could be to persuade or engage. These apply also to data science (DS), of course, but most importantly, you want to create value, and for that you need to drive actions. A successful story should help you accomplish this objective. Let’s reverse engineer the problem and identify conditions that help us achieve this: Clear and to the Poin, Credible, Memorable.
 
- In her book The Hard Truth About Soft Skills (Harper Business), Peggy Klaus suggests that long-term success is 75% about soft skills and the rest is technical knowledge.
 
- TL;DRs (too long; didn’t read) are a great tool to check whether your narrative is sharp and concise enough. They have become a standard in tech companies, and I’ve made it a practice to always start with one.
 
- I tend to structure the TL;DR in the same way as the narrative: What, So What, Now What.
 
- A good tip is to think of your document as a news article and think about alternative headlines. Great headlines in data science must have the same properties I’ve been talking about: simple, credible, memorable, and actionable. Credibility restricts you from overselling.
 
- If a slide doesn’t have a clear message consistent with your narrative, drop it.
 
- It Was the Best of Sentences, It Was the Worst of Sentences: A Writer’s Guide to Crafting Killer Sentences by June Casagrande
 
- With stakeholders, I rarely use histograms or KDEs as these usually have more information than needed to deliver the message.
 
- Intuitively, the signal-to-noise ratio (SNR) measures the amount of information provided by the model (signal) relative to that from the unexplained part of the model (noise).
 
- A variable is latent if it can’t be directly observed but affects an observable outcome.
 
- Marginal effects in classification models measure the impact of an infinitesimal change in one feature on the probability of interest.
 
- In a bivariate setting, the slope depends on the covariance between the outcome and the feature, and the variance of the feature.
 
- Direct causation As you would like to interpret it ( x 1 → y ). Reverse causation x 1 ← y , since the covariance is symmetric on the arguments. Confounders A confounder is any third variable that affects both x and y, but these are otherwise unrelated
 
- The Frisch-Waugh-Lovell theorem (FWL) is a powerful result that helps build a lot of intuition about the inner workings of linear regression. It essentially says that you can interpret the OLS estimates as partialled-out effects, that is, effects net of any other dependencies between features.
 
- The Python script allows you to test that both versions of the general covariance formula give the same results (using the version argument). An important property of OLS is that the estimated residuals are orthogonal to the regressors (or any function of the regressors), a process also known as orthogonalization. You can use this fact to show that the two covariance formulas are equivalent. Importantly, orthogonalization always has to be performed on the feature of interest. If you only orthogonalize the outcome y, the covariance formula is no longer valid, unless the features are already orthogonal with each other, so in general: α k ≠ Cov(y ˜ k ,x k ) Var(x k ) Why Should You Care About FWL? I’ve presented several versions of the orthogonalization result, so you should expect it to be relevant. The main takeaway is this: You
 
- You can interpret each coefficient from linear regression
 
- Variables like Dl and Dr = 1 − Dl are perfectly correlated, it’s normal to find both ranking very high in terms of feature importance. Since they provide the exact same information, the performance of the algorithm doesn’t improve by including both. This is one useful intuitive fact that arises naturally by understanding OLS.
 
- As the name suggests, data leakage occurs when some of the data used for training a model isn’t available when you deploy your model into production, creating subpar predictive performance in the latter stage.
 
- As a starting point, I separate the learning process into two stages: Training stage This is the stage where you train a model by dividing your sample into training and testing, etc. Scoring stage Once you’ve trained your model and you’ve deployed it in production, you use it to score a sample. It can be a one-at-a-time prediction, as in online, real-time scoring, or scoring of a larger sample.
 
- A typical symptom of leakage is having unusually high predictive performance on your test sample. You must rely on your knowledge of the problem and the company’s experience with these models.
 
- The litmus test for an ML model is its performance in production. You should direct all of your time and effort to ensure that this is the case.
 
- A more direct definition is that a model is production ready when it’s set for consumption by the end user, be it a human or a system. By consumption I mean making use of the predictive scores, which can take place offline or online, and can be done by a human or by another system or service
 
- Whatever you decide to use, my recommendation is to keep it simple. Often, all you need is a dashboard that plots this metadata, which enables you to set up simple alerts for when changes occur. When you productionize a model, it’s often the case that the simpler, the better.
 
- Deploying in production is a complex sequence of steps, so the recommendation is to keep each of these as simple as possible. Unnecessary complexity may end up compounding, making it very hard to find the source of a problem when this comes up
 
- Ex ante storytelling has four main steps: defining the problem, creating hypotheses, feature engineering, and training the model
 
- What do you want to predict and why? This is better done early and collaboratively with your stakeholders to ensure you have their buy-in, as many promising ML projects fail because of this.
 
- Some high-level recommendations to come up with hypotheses for your problem are: Know your problem really well. The not-so-secret sauce to building great ML models is to have substantial domain expertise. Be curious. This is one defining trait that makes a data scientist a scientist. Challenge the status quo. Don’t be afraid to challenge the status quo. This includes challenging your own hypotheses and iterating when needed (be aware of any signs of confirmation bias on your side).
 
- Accumulated local effects (ALE) is a relatively new method that takes care of the shortcomings of PDPs when handling correlated features.
 
- As discussed, the problem with PDPs arises from imposing unrealistic values of a feature given its correlation with the remaining ones, which end up biasing the estimates.
 
- Ex ante storytelling starts by creating stories or hypotheses about what drives the outcome you aim to predict. These are then translated to features through a multistep feature engineering stage.
 
- Rolf Dobelli’s The Art of Thinking Clearly (Harper) is good if you want to gain some knowledge of the many biases and heuristics that are present in human behavior.
 
- Soledad Galli’s Python Feature Engineering Cookbook,
 
- On ML interpretability, I highly recommend Christoph Molnar’s Interpretable Machine Learning:
 
- Finally, Michael Munn and David Pitman give a very comprehensive and up-to-date overview of the different techniques in Explainable AI for Practitioners: Designing and Implementing Explainable ML Solutions
 
- At the time of writing, two Python packages are available that calculate ALEs: ALEPython and alibi.
 
- In “Expanding AI’s Impact With Organizational Learning”, Sam Ransbotham and his collaborators argue that only “10% of companies obtain significant financial benefit from artificial intelligence technologies.”
 
- Moving from prediction to decisions is critical if you want to find positive ROI for your data science practice. ML is a set of predictive algorithms that can, first and foremost, greatly improve your organization’s decision-making capabilities.
 
- Threshold decision rules abound in ML. Many regression and classification models give rise to simple decision rules that trigger actions if the predicted outcome is greater than, equal to, or lower than a predetermined threshold.
 
- In the past I’ve argued that incrementality is the holy grail of data science. This statement depends critically on the hypothesis that I’ve maintained throughout: that data science creates value by improving a company’s decision-making capabilities.
 
- Incrementality is just another name for causal inference applied to decision-making analytics. If you recall from Figure 14-1, a typical decision comprises an action or lever, and an outcome that depends on the underlying uncertainty. If the lever improves the outcome, and you’re able to isolate any other factors that might explain the change, you can say (with some degree of confidence) that it was incremental. For later reference, the action is also known as the treatment, following the more classical medical literature of controlled experiments, where some patients receive a treatment, and the remaining control group receives a placebo.
 
- This process is often called the back-door criterion: with confounders you have to close any back doors by controlling for them, and with colliders the opposite applies; otherwise, you open those back doors and can’t identify the causal effect.
 
- CausalML is another Python library, created by Uber. It includes several ML-based causal inference estimators for uplift modeling,
 
- To understand uplift modeling, imagine that you train a cross-selling classifier that will predict which of your customers will purchase a given product in your company. Once trained, you can plot the distribution of scores where I’ve divided all scored customers into three groups. Group A are customers with a high probability of a purchase. Customers in group B are less likely, and C are deemed highly unlikely to purchase. Which customers should you target in your campaign? Many people decide to target group A, but these customers are most likely going to make an organic purchase, so you can use this costly incentive to target other customers. On the other side, group C are so unlikely that the incentive will be prohibitively costly. With this rationale, group B is a better candidate to be targeted.
 
- Incrementality is causal inference applied to estimating whether a change in a lever improved a business outcome.
 
- Under the assumption that data science creates value by improving our decision-making capabilities, incrementality is critical to understand which decisions are worthy of expanding and which should be rolled back.
 
- In its simplest form, an A/B test is a method to evaluate which one of two alternatives is better in terms of a given metric. A denotes the default or baseline alternative, and B is the contender.
 
- A/B tests are also called randomized controlled trials because, by design, selection into the treatment is random, thereby breaking any confounder or selection bias that may arise.
 
- The minimum detectable effect (MDE) is the minimum effect of the experiment that you can detect for a given significance level and statistical power.
 
- Don’t forget, the MDE refers to the incremental change in a metric caused by the treatment, which follows from the definition of the random variable you’re doing inference on: θ ^ = Y ¯ B - Y ¯ A
 
