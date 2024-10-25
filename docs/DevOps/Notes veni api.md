---
created: 2024-09-30T13:13
updated: 2024-10-13T13:12
---
Discussions around what data is needed. Conusmpåtion data and meetering, which is the most relevant. That data is in ExaSol. Can we get this into fabric. 

Who will use the api?  - Customers and managers of energy follow-up systems. As of today, we have a system that sends out files with metering information. The use case is to send the information to the other systems. 

How can we solve authentication and authorization? All the users are registered in visma (CRM??)  , and based on the informaiton we make a user in entraide (?). 

We assume that most of the access is the same as in the portal (quik?)

We need to get clarity on what the job at hand for API access is. That means we run a one-week discovery sprint to answer key questions:  
1. What data needs to be exposed (hypothesis: consumption per meterpoint) ?
	- Metering data for customer, on a hourly consumpition basis. 
	- Access management through Visma Servera -> need this to get meetering/customer mapping. 
1. How are we going to solve this technically (Azure API mgt?); what do we have / what do we not have in place? 
	- We will not run this through Exasol. 
	- We need at least the following
		- Auth
		- Data 
		- API management
		- development environment (dev/sol)
	- Bjørn is working on the service layer, so he has worked on architecture.  He has a miro on this. 
3. What is the resource need (skill & capacity)?
	- We need data warehouse development capacity
	- API service layer resources
	- Authentication and authorization. 
1. How long do we think implementation takes, assuming 2-week sprints with x-FTE?
- We assume at least 2.5 resources, where the .5 is authentication resources.  
- We assume that the metering data is available in fabric. 
- If the metering data is not available, then we need to set aside time to make the available. 
- 

3. What is the expected OPEX-impact to run this (cost drivers and unit prices)?
  
6. What is the scope of the first sprint (focus should lie on PoC)?

**Notes**
- Customers asks for metering data as an api. 
- what is the usage area for the customer asking for api access?  - They want hourly usage, we cannot provide them with any live data as of now, we make it daily. We want to have historical api access as well as daily data. *There are many ways of doing this, we could send files as we do now, but there can also be an API JSON.*
- 