---
tags:
  - article
  - pandas
  - programming
  - python
  - data-science
  - fast-api
Finished: false
created: 2023-08-09T09:33:00
updated: 2024-02-23T12:04
---
# Python


## Scripting 
I find Python to be very useful for scripting. I use scripting for a lot of small things such as working on 



## Data Science
Python is the dominant working language for data science and machine learning. 


### Links Data Science

- [Group by and Aggregation Guide](https://pbpython.com/groupby-agg.html) Understanding how to filter and aggregate data can make your analysis so much faster. A lot of the things that are happening in meetings with non-technical people is that new hypotheses and assumptions are created, so being able to filter and aggregate quickly makes you able to almost on the spot do verification of said hypothesis.  This can speed up the ideation phase of the data science life cycle considerably. 
- [Surprise Libary for recomendation system](https://surpriselib.com/)

## Web Development


### Boring setup for Python dependencies
- 1. Start project (mkdir, git init),
- 2. Make virtualenv using virtualenvwrapper,
- 3. Write project.toml file for setuptools,
- 4. pip install -e .
- 5. To add deps, add them to pyproject.toml and repeat step 4. Do not pip install deps directly. Do not pin deps to any particular version, but if you have to you can add constraints like >=5 (I need a feature introduced in v5).
- 6. If you are writing a package to be pip installed by others then you're done. Read setuptools docs for how to build etc.
- 7. If you also want to build an environment to run your code (e.g. docker image for deployment or serverless deployment etc) use pip-tools to pin your dependencies. (This is the only reason you need requirements.txt).
- 8. For test dependencies (e.g. pytest) or dev dependencies (e.g. test server) leverage optional dependencies in the pyproject.toml file. This plays very nicely with tools like tox, which you should use. Use pre-commit for linting etc.
# Links
- [Python Learning Resources](https://learnbyexample.github.io/py_resources/)
- 

# Thoughts 
- 


