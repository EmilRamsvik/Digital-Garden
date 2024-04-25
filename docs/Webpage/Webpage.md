---
created: 2023-12-04T13:14
updated: 2024-04-14T20:59
tags:
  - article
  - digital-garden
  - web-development
  - personal
  - javascript
  - javascript/react
  - docusaurus
  - ci-cd
  - "#vercel"
Finished: false
---
# Webpage
I made a static web page to share my thoughts and the knowledge I have acquired. I wanted a place to share what I had learned with the wider world. Secondly, it was more of a learning experience creating and maintaining the web page over time. 

### Obsidian
My go-to knowledge-gathering and note-taking app is [Obsidian](../Obsidian/Obsidian.md). Obsidian lets me quickly gather notes in a structured format and have standard methods for linking notes together, having tags, and a more structured way of learning. 
A big issue is structuring migrations from obsidian to the github. For me, it was a bit more of difficult setting to migrate the data from one place to another. Furthermore, 

## Docusaurus
Docusaurus is a library based on the React framework and is used to display the page. One advantage of docusaurus is that I can work in obsidian and then migrate those to the repo with the code. I can also separate the different pages that are personal and those that I would like to share. 
Also, Docusaurus enables me to learn more about JavaScript and development in React.  I found it very easy to deploy and make the web page, making it much more rewarding to work on development.  ¨

### Random Page
I want to write a little bit about the random page funcitonaliyty i impolemented in docusaurus. I think this is a good thing to write about becuase it highlights some of the struggles of a developer. 

I started with making a prompt for creating a docusaurus random page, and after the message from the LLM was kind of vague I did a little bit of research into the topic. 

I use react for creating components and therefore it seemed like a good choice to look a bit into how a react component was made. However, it seemed to be quite difficult for me to use the lists dynaimcally, and I decided to create a list of articles using a bash shell script for creating the articles list and then reference that one in react. Kind of a hazzle I know but it seemed to me a path of least resistance, and for the issues of the scripts, well, I have to run scripts anyways. 

After I made the list, which was a text file, I had issues parsing the file in the react component (Also made quickly with LLM support). I then thought, why not use JSON instead. I also then could add a title. The script for making the list in JSON ended up looking like this: 
```bash
#! /bin/bash
find docs -type f -name "*.md" | sed 's/\.md$//' | awk -F/ -v q='"' 'BEGIN {
    print "["
}
function join(array, start, end, sep,    result, i) {
    result = array[start];
    for (i = start + 1; i <= end; i++) {
        result = result sep array[i];
    }
    return result;
}
{
    # Replace spaces with %20 (URL encoding).
    gsub(/ /, "%20", $0);

    # Split the path into parts.
    n = split($0, parts, "/");

    # Determine the title.
    title = parts[n];
    gsub(/%20/, " ", title); # Revert %20 to spaces for title display.

    # Handle the case where the parent folder and file name are the same.
    if (n > 1 && parts[n] == parts[n-1]) {
        path = join(parts, 1, n-1, "/");
    } else {
        path = $0;
    }

    # Print the JSON object line.
    print (NR>1 ? "," : "") "  {\"path\": \"" path "\", \"title\": \"" title "\"}";
}
END {
    print "\n]"
}' > static/article_list.json
```

Quite complicated, yes? 
Then, I managed after struggling with removing one part of the path and generally acting like a GPT monkey, punching in the code from ChatGPT and pasting in error without any thoughts whatsoever. This was annoying. 
After making a separate component, realizing it was not a good way to make it (As it should be part of the overview page and could be reused there), making a custom function for it instead, making it work, and then realizing it worked locally but failed deployment to the cloud (FML).  Then it was debugging in the *npm run build*. Hooray!!!!!
I finally realized the error, as I did 
```javascript
const response = await fetch('@site/static/article_list.json');
const articles = response.json();
```
But It should have been
``` javascript
const articles = require('@site/static/article_list.json');
```
I wrapped my head around the concept of async for the nth time, and then it was there. I guess I am a fully-fledged senior front-end developer. 

The takeaway from this charming story of an undisturbed evening is the following: 
- A solution is first hacky, then generalized, and then elegant. With all things requiring both thought and skill. 
- Not understanding the output of LLM is bad. Trying to understand the output of LLM is good; understanding the output is better. 
## Vercel
In Vercel, you get to deploy quickly, and they have free hosting for some development. I was astonished at how super easy they deployed the page. It was an eureka moment. Making the deployment easy makes it more rewarding to focus on writing code. 

## Github

The code is on [GitHub](https://github.com/EmilRamsvik/Digital-Garden), as it is easy to create a repo and contains all the code and docs that should be available in the application. This repo separates the code from 
# Links
- 

# Thoughts 
- I am very pleased with how I worked on this project; I think it has been a good journey so far, and I hope to learn a lot more and share a lot more when it comes to working on the different things I try to learn. 
- Vercel is a super duper awesome product. 

