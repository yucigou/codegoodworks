---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: page
title: Free onsite course for beginners - Code Good Works
---

{% assign author = site.data.authors['yuci_gou'] %}

<!--<img class="poster" src="/assets/images/2017-12-16-jump-start-html-css.png">-->

<picture>
    <source media="(min-width: 500px)" srcset="/assets/images/2018-02-03-javascript.png">
    <img class="poster" src="/assets/images/2018-02-03-javascript-mobile.png" alt="Course Poster">
</picture>

<header>
  <h1>JavaScript <span class="subtitle">-- From Novice to Prospective Professional</span></h1>
</header>


<p>JavaScript is an object-oriented scripting language which is used in web pages along with HTML and CSS. JavaScript is the only client-side scripting language that has been recognized universally by almost all web browsers, such as Google Chrome, Firefox, Internet Explorer, Opera, and so on.</p>
<p>According to <a href="https://insights.stackoverflow.com/survey/2017#technology-programming-languages" alt="Stack Overflow Developer Survey Results 2017">Stack Overflow's survey</a> and <a href="https://octoverse.github.com/" alt="The State of the Octoverse 2017 GitHub">GitHub's report</a>, JavaScript is the most popular programming language in 2017.</p>
<p>This <em>onsite</em> course will get you started coding in JavaScript, from novice to prospective professional.</p>
 
<ul class="course-info">
<li>Time: 14:15 - 16:45 (2.5 hours)
</li>
<li>Date: 3 February 2018
</li>
<li>Location: 
  <ul class="location">
    <li>Family Centre's Small Room</li>
    <li>Cherry Hinton Baptist Church</li>
    <li>95 High Street, Cherry Hinton</li>
    <li>Cambridge, CB1 9HR</li>
  </ul>
</li>
<li>Language: Delivered in English</li>
<li>Requirements:
  <ul class="requirement">
    <li>This course is for adult leaners only.</li>
    <li>Bring your own laptop if possible</li>
    <li>A text editor installed 
(e.g., <a href="https://www.sublimetext.com/">Sublime Text</a>, which is free for evaluation for an unlimited time. Alternatively, <a href="https://code.visualstudio.com/download">Microsoft Visual Studio Code</a> or <a href="https://atom.io/">Atom</a>, which are totally free.)</li>
    <li>A browser installed (e.g., Google Chrome or Firefox)</li>
  </ul>
</li>
<li>Coach: <a href="{{ author.linkedin }}">{{ author.name }}&nbsp;<img class="gravatar" src="{{ author.linkedinimage }}" alt="{{ author.name }}" width="24" height="24"></a> is currently working as a senior full-stack web developer at EMBL-EBI, 
and he has about 17 years' coding experience.
</li>
</ul>

<div class="notes">
    <p>Notes:</p>
    <ul>
    <li>
    There are only 7 places available for this course due to the size of the venue.
    We will email you to confirm if you have succesfully signed up the course.
    </li>
    <li>
    If there are more than 7 applications for enrolling in this course, 
    and you happen to be one of those who are not able to sign up this time, 
    we will consider to open the course again for you soon afterwards. 
    Really sorry for the inconvenience, and thank you for your kind consideration and support.
    </li>
    </ul>
</div>

<p>
Please fill the form to enrol in the course:
</p>

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdkcwBkfqQ8lVDt8tI2MLv8TUZeTTg1SL3LVCLUPheyih_YPA/viewform?embedded=true" height="1650" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

<!--
<form id="application-form" method="POST" action="http://formspree.io/xxx@gmail.com">

  <input type="hidden" name="_subject" value="Application for course Jump-start HTML & CSS" />
  <label for="fullname">Your full name:</label>
  <input type="text" name="fullname" placeholder="Your full name" size="30" required/>

  <label for="email">Your email:</label>
  <input type="email" name="_replyto" placeholder="Your email" size="30" required/>
  
  <input type="radio" name="enrolment" value="signup" checked="checked"> Sign up
  <input type="radio" name="enrolment" value="withdraw"> Withdraw
  
  <label for="message">Message (optional):</label>
  <textarea name="message" id="message" placeholder="" rows="5" cols="31" maxlength="200"></textarea>
  <input type="text" name="_gotcha" style="display:none" />
  <button type="submit">Send</button>

</form>
-->

<script src="{{'/assets/js/enrolment.js'}}"></script>
