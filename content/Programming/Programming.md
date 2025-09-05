---
tags:
  - api
  - article
  - code-quality
  - computer-science
  - computers
  - dart
  - development
  - programming
  - python
  - rust
  - software-engineering
  - system-thinking
Finished: true
created: 2023-06-09 13:30:00
updated: 2025-09-02T10:15
---
# Programming



# Computers
An underrated aspect of programming is understanding computers; for engineers and self-taught programmers, it might be challenging to understand the intricacies of computers. 
[CPU course, what is a CPU]( https://cpu.land/ ) It is written by high-schoolers, so it is an exciting read. 



# API
How does one explain an API in a good way? It is quite a broad subject. On the one hand, what I first thought of as an API is just how you can talk with other computers through the internet; when people said there is an API for that, they meant that someone had made a database or service that you could get the data for. However, an API is more than that; it is a method of interfacing with other programs. The [Python](Python/Python.md) programming language is an API, and when I use a library from Microsoft or AWS, I use their API.

To me, thinking of an API as a contract is a useful metaphor. This 'contract' ensures that if you make a request in a specific, agreed-upon format, you will receive a predictable response. An API is a structurally agreed-upon way for two programs to interact with each other. 
- [Free Public API that are tested every day](https://www.freepublicapis.com/)


## On code Quality
As i am remindend of in [Zen & The Art of Motorcycle Maintenance](../Books/Book%20Reviews/Mich/Zen%20&%20The%20Art%20of%20Motorcycle%20Maintenance.md), quality is a very abstract term. However, in code, there is a strong emphasis on quality as a fundamental pillar of performance. What you write matters. 
Here are some numbers on code quality. 
- **Defects** — low quality code contains _15 times more defects_ than high quality code.
- **Development time** — resolving issues in low quality code takes on average _124% more time_ in development.
- **Uncertainty** — issue resolutions in low quality code involve higher uncertainty manifested as _9 times longer_ maximum cycle times.
In your average codebase, you can usually find around **~5% of the code that gets 90% of the activity**. This means that the pareto principle governs code bases and maintainability as well. 

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
- [Programming is mostly thinking](https://agileotter.blogspot.com/2014/09/programming-is-mostly-thinking.html).
- [Videoes with Crash Courses and other Guides](https://www.youtube.com/@NetNinja/playlists?view=1&sort=lad&flow=grid)
- [10k Hours of coding lessons](https://sotergreco.com/what-10000-hours-of-coding-taught-me-dont-ship-fast)
- [Good Software Development Habits](https://zarar.dev/good-software-development-habits/)

# Thoughts 
- My old boss said there are usually two roads to learning programming: the syntax and the underlying principles of programming. Switching languages after learning the latter is usually much more straightforward.  I agree with this statement to an extent, but I feel like it is more of the transitory phase where you first learn programming syntax and make the language do the heavy lifting, and then you become more proficient. With the concepts and logic, I become more into the latter category. 
- "Going to school to study software engineering is mostly good for understanding how to communicate with other software engineers. You understand the lingua" - Coworker. 
- "_Code is just the residue of the work._" - Tim Ottinger.
- "Code that is working in production is superior to code that has never operated in real life." - Tim Ottinger.
- You are not your code, and you are not your ideas. Do not take criticism of your work as criticism of you as a person. 
- [On Comments](https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29)