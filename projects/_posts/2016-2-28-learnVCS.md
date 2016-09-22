---
layout: post
title: learnVCS
description: >
 A website designed to introduce version control concepts to new students in the Rochester Institute of Technology's Interactive Games and Media program.
category: project
preview-img: "https://cloud.githubusercontent.com/assets/10334948/18622628/ebd1f8f2-7dff-11e6-8253-9049ace15ae6.png"
feature-img: "projects/assets/LearnVCS/learnVCS3.png"
hidden: true
skills: ["Sketch", "SCSS", "React"]
links:
  - name: "View code on GitHub"
    url: "https://github.com/learnVCS/learnVCS.github.io"
comments: false
--- 

## Technology Used

- Sketch
- Sass (SCSS)
- React

## Role

- Design Lead
- Front-end developer

## The Project

[learnVCS](http://learnvcs.github.io) is a website designed to introduce version control concepts to new students in the RIT Interactive Games and Media (IGM) program. The site provides an interactive example of a Git commit history and compiles links to other version control resources. 

The project was developed for IGM to fill a gap in the curriculum. As students in this program, my team and I noticed that version control wasn't being covered as an integral part of the coursework. We wanted to create a resource that was both informative for students and easy for professors to integrate into their courses.

## Tasks

![Mockups]({{ site.baseurl }}/projects/assets/LearnVCS/Mockups.png)

### Creating the Design

We wanted the site to be as simple to use as possible. We decided that a single-page layout would be the best approach, and I created a living design in Sketch. The layout is designed to answer the questions *"what is version control?"*, *"why is it important?"* and *"where can I learn more?"* in that order. The interactive Git tree was placed at the top because, in addition to being the most striking element, it also provided a means of interfacing with a Git workflow.

learnVCS was designed to be responsive in order to be accessible on as many devices as possible. Keeping [Atomic Design principles](http://patternlab.io/about.html) in mind, we separated it out into multiple reusable components that would be able to scale and reflow at different screen resolutions.

![Mockups]({{ site.baseurl }}/projects/assets/LearnVCS/Cards.png)

The visual design of the site was based on Google's [material design guidelines](https://www.google.com/design/spec/material-design/introduction.html#introduction-principles), though with several modifications. The resource links use a [card-like structure](https://www.google.com/design/spec/components/cards.html) so that, in addition to displaying textual information and rich media about the resource, the card itself could serve as a point of action.

### Front-end Styling

In order to organize our styles more effectively, we used [BEM notation](https://css-tricks.com/bem-101/). Under this system components were considered Blocks, and the HTML structures that made up the component were considered Elements. If a particular Element needed variations, such as being a different color or size, it was handled through Modifiers. This system made managing and modifying our styles much easier. We always knew which CSS was styling our components and where to go if we needed to make changes. 

Implementing BEM syntax was made much easier with Sass. Partials allowed us to separate our blocks into separate files, and nesting allowed us to group related elements and keep naming consistent. Furthermore, we were able to keep fonts, colors, and animations consistent by using variables and mixins.

![Mockups]({{ site.baseurl }}/projects/assets/LearnVCS/nodes.png)

### Creating React Components

Most of the site was written in standard HTML, but the Git tree was written in React. The graph was rendered using a modified version of a component called [React Commits Graph](https://github.com/learnVCS/react-commits-graph). One of my responsibilities was separating out commit nodes into a separate component. This made it easier to manage the colors and styles of this component, and it allowed us to add more complex behaviors like animation.
