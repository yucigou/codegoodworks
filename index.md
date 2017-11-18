---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: page
---

<h1>Latest Posts</h1>

{% for post in site.posts %}
<section class="post-excerpt">

	<h2 class="post-excerpt-title"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>&nbsp;<p class="post-excerpt-date">{{ post.date | date_to_string}}</p>
    {{ post.content | truncatewords: 75 | replace: '<h3', '<h4'  | replace: 'h3>', 'h4>' | replace: '<h2', '<h3'  | replace: 'h2>', 'h3>' }}
    <p><a href="{{ site.baseurl }}{{ post.url }}">Continue reading &rsaquo;</a></p>

</section>

{% endfor %}

<script src="{{'/assets/js/home.js'}}"></script>
