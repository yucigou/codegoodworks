---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: page
title: Free courses for beginners - Code Good Works
---

{% assign author = site.data.authors['yuci_gou'] %}

<h1>About</h1>

<p>Code Good Works is a charitable foundation, committed to providing free training courses to help beginners with their coding journeys.</p>

<p>
If you are considering: 
<ol>
    <li>Obtaining coding skills in order to look for a job as a programmer, or</li>
    <li>Acquiring new coding skills to help with your job or projects,</li>
</ol>
Code Good Works might be able to help.
</p>

<h2>Our coaches</h2>
<p>
<a href="{{ author.linkedin }}"><img class="gravatar" src="{{ author.linkedinimage }}" alt="{{ author.name }}" width="24" height="24"> {{ author.name }}</a> is currently working as a senior full-stack web developer at EMBL-EBI, 
and he has about 17 years' coding experience.
</p>
<p>You can also find him on <a href="{{ author.github }}" alt="GitHub">GitHub</a>, <a href="{{ author.stackoverflow }}" alt="Stack Overflow">Stack Overflow</a>, or <a href="{{ author.orcid }}" alt="ORCID">ORCID</a></p>

<script src="{{'/assets/js/about.js'}}"></script>
