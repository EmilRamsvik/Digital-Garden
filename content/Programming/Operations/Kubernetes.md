---
created: 2023-12-04T13:14
updated: 2025-10-31T09:54
tags:
  - article
  - digital-garden
  - devops
  - kubernetes
  - programming
  - cloud
  - programming/orchestration
  - docker
Finished: true
---

# Kubernetes




### Basic

**Node** A node is a computer. Also called minion. 
**Cluster**: A set of nodes working together 
**Master**: A node with kubernetes installed and master desigination. Has etcd, controller and scheduler.
**Kubelet**: Agent responsible for the containter running on the nodes. 
**Kubectl**: Command line interface.
**Controller** Noticinf and responding when nodes go down.
**etcd**: Stored all infomraitnon of all nodes. No conflict. 
**pod**: smallest instance of a pod. pods run on a node. Pods have a 1-1 relationship with containers. You do not add multiple containers to a single pod. You can have multiple containers in a pod but not recommened. 

### ReplicaSet
New way of creating replicationcontroler. 


## Taints & Tolerances
Taints can be set on a `cli` level, but 

## CLI Tools 

#### Kubectl

#### crictl


# Links
- Docker: Relevant for Kubernetes [Docker Deep Dive](../../Books/Book%20Reviews/Programming/DevOps/Docker%20Deep%20Dive.md).
- [Certified Kubernetes Application Developer](https://www.cncf.io/training/certification/ckad/) 

# Thoughts 
- Kubernetes was from Google, and was part of the orchestration wars of 2010s. Competing with Docker Swarm and Hashicorp Nomad, Kubernetes came out on top.
- to remove a taint from a node, you need to append the "-" sign after it. 