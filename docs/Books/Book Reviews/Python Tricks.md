---
Pages: 301
Author: Dan bader
finished: true
tags:
  - books
  - digital-garden
  - python
  - programming
Date Finished: 2023-12-08
created: 2024-01-06T15:04
updated: 2024-01-07T17:55
---
# Python Tricks


# 🚀 The Book in 3 Sentences
This book is just a lot of neet tricks to use in python.  It contains knowledge about structures in python, wrappers to use, and a lot of lot more. Nice for a developer with some python knowledge. 

# 🎨 Impressions
Fun and light read without too much work

# ☘️ How the Book Changed Me


# ✍️ My Top  Quotes

- *Caveat #1 – Don’t Use Asserts for Data Validation* 
 
- *Smart formatting and comma placement can make your list, dict, or set constants easier to maintain. Python’s string literal concatenation feature can work to your benefit, or introduce hard-to-catch bugs.* 
 
- *When it comes to variable and method names, the single underscore prefix has a meaning by convention only. It’s a hint to the programmer—it means what the Python community agrees it should mean, but it does not affect the behavior of your programs.* 
 
- *The underscore prefix is meant as a hint to tell another programmer that a variable or method starting with a single underscore is intended for internal use.* 
 
- *Single underscores are a Python naming convention that indicates a name is meant for internal use. It is generally not enforced by the Python interpreter and is only meant as a hint to the programmer* 
 
- *In summary, a single trailing underscore (postfix) is used by convention to avoid naming conflicts with Python keywords.* 
 
- *Double underscores are often referred to as “dunders” in the Python community. The reason is that double underscores appear quite often in Python code, and to avoid fatiguing their jaw muscles, Pythonistas often shorten “double underscore” to “dunder.”* 
 
- *These dunder methods are often referred to as magic methods—but many people in the Python community, including myself, don’t like that word. It implies that the use of dunder methods is discouraged, which is entirely not the case. They’re a core feature in Python and should be used as needed. There’s nothing “magical” or arcane about them.* 
 
- *Per convention, a single stand-alone underscore is sometimes used as a name to indicate that a variable is temporary or insignificant.* 
 
- *You can also use single underscores in unpacking expressions as a “don’t care” variable to ignore particular values.* 
 
- *Dan’s Python String Formatting Rule of Thumb: If your format strings are user-supplied, use Template Strings to avoid security issues. Otherwise, use Literal String Interpolation if you’re on Python 3.6+, and “New Style” String Formatting if you’re not.* 
 
- *Functions that can accept other functions as arguments are also called higher-order functions. They are* 
 
- *Functions that can accept other functions as arguments are also called higher-order functions. They are a necessity for the functional programming style.* 
 
- *Functions are objects—they can be assigned to variables and passed to and returned from other functions Functions can be defined inside other functions—and a child function can capture the parent function’s local state (lexical closures* 
 
- *This clearly shows in what order the decorators were applied: from bottom to top.* 
 
- * *args collects extra positional arguments as a tuple. ** kwargs collects the extra keyword arguments as a dictionary.* 
 
- *Putting a * before an iterable in a function call will unpack it and pass its elements as separate positional arguments to the called function.* 
 
- *Besides the * operator for unpacking sequences like tuples, lists, and generators into positional arguments, there’s also the ** operator for unpacking keyword arguments from dictionaries. Imagine our vector was represented as the following dict object:* 
 
- *Shallow copy means constructing a new collection object and then populating it with references to the child objects found in the original. In essence, a shallow copy is only one level deep. The copying process does not recurse and therefore won’t create copies of the child objects themselves. A deep copy makes the copying process recursive. It means first constructing a new collection object and then recursively populating it with copies of the child objects found in the original. Copying an object this way walks the whole object tree to create a fully independent clone of the original object and all of its children.* 
 
- *First of all, namedtuples are immutable containers, just like regular tuples. Once you store data in top-level attribute on a namedtuple, you can’t modify it by updating the attribute. All attributes on a namedtuple object follow the “write once, read many” principle.* 
 
- *However, if you try to access an instance variable through the class, it’ll fail with an AttributeError. Instance variables are specific to each object instance and are created when the __init__ constructor runs—they don’t even exist on the class itself.* 
 
- *Class variables are for data shared by all instances of a class. They belong to a class, not a specific instance and are shared among all instances of a class.* 
 
- *Instance variables are for data that is unique to each instance. They belong to individual object instances and are not shared among the other instances of a class. Each instance variable gets a unique backing store specific to the instance.* 
 
- *In summary, dictionaries are one of the most frequently used and most important data structures in computer science.* 
 
- *Dictionaries are the central data structure in Python. The built-in dict type will be “good enough” most of the time. Specialized implementations, like read-only or ordered dicts, are available in the Python standard library.* 
 
- *If condition\]* 
 
- *Both are useful tools in practice. There’s one caveat to Python’s comprehensions though—as you get more proficient at using them, it becomes easier and easier to write code that’s difficult to read. If you’re not careful, you might have to deal with monstrous list, set, and dict comprehensions soon.* 
 
- *Generators look like regular functions but instead of using the return statement, they use yield to pass data back to the caller.* 
 
- *This is a recurring theme in Python and in other programming languages. As more developers use a design pattern in their programs, there’s a growing incentive for the language creators to provide abstractions and implementation shortcuts for it.* 
 
- *By chaining together multiple iterators you can write highly efficient data processing “pipelines.” The first time I saw this pattern in action in a PyCon presentation by David Beazley, it blew my mind.* 
 
- *Generators can be chained together to form highly efficient and maintainable data processing pipelines. Chained generators process each element going through the chain individually. Generator expressions can be used to write concise pipeline definitions, but this can impact readability.* 
 
- *After doing some digging in the Python documentation, I learned that Python treats bool as a subclass of int. This is the case in Python 2 and Python* 
 
