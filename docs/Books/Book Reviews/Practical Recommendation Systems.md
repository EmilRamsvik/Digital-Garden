---
Pages: 432
Author: Kim Falk
finished: true
tags:
  - books
  - digital-garden
  - book-review
  - product-recommendation
  - ranking-systems
  - machine-learning
  - bayesian
  - recommender-systems
  - science
  - statistics
Date Finished: 2024-01-01
created: 2024-01-06T15:04
updated: 2024-01-07T17:55
---
# Practical Recommendation Systems


# 🚀 The Book in 3 Sentences
This book is an easy and good introduction to recommendation systems. It is meant to introduce the concept of recommendation systems and, from there, give concepts and methods on how to make them. This book is about usage rather than the theoretical background. 

# 🎨 Impressions
You have recommendation algorithms and ranking algorithms. Ranking algorithms consider the relative ranking of the items, while recommendations look for similar items based either on content or similarity with other users. 

There is an inverse relationship between complexity (and performance) and explainability. 



# ✍️ My Top  Quotes
- *The moment that recommendations have the power to influence decisions, they become a target for spammers, scammers, and other people with less-than-noble motives for influencing our decisions. —Daniel Tunkelang* 
 
- *Certain systems explain the recommendations. Recommenders with that ability are called white-box recommenders; those that don’t are called black-box recommenders.* 
 
- *The better the quality of the recommendation, the more complex and the harder to show explanations. This problem is known as model accuracy-model interpretation trade-off.* 
 
- *Content-based filtering uses the metadata you have on the items in your catalog. Netflix uses descriptions of its movies, for example.* 
 
- *I definitely recommend Deep Learning (The MIT Press, 2016) if you have a background in machine learning.* 
 
- *Sites that use voting are called reputation systems.* 
 
- *A user-item matrix can be thought of as a table that has a row for each user and a column for each item (or the other way around).* 
 
- *A rating is, for example, the number of stars on Amazon or Glassdoor, a site where people can rate their workplaces), or a list of hearts in my local newspaper’s movie reviews* 
 
- *More formally, a rating is something that glues together three things: user, content, and the user’s sentiment toward the content item* 
 
- *User-item matrix isn’t always as populated. In fact, usually nonempty cells are rare because many internet shops have numerous users and plentiful items.* 
 
- *It’s definitely not a good thing to have a matrix that looks like a Danish beach in wintertime* 
 
- *For now, let’s focus on how to populate this matrix either from explicit ratings (added manually by users) or implicit ratings (calculated from the evidence you collect).* 
 
- *When a user manually gives a content item a rating, it’s called an explicit rating.* 
 
- *Implicit ratings are deduced from monitoring people’s behavior. Sounds kind of scary when it’s written like that, doesn’t it? But remember, you’re trying to ease information overload and help users, not stalk and manipulate them into buying more.* 
 
- *Algorithm, which puts importance into recent events and not so much on older ones. These types of algorithms are called time-decay algorithms.* 
 
- *The formula takes the score (how many people upvoted this story minus how many who downvoted it) and divides that with a time decay element, using a term they call gravity, which indicates how fast an item’s ranking decays:* 
 
- *This problem is closely related to the well-known term frequency–inverse document frequency problem (TF-IDF among friends).* 
 
- *Often commercials are about things that the seller is trying to convince the user is a good offer or cheap (even if it isn’t), while a recommendation is about finding the user what they want.* 
 
- *A recommender system can be built in many ways, depending on how many recommendations you need to serve, the size of content catalog, and the number of visitors. One thing for certain is that you want it to be a structure that’s independent from your website, because you can quickly drown performance.* 
 
- *Let’s define some numbers that can make it easier to decide if a rule is valid or merely a coincidence. The problem about the three-out-of-six itemset from the example is that bread is present in five out of six transactions, so it would be hard not to find transactions containing bread. To take that into account, you’ll define confidence as the number of transactions in which the itemset is divided by the total number of times the first item is present.* 
 
- *5 Iterate through the itemsets and remove the ones that don’t fulfill the confidence requirement.* 
 
- *☐ Adding a version number to the recommendations in your database lets you have several versions in the database at one time, which means that you can have one that’s used in production and then switch to a new one when your ready to go live. But more importantly, if something happens with the recommendations that you’re currently using, you can revert to an older version.* 
 
- *Under the umbrella of cold-start problems are also gray sheep. These are users who have such individual tastes that even if there’s data, there are no other users who’ve bought any of the products they have.* 
 
- *Cluster analysis is a less subjective way of finding the segments and can be done using unsupervised machine learning. A cluster is a fancy word for a group with similar traits, so we’ll try to find particular types of users who consume specific content* 
 
- *“Sometimes you need to take a step back to get ahead.” This proverb is always irritating when it’s thrown at you, but sometimes it’s necessary. This is the idea behind the next method of getting around gray sheep and some cold products.* 
 
- *To solve this problem, you have to turn to something called active learning, and it’s cool. But sadly, it’s beyond the scope of this book. A good place to go to learn more is in the publicly available article “Active Learning” by Ruben, et al. Active learning for recommender systems is about creating an algorithm that comes up with good examples for the user to rate, which then provides the recommender with valuable information about the person’s preferences* 
 
- *Cold-start problems mean you have to decide what to recommend to new visitors on your site. Introducing new products is also a cold-start problem, which we’ll look at in more detail in later chapters* 
 
- *Segments can be built or generated to make semi-personalized recommendations. Alternatively, demographics can be used to create demographic recommendations.* 
 
- *You can calculate similarity in many ways, but the overall problem can be defined as follows: Given two items, i1 and i2, the similarity between them is given by the function sim(i1, i2).* 
 
- *We’ll start by looking at the Jaccard similarity, which is used to compare sets.* 
 
- *This was originally coined coefficient de communaté by Paul Jaccard, who came up with this distance measure to indicate how close two sets are to each other. You’ll also find it under the names Jaccard index or Jaccard similarity coefficient.* 
 
- *This way of measuring distance or similarity goes by the sexy name of Manhattan distance. It’s part of what’s called taxicab geometry. In more established circles, however, it goes by the name of L1-norm. The idea is that if you want to measure the distance between two street corners in Manhattan, you drive a grid, rather than measure as the crow flies.* 
 
- *According to the L1-norm, you’d calculate a similarity measure of 3 + 5 = 8. Often, you’ll run into the mean absolute error (MAE), which is calculated using the average of the L1 norm.* 
 
- *The big brother of L1-norm is the L2-norm, which geometrically can be considered the distance between two points not travelled by a taxi in Manhattan but by the crow, going directly from one point to the next. Basically, it stems from the famous Pythagorean theorem, a2 + b2 = c2, which says that the square of the hypotenuse (the side opposite a right angle in a triangle) is equal to the sum of the squares of the other two sides.* 
 
- *The L2-norm is known as the Euclidian norm.* 
 
- *Another way of looking at content is to see the rows of the rating matrix as vectors in space, and then look at the angle between them.* 
 
- *Clustering is also called segmentation. We talked about it in an earlier chapter when we discussed non-personalized recommendations. At that time, we talked about using segmentation to find groups of users that are similar to a new visitor based on demographic data. The purpose here is more of an optimization because you want to find clusters of users to narrow down how many times you calculate user-user similarity.* 
 
- *K-means clustering is what’s called an unsupervised machine learning algorithm. It’s unsupervised because you don’t give it any examples of what the correct input-output pairs would look like. It’s also a parametric algorithm because you need to give it a parameter, k, for it to run.* 
 
- *K-means clusters are great in toy examples, but always be careful about checking the results. As you saw, they can easily end in a suboptimal state, which would create strange recommendations to users. (The example you looked at came with a warning reminding you that examples are constructed to explain the algorithm, but it hides the fact that many algorithms are difficult to make work according to the executor’s needs. Consider yourself warned.* 
 
- *This chapter introduces collaborative filtering and goes into detail about the branch of it called neighborhood-based filtering. Collaborative filtering is an umbrella of methods. What unites those is the selection of data. These filtering methods only use ratings (implicit or explicit) as the source for creating recommendations.* 
 
- *Neighborhood collaborative filter-based algorithms were the first algorithms to be categorized as a recommender systems algorithm.* 
 
- *Most people consider themselves unique and don’t like to be segmented into a particular type. But that’s exactly what using collaborative filtering to calculate recommendations is all about. In all its simplicity, collaborative filtering recommends a list of items for you. The list is created based on people who like the same things as you, but who also like something that you haven’t yet consumed.* 
 
- *In short, either you find similar users to the active user and then recommend the films they liked that the active user hasn’t watched, or you find the liked items of the active user and come up with similar items to recommend. To make all this work, you’re back at the rating matrix to describe users’ preferences* 
 
- *You may come across the term user-user-based filtering in your quest for knowledge. The reason why people are still talking about user-user-based filtering is that it’s a better way to give recommendations. If you do item-to-item filtering, you’ll find items similar to what user A, for example, has already rated, but similar items won’t provide the serendipity that similar ratings can provide.* 
 
- *To get a feel for how the similarity is distributed, it’s a good idea to look at one on each end of the scale and one in the middle:  
	- Close to 1—LM and SS are interesting because you can see that they’re dissimilar to all except themselves. They’ve a high similarity because all users agree on rating both either above or under. But then why is it not 1? Because the ratings aren’t exactly the same. If they were the same, it would be 1, as is the case with AV and MIB. 
	- Close to -1—SS and AV are the most dissimilar, which also makes sense. I can imagine that most people who like Ace Ventura won’t like Sense and Sensibility, and vice versa.
	- Close to 0—The similarity between Ace Ventura and Braveheart is close to zero. This is an indication that some users like Ace Ventura, others don’t, and vice versa. In this example, there are only three users who rated both, so it doesn’t say much. Two users rate both films below average, while one is positive about Ace Ventura but negative about Braveheart.* 
 
- *Collaborative filtering requires data, which is a problem when you receive new users as well as new items—you have no data for generating recommendations.* 
 
- *The fact that collaborative filtering is content-agnostic is also a great plus. You don’t have to spend any energy adding metadata to your content or collect knowledge about your users. You only need the ratings and the interactions between items.* 
 
- *Amazon’s first stab at a recommender system was item-based collaborative filtering.* 
 
- *Building offline experiments to evaluate recommender systems ☐ A rough understanding of online testing Why* 
 
- *You want to be surprised by finding things in your recommendations that you love but never knew you would. Serendipity is about giving the user that sensation, so that all their visits aren’t more of the same. Serendipity is subjective and difficult to calculate, so I’ll ask you to remember that it’s important and to make sure that you don’t constrain the recommender’s returns too much.* 
 
- *Constraining means less serendipity.* 
 
- *As a software engineer, you should know about regression testing, which means that you should have a test set that can be run either nightly or at least every time somebody makes a change to the code base. Often people argue that these algorithms are way too complicated to run automatic tests on. If you run into one of those people, please rap them on their knuckles, especially if they claim that the business can’t afford it.* 
 
- *Decision support is about taking each element and asking if the system was right or wrong. If you consider a recommender system and look at each recommended item and compare it to a user’s actual consumption, you can have four outcomes: for a given item, it can either be recommended or not, and the user can either have consumed it or not. If the recommender recommends the item, we say it’s positive, and then if the user consumes the item, we say it was the right decision. We consider it positive if the item was recommended and true if the recommender and the user agree, so you get these outcomes:* 
 
- *Sampling is about extracting a subset of the data that represents the same distribution across communities and oddities as the full data set. That can be difficult.* 
 
- *Recommend Statistical Methods in Recommender Systems* 
 
- *To use the descriptions, you first need to make a bag-of-words (BoW) model, meaning that you split the description into an array of words:* 
 
- *A stemmer usually refers to the heuristic process that chops off the ends of words in the hope of achieving this goal, correctly most of the time, while the lemmatizer is referred to doing things properly.6* 
 
- *TF-IDF was once king, but after the invention of LDA models, it’s fallen out of grace. Everyone’s first choice now is to use LDA models or similar topic models.* 
 
- *However, before you believe I took up your time explaining something you might not use, it’s worth mentioning that TF-IDF is something that you can use to clean the input of the LDA. TF-IDF is a classic method and has been widely used, but new algorithms are also gaining traction—one in particular called Okapi BM25.8* 
 
- *L is for latent, which means hidden. Usually in mathematics and machine learning it means something that is found by an algorithm. It is the same here. Allocation refers to the fact that that all words are allocated into the hidden (latent) topics.* 
 
- *The LDA model (short for Latent Dirichlet Allocation* 
 
- *If you line up a list of K topics and all the words that are present in the documents, it’s hard to imagine ever coming up with a solution. But because words related to the same topic are often found in the same document, then you already have information to start with. If you know one word is already in a topic, then you’ve information about whether another word should be there. This is what Gibbs sampling takes advantage* 
 
- *Gibbs sampling begins by randomly adding topics to documents and words to topics. Imagine the arrows set at random in figure 10.14. The Gibbs sampler goes through each document and each word, and, given the probabilities of all the remaining words in each document, it adjusts the probability of that word.* 
 
- *Using LDA. You can change the parameters alpha and beta to adjust the distributions of both the documents and the words in the topics. If you enter a high alpha, then you’ll distribute each document over many topics; low alpha distributes only a few topics. The advantage with high alpha is that documents seem to be more similar, while if you have specialized documents, then a low alpha will keep them divided into few topics.* 
 
- *The same is true for beta: a high beta leads to topics being more similar because the probabilities will be distributed on more words that are used to describe each topic. For example, instead of having 10 words in a topic with a probability above 1%, you might have 40. This allows for bigger overlap.* 
 
- *TF-IDF is easy, apart from remembering that its acronym means term frequency–inverse document frequency. You can use it to find important words in documents.* 
 
- *Before feeding descriptions and texts to an algorithm, it’s good to remove unwanted words and optimize for the algorithm. This can be done with removing stop words, popular words, stemming, and using TF-IDF to remove words that aren’t important* 
 
-  Evaluating content-based recommenders can be done by dividing each user’s ratings into training and testing data (as you learned in chapter 9). Then run through each user and calculate the recommendations to see if it produced something that was in the test set.* 
 
- *Content-based recommender systems are good because they don’t need much information about the user.* 
 
- *Content-based recommender systems will find similar items, which might not always be the most surprising and fun recommendations to get.* 
 
- *Think about the data as a cloud of points, and you want to project the data into a lower-dimensional space where the distance between the objects is the same. Then the points that were further from each other before the reduction are also further away after the reduction, and nearby items are also closer after the reduction. You want to reduce the data so that only the directions that provide more information are retained. If the algorithm succeeds, then the vectors pointing in those directions are said to be latent factors.* 
 
- *Matrix is Latin for womb.* 
 
- *Factorization is about splitting things up.* 
 
- *Gradient descent is a way to find optimal points on a graph, where optimal means the lowest point (or the highest point).* 
 
- *In the world of gradient descent, it’s called the learning rate, which translates to how big a step you should take every time you want to move to the next point.* 
 
- *Don’t stress because I added a Greek letter; it’s an alpha. In the world of gradient descent, it’s called the learning rate, which translates to how big a step you should take every time you want to move to the next point.* 
 
- *Batch gradient descent because you calculate all the errors every time you move the value of the parameters* 
 
- *If your rating matrix is sparse, then you might run into overfitting problems, where the algorithm learns the training data too well and suddenly the MSE of the test data starts increasing.* 
 
- *2 User factor matrix—Where each column represents a user described by the latent factors.* 
 
- *Item bias—Where certain items are generally considered better—or worse— than others. The bias describes the difference between the global mean and the item’s mean. 4 User bias—Encompasses different rating scales for different users. With these four things, you can calculate a predicted rating for any item for any user using the formula we discussed earlier and shown here:* 
 
- *Brute force is easy to describe: you calculate a predicted rating for each user for each item, then you sort all the predictions and return the top N items. While you’re at it, you can also save all the predictions so that you have them ready when the user visits.* 
 
- *One way to create recommendations is to find the items with factor vectors that are close to the active user’s vector.* 
 
- *This model you created quickly goes out of date. Ideally, you should start a new run as soon as it’s finished, but, depending on how much your data changes, you can do recalculate your model once each night or even once a week. But remember, every time a user interacts with a new item, it might be evidence that will show connections among the items and could give further inklings about the user’s taste.* 
 
- *SVD is a way of doing matrix factorization; it’s well accepted in many libraries, which makes it a good method to use. The downside is that it won’t work if your matrix isn’t complete, meaning with no empty cells. You’ll have to fill those cells in with something, and that something is hard to do because they’re empty when you don’t know what should be there.* 
 
- *Gradient descent and stochastic gradient descent are super tools for solving optimization problems like the one defined to train and optimize the Funk SVD.* 
 
- *An ensemble is defined as a group of things viewed as a whole rather than individually. It’s the same for ensemble recommenders: you combine predictions from different recommenders into one recommendation.* 
 
- *NOTE The difference between an ensemble and a mixed recommender is that the hybrid might not show anything of the result for one recommender, while the mixed hybrid always shows everything.* 
 
- *The feature-weighted linear stacking (FWLS) algorithm enables the system to use feature recommenders in a function-weighted way, which makes it strong.* 
 
- *Learning to Rank (LTR) algorithms and learn how to distinguish pointwise, pairwise, and listwise comparisons of ranks.* 
 
- *Collaborative filtering algorithms are prone to recommend items liked by few people, but by people who really like the content. The algorithm has no concept of popularity and could be used for re-ranking instead of as the sole source for the ordering* 
 
- *Instead of re-ranking items and rating predictions, why not start with the aim of ranking and then construct algorithms that optimize for that? This is the goal of LTR algorithms.* 
 
- *LTR algorithms are distinguished by the way they evaluate the ranked list during training. Figure 13.5 illustrates* 
 
- *The pointwise approach is the same as the recommenders you looked at in earlier chapters. It produces a score for each item and then ranks them accordingly.* 
 
- *Pairwise is a type of binary classifier. It’s a function that takes two items and returns an ordering of the two. When you talk about pairwise ranking, you usually optimize the output so you’ve the minimal number of inversions of items compared to the optimal rank of the items. An inversion means that two items change places.* 
 
- *To do pairwise ordering, you need what’s called an absolute ordering. An absolute ordering means that for any two content items in the catalog, you can say one is more relevant than the other or is tied.* 
 
- *Listwise is the king of all LTR subgroups because it looks at the whole ranked list and optimizes that. The advantage of listwise ranking is that it intuits that ordering is more important at the top of a ranked list than at the bottom. Pointwise and pairwise algorithms don’t distinguish where on the ranked list you are.* 
 
- *☐ The Bayesian Personalized Ranking (BPR) can be used on top of the matrix factorization method you looked at in chapter 10, but also with other types of algorithms.* 
 
- *Explicit ratings can be a reflection of mood or a result of social influences and can’t always be trusted to indicate what the user wants. Implicit ratings are, as the name implies, implicit, and you or the machine have to deduce what the collection of events that have occurred between each user and item indicate.* 
 
- *The first personalized recommendation method was collaborative filtering, which provides recommendations based on similar behavior, either between users or between items.* 
 
- *We talked about the traditional singular value decomposition (SVD) and then moved on to the Funk SVD, which got excellent results in the Netflix Prize competition* 
 
- *I can heartily recommend Recommender Systems Handbook by Francesco Ricci and Lior Rokach.* 
 
- *I did get to talk a bit about A/B testing in chapter 9, but for this, the next topics you need to learn about are exploit/explore methods and multi-armed bandits. For that purpose, I recommend Statistical Methods for Recommender System by Deepak Agarwal and Bee-Chung Chen* 
 

