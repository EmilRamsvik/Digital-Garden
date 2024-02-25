---
created: 2023-10-29T15:52
updated: 2024-02-25T18:31
Pages: 248
Author: Natu Lauchande
finished: true
Date Finished: 2024-02-16
tags:
  - books
  - digital-garden
  - book-review
---
#  Machine Learning Engineering with MLflow


# 🚀 The Book in 3 Sentences
Introduction to ML flow package and how to use it. It is basically an advanded user guide to help with understanding and applying MLFlow for machine learning projects.

# 🎨 Impressions



# ✍️ My Top  Quotes
- *MLflow is an open source platform for the machine learning (ML) life cycle, with a focus on reproducibility, training, and deployment.* 
 
- *As will be demonstrated, a non-trivial amount of code needs to be created in order to productionize and make sure that the preceding training code is usable and reliable. One of the main objectives of MLflow is to aid in the process of setting up ML systems and projects.* 
 
- *The mlflow.sklearn.autolog() instruction enables you to automatically log the experiment in the local directory.* 
 
- *• Mlflow Models: A mechanism that deploys to different types of environments, both on-premises and in the cloud* 
 
- *Mlflow Model Registry: A module that handles the management of models in MLflow and its life cycle, including state* 
 
- *The mlflow.sklearn.log_model(clf, "model_random_forest") method takes care of persisting the model upon training. In contrast to the previous example, we are explicitly asking MLflow to log the model and the metrics that we find relevant.* 
 
- *• Pilot: This involves evaluating and iterating over a machine learning algorithm in order to make the decision of whether to progress or not to the subsequent phase.* 
 
- *Production deployment: Upon successful piloting, we should be able to run the machine learning project in production and allow it to start receiving production traffic.* 
 
- *Success, in this case, is defined by the percentage of days in a month where the system predicted the correct direction of the market. Success is basically whether the system is accurate, from a market direction perspective, more than 60% of the time – basically, the expected value of being better than the random baseline.* 
 
- *The output of the model will be used to provide the Rest API with a true orfalse value based on a defined threshold of accuracy on the classification.* 
 
- *The expected latency for this problem is under 1,000 milliseconds.* 
 
- *Heuristics The simplest heuristic to solve this problem is using a random predictor for each input, with an equal probability of the market going up or down.* 

- *• docker: A folder that encloses the Docker images of the different subsystems that our environment consists of.  • docker-compose.yml: A file that contains the orchestration of different services in our workbench environment—namely: Jupyter Notebooks, MLflow, and PostgreSQL to back MLflow. • docs: Contains relevant project documentation that we want persisted for the project.* 
 
- *• requirements.txt: A requirements file to add libraries to the project. • src: A folder that encloses the source code of the project, to be updated in further phases of the project.  • tests: A folder that contains end-to-end testing for the code of the project.* 
 
- *Tox.ini: A templated file that controls the execution of unit tests.* 
 
- *A good analogy of an MLflow model is that it’s a bit like a Dockerfile for a model, where you describe metadata of the model, and deployment tools upstream are able to interact with the model based on the specification.* 
 
- *A feature store is a software layer on top of your data to abstract all the production and management processes for data by providing inference systems with an interface to retrieve a feature set that can be used for inference or training.* 
 
- *Feast Architecture (retrieved from https://docs.feast.dev/* 
 
- *The Ray framework (https://docs.ray.io/en/master/) is a distributed platform that allows you to quickly scale the deployment infrastructure* 
 
- *Monitoring is at the cornerstone of reliable ML systems able to consistently unlock the value of data and provide critical feedback for improvement.* 
 
- *AWS CloudWatch provides a monitoring and observability solution.* 
 

