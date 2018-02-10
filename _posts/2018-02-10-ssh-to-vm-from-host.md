---
layout: post
title:  "VirtualBox: Set up VM network"
date:   2018-02-10
categories: virtual_machine
author: yuci_gou
excerpt_separator: <!--more-->
---

Once you've installed a virtual machine (VM) such as [Ubuntu][1] in the [VirtualBox][2], you would like to go ahead and configure the VM network so as to be able to do two things:
 - Access the Internet from the VM
 - [SSH][3] to the VM from the host machine

In order to achieve this, you need to set up two network adapters for the VM.

First of all, stop the VM if not yet. Then select the VM and click the Settings menu in the VirtualBox toolbar as shown below:

<img src="{{ site.baseurl }}/assets/images/2018-02-10/setup.png" class="post" alt="Setup menu">

<!--more-->

# Set up Adapter 1
<img src="{{ site.baseurl }}/assets/images/2018-02-10/adapter1.png" class="post" alt="Adapter 1">

This adapter enables the communication between the VM and the host machine.

# Set up Adapter 2
<img src="{{ site.baseurl }}/assets/images/2018-02-10/adapter2.png" class="post" alt="Adapter 2">

(Note: you don't need to set up any port forwarding.)

This adapter enables the access to the Internet from the VM. 

That's it. Once set up, you can start your VM. In your VM, the network configuration will look like below and you'll have Internet access too:

<img src="{{ site.baseurl }}/assets/images/2018-02-10/network-conf.png" class="post" alt="VM network configuration">

Also in your host machine, you can SSH to your VM:

<img src="{{ site.baseurl }}/assets/images/2018-02-10/ssh.png" class="post" alt="SSH to VM from host">

For your information:

 - My VirtualBox version: 5.2.6 r120293 (Qt5.6.2), 2018
 - My Ubuntu version: Ubuntu 16.04.3 LTS
 - My host machine: Windows 10

[1]: https://www.ubuntu.com/
[2]: https://www.virtualbox.org/
[3]: https://www.ssh.com/
