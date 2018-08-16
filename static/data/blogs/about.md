Welcome to my blog! This first post will just serve as a collection of notes on
the design and implementation of this website. I started work on this site almost 
a year ago, thinking it would be finished in a couple weeks. But, as always, 
Hofstadter's Law got in the way:

> **Hofstadter's Law:** It always takes longer than you expect, even when you take into account Hofstadter's Law.

#### Purpose

This site is just a place where people can learn a little bit more about me. A
lot of my life is determined by what I'm working on at the time, so a lot of this
site will focus on showing off different projects. That's where the portfolio page 
comes in; hopefully it gives you an idea of the scope of projects I've worked on 
in the past. I may also write about future projects on this blog.

Besides what I'm working on, where I'm living is the next biggest determinant in 
my life. In just the last year, I've spent time living in Massachusetts, New York
and California. To give you a better sense of how geography shapes my life, the 
home page of this site is an interactive map of the places I've been. As I go on
more trips, I'll add more content, and I may fill in the info for some old trips 
as well. 

#### Implementation

My main technical goal for this site was to be able to add to content without 
writing any code. The data that populates this site lives in a series of json and
markdown files, separate from the HTML templates and CSS that determine how it 
all looks. I use Flask to serve the website, adding in a tiny bit of middleware
that pipes the site content into the HTML that is returned to viewers.

Another goal was to rely as little on 3rd party APIs and libraries as possible.
The two biggest exceptions to this rule are the use of Google Maps API for the 
home page, and Mistune to convert markdown into HTML. 

#### The Blog

I've wanted to start a blog for a couple years, and now I've finally gotten
around to it. There are a whole lot of things I want to write about, and I hope 
to be pretty active on here (but we'll see). I'll try to at least do posts about 
any projects I work on, but I might also write book reviews, stuff about politics,
or anything else on my mind.

