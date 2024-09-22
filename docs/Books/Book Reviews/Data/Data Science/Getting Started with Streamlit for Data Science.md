---
created: 2023-10-29T15:52
updated: 2024-08-15T11:37
Pages: 282
Author: Tyler Richards
finished: true
Date Finished: 2024-01-08
tags:
  - books
  - digital-garden
  - book-review
  - streamlit
  - data/data-visualization
  - data
  - python
  - deployment
  - dashboards
---
# Getting Started with Streamlit for Data Science
# 🚀 The Book in 3 Sentences
This book is a welcoming introduction to a Python module that has seen rapid growth. It offers a brief overview of the application's capabilities and shows how its user-friendly nature makes it an inclusive tool for both new and experienced data scientists. 

# 🎨 Impressions
It was a good book; I liked that I had some very brief experience with it before starting. I just did the Hello World application, plus some other stuff. I think it is a very interesting tool for data scientists to use and deploy; I bet there are a ton of applications that live protected by a simple password. 

Deployment is key here; being able to deploy easily would be something that would be very interesting to look into. 
# ✍️ My Top  Quotes

- *Streamlit is a web application framework that helps you build and develop Python-based web applications that can be used to share analytics results, build complex interactive experiences, and illustrate new machine learning models.* 
 
- *I truly believe that Streamlit could be as valuable to you and your work as it has been to mine and wrote this to bring you quickly up to speed so you can accelerate your learning curve and get to building web applications in minutes and hours instead of days.* 
 
- *Streamlit run and then pointing Streamlit toward the Python script that houses our app's code.* 
 
- *St.pyplot() is a function that lets us use all the power of the popular matplotlib library and push our matplotlib graph to Streamlit.* 
 
- *More specifically, st.title() will place a large block of text in our app, st.header() uses a slightly smaller font than st.title(), and st.subheader() uses an even smaller one. Other than those three, st.markdown() will allow anyone already familiar with Markdown to use the popular markup language in our Streamlit apps.* 
 
- *We broadly have two options for Streamlit development. Develop in Streamlit and st.write() as a debugger. Explore in Jupyter and then copy to Streamlit.* 
 
- *The easiest way to make a Streamlit app more efficient is through caching, which is storing some results in memory so that the app does not repeat the same work whenever possible.* 
 
- *Importing Python visualization libraries into Streamlit. In this section, we will cover the following libraries:  (a) Plotly (for interactive visualizations) (b) Seaborn+Matplotlib (for classic statistical visualizations) (c) Bokeh (for interactive visualization in web browsers) (d) Altair (for declarative, interactive visualizations) (e) PyDeck (for interactive map-based visualizations* 
 
- *We can use the st.stop() function to stop the app from running if the password is incorrect using the following code:* 
 
- *Password_guess = st.text_input('What is the Password?') if password_guess != st.secrets\["password"\]: st.stop(* 
 
- *Throughout this chapter, we'll work with elements including sidebars, columns, colors, and themes to extend our ability to make beautiful Streamlit applications.* 
 
- *However, Streamlit allows us to format our app into dynamic columns using the st.beta_columns() feature. As of now, the columns feature is in beta* 
 
- *Col1, col2, col3 = st.beta_columns((1,1,1)) with col1: st.write('First column') with col2: st.write('Second column') with col3: st.write('Third column'* 
 
- *St.beta_columns() defines three columns of equal length, and we use the with notation to print some text in each. We can also call the st.write() function (or any other Streamlit function that writes content to our Streamlit app) directly on our predefined columns for the same outcome, as shown in the following code.* 
 
- *Streamlit allows us to configure a few essential page-specific features at the top of each Streamlit app.* 
 
- *Getting specific colors in user input through the st.color_picker() feature, and finally learning how to use Streamlit themes.* 
 
- *Streamlit-lottie uses the lottie open source library to allow us to add web-native animations (such as a Graphics Interchange Format (GIF) file) into our Streamlit apps. It is frankly a wonderful library for beautifying Streamlit apps and was created by Andy Fanilo, a prolific Streamlit app creator.* 
 
- *The popular pandas Python library is the standard Python data analysis library and often tops the list of the most popular and useful Python libraries for data scientists. pandas-profiling creates an automatically generated EDA on top of any DataFrame we create and shows us everything, from descriptive statistics to how many duplicate rows we have.* 
 
- *Streamlit Sharing is quick, easy, and very effective for most applications but has a few downsides, mainly that we are limited by only being able to host three free applications at once and that we also are limited in the computational power at hand.* 
 
- *Heroku account: Heroku is a popular platform that data scientists and software engineers use to host their applications, models, and APIs (application programming interfaces), and is owned by Salesforce.* 
 
- *Heroku Command-Line Interface (CLI): To use Heroku effectively, we will need to download the Heroku CLI, which will allow us to run Heroku commands.* 
 
- *Heroku is slightly faster and simpler than AWS, and more cumbersome than Streamlit Sharing.* 
 
- *AWS has literally hundreds of service options for everything from deploying ML models to compute resources to everything in between. In this book so far, we have referred to the services listed in the following screenshot under the central name AWS, but to be more precise, we are going to be using Amazon Elastic Compute Cloud, or Amazon EC2 for short.* 
 
- *We need to set our Security settings in a way to allow other users online to interact with our web app by adding a new Transmission Control Protocol (TCP) rule by clicking Add Rule and setting the Port Range column to 8501, the custom Streamlit port.* 
 
- *Often, AWS commands feel like magic incantations, especially when you are first getting started.* 
 
- *Comprehension of a topic goes through the roof when I actually apply it myself in practice. Streamlit is perfect for this. It allows you to give new ideas a shot in a responsive, fun environment that can be easily shared with others. Learning data science can be collaborative, which leads me to the next reason for creating data projects in Streamlit.* 
 
- *One feature currently in beta on Streamlit for Teams but with an expected release date of late 2021 is Google-based single sign-on (SSO) authentication for our applications.* 
 
- *NumPy was certainly pre 1.0, and there was kind of this revelation that there was this amazing library called NumPy, all of a sudden, that made Python as good as MATLAB, and then after a while, way was better than MATLAB. That was the beginning of Python becoming the dominant language of numerical computation, and then ultimately machine learning.* 
 
