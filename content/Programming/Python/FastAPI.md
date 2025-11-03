---
Finished: false
tags:
  - "#api"
  - "#backend"
  - "#programming"
  - "#web-development"
  - api
  - architecture
  - article
  - backend
  - digital-garden
  - fast-api
  - programming
  - python
  - security
  - system-thinking
  - web-development
created: 2023-12-27T12:33
updated: 2025-09-02T10:15
---


# FastAPI
I like FastAPI as a backend service. It is very easy to learn and it is good when designing APIs. FastAPI leverages modern [Python](Python.md) features like type hints and async/await extensively. 

### Security Layer FastAPI
API key and Depends can be used to create a validation layer. The API key can be imported by fastapi. security and is used to authenticate the api. However, you need to include it in the codebase. This is just one of many ways to use FastAPI to take care of authentication. 

```python
from fastapi.security.api_key import APIKeyHeader
from fastapi import Security, HTTPException
from starlette.status import HTTP_403_FORBIDDEN
api_key_header = APIKeyHeader(name="access_token", auto_error=False)
async def get_api_key(api_key_header: str = Security(api_key_header)):
    if api_key_header == API_KEY: # secret value
        return api_key_header
    else:
        raise HTTPException(
            status_code=HTTP_403_FORBIDDEN, detail="Could not validate API KEY"
        )
```
- `APIKeyHeader(name="access_token", auto_error=False)`: This creates an instance of the `APIKeyHeader` class, which represents an API key security scheme where the key is sent in the headers of the request. The `name` argument is the name of the header where the API key should be found and `auto_error=False` means that FastAPI won't automatically raise an exception if the API key is missing or invalid.
- `Security(api_key_header)`: This creates a dependency that FastAPI will inject into the `get_api_key` function. FastAPI will look for an API key in the headers of the request and pass it to `get_api_key` as the `api_key_header` argument.
- `get_api_key(api_key_header: str = Security(api_key_header))`: This is an asynchronous function that takes the API key from the request headers (injected by FastAPI) and checks if it matches the expected API key. If the keys match, the function returns the key; otherwise, it raises an `HTTPException` with a 403 status code to indicate that the request is forbidden.


# Layered Architecture
I like to separate API into "layers," where each step is its own layer in the API.  Then for each API, I can have all the logic within the same folder. 

    
Layered architecture in an API refers to a structured approach where the application is divided into distinct layers, each with specific responsibilities and roles. This architectural style promotes separation of concerns, making the application more organized, scalable, and maintainable. The most common layers include the presentation, business logic, and data access layers. 
- The presentation layer is responsible for interacting with the client, such as web browsers or mobile applications, handling user inputs, and presenting data. 
- The business logic layer, or domain layer, contains the application's core functionality, processing commands, making logical decisions, and performing calculations. It acts as a mediator between the presentation and data access layers, ensuring that user inputs are processed according to the business rules.
- The data access layer is responsible for interacting with the database or any data storage system. It handles all the data retrieval and storage operations, abstracting the complexity of these operations from the business logic layer. 

I structure the layers in FastAPI like this. 

1. **Router Layer**: This is the layer where you define your API endpoints (routes). It acts as the interface between the outside world and your application. Here, HTTP requests are received, and the appropriate controller actions are invoked. 
2. **Models Layer**: This layer is responsible for representing your application's data structures. In the context of an API connected to a database, models typically represent tables in your database. They define the structure of your data – the fields and their types – and how different pieces of data relate to each other (relationships like one-to-many, many-to-many, etc.). 
3. **CRUD (Create, Read, Update, Delete) Layer**: This layer encapsulates the logic to interact with the database. It translates business operations into database queries. This layer is responsible for creating, reading, updating, and deleting records in your database. 
4. **Schemas Layer**: Also known as DTOs (Data Transfer Objects) or serializers, this layer is responsible for defining the structure of data that your application will accept (input) and return (output). This layer acts as a contract for what data is expected by your API and what data it will return, ensuring that the client and server understand each other correctly.



## Brotli
BrotliMiddleware is a middleware component used in web development to compress HTTP responses using the Brotli compression algorithm. 

The Brotli compression algorithm is a relatively new compression algorithm developed by Google. It is designed to provide better compression ratios compared to other compression algorithms like Gzip and Deflate, resulting in smaller file sizes and faster transmission of data over the network.

When BrotliMiddleware is used in a web application, it intercepts the HTTP responses generated by the application and compresses them using the Brotli algorithm before sending them back to the client. This helps to reduce the size of the response, resulting in faster page load times and improved performance.

BrotliMiddleware can be easily integrated into web frameworks and servers that support middleware components. It typically works by adding the middleware to the application's middleware pipeline, which allows it to process the HTTP responses before they are sent back to the client.
```python
from brotli_asgi import BrotliMiddleware
from fastapi import FastAPI
app = FastAPI()
app.add_middleware(BrotliMiddleware)
```


# Links
- [FastAPI Articles](https://www.vidavolta.io/?ref=vidavolta.io)
- [4 Years of FastAPI experience](https://x.com/tiangolo/status/1281946592459853830)
- [Hyrums law on API.](https://www.hyrumslaw.com/)
# Thoughts 
- A 2xx response means the request was correct; a 4xx means the client did something wrong, and a 5xx means the server did something wrong. 



