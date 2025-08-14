---
created: 2023-10-29T15:52
updated: 2025-08-13T14:55
Pages: 
Author: 
finished: false
Date Finished: 
tags:
  - books
  - digital-garden
  - book-review
---
# Python Testing with Pytest
# 🚀 The Book in 3 Sentences
This book dive into all aspects of python test module Pytest. It describes using tests, patching, and fixture as well as advanced topics such as automatic testing, etc. 

# 🎨 Impressions
Good book when you have a small amount of pytest experience and need to understand the underlying concepts really well. 


# ✍️ My Top  Quotes

- Pytest offers powerful features such as ‘assert‘ rewriting, a third-party plugin model, and a powerful yet simple fixture model that is unmatched in any other testing framework.
 
- Here are a few of the reasons pytest stands out above many other test frameworks: Simple tests are simple to write in pytest. Complex tests are still simple to write. Tests are easy to read. Tests are easy to read. (So important it’s listed twice.) You can get started in seconds. You use assert to fail a test, not things like self.assertEqual() or self.assertLessThan(). Just assert. You can use pytest to run tests written for unittest or nose.
 
- *System test (end-to-end)**: A test that checks all of the system under test in an environment as close to the end-user environment as possible.
 
- *Integration test**: A test that checks a larger bit of the code, maybe several classes, or a subsystem. Mostly it’s a label used for some test larger than a unit test, but smaller than a system test.
 
- *Unit test**: A test that checks a small bit of code, like a function or a class, in isolation of the rest of the system.
 
- *Functional test**: A test that checks a single bit of functionality of a system. A test that checks how well we add or delete or update a task item in Tasks is a functional test.
 
- Subcutaneous test: A test that doesn’t run against the final end-user interface, but against an interface just below the surface. Since most of the tests in this book test against the API layer—not the CLI—they qualify as subcutaneous tests.
 
- Setting up system state (or subsystem or unit state) is an important part of software testing.
 
- Test files should be named test_something.py or something_test.py. Test methods and functions should be named test_something. Test classes should be named TestSomething.
 
- The -v/--verbose option reports more information than without it. The most obvious difference is that each test gets its own line, and the name of the test and the outcome are spelled out instead of indicated with just a dot.
 
- The --durations=N option is incredibly helpful when you’re trying to speed up your test suite. It doesn’t change how your tests are run; it reports the slowest N number of tests/setups/teardowns after the tests run.
 
- Setup and teardown are also called fixtures and are a chance for you to add code to get data or the software system under test into a precondition state before the test runs, as well as clean up afterwards if necessary.
 
- The conftest.py file is also optional. It is considered by pytest as a “local plugin” and can contain hook functions and fixtures.
 
- Hook functions are a way to insert code into part of the pytest execution process to alter how pytest works. Fixtures are setup and teardown functions that run before and after test functions, and can be used to represent resources and data used by the tests.
 
- Test classes are a way to group tests that make sense to be grouped together.
 
- We can use @pytest.mark.parametrize(argnames, argvalues) to pass lots of data through the same test, like this: ch2/tasks_proj/tests/func/test_add_variety.py ​  @pytest.mark.parametrize(​'task'​, ​  \[Task(​'sleep'​, done=True), ​  Task(​'wake'​, ​'brian'​), ​  Task(​'breathe'​, ​'BRIAN'​, True), ​  Task(​'exercise'​, ​'BrIaN'​, False)\]) ​  ​def​ test_add_2(task): ​  ​"""Demonstrate parametrize with one parameter."""​ ​  task_id = tasks.add(task) ​  t_from_db = tasks.get(task_id) ​  ​assert​ equivalent(t_from_db, task
 
- Fixtures are functions that are run by pytest before (and sometimes after) the actual test functions.
 
- The @pytest.fixture() decorator is used to tell pytest that a function is a fixture. When you include the fixture name in the parameter list of a test function, pytest knows to run it before running the test. Fixtures can do work, and can also return data to the test function.
 
- It will also look in conftest.py files if it doesn’t find it in this file.
 
- The test test_some_data() has the name of the fixture, some_data, as a parameter. pytest will see this and look for a fixture with this name. Naming is significant in pytest. pytest will look in the module of the test for a fixture of that name. It will also look in conftest.py files if it doesn’t find it in this file.
 
- Although conftest.py is a Python module, it should not be imported by test files. Don’t import conftest from anywhere. The conftest.py file gets read by pytest, and is considered a local plugin, which will make sense once we start talking about plugins
 
- Although conftest.py is a Python module, it should not be imported by test files. Don’t import conftest from anywhere. The conftest.py file gets read by pytest, and is considered a local plugin,
 
- A fixture function runs before the tests that use it. However, if there is a yield in the function, it stops there, passes control to the tests, and picks up on the next line after the tests are done. Therefore, think of the code above the yield as “setup” and the code after yield as “teardown.”
 
- The code after the yield, the “teardown,” is guaranteed to run regardless of what happens during the tests.
 
- When I’m developing fixtures, I like to see what’s running and when. Fortunately, pytest provides a command-line flag, --setup-show, that does just that:
 
- Fixtures are a great place to store data to use for testing. You can return anything.
 
- Scope=’function’ Run once per test function. The setup portion is run before each test using the fixture. The teardown portion is run after each test using the fixture. This is the default scope used when no scope parameter is specified. scope=’class’ Run once per test class, regardless of how many test methods are in the class. scope=’module’ Run once per module, regardless of how many test functions or methods or other fixtures in the module use it. scope=’session’ Run once per session. All test methods and functions using a fixture of session scope share one setup and teardown call.
 
- The scope is set at the definition of a fixture, and not at the place where it’s called.
 
- Far in this chapter, all of the fixtures used by tests were named by the tests (or used usefixtures for that one class example).
 
- However, you can use autouse=True to get a fixture to run all of the time. This works well for code you want to run at certain times, but tests don’t really depend on any system state or data from the fixture.
 
- The pytest fixture implementation is flexible enough to use fixtures like building blocks to build up test setup and teardown, and to swap in and out different chunks of the system
 
- Reusing common fixtures is such a good idea that the pytest developers included some commonly needed fixtures with pytest.
 
- Functionality: it allows you to retrieve stdout and stderr from some code, and it disables output capture temporarily.
 
- The capsys builtin fixture provides two bits of functionality: it allows you to retrieve stdout and stderr from some code, and it disables output capture temporarily.
 
- The captured output is displayed for failing tests only after the full test session is complete. The -s option turns off this feature, and output is sent to stdout while the tests are running.
 
- A “monkey patch” is a dynamic modification of a class or module during runtime.
 
- During testing, “monkey patching” is a convenient way to take over part of the runtime environment of the code under test and replace either input dependencies or output dependencies with objects or functions that are more convenient for testing.
 
- Pytest.ini: This is the primary pytest configuration file that allows you to change default behavior. Since there are quite a few configuration changes you can make, a big chunk of this chapter is about the settings you can make in pytest.ini.
 
- Conftest.py: This is a local plugin to allow hook functions and fixtures for the directory where the conftest.py file exists and all subdirectories. conftest.py files are covered Chapter 5, ​Plugins​.
 
- Did you know that one of the definitions of “recurse” is to swear at your code twice?
 
- Having ’.’ is a good reason to name your virtual environment ’.venv’, because all directories starting with a dot will not be traversed.
 
- The usual test discovery rule for pytest and classes is to consider a class a potential test class if it starts with Test. The class also can’t have an __init__() function.
 
- The utility of having __init__.py files in every test subdirectory of a project confused me for a long time. However, the difference between having these and not having these is simple. If you have __init__.py files in all of your test subdirectories, you can have the same test filename show up in multiple directories. If you don’t, you can’t. That’s it. That’s the effect on you.
 
- Coverage.py is the preferred Python coverage tool that measures code coverage.
 
- Plugin called pytest-cov that will allow you to call coverage.py from pytest with some extra pytest options
 
- The first line, mocker.patch.object(tasks.cli, ’tasks_db’, new=stub_tasks_db), replaces the tasks_db() context manager with our stub that does nothing.
 
- The second line, mocker.patch.object(tasks.cli.tasks, ’list_tasks’, return_value=\[\]), replaces any calls to tasks.list_tasks() from within tasks.cli to a default MagicMock object with a return value of an empty list.
 
- Tox is a command-line tool that allows you to run your complete suite of tests in multiple environments. We’re going to use it to test the Tasks project in multiple versions of Python.
 
- Pytest-repeat: Run Tests More Than Once To run tests more than once per session, use the pytest-repeat plugin.
 
- Pytest-xdist: Run Tests in Parallel Usually all tests run sequentially. And that’s just what you want if your tests hit a resource that can only be accessed by one client at a time. However, if your tests do not need access to a shared resource, you could speed up test sessions by running multiple tests in parallel.
 
- There are no normal timeout periods for tests in pytest. However, if you’re working with resources that may occasionally disappear, such as web services, it’s a good idea to put some time restrictions on your tests. The pytest-timeout plugin
 
- The pytest-html plugin is quite useful in conjunction with continuous integration, or in systems with large, long-running test suites. It creates a webpage to view the test results for a pytest session. The HTML report created includes the ability to filter for type of test result: passed, skipped, failed, errors, expected failures, and unexpected passes.
 
- Pytest-selenium: Test with a Web Browser Selenium is a project that is used to automate control of a web browser. The pytest-selenium plugin is the Python binding for it. With it, you can launch a web browser and use it to open URLs, exercise web applications, and fill out forms.
 
