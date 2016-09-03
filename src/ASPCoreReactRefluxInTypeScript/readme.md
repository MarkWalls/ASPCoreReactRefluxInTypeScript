# ASPCoreReactRefluxInTypeScript
A brainstorm project on using Kestrel/ASP core for a React dev environment with TypeScript

# Why?
Most of the demos I've seen are geared towards the majority, especially in React-Land. That majority does't use Visual Studio as their day to day editor of choice.
Moving from those demos into Visual Studio can be a bit of a leap unless you have a pretty deep bucket of experience or enough coffee to see you through.
(I have a newborn and lots of sleepless nights, so... there is time.)

# What is the idea?
I'm going to use the normal MVC system in ASP to act as a bridge for people coming from more mainstream VS/Microsoft land. I am also wanting to invest some energy in
Kestrel-land just in case that ends up as sweet as it seems. I am also wanting to keep with a C# backend - partly because it is my own background, but also
because I think it is a solid first class language that could work well for this.

I am using this as a brainstorm area for how this whole stack could play well together, as well as a larger architectural discussion I've been having with myself
: the concept of Flux/Redux is great - one way data flows make alot of sense once you wrap your mind around it - so can an entire application framework (front to back)
be set up as a larger one way data flow? Can those principles be extended to the entire stack making it easier to reason with - message based like the front end is?

Anyway, a couple of things I'm going to add in as I go along:

* React
* React Router
* Redux
* Authentication (probably not Identity though - sorry guys)
* Signalr
* A plugin system so modules can be added to both the front and back end
* Webpack with CSS modules (I'd like them to be SASS)
* Fantastic logging and QOS systems for Q/A
* Extensive testing framework - make it a simple pit of success that test first is easier than not
* A good framework of React components that we can share around (They are scattered around right now - List time!) (Perhaps a framework to build React components on?)




