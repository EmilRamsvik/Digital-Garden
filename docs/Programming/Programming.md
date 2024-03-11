---
tags:
  - article
  - programming
  - computers
  - computer-science
  - python
  - rust
  - dart
Finished: false
created: 2023-06-09T13:30:00
updated: 2024-03-11T10:19
---
# Programming



# Computers
An underrated aspect of programming is understanding computers; for engineers and self-taught programmers, it might be challenging to understand the intricacies of computers. 
[CPU course, what is a CPU]( https://cpu.land/ ) It is written by high-schoolers, so it is an exciting read. 



### Base64 Encoding
Base64 is a method of encoding binary data into an ASCII text format using a set of 64 characters (hence the name "Base64"). This encoding is used when there is a need to encode binary data, especially in circumstances where the communication or storage medium only supports text, such as in emails or some older file systems.
This is useful when you need to send or expose files as a text string or other (type API/JSON). 
- **Encoding:** In Base64 encoding, the binary data is divided into 6-bit blocks. Each block is then mapped to a specific character from the Base64 character set (which includes A-Z, a-z, 0-9, '+', '/', and sometimes '=' for padding). This process converts the binary data into a text string, making it easier to handle in text-based systems.
- **Decoding:** Decoding is the reverse process where the Base64 encoded text is converted back into its original binary form. This is necessary because the actual binary data is needed for processing or displaying (like rendering an image in a browser).

### Basic Concepts of Asynchronous Programming

1. **Synchronous Programming**: Traditionally, most programming is synchronous, meaning tasks are performed one after another. Each task must complete before the next one starts.
2. **Asynchronous Programming**: In contrast, asynchronous programming allows multiple tasks to be processed in an overlapping manner. It's particularly useful for tasks that involve waiting (like waiting for data from a network), as it allows other tasks to run in the meantime.
##### How `async` Works

1. **Creating a Coroutine**: When you define a function with `async def`, it becomes a coroutine. It's important to note that simply defining a coroutine does not execute it.
    
2. **Awaiting a Coroutine**: To execute the coroutine, you must `await` it. The `await` keyword is used to pause the coroutine's execution and wait for its result.
    
3. **The Event Loop**: The core of asynchronous programming in Python is the event loop. When you await a coroutine, the event loop handles its execution. It schedules the coroutine's tasks and resumes their execution when the awaited operation (like an I/O task) is complete.
# Links
- [Uncle Bob sessions on Clean Code](https://www.youtube.com/playlist?list=PLmmYSbUCWJ4x1GO839azG_BBw8rkh-zOj) Interesting high-level talks on code and code writing and programming. Robert C Martin is very well known for the clean code standard, etc. 
- [Reduce Friction](https://blog.ceejbot.com/posts/reduce-friction/) Interesting blog post. 
	- The best time to reduce friction for your team was the moment it came into being, and the second best time is now.
	- *Process* is _the way you habitually do things_.
	- *Ceremony* is a thing you do every time, ritualistically, usually involving other people.
	- *Friction* is a useful metaphor here because each of those examples _oppose motion_: they demand more energy be invested in moving the project than would be required if they weren’t there.
	- A process that is predictable and time-consuming but has to be done by hand is _toil_.
	- Automate ruthlessly. This is where I have seen the most _surprising_ pushback. We’re programmers. Automating processes is what we do!
- [Recommended reading for developers](https://blog.codinghorror.com/recommended-reading-for-developers/) 
- [More Learning for Developers](https://matklad.github.io/2023/08/06/fantastic-learning-resources.html#Fantastic-Learning-Resources)
- [Reflections on a decade of coding.](https://www.scattered-thoughts.net/writing/reflections-on-a-decade-of-coding) 
- [FastAPI docs on async are very intuitive and good.](https://fastapi.tiangolo.com/async/)
- [Reflections on a decade of coding](https://www.scattered-thoughts.net/writing/reflections-on-a-decade-of-coding)
- [Three Virtues of a Great Programmer](https://thethreevirtues.com/)
- [Software Engineering Practices](https://thetechenabler.substack.com/p/software-engineering-practices-you)
- [Premature Optimization](https://www.youtube.com/watch?v=tKbV6BpH-C8&t=321s)

# Thoughts 
- My old boss said there are usually two roads to learning programming: the syntax and the underlying principles of programming. Switching languages after learning the latter is usually much more straightforward.  I agree with this statement to an extent, but I feel like it is more of the transitory phase where you first learn programming syntax and make the language do the heavy lifting, and then you become more proficient. with the concepts and logic and become more into the latter category. 
- 