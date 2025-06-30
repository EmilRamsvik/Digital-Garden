---
created: 2023-12-04T13:14
updated: 2025-06-14T13:41
tags:
  - article
  - digital-garden
  - training
  - LLM
  - ai
  - ml
  - mlops
Finished: false
---

# Finetuning

When it comes to finetuning, it is a concept that has been introduced when it comes to large models, such as [Large Language Models](../../Tools/Large%20Language%20Models.md) and [Computer Vision](../Data%20Science/Computer%20Vision.md) 
models. The concept of fine-tuning is taking a general model, which is trained to be generally useful, and training it on more specific data to make it better at that concrete tasks. 

Remember, if you can overfit, you can predict. 
### Understanding the cost
I think a problem with finetuning is that when it is talked about, the cost is not properly understood, or vastly undervalued. 

One of biggest advantages of LLMs is the extremely low implementation cost of it. For all intents and purposes, it is an api and a prompt. That is extremely low implementation cost compared to a traditional ML project, which has extreme implementation costs. 

So by taking a generally useful model out of the box, and introducing not only compute cost of finetuning, but also model storage, training data curation, hosting and also checking performance of model compared to base model is not trivial. That is not a trivial decision. And how much better will performance be. How will the extra time/effort you choose to spend affect model/product development? Your time is extremely limited and compounding effects are real. Any effort spent on finetuning will take eventual progress on other development away. 

**Prompting is cheap**. Not in a specific cost-per-inference sense, but in the sense that development cost is cheap. Always err on the side of speed of implementation. You can always improve the LLM later with fine-tuning, but you cannot regain the experience and learning from implementing a model in production later. 

# Links
- [Tensorflow Hub for Finetuning](https://www.tensorflow.org/hub)
- [Good thoughts on fine-tuning from a technical perspective.](https://codinginterviewsmadesimple.substack.com/p/fine-tuning-llms-is-a-huge-waste) It is about the fact that finetuning is actually a knowledge overwrite, which introduces risk to inference. 

# Thoughts 
- I have never advocated for fine-tuning a model. 


