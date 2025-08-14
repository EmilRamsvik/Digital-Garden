---
Pages: 
Date Finished: 2023-04-16
Author: Michal Jaworksi
finished: true
tags:
  - books
  - programming
  - python
  - non-fiction
  - development
  - data-science
created: 2024-01-06T15:04
updated: 2025-08-13T14:55
---
# Expert Python Programming


# 🚀 The Book in 3 Sentences
A book about advanced Python concepts. Nice to learn about more advanced Python concepts. 

# 🎨 Impressions
I liked it, but some parts were very difficult for me to understand, and then I mostly skipped them. 

## How I Discovered It
I just wanted to read some Python literature. 

## Who Should Read It?
People who use Python as developers or data scientists may not apply. 

# ☘️ How the Book Changed Me


# ✍️ My Top  Quotes

- [awesome-python by vinta](https://github.com/vinta/awesome-python): This contains numerous references to interesting projects (mostly hosted on GitHub) and standard library modules divided into over 80 thematic categories.
 
- [pythonidae by svaksha](https://github.com/svaksha/pythonidae): This is focused on specific fields of science and technology where Python is frequently used, like mathematics, biology, chemistry, web development, physics, image processing, and many more.
 
- [*pycrumbs by kirang89](https://github.com/kirang89/pycrumbs): This is focused on interesting and valuable articles.
 
- That's because Flask has its own dependencies and those dependencies have their own dependencies. Such dependencies of dependencies are called transitive dependencies.
 
- There are two main ways that system-level isolation techniques can be used for development purposes: Machine virtualization, which emulates the whole computer system Operating system-level virtualization, known also as containerization, which isolates complete user spaces within a single operating system
 
- FROM image-name: This describes the base image that your image will be based on.
 
- COPY src. This copies files from the local build context (usually project files) and adds them to the container's filesystem.
 
- ADD src: This works similarly to COPY but automatically unpacks archives and allows src to be URLs.
 
- RUN: This runs a specified command on top of previous layers. After execution, it commits changes that this command made to the filesystem as a new image layer. ENTRYPOINT This configures the default command to be run as your container starts. If no entry point is specified anywhere in the image layers, then Docker defaults to /bin/sh -c, which is the default shell of a given image (usually Bash but can also be another shell).
 
- If a factory is torn down but the rationality that produced it is left standing, then that rationality will produce another factory. If a revolution destroys a government, but the systematic patterns of thought that produced that government are left intact, then those patterns will repeat themselves. . . . There’s so much talk about the system. And so little understanding.
 
- The SemVer standard assumes that a version specifier consists of, at most, three numerical segments: The MAJOR segment: Changing the MAJOR segment is a sign of a backward-incompatible change. Users updating between two major versions should expect that their code may no longer be working properly. The MINOR segment: Changing the MINOR segment is a sign of new backward-compatible feature upgrades. Users updating between two minor versions (within the same major version) should not expect their code to become invalid but may receive new functional enhancements. The PATCH segment: Changing the PATCH segment is a sign of bug fixes. Users updating between two patch versions (within the same major and minor versions) should expect some issues to be fixed but should not expect any other enhancements or new features.
 
- Starting from Python 3.6, you can use the _ (underscore) character to separate digits in numeric literals. This facilitates the increased readability of big numbers. Consider the following value assignment: account_balance = 100000000 With so many zeros, it is hard to tell immediately whether we are dealing with millions or billions. You can instead use an underscore to separate thousands, millions, billions, and so on: account_balance = 100_000_000 Now, it is easier to tell immediately that account_balance equals one hundred million without carefully counting the zeros.
 
- One of the best ways to better understand the general concept of functional programming is by familiarizing yourself with the basic terms of functional programming: Side effects: A function is said to have a side effect if it modifies the state outside of its local environment. In other words, a side effect is any observable change outside of the function scope that happens as a result of a function call. An example of such side effects could be the modification of a global variable, the modification of an attribute of an object that is available outside of the function scope, or saving data to some external service. Side effects are the core of the concept of OOP, where class instances are objects that are used to encapsulate the state of an application, and methods are functions bound to those objects that are supposed to manipulate the state of these objects. Procedural programming also heavily relies on side effects. Referential transparency: When a function or expression is referentially transparent, it can be replaced with the value that corresponds to its output without changing the behavior of the program. So, a lack of side effects is a requirement for referential transparency, but not every function that lacks side effects is a referentially transparent function. For instance, Python's built-in pow(x, y) function is referentially transparent, because it lacks side effects, and for every x and y argument, it can be replaced with the value of xy. On the other hand, the datetime.now() constructor method of the datetime type does not seem to have any observable side effects but will return a different value every time it is called. So, it is referentially opaque. Pure functions: A pure function is a function that does not have any side effects and that always returns the same value for the same set of input arguments. In other words, it is a function that is referentially transparent. Every mathematical function is, by definition, a pure function. Analogously, a function that leaves a trace of its execution for the outside world (for instance, by modifying received objects) is not a pure function. First-class functions: Language is said to contain first-class functions if functions in this language can be treated as any other value or entity. First-class functions can be passed as arguments to other functions, returned as function return values, and assigned to variables. In other words, a language that has first-class functions is a language that treats functions as first-class citizens. Functions in Python are first-class functions.
 
- from dataclasses import dataclass @dataclass(frozen=True) class FrozenVector: x: int y: int Such a frozen Vector data class becomes completely immutable, so you won't be able to modify any of its attributes. You can still add and subtract two Vector instances as in our example; these operations simply create new Vector objects.
 
- Functional programming is a paradigm where the program flow is achieved mainly through the evaluation of (mathematical) functions rather than through a series of steps that change the state of the program. Purely functional programs avoid the changing of state (side effects) and the use of mutable data structures.
 
- Concurrency and one of its manifestations, parallel processing, are among the broadest topics in the area of software engineering. Concurrency is such a huge topic that dozens of books could be written and we would still not be able to discuss all of its important aspects and models. The purpose of this chapter is to show you why concurrency may be required in your application, when to use it, and what Python's most important concurrency models are.
 
- When using multiple threads, it is very easy to exhaust any rate limit or simply—if the service does not throttle incoming requests—saturate the service to the level that it will not be able to respond to anyone. If done on purpose, this is known as a Denial-of-Service (DoS) attack.
 
- Two events are concurrent if neither can causally affect the other.
 
- For instance, the PostgreSQL database distinguishes three types of row-level events that can occur in either a table or a view: INSERT: Emitted when a new row is inserted UPDATE: Emitted when an existing row is updated DELETE: Emitted when an existing row is deleted
 
- And Python (together with default CPython implementation) has a few characteristics that aren't necessarily good for performance: Threading usability is greatly reduced for CPU-bound tasks due to the existence of Global Interpreter Lock (GIL) in CPython and is dependent on the Python implementation of choice Python is not a compiled language (in the way C and Go are) so it lacks many compile-time optimizations Python does not provide static typing and the possible optimizations that come with it
 
- files. It's hard to tell which layout is best so let's simply consider the following layout, which is the authors' favorite. ├── packagename/ │ └── __init__.py ├── tests/ │ ├── __init__.py │ └── conftest.py ├── bin/ ├── data/ ├── docs/ ├── README.md ├── LICENSE ├── setup.py ├── setup.cfg ├── MANIFEST.in └── CHANGELOG.md
 
- As the name says, the Twelve-Factor App consists of 12 rules: Codebase: One codebase tracked in a revision control system and many deploys Dependencies: Explicitly declare and isolate dependencies Config: Store configurations in the environment Backing services: Treat backing services as attached resources Build, release, run: Strictly separate build and run stages Processes: Execute the app as one or more stateless process Port binding: Export services via port binding Concurrency: Scale out via the process model Disposability: Maximize robustness with fast startup and graceful shutdown Dev/prod parity: Keep development, staging, and production as similar as possible Logs: Treat logs as event streams Admin processes: Run administration/management tasks as one-off processes
 
- Once you have access to a Sentry server and have created a new project, you will obtain a string called a Data Source Name (DSN) string. This DSN string is the minimal configuration setting needed to integrate your application with Sentry.
 
