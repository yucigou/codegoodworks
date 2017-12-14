---
layout: post
title:  "PostgreSQL Failover"
date:   2017-12-14
categories: database
author: yuci_gou
excerpt_separator: <!--more-->
---

You can give [PostDock][1] a try, either with docker-compose or Kubernetes. Currently I have only tried it with docker-compose, with the schema as shown below:

    pgmaster (primary node1)  --|
    |- pgslave1 (node2)       --|
    |  |- pgslave2 (node3)    --|----pgpool (master_slave_mode stream)----client
    |- pgslave3 (node4)       --|
       |- pgslave4 (node5)    --|

<!--more-->

I have tested the following scenarios, and they all work very well:

 - Replication: changes made at the primary (i.e., master) node will be replicated to all standby (i.e., slave) nodes
 - Failover: stops the primary node, and a standby node (e.g., node4) will automatically take over the primary role.
 - Prevention of two primary nodes: resurrect the previous primary node (node1), node4 will continue as the primary node, while node1 will be in sync but as a standby node. 

As for the client application, these changes are all transparent. The client just points to the pgpool node, and keeps working fine in all the aforementioned scenarios.

**Note**: In case you have problems to get PostDock up running, you could try [my forked version of PostDock][2].

You could even go steps further, to avoid a single point of failure. For example (see [this article][3]):

    master (primary node1)  --\
    |- slave1 (node2)       ---\     / balancer \
    |  |- slave2 (node3)    ----|---|            |----client
    |- slave3 (node4)       ---/     \ balancer /
       |- slave4 (node5)    --/


  [1]: https://github.com/paunin/PostDock
  [2]: https://github.com/yucigou/PostDock
  [3]: https://hackernoon.com/postgresql-cluster-into-kubernetes-cluster-f353cde212de