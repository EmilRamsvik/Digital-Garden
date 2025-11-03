---
created: 2025-10-23 15:37
updated: 2025-10-28T16:29
Pages: 534
Author: Chip Huen
finished: false
Date Finished: 2025-10-23
tags:
  - books
  - digital-garden
  - book-review
  - software-engineering
  - technology
  - machine-learning
  - llms
  - technical
  - programming
  - ai-engineering
  - system-design
  - prompt-engineering
  - model-deployment
  - performance-optimization
  - foundation-models
---

# AI Engineering

# The Book in 3 Sentences
This book provides a comprehensive overview of AI engineering practices, focusing on working with foundation models like GPT-4 and Gemini. It covers key concepts from model evaluation metrics (perplexity, BLEU) to deployment strategies (batching, model gateways), while emphasizing practical aspects like prompt engineering, fine-tuning, and RAG implementation.

The book distinguishes AI engineering from traditional ML engineering, highlighting how it's more about adapting and evaluating existing models than developing new ones. It provides detailed technical guidance on model optimization, latency management, and system design considerations for AI applications.

#  Impressions

The book appears to be highly technical yet accessible, offering practical insights rather than theoretical abstractions. What stands out is its balanced approach to different techniques - for instance, the clear distinction between when to use RAG (for facts) versus fine-tuning (for form). The content seems very current and pragmatic, though some sections feel like they could benefit from more real-world case studies.

# ️ My Top  Quotes

- For GPT-4, an average token is approximately ¾ the length of a word. So, 100 tokens are approximately 75 words. 
 
- While many people still call Gemini and GPT-4V LLMs, they’re better characterized as foundation models. The word foundation signifies both the importance of these models in AI applications and the fact that they can be built upon for different needs. 
 
- Microsoft (2023) proposed a framework for gradually increasing AI automation in products that they call Crawl-Walk-Run: Crawl means human involvement is mandatory. Walk means AI can directly interact with internal employees. Run means increased automation, potentially including direct AI interactions with external users. 
 
- In short, AI engineering differs from ML engineering in that it’s less about model development and more about adapting and evaluating models. 
 
- In general, finetuning techniques are more complicated and require more data, but they can improve your model’s quality, latency, and cost significantly. Many things aren’t possible without changing model weights, such as adapting the model to a new task it wasn’t exposed to during training. 
 
- They found that for compute-optimal training, you need the number of training tokens to be approximately 20 times the model size. This means that a 3B-parameter model needs approximately 60B training tokens. The model size and the number of training tokens should be scaled equally: for every doubling of the model size, the number of training tokens should also be doubled. 
 
- Note that an API’s JSON mode typically guarantees only that the outputs are valid JSON—not the content of the JSON objects. 
 
- Inconsistency is when a model generates very different responses for the same or slightly different prompts. 
 
- Hallucination is when a model gives a response that isn’t grounded in facts. 
 
- Intuitively, entropy measures how difficult it is to predict what comes next in a language. 
 
- A language model’s cross entropy on a dataset measures how difficult it is for the language model to predict what comes next in this dataset. 
 
- Perplexity is the exponential of entropy and cross entropy. Perplexity is often shortened to PPL. 
 
- If cross entropy measures how difficult it is for a model to predict the next token, perplexity measures the amount of uncertainty it has when predicting the next token. Higher uncertainty means there are more possible options for the next token. 
 
- Larger models, which are also more powerful models, consistently give lower perplexity on a range of datasets, 
 
- Perplexity is the highest for unpredictable texts, such as texts expressing unusual ideas (like “my dog teaches quantum physics in his free time”) or gibberish (like “home cat go eye”). Therefore, perplexity can be used to detect abnormal texts. 
 
- One way to measure lexical similarity is approximate string matching, known colloquially as fuzzy matching. It measures the similarity between two texts by counting how many edits it’d need to convert from one text to another, a number called edit distance. The usual three edit operations are: Deletion: “brad” -> “bad” Insertion: “bad” -> “bard” Substitution: “bad” -> “bed” 
 
- Some fuzzy matchers also treat transposition, swapping two letters (e.g., “mats” -> “mast”), to be an edit. However, some fuzzy matchers treat each transposition as two edit operations: one deletion and one insertion. 
 
- Common metrics for lexical similarity are BLEU, ROUGE, METEOR++, TER, and CIDEr. They differ in exactly how the overlapping is calculated. 
 
- Prompts with examples have been shown to perform better. If you use a scoring system between 1 and 5, include examples of what a response with a score of 1, 2, 3, 4, or 5 looks like, and if possible, why a response receives a certain score. 
 
- “The problem is not with prompt engineering. It’s a real and useful skill to have. The problem is when prompt engineering is the only thing people know.” 
 
- Each example provided in the prompt is called a shot. Teaching a model to learn from examples in the prompt is also called few-shot learning. With five examples, it’s 5-shot learning. When no example is provided, it’s zero-shot learning. 
 
- For GPT-3, few-shot learning showed significant improvement compared to zero-shot learning. 
 
- That as models become more powerful, they become better at understanding and following instructions, which leads to better performance with fewer examples. 
 
- When constructing inputs for a foundation model, make sure that your inputs follow the model’s chat template exactly. 
 
- Research has shown that a model is much better at understanding instructions given at the beginning and the end of a prompt than in the middle 
 
- Explain, without ambiguity, what you want the model to do 
 
- Ask the model to adopt a persona A persona can help the model to understand the perspective it’s supposed to use to generate responses. 
 
- Provide examples Examples can reduce ambiguity about how you want the model to respond. 
 
- As you experiment with different prompts, make sure to test changes systematically. Version your prompts. Use an experiment tracking tool. Standardize evaluation metrics and evaluation data so that you can compare the performance of different prompts. Evaluate each prompt in the context of the whole system. A prompt might improve the model’s performance on a subtask but worsen the whole system’s performance. 
 
- “Write your system prompt assuming that it will one day become public.” 
 
- This finding indicates that while finetuning can enhance a model’s performance on a specific task, it may also lead to a decline in performance in other areas. 
 
- For tasks that require up-to-date information, such as questions about current events, RAG outperformed finetuned models. Not only that, RAG with the base model outperformed RAG with finetuned models, as shown 
 
- If the model has behavioral issues, finetuning might help. One behavioral issue is when the model’s outputs are factually correct but irrelevant to the task. 
 
- Another issue is when it fails to follow the expected output format. For example, if you asked the model to write HTML code, but the generated code didn’t compile, it might be because the model wasn’t sufficiently exposed to HTML in its training data. 
 
- In short, finetuning is for form, and RAG is for facts. 
 
- In the early days of finetuning, models were small enough that people could finetune entire models. This approach is called full finetuning. In full finetuning, the number of trainable parameters is exactly the same as the number of parameters. 
 
- If you have fewer examples (100), more advanced models give you better finetuning performance. This is likely because the more advanced models already perform better out of the box. However, after finetuning on a lot of examples (550,000), all five models in the experiment performed similarly, 
 
- The paper “Scaling Instruction-Finetuned Language Models” (Chung et al., 2022) shows that model performance increased significantly when the number of finetuning tasks increased from 9 to 282. Beyond 282 tasks, the performance gains started to plateau, though there were still positive but incremental improvements up to 1,836 tasks, 
 
- If you can figure out a way to create a data flywheel that leverages data generated by your users to continually improve your product, you will gain a significant advantage. 
 
- Two processes commonly used are data augmentation and data synthesis: Data augmentation creates new data from existing data (which is real). For example, given a real image of a cat, you can flip it to create a new image of the same cat.8 Data synthesis generates data to mimic the properties of real data. For example, you can simulate how a mouse moves through a web page to generate data for what bot movements would look like. 
 
- Model distillation (also called knowledge distillation) is a method in which a small model (student) is trained to mimic a larger model (teacher 
 
- Distillation can produce a smaller, faster student model that retains performance comparable to the teacher. For example, DistilBERT, a model distilled from BERT, reduces the size of a BERT model by 40% while retaining 97% of its language comprehension capabilities and being 60% faster 
 
- Time to first token TTFT measures how quickly the first token is generated after users send a query. It corresponds to the duration of the prefill step and depends on the input’s length. 
 
- Time per output token TPOT measures how quickly each output token is generated after the first token. If each token takes 100 ms, a response of 1,000 tokens will take 100 s. 
 
- Time between tokens and inter-token latency Variations of this metric include time between tokens (TBT) and inter-token latency (ITL).9 Both measure the time between output tokens. The total latency will equal TTFT + TPOT × (number of output tokens). 
 
- The simplest batching technique is static batching. The service groups a fixed number of inputs together in a batch. It’s like a bus that waits until every seat is filled before departing. The drawback of static batching is that all requests have to wait until the batch is full to be executed. 
 
- Dynamic batching, on the other hand, sets a maximum time window for each batch. If the batch size is four and the window is 100 ms, the server processes the batch either when it has four requests or when 100 ms has passed, whichever happens first. It’s like a bus that leaves on a fixed schedule or when it’s full. 
 
- Continuous batching allows responses in a batch to be returned to users as soon as they are completed. It works by selectively batching operations that don’t cause the generation of one response to hold up another, 
 
- A model gateway provides access control and cost management. Instead of giving everyone who wants access to the OpenAI API your organizational tokens, which can be easily leaked, you give people access only to the model gateway, creating a centralized and controlled point of access. 
 
