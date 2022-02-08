---
title: Chapter 1
description: Understanding your Audience
layout: ../../layouts/ChapterLayout.astro
---


<blockquote class="twitter-tweet" data-conversation="none" data-dnt="true"><p lang="en" dir="ltr">Q2: Negative feedback is often a sign that the user is coming from an &quot;unexpected&quot; (by the docs) place/context, bc new knowledge can only be built on older knowledge. I (try to!) see it as an opportunity to think of new backgrounds/needs our users might have. <a href="https://twitter.com/hashtag/DevEdBookClub?src=hash&amp;ref_src=twsrc%5Etfw">#DevEdBookClub</a></p>&mdash; Sarah Rainsberger (@sarah11918) <a href="https://twitter.com/sarah11918/status/1461524026111799298?ref_src=twsrc%5Etfw">November 19, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


Consider: why are you writing this documentation in the first place??

You don't just want your users to know something about your product/software, you want them to complete a set of tasks or change their behaviour in some way.

> **Consider the goal of DOCS (Business Goals)**
>
> (onboard new users to help them integrate w API, use the site..)
>
> *"Onboard new users to Corg.ly by helping them integrate with our API"*
>
> vs
>
> **the goal of the USERS (Engineering Goals)**
> 
> (use your stuff, build something)
>
> *"Translate my dog’s barks into human speech"*

## Identifying Users
By their 
- role (project manager, developer, system administrator)
- level of experience (junior/senior? New to their roles?)
- situation they're in when they're reading your documentation (4am emergencies?)

PRIORITIZE THE USERS WHO ARE MOST IMPORTANT FOR YOUR PRODUCT/BUSINESS
(Not every user is the same; you can't meet every user's need)

For a DEVELOPER audience, consider:
- Developer skill
- Programming languages
- Developer environment
- Operating system
- Team role . . .


## Outline User needs

| General       | Specific to product/user goal |
|--------------|:------:|
| What is this product?<br>Will it solve my problem?<br>What features are available<br>How much does it cost?<br>How do I get started|  How do I authenticate against your API?<br>How do I use a specific feature?<br>How do I troubleshoot a specific problem?| 

Validate your understanding with DATA

- analyze support tickets (look for themes)
- interviews 
- developer surveys 

(aim for a diverse audience, and ask specific, closed, optional, neutral questions)

**"The curse of knowledge"** - cognitive bias assuming others have your knowledge (ie not being able to think from perspective of a beginner)

## **JOURNEY MAP** 

*A diagram showing the path a user takes through a product or website while trying to accomplish a particular task*

1. Define the task the user is trying to accomplish
2. List the channels a user may interact with (website, docs, repository, app itself…)
3. Piece together the steps a user takes through each channel (eg discover, sign up, install, configure, test, run, review)
4. List the user experience at each step (eg what they are DOING, THINKING, FEELING)
5. Connect the channels, steps, experiences in a flow

## **FRICTION LOG** 

*A journal where you try your software as a user would and record your experiences*

- Log each step sequentially NOTING ANY GAP between the behaviour you EXPECT, and actual behaviour
- Keep a tight scope to keep results actionable
- Pick a user scenario with a clear beginning and end
- CONSIDER: are these friction points that need fixing in your
    - PRODUCT (typo, error message) or 
    - in your DOCS (instructions)?
