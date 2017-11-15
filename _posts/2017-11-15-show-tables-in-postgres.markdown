---
layout: post
title:  "Show tables in PostgreSQL"
date:   2017-11-15 14:36:41 +0000
categories: database
author: Yuci
---
You can use PostgreSQL's interactive terminal Psql to show tables in PostgreSQL. 

**1. Start Psql**

Usually you can run the following command to enter into psql:

    psql DBNAME USERNAME

For example, `psql template1 postgres`

<!--more-->

One situation you might have is: suppose you login as root, and you don't remember the database name. You can just enter first into Psql by running:

    sudo -u postgres psql

In some systems, sudo command is not available, you can instead run either command below:

    psql -U postgres
    psql --username=postgres

**2. Show tables**

Now in Psql you could run commands such as:

 1. `\?` list all the commands
 2. `\l` list databases
 3. `\conninfo` display information about current connection
 4. `\c [DBNAME]` connect to new database, e.g., `\c template1`
 5. `\dt` list tables
 6. `\q` quit psql
