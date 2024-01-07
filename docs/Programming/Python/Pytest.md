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
updated: 2024-01-07T17:18
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
#unfinished 


# Links
- [Quick overview of mocks](https://changhsinlee.com/pytest-mock/)
- [Anatomy of a test](https://docs.pytest.org/en/7.1.x/explanation/anatomy.html)

# Thoughts 
- Not always easy to configure tests in VSCode. Usually, it is good to try to find any errors that occur in the code. I find the 3-step debugging process helpful
  1. Look for any errors in VSCode. 
  2. Run pytest in the terminal, and look if there are any issues when importing. 
  3. Look in the test files and see if there are any imports that fail (grey color imports usually).
- 



