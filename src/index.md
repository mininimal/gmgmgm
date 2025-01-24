---
layout: base.njk
title: Home
---

<div class="bio">
    <button class="toggle">
        <h1>Gianmarco Minin</h1>
        <span>Info</span>
    </button>
    <div class="bioContent">
        <p>Digital Designer currently at <a href="https://www.legends.net/" target="_blank">Legends</a>. Formerly at <a href="https://www.twobarrels.com/" target="_blank">Two Barrels</a> and <a href="https://www.godaddy.com/" target="_blank">GoDaddy</a>.</p>
        <br>
        <ul>
            <li><a href="mailto:work@gmgmgm.design" target="_blank">Email</a>, </li>
            <li><a href="read.cv/gmgmgm" target="_blank">Resume</a>, </li>
            <li><a href="https://linkedin.com/in/gminin" target="_blank">LinkedIn</a>, </li>
            <li><a href="https://github.com/mininimal" target="_blank">GitHub</a></li>
        </ul>
    </div>
</div>

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
