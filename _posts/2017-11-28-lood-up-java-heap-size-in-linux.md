---
layout: post
title:  "Look up Java heap size in Linux"
date:   2017-11-28
categories: Java
author: yuci_gou
excerpt_separator: <!--more-->
---

You can use the following command in the Linux command line:

    ps aux | grep java

or

    ps -ef | grep java

and look for `-Xms` and `-Xmx` to find out the initial and maximum heap size specified.

<!--more-->

In case that `-Xms` or `-Xmx` is absent for the Java process you are interested in, which means your Java process is using the default heap sizes, you can instead use the following command to find out the default sizes:

    java -XX:+PrintFlagsFinal -version | grep HeapSize

or for a particular JVM, for example,

    /path/to/jdk1.8.0_102/bin/java -XX:+PrintFlagsFinal -version | grep HeapSize

and look for InitialHeapSize and MaxHeapSize, which is in bytes.