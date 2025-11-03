---
created: 2023-10-29T15:52
updated: 2025-09-02T10:07
Pages: 440
Author: Brett Slatkin
finished: true
Date Finished: 2024-11-03
tags:
  - book-review
  - books
  - coding-practices
  - digital-garden
  - error-handling
  - programming
  - pytest
  - python
  - software-development
---
# Effective Python


# 🚀 The Book in 3 Sentences
This book covers a list of interesting tips and tricks on using Python effectively. It is built up of chapters that covers a lot of different 

# 🎨 Impressions
I had some good moments, but I still feel like I struggle with the work on concurrency and Python internals. 
One interesting thing is to not use None as a return value on functions as they are not that great. 
The dynamic nature of the Python function makes it difficult to make sure the code is error-prone. Tests are basically the only way to be sure. 
# ✍️ My Top  Quotes

 
- Beware that indexing a list by a negative variable is one of the few situations in which you can get surprising results from slicing. For example, the expression somelist\[-n:\] will work fine when n is greater than one (e.g., somelist\[-3:\]). However, when n is zero, the expression somelist\[-0:\] will result in a copy of the original list.
 
- The rule of thumb is to avoid using more than two expressions in a list comprehension. This could be two conditions, two loops, or one condition and one loop. As soon as it gets more complicated than that, you should use normal if and for statements and write a helper function
 
- Use try/except/else to make it clear which exceptions will be handled by your code and which exceptions will propagate up. When the try block doesn’t raise an exception, the else block will run. The else block helps you minimize the amount of code in the try block and improves readability.
 
- Use try/except/else/finally when you want to do it all in one compound statement. For example, say you want to read a description of work to do from a file, process it, and then update the file in place.
 
- The try/finally compound statement lets you run cleanup code regardless of whether exceptions were raised in the try block.
 
- The else block helps you minimize the amount of code in try blocks and visually distinguish the success case from the try/except blocks.
 
- An else block can be used to perform additional actions after a successful try block but before common cleanup in a finally block.
 
 
- Functions that return None to indicate special meaning are error prone because None and other values (e.g., zero, the empty string) all evaluate to False in conditional expressions.
 
- Raise exceptions to indicate special situations instead of returning None. Expect the calling code to handle exceptions properly when they’re documented.
 
- There are two problems with accepting a variable number of positional arguments.  The first issue is that the variable arguments are always turned into a tuple before they are passed to your function. This means that if the caller of your function uses the * operator on a generator, it will be iterated until it’s exhausted. The resulting tuple will include every value from the generator, which could consume a lot of memory and cause your program to crash.
 
- The second issue with *args is that you can’t add new positional arguments to your function in the future without migrating every caller. If you try to add a positional argument in the front of the argument list, existing callers will subtly break if they aren’t updated.
 
- Optional keyword arguments should always be passed by keyword instead of by position.
 
- Using None for default argument values is especially important when the arguments are mutable. For example, say you want to load a value encoded as JSON data. If decoding the data fails, you want an empty dictionary to be returned by default.
 
- Dictionaries are so easy to use that there’s a danger of overextending them to write brittle code.
 
- Python’s built-in dictionary and tuple types made it easy to keep going, adding layer after layer to the internal bookkeeping. But you should avoid doing this for more than one level of nesting (i.e., avoid dictionaries that contain dictionaries). It makes your code hard to read by other programmers and sets you up for a maintenance nightmare.
  
- Python only supports a single constructor per class, the __init__ method. Use @classmethod to define alternative constructors for your classes.  Use class method polymorphism to provide generic ways to build and connect concrete subclasses.
 
- Diamond inheritance happens when a subclass inherits from two separate classes that have the same superclass somewhere in the hierarchy. Diamond inheritance causes the common superclass’s __init__ method to run multiple times, causing unexpected behavior.
 
- Always use the super built-in function to initialize parent classes.
 
- The only time to seriously consider using private attributes is when you’re worried about naming conflicts with subclasses. This problem occurs when a child class unwittingly defines an attribute that was already defined by its parent class.
 
- Use @property to give existing instance attributes new functionality.
 
- The standard implementation of Python is called CPython. CPython runs a Python program in two steps. First, it parses and compiles the source text into bytecode. Then, it runs the bytecode using a stack-based interpreter. The bytecode interpreter has state that must be maintained and coherent while the Python program executes. Python enforces coherence with a mechanism called the global interpreter lock (GIL).
 
- Python can work around all these issues with coroutines. Coroutines let you have many seemingly simultaneous functions in your Python programs. They’re implemented as an extension to generators (see Item 16: “Consider Generators Instead of Returning Lists”). The cost of starting a generator coroutine is a function call. Once active, they each use less than 1 KB of memory until they’re exhausted.
 
- Coroutines work by enabling the code consuming a generator to send a value back into the generator function after each yield expression. The generator function receives the value passed to the send function as the result of the corresponding yield expression.
 
- Decorators are Python syntax for allowing one function to modify another function at runtime.
 
- Using decorators can cause strange behaviors in tools that do introspection, such as debuggers.
 
- The with statement allows you to reuse logic from try/finally blocks and reduce visual noise.
 
- The Decimal class is ideal for situations that require high precision and exact rounding behavior, such as computations of monetary values.
 
- Documentation in Python is extremely important because of the dynamic nature of the language. Python provides built-in support for attaching documentation to blocks of code. Unlike many other languages, the documentation from a program’s source code is directly accessible as the program runs.
 
- If your function doesn’t return anything, it’s better to leave out any mention of the return value instead of saying “returns None.”
 
- If you don’t expect your function to raise an exception during normal operation, don’t mention that fact.
 
- If your function is a generator, then your docstring should describe what the generator yields when it’s iterated.
 
- Write documentation for every module, class, and function using docstrings. Keep them up to date as your code changes.
 
- Circular dependencies happen when two modules must call into each other at import time. They can cause your program to crash at startup.
 
- Dynamic imports are the simplest solution for breaking a circular dependency between modules while minimizing refactoring and complexity.
 
- Python doesn’t have static type checking. There’s nothing in the compiler that will ensure that your program will work when you run it. With Python you don’t know whether the functions your program calls will be defined at runtime, even when their existence is evident in the source code. This dynamic behavior is a blessing and a curse.
 
- The only way to have confidence in a Python program is to write tests.
- It can be difficult to understand how Python programs use and leak memory.
 
