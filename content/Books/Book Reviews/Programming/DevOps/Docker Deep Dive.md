---
created: 2025-10-23 15:53
updated: 2025-10-24T08:46
Pages:
Author:
tags:
  - books
  - digital-garden
  - book-review
  - technology
  - docker
  - containers
  - devops
  - cloud-computing
  - software-engineering
  - kubernetes
  - microservices
  - virtualization
  - infrastructure
  - technical
  - programming
  - cloud-native
  - webassembly
---

# Docker Deep Dive

# The Book in 3 Sentences
Docker Deep Dive is a comprehensive guide to modern containerization, explaining how Docker works from basic concepts to advanced features. It covers containers versus VMs, image management, networking, storage, and emerging technologies like WebAssembly.

The book details Docker's architecture, including how containers share the host OS for efficiency, the role of components like runc and containerd, and best practices for building and managing containers in production environments.

# Impressions

Docker is important to know as a developer. 

The concept of layers is important, where each layer of a docker can be re-used. also relevant for Kubernetes work. 

Note that Alpine Linux is a linux distribution designed to be small. 
# My Top  Quotes
- A feature of the container model is that every container shares the OS of the host it’s running on. This means a single host can run more containers than VMs. For example, a host that can run 10 VMs might be able to run 50 containers, making containers far more efficient than VMs. 
 
- Wasm (WebAssembly) is a modern binary instruction set that builds applications that are smaller, faster, more secure, and more portable than containers. You write your app in your favorite language and compile it as a Wasm binary that will run anywhere you have a Wasm runtime. 
 
- Kubernetes is the industry standard platform for deploying and managing containerized apps. 
 
- Docker Engine is jargon for the server-side components of Docker that run and manage containers. If you’ve ever worked with VMware, the Docker Engine is similar to ESXi. 
 
- Throughout the book, we’ll refer to runc and containerd with lowercase “r” and “c”, which is how they’re both written in the official project documentation. 
 
- When Docker was first released, the Docker Engine had two major components: The Docker daemon (sometimes referred to as just “the daemon”) and LXC. The daemon was a monolithic binary containing all the code for the API, image builders, container execution, volumes, networking, and more. LXC did the hard work of interfacing with the Linux kernel and constructing the required namespaces and cgroups to build and start containers. 
 
- Docker and Kubernetes both use runc as their default low-level runtime, and both pair it with the containerd high-level runtime: containerd operates as the high-level runtime managing lifecycle events runc operates as the low-level runtime executing lifecycle events by interfacing with the kernel to do the work of actually building containers and deleting them 
 
- We refer to containerd as a high-level runtime as it manages lifecycle events such as starting, stopping, and deleting containers. However, it needs a low-level runtime to perform the actual work. 
 
- An image is a read-only package containing everything you need to run an application. This means they include application code, dependencies, a minimal set of OS constructs, and metadata. You can start multiple containers from a single image. 
 
- The easiest way to get an image is to pull one from a registry. Docker Hub is the most common registry, and pulling an image downloads it to your local machine 
 
- Images are usually small. For example, the official NGINX image is around 80MB, and the official Redis image is around 40MB. However, Windows images can be huge. 
 
- For example, the official Alpine Linux image is currently about 3MB. This is because it doesn’t ship with six different shells, three different package managers, and a bunch of tools you “might” need once every ten years. In fact, it’s increasingly common for images to ship without a shell or a package manager — if the application doesn’t need it at run-time, the image doesn’t include it. We call these slim images. 
 
- All Docker images start with a base layer, and every time you add new content, Docker adds a new layer. 
 
- Consider the following oversimplified example of building a simple Python application. Your corporate policy mandates all applications be built on top of the official Ubuntu 24:04 image. This means the official Ubuntu 24:04 image will be the base layer for this app. Installing your company’s approved version of Python will add a second layer, and your application source code will add a third. 
 
- It also shows that the layers are stored as independent objects, and the image is just metadata identifying the required layers and explaining how to stack them. 
 
- The docker buildx command makes it easy to create multi-architecture images. For example, you can use Docker Desktop on linux/arm to build images for linux/amd and possibly other architectures. 
 
- Vulnerability scanning with Docker Scout Lots of tools and plugins exist that scan images for known vulnerabilities. We’ll look at Docker Scout, as it’s built into almost every level of Docker, including the CLI, Docker Desktop, Docker 
 
- Docker buildx offers two ways to create multi-architecture images: Emulation Build Cloud Emulation mode performs builds for different architectures on your local machine by running the build inside a QEMU virtual machine emulating the target architecture. It works most of the time but is slow and doesn’t have a shared cache. Build Cloud is a service from Docker, Inc. that performs builds in the cloud on native hardware without requiring emulation. It’s very fast, lets you share a common build cache with teammates, and is seamlessly integrated into Docker Desktop and any version of the Docker Engine using a version of buildx supporting the cloud driver. 
 
- Containers are smaller, faster, and more portable than VMs. They’re also designed to be stateless and ephemeral, whereas VMs are designed to be long-running and can be migrated with their state and data. Containers are also designed to be immutable. This means you shouldn’t change them after you’ve deployed them — if a container fails, you replace it with a new one instead of connecting to it and making a live fix. Containers should only run a single process and we use them to build microservices apps. For example, an application with four features, such as a web server, auth, catalog, and store, will have four containers — one running the web server, one running the auth service, one running the catalog, and another running the store. 
 
- The -p 5005:8080 flag maps port 5005 on your local system to port 8080 inside the container. This works because the container’s web server is listening on port 8080. 
 
- The -d flag tells Docker to run it in the background as a daemon process and detached from your local terminal 
 
- Entrypoint instructions cannot be overridden on the CLI, and anything you pass in via the CLI will be appended to the Entrypoint instruction as an argument. 
 
- Cmd instructions are overridden by CLI arguments. 
 
- You can use the docker exec command to execute commands in running containers, and it has two modes: Interactive Remote execution Interactive exec sessions connect your terminal to a shell process in the container and behave like remote SSH sessions. Remote execution mode lets you send commands to a running container and prints the output to your local terminal. 
 
- It’s a widely accepted good practice to deploy slim images that only contain app code and dependencies. This means no shell or debugging tools and is a big part of making images and containers small and secure. However, it also makes it difficult to debug them when things go wrong. 
 
- Ctrl-PQ is how you detach from a container without killing the process you’re attached to. You’ll use it frequently to detach from running containers without killing them. 
 
- Docker ps lists all running containers, and you can add the -a flag to also see containers in the stopped (Exited) state. 
 
- Docker aims to make it easy to build, share, and run applications. We call this containerization and the process looks like this: Write your applications and create the list of dependencies Create a Dockerfile that tells Docker how to build and run the app Build the app into an image Push the image to a registry (optional) Run a container from the image 
 
- When it comes to container images… big is bad! For example: Big means slow Big means more potential vulnerabilities Big means a larger attack surface 
 
- A slim image is a very small image intended for production use that only contains files and apps that are absolutely necessary to run the application. They do not include shells, package managers, or troubleshooting tools. 
 
- For each build, the builder iterates through the Dockerfile one line at a time, starting from the top. For each line, it checks if it already has the layer in its cache. If it does, a cache hit occurs, and it uses the cached layer. If it doesn’t, a cache miss occurs, and it builds a new layer from the instruction. Cache hits are one of the best ways to make builds faster. 
 
- Docker compose up is the command to deploy a Compose app. It creates all images, containers, networks, and volumes the app needs. It expects you to call the Compose file compose.yaml, but you can specify a custom filename with the -f flag. You’ll normally start the app in the background with the --detach flag. 
 
- Docker compose ps lists each container in the Compose app. 
 
- Docker Model Runner (DMR) is a new technology, fully integrated with the Docker toolchain, that executes AI models directly on host machines rather than inside containers. Yes… Docker Model Runner executes AI models outside of containers! This is because containers cannot access the majority of AI acceleration hardware like GPUs, NPUs, and TPUs that make AI models fast. 
 
- Wasm (WebAssembly) is driving the third wave of cloud computing, and Docker is evolving to take advantage. We built the first wave on virtual machines (VMs), the second on containers, and we’re building the third on Wasm. Each wave drives smaller, faster, and more secure workloads, and all three are working together to drive the future of cloud computing. 
 
- Wasm is a new technology driving a new wave of cloud computing. Wasm apps are smaller, faster, more secure, and more portable than traditional Linux containers. However, they’re not as flexible. For example, at the time of writing, Wasm apps aren’t great for apps with heavy I/O requirements or complex networking. 
 
- The orchestration wars were back in the mid-2010s when technologies like Docker Swarm, HashiCorp Nomad, Mesosphere DC/OS, and Kubernetes battled it out to see which would be crowned the de facto container orchestration platform. Fast forward to now, and it’s clear that Kubernetes came out on top and has the largest and most vibrant ecosystem. 
 
- I recommend you go to http://https://labs.play-with-docker.com/ and spin up a few Docker nodes to follow along. 
 
- It’s always the network! Any time we experience infrastructure issues, we always blame the network. One of the reasons we do this is that networks are at the center of everything. 
 
- A sandbox is an isolated network stack inside a container. It includes Ethernet interfaces, ports, routing tables, DNS configuration, and everything else you’d expect from a network stack. 
 
- Endpoints are virtual network interfaces that look, smell, and feel like regular network interfaces. They connect sandboxes to networks. Networks are virtual switches (usually software implementations of an 802.1d bridge). As such, they group together and isolate one or more endpoints that need to communicate. 
 
- We use the terms underlay networks or underlay infrastructure to refer to the networks the overlay tunnels through. 
 
- There are three main reasons you should use volumes to handle persistent data in containers: Volumes are independent objects that are not tied to the lifecycle of a container You can map volumes to specialized external storage systems Multiple containers on different Docker hosts can use volumes to access and share the same data 
 
- There are two main types of data — persistent and non-persistent. Persistent data is the stuff you care about and need to keep. It includes things like customer records, financial data, research results, audit data, and even some types of logs. Non-persistent data is the stuff you don’t care about and don’t need to keep. 
 
- We call applications that create and manage persistent data stateful apps, and applications that don’t create or manage persistent data stateless apps. 
 
- By default, all containers get a layer of writable non-persistent storage that lives and dies with the container. We sometimes call this local storage, and it’s ideal for non-persistent data. However, if your apps create data you need to keep, you should store the data in a Docker volume. 
 
- Docker volumes are first-class objects in the Docker API, and you manage them independently of containers using their own docker volume sub-command. This means deleting containers doesn’t delete the data in their volumes. 
 
- Volumes are the recommended way to work with persistent data in Docker environments. 
 
