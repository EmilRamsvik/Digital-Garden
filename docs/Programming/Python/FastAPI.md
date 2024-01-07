---
Finished: false
tags:
  - article
  - digital-garden
  - python
  - fast-api
  - "#api"
  - "#web-development"
  - "#backend"
  - "#programming"
created: 2023-12-27T12:33
updated: 2024-01-07T17:18
---


# FastAPI
I like Fastapi as a backend service. It is very easy to learn and it is good when designing apis. 

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



# Links
- [FastAPI Articles](https://www.vidavolta.io/?ref=vidavolta.io)
- 

# Thoughts 
- 


