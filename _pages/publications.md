---
layout: page
permalink: /Publications/
title: Publications
description: Books, edited volumes, journal and conference papers, in reversed chronological order within each category.
nav: true
nav_order: 1
pub_index_labels: true # renders [B1]/[E1]/[J1]/[C1] reference numbers
---

<!-- _pages/publications.md -->

For the most recent publications, you may also refer to my [Google Scholar profile](https://scholar.google.com/citations?user=bd-XZkYAAAAJ) and [DBLP profile](https://dblp.org/pid/63/1911.html).

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<div class="pub-list pub-list-book">
<h2 class="bibliography">Books and Book Chapters</h2>
{% bibliography --query @book, @incollection --group_by none --prefix b %}
</div>

<div class="pub-list pub-list-edited">
<h2 class="bibliography">Edited Volumes and Special Issues</h2>
{% bibliography --query @misc --group_by none --prefix e %}
</div>

<div class="pub-list pub-list-journal">
<h2 class="bibliography">Journal Papers</h2>
{% bibliography --query @article --group_by none --prefix j %}
</div>

<div class="pub-list pub-list-conference">
<h2 class="bibliography">Conference and Workshop Papers</h2>
{% bibliography --query @inproceedings --group_by none --prefix c %}
</div>

</div>
