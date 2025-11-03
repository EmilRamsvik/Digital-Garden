---
created: 2023-12-04T13:14
updated: 2025-09-02T10:00
tags:
  - ai
  - article
  - business
  - case-study
  - data-engineering
  - digital-garden
  - hiring
  - job-searching
  - job-searching/case-interview
  - job-searching/interview
  - machine-learning
  - system-thinking
Finished: true
---

# Email-to-Order

**Role:** ML Engineer / AI Engineer  
**Duration:** 45-60 minutes  
**Level:** Mid to Senior

## For Interviewees

### Case Overview

Your client is a large logistics company that provides supply chain services to other businesses. They have over 500 sales representatives who build relationships with customers through phone calls and face-to-face meetings. When customers want to place orders, they typically send emails with their requests. This is a traditional company that has been operating the same way for many years, but they are now trying to modernize their operations. While they have good basic technology systems in place, they have never used artificial intelligence or machine learning before. The sales team is comfortable with their current manual processes and may be hesitant about changes to how they work.

### Architecture & Technical Context

**Current Setup:** The company operates a cloud-based ERP system with REST APIs alongside a dedicated email system for customer communications. Currently, sales representatives manually read customer emails and enter order details into the ERP system. The company has no existing ML or AI systems in place.

**Data Sources:** The available data includes customer emails with text content and attachments, comprehensive ERP system data covering product catalogs, pricing, and customer information, plus historical order data from past transactions. Assume that all data is available through APIs. You can also assume that the data will be readily available in our data warehouse setting as well.

**Tech Stack Assumptions:** The technical infrastructure includes ERP APIs supporting GET and POST requests for orders, inventory, and customer data. Email APIs allow reading and sending emails. Cloud infrastructure is available and can support any necessary ML/AI services. Assume all required technical components are accessible.

### The Challenge

**Problem:** Sales representatives spend 1-4 hours daily manually copying order details from customer emails into the ERP system. This creates delays, errors, and prevents them from focusing on relationship building and sales.

**Your Task:** Design an ML/AI system that automatically processes customer order emails and creates orders in the ERP system. The solution should handle typical B2B order formats while maintaining high accuracy and providing transparency to sales reps.

**Success Looks Like:** The goal is to automate 80% of routine order processing, which should save sales representatives 50% or more of their current administrative time. This time savings allows them to focus on customer relationships and sales activities. The system should also reduce errors compared to manual processing and gain trust and adoption from the sales team.

### Think About
- How will you handle edge cases and errors?
- What happens when the AI is uncertain about an order?
- How will you measure success and gather feedback?
- How can you prove value to the stakeholder

---
## For Case Holders

**Role:** ML Engineer / AI Engineer  
**Level:** Mid to Senior

### Case Objectives

**Goal:** This case evaluates how candidates think about building machine learning systems from end to end. We want to understand their grasp of infrastructure and architecture decisions, but more importantly, how well they understand the probabilistic nature of machine learning models. The case specifically tests whether candidates have adapted to the new paradigm of using large language models for business problems. We also assess how they communicate complex technical concepts to business stakeholders who may not have technical backgrounds.

**Experience Level:** Mid-level candidates should understand basic ML infrastructure and be able to explain LLM concepts clearly. Senior candidates should demonstrate creative problem-solving approaches and show deep understanding of when and why to use LLMs versus other solutions. 

### Key Discussion Areas

- Infrastructure design and architecture choices for ML systems. What are critical infrastructure for ML arcitectures. 
	- Cloud. 
	- Security 
	- Simplicty, how can you handle simplicity. 
- Understanding of how large language models work and their appropriate use cases
- Communication strategies for explaining AI limitations to business users
- Risk management and validation strategies for customer-facing AI systems

### Evaluation Criteria
**Technical Depth:** Can they design appropriate infrastructure for ML systems? Do they understand the technical requirements for deploying LLMs? Can they explain how large language models process and generate text? Can we utilize LLMS for deterministic systems? 

**Problem-Solving:** Do they think creatively about using LLMs for this business problem? Can they identify edge cases and potential failure points? Do they propose realistic solutions for handling uncertainty?

**Communication:** Can they explain how LLMs work to non-technical stakeholders? Do they clearly communicate the limitations and risks of AI systems? Can they justify their technical decisions in business terms? How will they approach an implementation.

**Experience Indicators:** Have they worked with modern AI tools and LLMs? Do they understand the differences between deterministic programming and probabilistic AI? Can they discuss real-world challenges of deploying AI systems?

### Interviewer Notes

**Red Flags:** 
- Overly complex solutions without justification. Very easy to overcomplicate this case. 
- Not acknowledging AI limitations or error handling. No discussions around how non-deterministic input might be 
- Unable to explain technical concepts simply.

**Follow-up Questions:** How would you handle cases where the AI is uncertain? What would you tell the CEO about the risks of this system? How would you measure if the system is working well? What happens when the AI makes a mistake?

**Finishing Up:** Discuss next steps for validating the approach, timeline for implementation, and how they would get buy-in from the sales team.
