---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: page
---

<h1>Jump-start HTML & CSS</h1>

<ul class="course-info">
<li>Time: 14:15 - 16:45 (2.5 hours)
</li>
<li>Date: 16 December 2017
</li>
<li>Location: Cambridge, England
</li>
<li>Requirements: If possible, bring your own laptop with a text editor 
(e.g., <a href="https://code.visualstudio.com/download">Microsoft Visual Studio Code</a>, <a href="https://atom.io/">Atom</a>, etc., which are free) and a browser (such as Google Chrome or Firefox) installed.
</li>
</ul>
<p>
Please fill the form to enrol in the course:
</p>

<form id="application-form" method="POST" action="http://formspree.io/brother.yuci@gmail.com">

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

    <div class="notes">
    <p>Notes:</p>
    <ul>
    <li>
    There are only ten places available for this course due to the size of the venue.
    We will email you to confirm if you have succesfully signed up the course.
    </li>
    <li>
    If there are more than ten applications for enrolling in this course, 
    and you happen to be one of those who are not able to sign up this time, 
    we will consider to open the course again for you soon afterwards. 
    Really sorry for the inconvenience, and thank you for your kind consideration and support.
    </li>
    </ul>
    </div>

</form>

<script src="{{'/assets/js/enrolment.js'}}"></script>
