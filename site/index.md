---
title: Home
---

<div class="projects">
{% for project in collections.projects %}
    <div class="project">
        <button class="toggle">
            <h2>{{ project.data.title }}</h2>
            <span>{{ project.data.year }}</span>
        </button>
    </div>
    <div class="projectContent">
        <div class="projectDescription">
            <p>{{ project.data.description}}</p>
            <a href="{{ project.url }}"><div class="projectLink">Case Study →</div></a>
        </div>
    </div>
{% endfor %}
</div>
