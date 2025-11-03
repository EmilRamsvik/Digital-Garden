---
created: 2023-12-04T13:14
updated: 2025-09-02T10:15
tags:
  - article
  - digital-garden
  - front-end
  - javascript
  - javascript/react
  - javascriptframeworks
  - nextjs
  - programming
  - server-side-rendering
  - web-development
  - web-frameworks
Finished: false
---
# NextJS


### Server Components
[Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components) are a new type of component in Next.js designed to be primarily rendered on the server side. This means most of the work to create the HTML for the component happens on the server, not in the user's browser.

The fundamental difference between Server Components and Client Components in Next.js lies in where they are primarily executed. Server Components run mainly on the server, where they render HTML, fetch data directly, and send that minimal output to the browser. Client Components run in the user's browser, handling interactions, state updates, and dynamic aspects of the page after the initial content is received.
### Pages, Layouts, and Templates
When building a website using Next.js, the framework automatically generates routes based on the files in your "pages" directory. For instance, a file named `pages/about.tsx` becomes the route `/about`, while a file named `pages/blog/post.tsx` becomes the route `/blog/post`. To create dynamic routes matching different values, use square brackets `[]` in the file names. For example, a file named `pages/blog/[postId].js` will match routes like `/blog/1`, `/blog/hello-world`, etc. 
The dynamic part, `postId`, can be accessed in your code to fetch and display the corresponding content.
A layout is a UI that is **shared** between multiple routes. On navigation, layouts preserve state, remain interactive, and do not re-render. The root layout is defined at the top level of the `app` directory and applies to all routes. This layout is **required** and must contain `html` and `body` tags, allowing you to modify the initial HTML returned from the server.

There may be cases where you need those specific behaviors, and templates would be a more suitable option than layouts. For example:

- Features that rely on `useEffect` (e.g., logging page views) and useState (e.g., a per-page feedback form).
- To change the default framework behavior. For example, Suspense Boundaries inside layouts only show the fallback the first time the Layout is loaded and not when switching pages. For templates, the fallback is shown on each navigation.


# Links
- 

# Thoughts 
- Authentication is also difficult in NextJS. There are some solutions to mitigate this. Mainly 


