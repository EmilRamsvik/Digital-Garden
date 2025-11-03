---
Finished: true
tags:
  - article
  - business-analysis
  - data-science
  - data/eda
  - dataeda
  - design-sprint
  - design-thinking
  - digital-garden
  - machine-learning
  - problem-solving
  - project-management
  - strategy
created: 2024-01-06T15:04
updated: 2025-09-02T10:16
---


# Data Science Project Start-Up Phase
The start-up phase of a data science project is, for me, one of the most exciting parts of the project, but it is also one of the most unclear phases. To have a fighting chance of making it to production, there are several factors that are extremely important and need to be addressed. 

The most important part is the non-technical objective functions, which can be loosely stated as:
*What do you want to achieve within what constraints?* 
As an example, we can use price optimization in an e-commerce setting. The first intuitive objective is to maximize the earnings from the product. But, if the constraints are not there, for example, while having a retention rate that is high enough, the objective function might lead to bad results, optimizing for single purchases. 

A great way to start ideation with the objective function is to focus on the problem and learn how to describe it, not accepting solutions by themselves.  By describing the problem, the solution can be reached as a consensus and free from legacies that lead to non-optimal results. 

Another great way to challenge solutions comes from the first-principles methodology, where the first step is to make the requirements *less dumb*. This means that you ask why a lot and try to understand the requirements *raison-d´etre*, or reason for existence. The reason might be redundant or even harmful to solving the current problem. 

*Always challenge assumptions, and always try to remove layers until you get to the core of the problem.*

## Data Exploration in Start-Phase
A big problem in data science related projects is that to understand the data and exploit it to its fullest potential, there is a need to understand the data. 
A good starting phase is to talk with business analysts and have sessions with data engineers, analysts, or others using the tools that are available. Playing around in PowerBI might give some quick intuitions about the capabilities of ML models, the data quality, and the data availability. 

In traditional software projects, most of the responses to implementing features will be *yes*, but with some caveats (Might be complex, might lead to technical debt, etc.). However, with data science projects, the most common response will be *maybe*; it depends on the data.  Therefore, having a grasp of the data foundation can help concretize the problem statement and help data scientists explain the requirements. 



### Constraints and Opportunities of Machine Learning
Before a machine learning project starts, it must be prioritized, and the team working on the project must be built. The key considerations in the prioritization of a machine learning project, are impact and cost.
The impact of using machine learning is high when,
1.  Machine learning can replace a complex part in your engineering project, or 
2. there’s a great benefit in getting inexpensive (butprobably imperfect) predictions.
The cost of the machine learning project is highly influenced by three factors: 
1. The difficulty of the problem.
2. The cost of data. 
3.  The needed model performance quality.
The progress of a machine learning project is nonlinear. The error usually decreases fast in the beginning, but then the progress slows down. Because of this nonlinearity of progress, it’s better to make sure that the client understands the constraints and the risks. Carefully log every activity and track the time it took
A machine learning projects can fail for many reasons, and most actually do. Typical reasons for a failure are:
- Lack of experienced talent,
- Lack of support by the leadership.
- Missing data infrastructure.
- Data labeling challenge.
- Siloed organizations and lack of collaboration.
- Technically infeasible projects.
- Lack of alignment between technical and business teams.
# Links
- [DS Project Quick Start](https://eugeneyan.com/writing/project-quick-start/) 
	- A good note from the article: clean the Jupyter notebooks weekly and refactor code into ```.py```files instead of copy-pasting cells.  *My thoughts on this are that it is quite easy to assume the functions just "work." However, if not in some sort of testing regime, it is quite easy to fall into traps and change the functions and have to restart notebooks all the time.*
- [AutoML packages that can be useful. ](https://www.activestate.com/blog/the-top-10-automl-python-packages-to-automate-your-machine-learning-tasks/)
- [Google Machine Learning Problem Framing](https://developers.google.com/machine-learning/problem-framing)
- *[AWS Guide to ML Problem Framing](https://docs.aws.amazon.com/wellarchitected/latest/machine-learning-lens/machine-learning-lens.html)* 
 

# Thoughts 
- Data Centric AI should have significant considerations here. 
- This might be one of the hardest ways to 
- Data Science projects and Machine learning projects probably have a lot to learn from how large projects are being done. The planning stage is super important for all types of major endeavors, as well as having an experienced leadership that has done things like this before. [How Big Things Get Done](../../Books/Book%20Reviews/Science/World/How%20Big%20Things%20Get%20Done.md)





