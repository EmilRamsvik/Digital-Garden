---
tags:
  - article
  - TDD
  - python
  - testing
  - software-testing
  - programming
Finished: false
created: 2023-06-04T13:18:00
updated: 2024-09-22T09:28
---
# Pytest

Pytests is a wrapper around the unit test python test framework. It makes it a bit easier to write tests.


## Decorators

### Fixtures
`@pytest.fixture` are a powerful feature of PyTest that allows you to set up some code to run before a test starts, and/or after a test ends. They are used to abstract away setup and cleanup code that may be needed for tests, thereby promoting code reuse and keeping the tests clear and concise. Fixtures can be modular, so you can define them once and use them across multiple tests or even test modules.

Here's a simple example in a markdown code block:

```python
```python
import pytest

# Define a fixture
@pytest.fixture
def example_fixture():
    data = {"key": "value"}
    yield data
    data.clear()  # Cleanup code, runs after the test using this fixture

def test_example(example_fixture):  # Include the fixture as an argument
    assert example_fixture["key"] == "value"
```
- The `@pytest.fixture(autouse=True)` decorator in pytest is used to automatically apply a fixture to all tests without having to manually include them in the test function parameters.
- The `conftest.py` file serves as a means of providing fixtures for an entire directory. Fixtures defined in a `conftest.py` can be used by any test in that package without needing to import them (pytest will automatically discover them).

### Mark Decorators
Marks in pytest are a way to categorize tests. You can mark a test function with custom metadata like `slow`, `fast`, `requires_db`, etc. This can be useful when you want to run a specific subset of tests.

Here's how you can use marks:

```python
@pytest.mark.slow
def test_slow_function():
    ...

@pytest.mark.requires_db
def test_database_function():
    ...
```
1. `@pytest.mark.parametrize`: Allows you to run a test function multiple times with different arguments. 
2. `@pytest.mark.skip`: Marks a test function as skipped, which means it won't be run. 
3. `@pytest.mark.skipif`: Marks a test function to be skipped if a certain condition is true. 
4. `@pytest.mark.xfail`: Marks a test function as expected to fail. If the test passes, it's reported as an unexpected success. 
5. `@pytest.mark.usefixtures`: Specifies that a test function should use a fixture, even if the fixture isn't passed in as an argument. 

# FastAPI
FastAPi has its own test functionality. It preserves many states, like authentication, and makes it much easier to test. I think it is nice to create a new project and play around with testing a lot. 
One of the hardest, or maybe not hardest, but definitely most cumbersome things to get good at is authentication and state management. This leads to a lot of issues.  So, I recommend trying a bit without those issues to learn the basics. 


# Links
- [Quick overview of mocks](https://changhsinlee.com/pytest-mock/)
- [Anatomy of a test](https://docs.pytest.org/en/7.1.x/explanation/anatomy.html)
- [Use Weird Tests to capture tacit knowledge](https://jmduke.com/posts/essays/weird-tests-tacit-knowledge/#:~:text=in%20general%2C%20a%20good%20mental%20exercise%20whenever%20you're%20reviewing%20a%20pr%20is%20%22could%20a%20test%20have%20caught%20this%3F%22%2C%20and%20then%20reminding%20yourself%20that%20a%20test%20should%20be%20defined%20less%20as%20%22a%20thing%20that%20exercises%20business%20logic%22%20and%20more%20as%20a%20%22script%20that%20exercises%20your%20codebase%22.)
- [Python Testing with pytest](../../Books/Book%20Reviews/Programming/Python/Python%20Testing%20with%20pytest.md)

# Thoughts 
- Not always easy to configure tests in VSCode. It is good to try to find any errors that occur in the code. I find the 3-step debugging process helpful
  1. Look for any errors in VSCode. 
  2. Run pytest in the terminal and see if there are any issues when importing. 
  3. Look in the test files and see if there are any imports that fail (grey color imports usually).
- *In general, a good mental exercise whenever you're reviewing a PR is "could a test have caught this?", and then reminding yourself that a test should be defined less as "a thing that exercises business logic" and more as a "script that exercises your codebase".* [source](https://jmduke.com/posts/essays/weird-tests-tacit-knowledge/#:~:text=in%20general%2C%20a%20good%20mental%20exercise%20whenever%20you're%20reviewing%20a%20pr%20is%20%22could%20a%20test%20have%20caught%20this%3F%22%2C%20and%20then%20reminding%20yourself%20that%20a%20test%20should%20be%20defined%20less%20as%20%22a%20thing%20that%20exercises%20business%20logic%22%20and%20more%20as%20a%20%22script%20that%20exercises%20your%20codebase%22.)



