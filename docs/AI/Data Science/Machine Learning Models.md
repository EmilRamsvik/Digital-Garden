---
created: 2023-12-04T13:14
updated: 2024-06-30T18:53
tags:
  - article
  - digital-garden
  - machine-learning
  - "#machine-learning/modeling"
  - "#data-science"
  - decision-trees
Finished: false
---
# Machine Learning Models


## Decision Trees
Deep Learning works really well for homogenous data, like images 
Gradient boosting shines with small amounts of data and diverse data sources. The two play well together, as we can implement the output of deep learning models into the boosting models. 

The mainstay of boosted trees are XGBoost, which is probably going to be the model performing the best. 

### XGBoost

### CatBoost

#### Pool 


#### Categorical features encoding parameters in CatBoost

The amount of parameters related to categorical feature processing in CatBoost is overwhelming. Here is hopefully the full list:
- `one_hot_max_size` (int) - use one-hot encoding for all categorical features with a number of different values less than or equal to the given parameter value. No complex encoding is performed for such features. _Default for regression task is 2._
- `model_size_reg` (float from 0 to inf) - The model size regularization coefficient. The larger the value, the smaller the model size. Refer to the Model size regularization coefficient section for details. This regularization is needed only for models with categorical features (other models are small). Models with categorical features might weight tens of gigabytes or more if categorical features have a lot of values. If the value of the regularizer differs from zero, then the usage of categorical features or feature combinations with a lot of values has a penalty, so fewer of them are used in the resulting model. _Default value is 0.5_
- `max_ctr_complexity` - The maximum number of features that can be combined. Each resulting combination consists of one or more categorical features and can optionally contain binary features in the following form: “numeric feature > value”. _For regression task on CPU the default value is 4._
- `has_time` (bool) - if `true`, the 1-st step of categorical features processing, permutation, is not performed. Useful when the objects in your dataset are ordered by time. For our dataset, we don't need it. _Default value is_ `False`
- `simple_ctr` - Quantization settings for simple categorical features.
- `combinations_ctr` - Quantization settings for combinations of categorical features.
- `per_feature_ctr` - Per-feature quantization settings for categorical features.
- `counter_calc_method` determines whether to use validation dataset(provided through parameter `eval_set` of `fit` method) to estimate categories frequencies with `Counter`. By default, it is `Full` and the objects from validation dataset are used; Pass `SkipTest` value to ignore the objects from the validation set
- `ctr_target_border_count` - The maximum number of borders to use in target quantization for categorical features that need it. _Default for regression task is 1._
- `ctr_leaf_count_limit` - The maximum number of leaves with categorical features. _Default value is None i.e. no limit._
- `store_all_simple_ctr` - If the previous parameter `ctr_leaf_count_limit` at some point gradient boosting tree can no longer make splits by categorical features. With _Default value_ `False` the limitation applies both to original categorical features and the features, that CatBoost creates by combining different features. If this parameter is set to `True` only the number of splits made on combination features is limited.

The three parameters `simple_ctr`, `combinations_ctr`, and `per_feature_ctr` are complex parameters that control the second and the third steps of categorical features processing. We will talk about them more in the next sections.

### Extreme Random Forrest. 



# Links
- [Machine Learning](https://madewithml.com/)

# Thoughts 
- 


