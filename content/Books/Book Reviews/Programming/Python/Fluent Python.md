---
created: 2023-10-29T15:52
updated: 2025-04-10T12:59
Pages: 790
Author: Luciano Ramalho
finished: true
Date Finished: 2024-08-27
tags:
  - books
  - digital-garden
  - book-review
  - python
  - programming
  - programming/object-oriented
  - programming/meta
  - app-development
  - web-development
  - data-science
  - data-engineering
---
# Fluent Python


# 🚀 The Book in 3 Sentences
This book is a more advanced book on Python and dives more into the nitty-gritty of the language. It is about a lot of the core functionalities of Python and how they work. A lot of internal things, such as iterators, data objects and methods and functions, are discussed and analysed in detail. 

# 🎨 Impressions

It is nice to learn in detail some of the more advanced features of Python internals and how they work. 

I did find it somewhat difficult to read it as it was sometimes a bit too technical and not relatable to me.  But learning more in detail about Python data models and data structures was super intersting. Would hopefully have a lot of use for this later. 

# ✍️ My Top  Quotes

- *One of the best qualities of Python is its consistency. After working with Python for a while, you are able to start making informed, correct guesses about features that are new to you.* 
 
- *Also from The Zen of Python: “Special cases aren’t special enough to break the rules.”* 
 
- *To initialize tuples, arrays, and other types of sequences, you could also start from a listcomp, but a genexp saves memory because it yields items one by one using the iterator protocol instead of building a whole list just to feed another constructor.* 
 
- *If you write internationalized software, _ is not a good dummy variable because it is traditionally used as an alias to the gettext.gettext function,* 
 
- *The Pythonic convention of excluding the last item in slices and ranges works well with the zero-based indexing used in Python, C, and many other languages. Some convenient features of the convention are: It’s easy to see the length of a slice or range when only the stop position is given: range(3) and my_list\[:3\] both produce three items.  It’s easy to compute the length of a slice or range when start and stop are given: just subtract stop - start.  It’s easy to split a sequence in two parts at any index x, without overlapping: simply get my_list\[:x\] and my_list\[x:\].* 
 
- *This is no secret, but worth repeating just in case: s\[a:b:c\] can be used to specify a stride or step c, causing the resulting slice to skip items. The stride can also be negative, returning items in reverse.* 
 
- *Every Pythonista knows that d.get(k, default) is an alternative to d\[k\] whenever a default value is more convenient than handling KeyError.* 
 
- *Starting with Python 3.3, a random salt value is added to the hashes of str, bytes, and datetime objects. The salt value is constant within a Python process but varies between interpreter runs. The random salt is a security measure to prevent a DOS attack.* 
 
- *The dict type is an example of simplicity and correctness. It’s highly optimized to do one thing well: retrieve arbitrary keys.* 
 
- *The identity of a character—its code point—is a number from 0 to 1,114,111 (base 10), shown in the Unicode standard as 4 to 6 hexadecimal digits with a “U+” prefix. For example, the code point for the letter A is U+0041, the Euro sign is U+20AC, and the musical symbol G clef is assigned to code point U+1D11E. About 10% of the valid code points have characters assigned to them in Unicode 6.3, the standard used in Python 3.4.* 
 
- *Converting from code points to bytes is encoding; converting from bytes to code points is decoding.* 
 
- *The best practice for handling text is the “Unicode sandwich”. This means that bytes should be decoded to str as early as possible on input (e.g., when opening a file for reading). The “meat” of the sandwich is the business logic of your program, where text handling is done exclusively on str objects. You should never be encoding or decoding in the middle of other processing. On output, the str are encoded to bytes as late as possible* 
 
- *Programming language theorists define a “first-class object” as a program entity that can be: Created at runtime  Assigned to a variable or element in a data structure  Passed as an argument to a function  Returned as the result of a function  Integers, strings, and dictionaries are other examples of first-class objects in Python—nothing fancy here.* 
 
- *Programming language theorists define a “first-class object” as a program entity that can be: Created at runtime  Assigned to a variable or element in a data structure  Passed as an argument to a function  Returned as the result of a function* 
 
- *A function that takes a function as argument or returns a function as the result is a higher-order function. One example is map.*
 
- *If you find a piece of code hard to understand because of a lambda, Fredrik Lundh suggests this refactoring procedure: Write a comment explaining what the heck that lambda does.  Study the comment for a while, and think of a name that captures the essence of the comment.  Convert the lambda to a def statement, using that name.  Remove the comment.* 
 
- *An impressive functools function is lru_cache, which does memoization—a form of automatic optimization that works by storing the results of function calls to avoid expensive recalculations.* 
 
- *Around the year 2000, I was at a training in the United States when Guido van Rossum dropped by the classroom (he was not the instructor). In the Q&A that followed, somebody asked him which features of Python were borrowed from other languages. His answer: “Everything that is good in Python was stolen from other languages.”* 
 
- *A decorator is a callable that takes another function as argument (the decorated function). The decorator may perform some processing with the decorated function, and returns it or replaces it with another function or callable object.* 
 
- *Most decorators do change the decorated function.* 
 
- *This is not a bug, but a design choice: Python does not require you to declare variables, but assumes that a variable assigned in the body of a function is local. This is much better than the behavior of JavaScript, which does not require variable declarations either, but if you do forget to declare that a variable is local (with var), you may clobber a global variable without knowing.* 
 
- *A very practical decorator is functools.lru_cache. It implements memoization: an optimization technique that works by saving the results of previous invocations of an expensive function, avoiding repeat computations on previously used arguments. The letters LRU stand for Least Recently Used, meaning that the growth of the cache is limited by discarding the entries that have not been read for a while.* 
 
- *Alex refers to an object that is a replica of the object assigned to charles. The objects compare equal, because of the __eq__ implementation in the dict class. But they are distinct objects. This is the Pythonic way of writing the negative identity comparison: a is not b.* 
 
- *The ==  operator compares the values of objects (the data they hold), while **is** compares their identities.* 
 
- *By far, the most common case is checking whether a variable is bound to None. This is the recommended way to do it: x is None And the proper way to write its negation is: x is not None* 
 
- *The is operator is faster than == , because it cannot be overloaded, so Python does not have to find and invoke special methods to evaluate it, and computing is as simple as comparing two integer IDs.* 
 
- *However, using the constructor or \[:\] produces a shallow copy (i.e., the outermost container is duplicated, but the copy is filled with references to the same items held by the original container). This saves memory and causes no problems if all the items are immutable. But if there are mutable items, this may lead to unpleasant surprises.* 
 
- *Never, ever use two leading underscores. This is annoyingly private. — Ian Bicking Creator of pip, virtualenv, Paste and many other projects* 
 
- *The evolution of the example will be paused to discuss two conceptual topics: How and when to use the @classmethod and @staticmethod decorators.  Private and protected attributes in Python: usage, conventions, and limitations.* 
 
- *The classmethod decorator is clearly useful, but I’ve never seen a compelling use case for staticmethod.* 
 
- *To prevent this, if you name an instance attribute in the form __mood (two leading underscores and zero or at most one trailing underscore), Python stores the name in the instance __dict__ prefixed with a leading underscore and the class name, so in the Dog class, __mood becomes _Dog__mood, and in Beagle it’s _Beagle__mood. This language feature goes by the lovely name of name mangling.* 
 
- *Ward Cunningham, inventor of the wiki and an Extreme Programming pioneer, recommends asking “What’s the simplest thing that could possibly work?” The idea is to focus on the goal.
 
- *Protocols are not an invention of Python. The Smalltalk team, who also coined the expression “object oriented,” used “protocol” as a synonym for what we now call interfaces.* 
 
- *This is an example of monkey patching: changing a class or module at runtime, without touching the source code. Monkey patching is powerful, but the code that does the actual patching is very tightly coupled with the program to be patched, often handling private and undocumented parts.* 
 
- *However, even with ABCs, you should beware that excessive use of isinstance checks may be a code smell—a symptom of bad OO design.* 
 
- *Iteration is fundamental to data processing. And when scanning datasets that don’t fit in memory, we need a way to fetch the items lazily, that is, one at a time and on demand. This* 
 
- *The only syntax distinguishing a plain function from a generator function is the fact that the latter has a yield keyword somewhere in its body. Some argued that a new keyword like gen should be used for generator functions instead of def, but Guido did not agree.* 
 
