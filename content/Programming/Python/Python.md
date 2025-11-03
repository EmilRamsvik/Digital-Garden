---
tags:
  - article
  - data-science
  - development
  - fast-api
  - pandas
  - programming
  - python
  - testing
  - tools
  - web-development
Finished: true
created: 2023-08-09 09:33:00
updated: 2025-09-02T10:15
---
# Python


## Scripting 
I find Python to be very useful for scripting. I use scripting for a lot of small things, such as working on text parsing, simple automation and others.
I did, for example create a script for parsing book quotes from the Kindle ([Here is the script](https://github.com/EmilRamsvik/dotfiles/blob/master/scripts/get_quotes.py))


## Testing
[Pytest](Pytest.md) is a good tool for testing, also, with the invention of powerful agents and [Vibe-Coding](../../AI/Vibe-Coding.md), understanding tests and how to use them have been more powerful than ever. 

## Ecosystem

Managing dependencies in Python is one of the most challenging and annoying things to work on. You should not only understand the differences between Conda, pip-environments and Poetry. But also understand why you want to use each one and why you prefer the one you do. 

For simple tasks, I use pip with a virtual environment, I strive to be as consistent with creating environments as possible. I will work on using poetry more and more. 
### Environments
Python environments are some of the most annoying and tricky things to work with in the Python ecosystem. Package dependencies, package management, and determining which environment and Python version you're using are actually some of the biggest troubleshooting issues in Python.

1. PIP (PIP Install Packages :) ), which is the standard package manager and allows you to make a virtual environment. It is also a recursive abreviation which is funny. 
2. Conda, which is more integrated. I started with Conda, but after a while I found it really difficult to navigate.
3. [Poetry](https://python-poetry.org/). I haven't worked much with Poetry, but I think it's an improvement over pip and Conda. 
4. [UV](https://docs.astral.sh/uv/guides/install-python/). For me, UV is currently the best package manager and environment manager in the Python ecosystem. I think a lot of the good things in Python from the last few years have come from Astral ([Ruff](https://docs.astral.sh/ruff/) is awesome)

## Data Science
Python is the dominant working language for data science and machine learning. 


### Links Data Science

- [Group by and Aggregation Guide](https://pbpython.com/groupby-agg.html) Understanding how to filter and aggregate data can make your analysis so much faster. A lot of the things that are happening in meetings with non-technical people is that new hypotheses and assumptions are created, so being able to filter and aggregate quickly makes you able to almost on the spot do verification of said hypothesis.  This can speed up the ideation phase of the data science life cycle considerably. 
- [Surprise Libary for recomendation system](https://surpriselib.com/)

## Web Development

Python is excellent for web development. [FastAPI](FastAPI.md) is particularly compelling for building modern APIs with automatic documentation and type hints.

### Boring setup for Python dependencies
- 1. Start project (mkdir, git init),
- 2. Make virtualenv using virtualenvwrapper,
- 3. Write project.toml file for setuptools,
- 4. pip install -e .
- 5. To add deps, add them to pyproject.toml and repeat step 4. Do not pip install deps directly. Do not pin deps to any particular version, but if you have to, you can add constraints like >=5 (I need a feature introduced in v5).
- 6. If you are writing a package to be pip-installed by others then you're done. Read setuptools docs for how to build etc.
- 7. If you also want to build an environment to run your code (e.g. docker image for deployment or serverless deployment, etc) use pip-tools to pin your dependencies. (This is the only reason you need requirements.txt).
- 8. For test dependencies (e.g. pytest) or dev dependencies (e.g. test server), leverage optional dependencies in the pyproject.toml file. This plays very nicely with tools like tox, which you should use. Use pre-commit for linting etc. 
## Related Python Resources

### Python-specific Tools and Libraries
- [Pytest](Pytest.md) - Testing framework 
- [FastAPI](FastAPI.md) - Modern web framework
- [Pyinstrument to check performance](https://github.com/joerick/pyinstrument)

### Python Books
- [Python Tricks](../../Books/Book%20Reviews/Programming/Python/Python%20Tricks.md) - Practical techniques and idioms
- [Fluent Python](../../Books/Book%20Reviews/Programming/Python/Fluent%20Python.md) - Deep dive into Python's data model
- [Effective Python](../../Books/Book%20Reviews/Programming/Python/Effective%20Python.md) - Best practices and common pitfalls
- [Expert Python Programming](../../Books/Book%20Reviews/Programming/Python/Expert%20Python%20Programming.md) - Advanced concepts
- [Python Testing with pytest](../../Books/Book%20Reviews/Programming/Python/Python%20Testing%20with%20pytest.md) - Comprehensive testing guide

# Links
- [Python Learning Resources](https://learnbyexample.github.io/py_resources/)
- [Advanced python features you probably ain't gonna need](https://blog.edward-li.com/tech/advanced-python-features/)

# Thoughts 
- Mastering python is easier than other languages, but understanding python demands a lot. 
- If you are the best you know at python, you probably are like 3 out of 9 on a skill scale of best python programmers. 
- I think a good indicator of bad Python code is using internal functions as variable names. For example, if someone uses `sum = 0` in Python code, it's a clear code smell and a sign of bad coding practices.*This is a strong indication that the person may not know what they're doing.*