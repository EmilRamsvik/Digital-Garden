---
tags:
  - article
  - mobile-development
  - programming
  - development
  - flutter
  - "#dart"
finished: false
created: 2023-05-30T13:28:00
updated: 2024-10-08T13:21
---


# Dart 
To my knowledge, Dart is a beautiful language that is completely null-safe. Dart is developed by Google and is a compiled static-typed language. Most of the development with Dart is for the Flutter framework.


## Types and Definitions

### Types
-  `num`: It's an abstract type that has two subclasses namely `int` (integer values) and `double` (64-bit floating-point numbers). 
2. `int`: As stated, this is used for integer values. For example, `int age = 18;`
3. `double`: This is used for decimal numbers. For example, `double pi = 3.14;`
4. `String`: This is used for a sequence of characters. For example, `String name = "Alice";`
5. `bool`: This is used for Boolean values, which can be either `true` or `false`. For example, `bool isOnline = true;`
6. `List`: Also known as Array in other languages, it is used to represent a collection of items. For example, `List<int> ages = [18, 20, 22];`
7. `Set`: This is a collection of unique items. It's similar to List but it doesn't contain duplicate values. For example, `Set<int> uniqueAges = {18, 20, 22};`
8. `Map`: This is used for a collection of key-value pairs. For example, `Map<String, int> nameToAge = {'Alice': 18, 'Bob': 20};`
9. `Runes`: In Dart, strings are a sequence of UTF-16 code units. If you want to express Unicode code points within a string, use the `runes` type.
10. `Symbol`: This type represents an operator or identifier declared in a Dart program. They are seldom used but can be crucial in meta-programming or when using reflections.
11. **`void`**: This is a special type in Dart that is used to represent the return type of a function when the function doesn't return a value. In other words, if a function is to perform some work that doesn't need to produce a result, `void` is used as the return type.

### Keywords for variables

`var`, `final`, and `const` are variable declaration keywords. They help in defining and controlling the properties of variables in Dart.

**`final`**: This keyword is used when you want a variable to be set only once and then prevent any future modifications. It means that a `final` variable can only be set once and it must be initialized when it's declared. It's important to know that `final` is evaluated at runtime, which allows you to calculate the value dynamically.
**`var`**: This is a keyword used to declare a variable without specifying its type. The Dart language is smart enough to infer the type of the variable from the assigned value, so you don't have to explicitly mention it every time. However, once a variable holds a value, its type is set and can't be changed.
**`const`**: This keyword is similar to `final` in that it's used to represent a constant value that can't be changed. The difference is that `const` values are defined at compile-time, which means you can't assign a dynamic value to a `const` variable.


# Flutter

Flutter is a framework for developing cross-platform applications. It is built upon the Dart language. 
Flutter is supported by Google. 

## Provider Package

I think the provider package is very useful for handling state and state-related things. 


# Links
- [Steve Yegge on Flutter](https://youtu.be/gSq58my05nY)
- [Robert Brunhage has a lot of good tutorials](https://www.youtube.com/@RobertBrunhage)
- [Flutter Introduction](https://flutteragencyinfo.medium.com/why-flutter-is-the-future-of-mobile-app-development-in-2024-846568efe461)
- [Stateful vs Stateless](https://www.redhat.com/en/topics/cloud-native-apps/stateful-vs-stateless)
- [Flutter Roadmap](https://roadmap.sh/flutter)

# Thoughts Brundage
- Flutter introduced me to the trials of state, which, when I started, became one of the hardest things to understand and work with. 
- Knowing all the widgets in Flutter is not the most important thing; instead, understanding the data flow is essential. 
- The most important thing to remember is CRUD and State. If you master those two things, then the rest is easy. 
- 


