## Introducing Colosseum

At the end of Spring, I'd just come off working on a lot of big projects. These were all really interesting, and I'm glad I had a chance to work on them, but I still felt exhausted and needed a break. I wanted to do something I've never done before. I've always wanted to make an RPG though, and since I suddenly had some free time, I decided to open up RPG Maker MV and see what I came up with. The end result was [Colosseum](https://reccanti-rpgs.herokuapp.com/).

![Screen Shot 2016-07-31 at 12.32.36 PM.png]({{site.baseurl}}/blog/_posts/Screen Shot 2016-07-31 at 12.32.36 PM.png)

### Gameplay

Right now, Colosseum is in it's infancy so it's pretty basic. You have a single character who goes to the entrance to the Colosseum to challenge a single enemy, the Old Captain.

![Screen Shot 2016-07-31 at 12.32.51 PM.png]({{site.baseurl}}/blog/_posts/Screen Shot 2016-07-31 at 12.32.51 PM.png)

My goal was to make a fight that the player couldn't just power through. In order to beat the Captain, you have to learn his (pretty simple) attack pattern to know when to attack and when to defend. This ended up being more complicated than I thought. I had to figure out how to increase the strength of the player's _Guard_ skill, which involved learning how skills work, and in some cases digging into the engine's source code to see how things were calculated.

### Future Plans

A Colosseum with one fight isn't very impressive, so I'd like to add more. These would be in the spirit of the Old Captain, fights that require a bit more strategy than just powering through. I'd also like to add more characters and incorporate a team-building mechanic. You would start the game with a sum of money, then use that to hire fighters and purchase items. I'd also like to make the game look better, sprucing up the designs of the characters and the level, and maybe adding custom assets in the future 

In addition to that, I also have more long-term goals for the site itself. I think it would be cool to add some social components, like giving players profiles and having a sidebar where you can see the fights that other players are in.

If you have any ideas or want to help out, the project is up on [Github](https://github.com/reccanti/Colosseum). Feel free to write up any issues, make feature requests, or fork the project.