---
title: Chapter 11
description: Maintaining and deprecating documentation
layout: ../../layouts/ChapterLayout.astro
---
<blockquote class="twitter-tweet" data-conversation="none" data-dnt="true"><p lang="en" dir="ltr">A3. I liked reminder re: deprecated documentation &quot;Don&#39;t just hide it -- flag it&quot; bc some users may still be using older versions/features of your product, and need support for THEIR current status, and/or notice/warning it&#39;s going away or no longer supported. <a href="https://twitter.com/hashtag/DevEdBookClub?src=hash&amp;ref_src=twsrc%5Etfw">#DevEdBookClub</a></p>&mdash; Sarah Rainsberger (@sarah11918) <a href="https://twitter.com/sarah11918/status/1489430354708545538?ref_src=twsrc%5Etfw">February 4, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Planning for Maintainability

- Assign document owners who feel ownership/accountability vs. "everyone's job" or "second thought"
- Align documentation with release schedules to make it "just part of the process" 
- Reward document maintainance so people want to do it!

## Automatic Maintainance

Consider what can be automated to reduce "toil"

- content freshness checks: eg show the last modified date ON THE DOC to make it easier to notice which docs are older
- link checkers
- linters (prose linters similar to grammar/spell check), some are sophisticated enough to catch exclusionary/harmful language

## Removing Content

- Don't just delete or hide old/out of date content
- Flag it, call attention to it so users are warned if a feature is or will be deprecated
- Users might be running older versions, and might still need that documentation 
- deprecate content when it is "safe" to do so (eg. no users on that version, a clear upgrade path or workaround is available to a deprecated feature)