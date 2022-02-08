---
title: Chapter 2
description: Planning your documentation
layout: ../../layouts/ChapterLayout.astro
---
<blockquote class="twitter-tweet" data-conversation="none" data-dnt="true"><p lang="en" dir="ltr">A2. I think just in general, the sheer AMOUNT of info/guidance it feels like you want to provide can feel overwhelming when planning. I appreciated the reminder in Ch 2 to recognize, and/but to not feel the need to overemphasize possible edge cases. <a href="https://twitter.com/hashtag/DevEdBookClub?src=hash&amp;ref_src=twsrc%5Etfw">#DevEdBookClub</a></p>&mdash; Sarah Rainsberger (@sarah11918) <a href="https://twitter.com/sarah11918/status/1466596486930739207?ref_src=twsrc%5Etfw">December 3, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## PLANNING QUESTIONS
1. Who is your target audience?
2. What are the biggest takeaways you want them to have?
3. In order of importance, what features are you providing?
4. What do users expect from your product/service?
5. Is there any knowledge users need before they start using your product/service?
6. What are the use cases you're supporting?
7. Are there known issues/points of friction users could stumble upon?

ANSWERING THESE QUESTIONS PROVIDES A CONTEXT SO YOU CAN DECIDE WHAT TO BUILD (content outline)

## EXAMPLE OF CONTENT OUTLINE

| Title | Content Type | Brief Description |
|--------------|:---:|:---:|
| Getting started with Corg.ly! | Getting started | Simple demo for using with links to other documentation|
| Dog Translation explained | Conceptual | A technical explanation of how Corg.ly works |
| Authenticating with API | How-to | A step-by-step procedure for authenticating with API |
|Translating Dog Barks to English | How-to | A step-by-step procedure for translating dog barks into English |
| Translating English into Dog Barks | How-to | A step-by-step procedure for translating English into dog barks |
| API Reference | API reference | List of all API calls & syntax |
| Troubleshooting Audio Issues | Troubleshooting | Common issues with translating audio and managing audio files |
| Release Notes | changelog | Release notes for this release |

## CONTENT TYPES
(ie all these things are documentation!)

### Code Comments
**Code comments describe what code does**
- Document design decisions/trade-offs made when writing code
- Describe what you did and why you did it

KEEP BRIEF .. MAKE RELEVANT .. USE LIBERALLY, BUT NOT EXCESSIVELY

### README
Structure via headings:
- Installation
	1. Step 1
	2. Step 2
	3. Step 3
- Examples
- Troubleshooting
- Changelog
- Additional Resources
- License Info

### Getting Started
**To guide users through first impressions/1st time user experience**

What are the QUICKEST explanations of:
- What this service IS
- What its core features DO
- The SIMPLEST steps to install/user product
- The MOST IMPORTANT questions a new user will have
- The COOL THINGS you can do with your service

**COMMON MISTAKE IS TO ONLY PRODUCE ADVANCED-LEVEL DOCUMENTATION**

### Conceptual docs
**DESCRIBE**

- Helps users understand the concepts/ideas behind your service
- Can be opinionated, but should avoid implementation details

### Procedural Docs

**EDUCATE**

- How to accomplish specific goals by following a set of structured steps

#### Tutorials

**Tutorials teach users how to do something pre-planned through pre-defined example to walk-through**

- Provides test environment & test data e.g. code playground
- Doesn’t require any real code implementation
- "Our stuff" pre-designed ahead of time as teaching material (e.g. How to build a Netflix clone)

#### How-to guides
**Guides help users build a solution to their own problem**

- based on user action, implementing real code in their environment
- Include prerequisites at the start! (dependencies, required version). These serve not only to set users up for success, but also provide an ESCAPE HATCH so they can quickly notice if they are in the wrong place!! (e.g. if the set-up looks too unfamiliar, too difficult etc., maybe this particular thing is not what they should be looking at right now.)
- Try to keep users on a SINGLE PAGE so they only have to keep coming back to a single tab (from their own work environment), even if info could be linked to on other pages.
- Users will tend to think they NEED to know all the information you’re providing/linking to, so avoid the temptation to link to all reference material possible. Keep to minimum needed to know to solve their immediate problem

**A SINGLE STEP SHOULD DESCRIBE A SINGLE ACTION**
- Make Procedural docs stand-alone as much as possible
- Keep it to # of necessary steps only
- Avoid lengthy explanations

### Reference Docs
**CAUSE & EFFECT**

Reference documents tell users which actions produce which results

#### API reference
- Describe the standards it follows
- Explain how to authenticate/interact
- Define all resources and their endpoints, methods, parameters with example requests/responses
- List and define status codes and errors

#### Glossary
- define key terms necessary to understanding your software
- Doesn't need to be comprehensive, just key terms
- Don't link externally in case THOSE resources change
	
**DEVELOPERS EXPECT REFERENCE DOCUMENTATION TO EXIST SEPARATELY, EASY-TO-FIND**
	
### Troubleshooting Docs
**Documented workarounds for gaps/limitation**

- Shows users a solution that may not be intuitive, but still gets the job done (known limitations, edge cases?)
- Earns the readers' trust by being transparent about known issues/bugs; saves users time if they're going to hit them anyway
- Avoid too much explanation on WHY the problem happens; focus instead on the workaround

### Change documentation
**Helpful historical record for internal teams**
- Understanding WHEN changes occurred and when customers were affected can be useful info when troubleshooting (support, sales)
- Document breaking changes, new versions…
#### Changelog
**List changes in chronological order including**:
Previously supported versions, integrations or deprecated features
- Name changes of parameters or important fields
- A moved object or resource 
#### Release Notes
**Providex rich context TO USERS for changes in changelog**
- Speak directly to the user
- Here's what changed, here's why, here's how it used to be, here's how it's going to be
- New features
- Bug fixes
- Known bugs/limitations
- migrations


### Consider the reader 

Consider the current state and goal of the reader for each of these different types of docs.
- "troubleshooting" readers want to QUICKLY FIX AN EXISTING PROBLEM and GET UNBLOCKED, not read a conceptual philosophy
- explicit steps are not useful when simply FAMILIARIZING: reading more about your product, and trying to evaluate whether or not it’s something they want to use 
- API reference is where devs expect to go when they are in the middle of BUILDING




