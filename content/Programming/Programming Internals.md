---
created: 2023-12-04T13:14
updated: 2025-09-02T10:15
tags:
  - article
  - async
  - base64
  - computer-science
  - data
  - digital-garden
  - programming
  - python
  - technical
  - web-development
Finished: false
---

# Programming Internals
I made this article to filter out a lot of the more computer sciency things in programming.

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
- 

# Thoughts 
- 


