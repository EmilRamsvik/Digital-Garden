---
Pages: 458
Author: Noah Gift
finished: 
tags:
  - books
  - digital-garden
  - mlops
  - data-science
  - devops
  - machine-learning
  - git
  - github
  - cloud
  - aws
  - azure
Date Finished: 2023-12-16
created: 2024-01-06T15:04
updated: 2025-05-20T14:02
---
# Practical MLOps


# 🚀 The Book in 3 Sentences
This book is a no-nonsense book about practical MLOps and how you should approach it to solve business problems. The book takes an even more hardline approach to automation and focuses on the concept of Kaizen ML, where continuous improvement and striving to make the feedback loop even shorter and the process more and more seamless. 

# 🎨 Impressions
*“Facts without Theory is chaos, Theory without facts is phantasy.* 
*Rules without ideas is prison. Ideas without rules is chaos.* 
Those quotes quite stuck with me on a philosophical level. 

Furthermore, I felt like there were a lot of good examples of how to approach ML and Data Science and how to make sure you focus on business value rather than technical aspects. 


# ✍️ My Top  Quotes

- *Why isn’t machine learning 10X faster? Most of the problem-building machine learning systems involve everything surrounding machine learning modeling: data engineering, data processing, problem feasibility, and business alignment. One issue with this is a focus on the “code” and technical details versus solving the business problem with machine learning. There is also a lack of automation and the issue of HiPPO (Highest Paid Person’s Opinions) culture. Finally, much of machine learning is not cloud native and uses academic datasets and academic software packages that don’t scale for large-scale problems.* 
 
- *The quicker the feedback loop (see Kaizen), the more time to focus on business problems* 
 
- *A common expression is if it is not automated, it’s broken.* 
 
- *CI is the process of continuously testing a software project and improving the quality based on these tests’ results.* 
 
- *Microservices A microservice is a software service with a distinct function that had little to no dependencies* 
 
- *A microservice is a software service with a distinct function that had little to no dependencies* 
 
- *Infrastructure as Code (IaC) is the process of checking the infrastructure into a source code repository and “deploying” it to push changes to that repository. IaC allows for idempotent behavior and ensures the infrastructure doesn’t require humans to build it out.* 
 
- *Through logging and other tools like application performance monitoring tools such as New Relic, Data Dog, or Stackdriver, monitoring and instrumentation are essentially collecting data about the behavior of an application in production or data science for deployed software systems.* 
 
- *Likewise, all MLOps team members should help develop and maintain the CI/CD system* 
 
- *One of the major things holding back machine learning projects is this necessary foundation of DevOps. After this foundation is complete, next is data automation, then platform automation, and then finally true ML automation, or MLOps, occurs.* 
 
- *Many commercial tools are evolving to do DataOps. One example includes Apache Airflow, designed by Airbnb, then later open sourced, to schedule and monitor its data processing jobs. AWS tools include AWS Data Pipeline and AWS Glue. AWS Glue is a serverless ETL (Extract, Load, Transform) tool that detects a data source’s schema and then stores the data source’s metadata.* 
 
- *Exercises Create a new GitHub repository with necessary Python scaffolding using a Makefile, linting, and testing. Then, perform additional steps such as code formatting in your Makefile. Using GitHub Actions, test a GitHub project with two or more Python versions. Using a cloud native build server (AWS Code Build, GCP CloudBuild, or Azure DevOps Pipelines), perform continuous integration for your project. Containerize a GitHub project by integrating a Dockerfile and automatically registering new containers to a Container Registry. Create a simple load test for your application using a load test framework such as locust or loader io and automatically run this test when you push changes to a staging branch.* 
- *Notice that the ls command is in the /bin directory. This “hint” shows that I can find other executables in this directory.* 
 
- *AWS Lambda is a function as a service (FaaS) technology that runs on the AWS platform. It has the name FaaS because an AWS Lambda function can be just a few lines of code—literally a function.* 
 
- *The general idea with this code example is to pick a greedy solution to make the change. Greedy algorithms work by always taking the best option first.* 
 
- *For MLOps, convergence, i.e., creating a model that finds a solution that won’t be improved by adding more data, is an essential operational issue.* 
 
- *One of the challenges of MLOps is how multidisciplinary the field is.* 
 
- *It is also essential to be aware of foundational skills for an organization wishing to do MLOps. In particular, this means a team must know the basics of cloud computing, including the Linux terminal and how to navigate it. Likewise, a firm understanding of DevOps—i.e., how to set up and use CI/CD—is a required component to do MLOps. This final exercise is an excellent test of your skills before diving into more nuanced topics later in the book and pulls together all of these foundational components into a minimalist MLOps-style project.* 
 
- *A microservice, on the other hand, is an application that is fully decoupled from system requirements like databases and can run independently.* 
 
- *This is a good suggestion. Pinning packages is always a great idea because you are safe from an update in a dependency being incompatible with the code your application needs. Be aware that pinning dependencies and never going through the chore of updating them isn’t a great idea.* 
 
- *Containers increase the entire ML architecture quality by reducing complexity since the images are already “baked.”* 
 
- *A pipeline is nothing more than a set of steps (or instructions) that can achieve a specific objective like publishing a model into a production environment when run. For* 
 
- *Monitoring, logging, and detailed metrics of production models (aside from model performance) are absolutely critical for a robust deployment strategy. I consider them crucial for deployment, but they are a core pillar of the robust DevOps practices* 
 
- *Continuous delivery and the practice of constant feedback is crucial for a robust workflow.* 
 
- *As this chapter proves, there is a lot of value in automation and continuous improvement of the feedback loop.* 
 
- *Shipping models into production is the number one objective, but doing so with very high confidence, in a resilient set of steps, is what you should strive for.* 
 
- *What are the differences between canary and blue-green deployments? Which one do you prefer? Why?* 
 
- *Rules without ideas is prison. Ideas without rules is chaos.* 
 
- *While AutoML is focused strictly on creating a model from clean data, KaizenML is about automating everything about the machine learning process and improving it.* 
 
- *The author Upton Sinclair famously said, “it’s difficult to get a man to understand something when his salary depends on his not understanding it.”* 
 
- *It took almost 100 years, from around 1880 to 1980, to fully automate switching calls by hand to make a machine do them, but it happened.* 
 
- *There really are two classes of self-handicapping strategies, real and feigned. “Real” self-handicapping involves placing visible obstacles to success in one’s own path.* 
 
- *“Feigned” self-handicapping, on the other hand, is in certain respects a less risky strategy, one in which the person merely claims that there were difficult obstacles in the path to success.* 
 
- *However, one of the golden rules of software engineering is to use the best tools you can for the task at hand. The* 
 
- *AutoML is an inflection point for data scientists because it shares similarities to other historical trends: automation and magical thinking.* 
 
- *Anything that can automate will automate. Accepting this trend instead of fighting it will lead to massively more productive workflows in machine learning.* 
 
- *All complex software systems require automation and simplification of critical components. DevOps is about automating the testing and deployment of software. MLOps is about doing this and also improving the quality of both data and machine learning models.* 
 
- *The Uber Engineering blog has a good breakdown of what problem a Feature Store solves.* 
 
- *According to Uber, it does two things: Allows users to add features they built into a shared Feature Store. Once features are in the Feature Store, they are easy to use in training and prediction.* 
 
- *One of the primary use cases for FLAML is to automate an entire modeling process with as little as three lines of code.* 
 
- *ELI5 ELI5 stands for “explain like I am five.” It allows you to visualize and debug machine learning models and supports several frameworks, including sklearn. SHAP SHAP is a “game-theoretic” approach to explain the output of machine learning models. In particular, it has excellent visualizations as well as explanations.* 
 
- *I tell them the safe choice is Amazon. It has the widest selection of technology and the largest market share. Once you master the AWS cloud, it is easier to master other cloud offerings since they also assume you might know AWS.* 
 
- *For larger organizations with different teams and big data, SageMaker is an excellent platform to focus on because it allows for fine-grained security and enterprise-level deployment and training.* 
 
- *Machine learning is not a one-and-done process. You must be committed to continually evaluating the data and the model’s accuracy as these change over time. As with all impactful projects, involve the SME (subject matter expert) early and often so that you can build the best understanding of the business problem and the data to be used for testing and validating your machine learning model.* 
 
- *Finally, if you are serious about using AWS as an individual, including starting a career as an AWS machine learning expert, it can be beneficial and lucrative to get certified* 
 
- *Azure has a service principal for access (and access control) to resources. When automating services and workflows, people tend to overlook or even attempt to simplify authenticating in general.* 
 
- *One of the many crucial factors for effective MLOps (of course inherited from DevOps best practices, covered in “DevOps and MLOps”) is good troubleshooting skills.* 
 
- *Azure describes its ML pipelines as a good fit for three distinct scenarios: machine learning, data preparation, and application orchestration* 
 
- *Remember that the most important thing to achieve as an MLOps engineer is to ship models to production, not reinvent cloud features.* 
 
- *Finally, the machine learning and AI capabilities coordinate in a product called Vertex AI. One advantage of Google’s approach is that it aims to be an MLOps solution from the beginning. The workflow of Vertex AI allows a structured approach to ML, including the following:* 
 
- *One of the most important and yet neglected areas of a project involves continuous integration. Testing is a fundamental component to doing both DevOps and MLOps.* 
 
- *Kubeflow (end-to-end ML platform for Kubernetes* 
 
- *The next step beyond this basic tutorial is to use either GKE (Google Kubernetes Engine), Google Cloud Run (container as a service), or Vertex AI to deploy a machine learning endpoint. You can use the Python MLOps Cookbook repo as a base to do this.* 
 
- *One of the crown jewels of the Google Cloud Platform is Google BigQuery, for a few reasons. One of the reasons is how easy it is to get started, and another reason is the widespread publicly available databases. A good list of Google BigQuery open datasets is available on this Reddit page* 
 
- *Finally, from an MLOps perspective, one of the killer features of Google BigQuery is the ability to train and host ML models inside the Google BigQuery platform.* 
 
- *If starting an MLOps project at a larger company, the first place to start on GCP would be its Vertex AI platform, just like SageMaker on AWS or Azure ML Studio on Azure.* 
 
- *Peru has several thousand potato varieties. As someone who grew up in Peru, I find this surprising to hear.* 
 
- *The project started in 2017 when both Facebook and Microsoft presented ONNX as an open ecosystem for AI model interoperability and jointly developed the project and tooling to push forward the adoption.* 
 
- *For ML operations, in particular, it is critical to isolate responsibilities as much as possible from the process of getting models into production.* 
 
- *See HTTP access as access democracy: tremendous flexibility for other systems and languages to interact from their implementations into a separate service in a remote location using the HTTP spec.* 
 
- *“Facts without Theory is chaos, Theory without facts is phantasy.* 
 
- *There are many unlikely benefits to ignorance. Ignorance gives you the courage to try something challenging, where if you knew how difficult it was, you would never have done* 
 
- *As a professor, I teach machine learning at top universities and also am an industry practitioner. The academic tools like sklearn and pandas and the educational datasets on Kaggle are the “Kata.” These datasets and tools are necessary to “strip away” the real-world complexity to teach the material. A critical next step is to make the student aware that machine learning Kata is not real-world.* 
 
- *Implementing MLOps in your organization. First, here are a set of final, global recommendations: 
	1. Start with small wins. 
	2. Use the cloud, don’t fight the cloud.  Get you and your team certified on a cloud platform and an ML specialization. 
	4. Automate from the start of a project. An excellent initial automation step is the continuous integration of your project. Another way of putting this is that “if it isn’t automated, it is broken.” Practice Kaizen, i.e., continuous improvement with your pipeline. This method improves the software quality, the data quality, the model quality, and the customer feedback. 
	5. When dealing with large teams or big data, focus on using platform technology such as AWS SageMaker, Databricks, Amazon EMR, or Azure ML Studio. Let the platform do the heavy lifting for your team.
	6. Don’t focus only on the complexity of techniques, i.e., deep learning versus solving the problem with any tool that works. 
	7. Take data governance and cybersecurity seriously. One way to accomplish this is by using enterprise support for your platform and having regular audits of your architecture and practices. 
 
- *Finally, there are three laws of automation to consider when thinking about MLOps: 
	- Any task that talks about being automated will eventually be automated. 
	- If it isn’t automated, it’s broken.
	- If a human is doing it, a machine eventually will do it better.* 
 
- *A build server is an application that works in both the testing and deployment of software.* 
 

