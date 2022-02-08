---
title: Chapter 6
description: Adding visual content
layout: ../../layouts/ChapterLayout.astro
---
<blockquote class="twitter-tweet" data-conversation="none" data-dnt="true"><p lang="en" dir="ltr">A3. I liked the message &quot;Simplify to Amplify&quot; because it&#39;s true, visuals can be great, but can just as easily be a distracting mess if not as edited/focused as our prose. <a href="https://twitter.com/hashtag/DevEdBookClub?src=hash&amp;ref_src=twsrc%5Etfw">#DevEdBookClub</a></p>&mdash; Sarah Rainsberger (@sarah11918) <a href="https://twitter.com/sarah11918/status/1476752775316967425?ref_src=twsrc%5Etfw">December 31, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Simplify to Amplify

Visual content is a SUPPLEMENT to (not REPLACEMENT for) written documentation.

(Fun fact! Upper case is more difficult to read because the letters are all the same basic size/shape with little variety in their dimensions. It's the variety of lower case letters that help with comprehension and easier reading.)

Ineffective visual content interferes with the transmission of information due to a lack of:

### Comprehension

Consider asthetics. Overcomplicated diagrams may be less useful than no diagrams at all.

### Accessiblilty

Visual content should consider e.g.g alt-text, colour-blind palattes, dyslexic-friendly fonts, reduce motion options.

### Performance

The addition of visual content may affect site performance, loading speeds, network usage, and should be considered.

## Types of Visual Content

### Screenshots

- Should never be used as a sole source of critical information (e.g. a URL)
- Are not copy/paste friendly
- Instead of alt-text, consider writing in such a way that any necessary content/description is readily available right in the page body text. (This way you know you've described/explained, and the visual is really just a supplement.)

### Diagrams

Different types of diagrams are best for conveying different types of information.

#### Boxes and Arrows

- depict relationships, data flow
- ensure minimal clutter
- do not cross arrows!!

#### Flow Charts

- guide the reader from start to finish
- helpful for procedures with multiple steps, especial if choices are involved

#### Swim Lanes

- like a flow chart, but has different "lanes" for different users (junior/advanced; product owner/developer)


##### Labels

- "When in doubt, spell it out!"
- Diagrams, code samples may also benefit from being labelled/annotated to explain structure/composition

##### SVG

- svg scales well for reading visual content on a variety of screen sizes


## Maintaining Content

Visual content requires just as much, if not more, regular testing and maintainance than the other components of your documentation.

- visual content can fall out of date even more quickly than text
- a single UI change can render screenshots obsolete
- a process change can mean a diagram suddenly guides users incorrectly
- an entire video can be rendered completely useless (and, is the most work to produce??)