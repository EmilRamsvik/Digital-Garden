---
created: 2023-10-29T15:52
updated: 2025-06-16T17:00
Pages: 556
Author: Eric Evans
finished: true
Date Finished: 
tags:
  - books
  - digital-garden
  - book-review
---
# Domain Driven Design 


# 🚀 The Book in 3 Sentences
Domain driven design is one of the "cultures" of software architecting. It is a book about how this works and how it can be implemented. Very technical. 

# 🎨 Impressions
I found the book to be quite tedious to read. 


# ✍️ My Top  Quotes

- *Developers and domain experts have a close relationship.* 
 
- *A model is a simplification. It is an interpretation of reality that abstracts the aspects relevant to solving the problem at hand and ignores extraneous detail.* 
 
- *That subject area to which the user applies the program is the domain of the software. Some domains involve the physical world: The domain of an airline-booking program involves real people getting on real aircraft. Some domains are intangible: The domain of an accounting program is money and finance.* 
 
- *The model and the heart of the design shape each other. It is the intimate link between the model and the implementation that makes the model relevant and ensures that the analysis that went into it applies to the final product, a running program.* 
 
- *The model is distilled knowledge. The model is the team's agreed-upon way of structuring domain knowledge and distinguishing the elements of most interest.* 
 
- *Programmers can show business experts technical artifacts, even code, that should be intelligible to domain experts* 
 
- *Use the model as the backbone of a language. Commit the team to exercising that language relentlessly in all communication within the team and in the code. Use the same language in diagrams, writing, and especially speech.* 
 
- *Recognize that a change in the UBIQUITOUS LANGUAGE is a change to the model.* 
 
- *Domain experts should object to terms or structures that are awkward or inadequate to* 
 
- *For example, when people of different language backgrounds come together for commerce, if they don't have a common language they invent one, called a pidgin.* 
 
- *The vital detail about the design is captured in the code.* 
 
- *MODEL-DRIVEN DESIGN has limited applicability using languages such as C, because there is no modeling paradigm that corresponds to a purely procedural language. Those languages are procedural in the sense that the programmer tells the computer a series of steps to follow.* 
 
- *If the people who write the code do not feel responsible for the model, or don't understand how to make the model work for an application, then the model has nothing to do with the software.* 
 
- *Therefore: Any technical person contributing to the model must spend some time touching the code, whatever primary role he or she plays on the project. Anyone responsible for changing code must learn to express a model through the code.* 
 
- *Any technical person contributing to the model must spend some time touching the code, whatever primary role he or she plays on the project. Anyone responsible for changing code must learn to express a model through the code.* 
 
- *In real life, there are lots of many-to-many associations, and a great number are naturally bidirectional. The same tends to be true of early forms of a model as we brainstorm and explore the domain.* 
 
- *There are at least three ways of making associations more tractable. Imposing a traversal direction Adding a qualifier, effectively reducing multiplicity Eliminating nonessential associations* 
 
- *Is important to constrain relationships as much as possible. A bidirectional association means that both objects can be understood only together. When application requirements do not call for traversal in both directions, adding a traversal direction reduces interdependence and simplifies the design. Understanding the domain may reveal a natural directional bias.* 
 
- *It is important to constrain relationships as much as possible. A bidirectional association means that both objects can be understood only together. When application requirements do not call for traversal in both directions, adding a traversal direction reduces interdependence and simplifies the design. Understanding the domain may reveal a natural directional bias.* 
 
- *Constraining the traversal direction of a many-to-many association effectively reduces its implementation to one-to-many* 
 
- *A case of mistaken identity in a software system leads to data corruption and program errors.* 
 
- *Immutability of an attribute or an object can be declared in some languages and environments but not in others. Such features help communicate the design decision, but they are not essential.* 
 
- *Immutability is a great simplifier in an implementation, making sharing and reference passing safe. It is also consistent with the meaning of a value. If the value of an attribute changes, you use a different VALUE OBJECT, rather than modifying the existing one.* 
 
- *These factors would weigh in favor of a mutable implementation: If the VALUE changes frequently If object creation or deletion is expensive If replacement (rather than modification) will disturb clustering (as discussed in the previous example) If there is not much sharing of VALUES, or if such sharing is forgone to improve clustering or for some other technical reason* 
 
- *It is a truism that there should be low coupling between MODULES and high cohesion within them.* 
 
- *When creation of an object, or an entire AGGREGATE, becomes complicated or reveals too much of the internal structure, FACTORIES provide encapsulation.* 
 
- *The two basic requirements for any good FACTORY are Each creation method is atomic and enforces all invariants of the created object or AGGREGATE. A FACTORY should only be able to produce an object in a consistent state.* 
 
- *Avoid calling constructors within constructors of other classes. Constructors should be dead simple. Complex assemblies, especially of AGGREGATES, call for FACTORIES. The threshold for choosing to use a little FACTORY METHOD isn't high.* 
 
- *Each operation must be atomic. You have to pass in everything needed to create a complete product in a single interaction with the FACTORY. You also have to decide what will happen if creation fails, in the event that some invariant isn't satisfied.* 
 
- *The FACTORY will be coupled to its arguments. If you are not careful in your selection of input parameters, you can create a rat's nest of dependencies.* 
 
- *Sophisticated domain models are achievable and worth the trouble.* 
 
- *Refactoring is the redesign of software in ways that do not change its functionality.* 
 
- *The refactorings that have the greatest impact on the viability of the system are those motivated by new insights into the domain or those that clarify the model's expression through the code.* 
 
- *The concept you need is not always floating on the surface, emerging in conversation or documents. You may have to dig and invent. The place to dig is the most awkward part of your design. The place where procedures are doing complicated things that are hard to explain.* 
 
- *The ultimate purpose of software is to serve users. But first, that same software has to serve developers. This is especially true in a process that emphasizes refactoring* 
 
- *When software with complex behavior lacks a good design, it becomes hard to refactor or combine elements.* 
 
- *A lot of overengineering has been justified in the name of flexibility. But more often than not, excessive layers of abstraction and indirection get in the way. Look at the design of software that really empowers the people who handle it; you will usually see something simple.* 
 
- *Name classes and operations to describe their effect and purpose, without reference to the means by which they do what they promise. This relieves the client developer of the need to understand the internals. These names should conform to the UBIQUITOUS LANGUAGE so that team members can quickly infer their meaning. Write a test for a behavior before creating it, to force your thinking into client developer mode.* 
 
- *Operations that return results without producing side effects are called functions. A function can be called multiple times and return the same value each time. A function can call on other functions without worrying about the depth of nesting.* 
 
- *Functions are much easier to test than operations that have side effects. For these reasons, functions lower risk.* 
 
- *Because ASSERTIONS are all in terms of states, rather than procedures, they make tests easy to write. The test setup puts the preconditions in place; then, after execution, the test checks to see if the post-conditions hold.* 
 
- *Deep models and supple designs don't come easily. Progress comes from lots of learning about the domain, lots of talking, and lots of trial and error.* 
 
- *Analysis patterns are groups of concepts that represent a common construction in business modeling. It may be relevant to only one domain or it may span many domains.* 
 
- *When you use a term from a well-known analysis pattern, take care to keep the basic concept it designates intact, however much the superficial form might change. There are two reasons for this. First, the pattern may embed understanding that will help you avoid problems. Second, and more important, your UBIQUITOUS LANGUAGE is enhanced when it includes terms that are widely understood or at least well explained.* 
 
- *A model is meaningless unless it is logically consistent. In an ideal world, we would have a single model spanning the whole domain of the enterprise. This model would be unified, without any contradictory or overlapping definitions of terms. Every logical statement about the domain would be consistent.* 
 
- *Automating the acceptance tests is a vital part of this customer relationship. Even on the most cooperative project, although the customer can identify and communicate its dependencies, and the supplier can diligently try to communicate changes, without tests, surprises will happen* 
 
- *The public interface of the ANTICORRUPTION LAYER usually appears as a set of SERVICES, although occasionally it can take the form of an ENTITY.* 
 
- *For each SERVICE we define, we need an ADAPTER that supports the SERVICE'S interface and knows how to make equivalent requests of the other system or its FACADE.* 
 
- *Songwriter from the 1950s and 1960s) said the secret to success in mathematics was, "Plagiarize! Plagiarize. Let no one's work evade your eyes. . . . Only be sure always to call it please, research."* 
 
