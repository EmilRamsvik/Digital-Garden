---
Finished: false
tags:
  - article
  - digital-garden
  - data-science
  - python
created: 2024-01-06T15:04
updated: 2024-09-22T09:02
---



# Recommendation Systems
There are two types of recommendation systems

### Collaborative Filtering Systems

Collaborative filtering systems recommend items based on the preferences and behaviors of multiple users. Imagine it like a group of friends recommending movies to each other. If person A likes movies 1, 2, and 3, and person B likes movies 2, 3, and 4, the system might recommend movie 4 to person A and movie 1 to person B, assuming they have similar tastes.

This system has two main approaches:

1. **User-Based Collaborative Filtering**: This is like asking your friends what they're watching. The system finds users similar to you and recommends items they liked but you haven’t seen yet.
    
2. **Item-Based Collaborative Filtering**: This is more like saying, "I liked this movie, what else is like it?" The system recommends items similar to those you've already interacted with.
    

The key to collaborative filtering is the "wisdom of the crowd". It assumes that if users agreed in the past, they will agree in the future. For instance, in a movie recommendation system, if two users rated many movies similarly, they will likely have similar opinions on other movies.

### Content-Based Systems

Content-based systems recommend items by comparing the content of the items themselves and a user's profile. The system tries to figure out what you like based on the content you've interacted with. For example, if you frequently watch science fiction movies, the system will recommend other movies in that genre.

Here’s how it works:

- **Item Profiles**: Each item is characterized by a set of descriptors or terms. For movies, this might include the genre, director, actors, etc.
- **User Profiles**: The system builds a profile for each user based on the characteristics of the items they have interacted with. In simple terms, it keeps track of the features you seem to prefer.
- **Recommendation**: The system matches user profiles with item profiles. It recommends items with content similar to what you've liked before.

In content-based systems, the recommendations are directly related to the user's past behavior and do not involve other users' preferences. This system is more personalized but can suffer from a lack of diversity in recommendations since it's based solely on your previous actions.

Both systems have their strengths and weaknesses, and often, modern recommendation engines use a hybrid approach (think Netflix), combining elements of both to provide more accurate and diverse suggestions.


### Warp
Weighted Approximate-Rank Pairwise loss (WARP loss) was first introduced in [WSABIE: Scaling Up To Large Vocabulary Image Annotation](http://www.thespermwhale.com/jaseweston/papers/wsabie-ijcai.pdf) by Weston et al. WARP is quite similar to BPR: you sample a positive and negative item for a user, predict for both, and take the difference. In BPR, you then make the SGD update with this difference as a weight. In WARP, you only run the SGD update if you predict wrongly, i.e., you predict the negative item has a higher score than the positive item. If you do not predict wrong, then you keep drawing negative items until you either get the prediction wrong or reach some cutoff value.

# Links
- [Quick Tutorial](https://www.youtube.com/watch?v=9gBC9R-msAk) 
- [LightFM introduction and explanation by the person who made it. ](https://youtu.be/EgE0DUrYmo8?si=zh6W72ArlmTgK2es)
- [Learning to Rank](https://www.ethanrosenthal.com/2016/11/07/implicit-mf-part-2/) About implicit ranking algorithms. 
- [Practical Recommendation Systems](../../Books/Book%20Reviews/Machine%20Learning/Modeling/Practical%20Recommendation%20Systems.md)

# Thoughts 
- I have not really delved that much into predictions based on other than collaborative filtering. I wonder if you can predict the most likely next item. So you have a data set of orders. You can remove one and then try to predict the next most common item. If you have a large store, then it might be more challenging to do this as the solution matrix would be large indeed. 


