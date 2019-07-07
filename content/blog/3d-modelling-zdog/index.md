---
title: Modelling BT21's Shooky using Zdog
date: "2019-07-07"
---

If you didn't know, I'm a huge BTS fan so I've always wanted to create something involving BT21, their cute character counterparts. BT21 is a brand co-created by BTS themselves and Line. If you want to check out Tata, Cooky, Koya, RJ, Shooky, Chimmy, Mang, and Van, visit their [website](https://www.bt21.com/) (they're so cute, I swear)!

While scrolling through my Twitter timeline, I found this [really cool library about 3D modelling: Zdog](https://twitter.com/desandro/status/1133373535542489088). I was intimated by it at first because I had a really painful experience of 3D modelling &ast;cough&ast; Blender &ast;cough&ast;. I'm kidding, it wasn't /that/ bad. But I always felt like 3D modelling isn't really my thing because I have a hard time visualizing the 3D space.

I set aside this dislike and tried it out since I wanted to learn something new, and it involves Javascript, so it should be pretty simple right?

And I'm glad I tried it out. It's so easy!! The problem of trying to recreate an object in 3D space is still there but creating it is so much simpler! The best part is that there are a lot of code examples online, so it's so easy to follow their technique and tricks.

I didn't want to pass up the opportunity and tried modelling one of the BT21 characters. Initially, I wanted to create Tata but modelling a heart-shaped character was too complicated for a beginner (and for their first sample). I resorted with Shooky instead, because he's literally just a cookie. 😂

The code was pretty simple, I just had to create a couple of circles and then place them in the right position. Here's a code snippet of Shooky's body and eyes.

```javascript
// Add body
new Zdog.Ellipse({
  addTo: group,
  width: 150,
  height: 130,
  stroke: 80,
  fill: true,
  color: '#bd7d4f'
})

// Add eyes
let eye = new Zdog.Ellipse({
  addTo: group,
  diameter: 15,
  fill: true,
  color: 'black',
  stroke: 15,
  translate: { x: -35, y: -10, z: 40 },
  backface: false,
})

eye.copy({
  translate: { x: 35, y: -10, z: 40 },
})

````

What I love about Zdog is that you can easily group them. It helps a lot especially when two objects should move in sync.

```javascript
let group = new Zdog.Group({
  addTo: illo
})
```

The most complicated part was defining Shooky's mouth and teeth. These are custom shapes so I had to indentify each point. This was a bit challenging because I had to estimate the curvature as well, but with practice, I think I would be able to do this easily.

```javascript
// Add mouth
new Zdog.Shape({
  addTo: mouth,
  path: [
    { x: -65, y: 25, z: 40 },
    { x: 65, y: 33, z: 40 },
    { arc: [
      { x:  65, y: 60, z: 40 }, // corner
      { x:  50, y: 65, z: 40 }, // end point
    ]},
    { arc: [
      { x:  0, y: 70, z: 40 }, // corner
      { x:  -50, y: 55, z: 40 }, // end point
    ]},
    { arc: [
      { x:  -65, y: 55, z: 40 }, // corner
      { x: -65, y: 25, z: 40 }, // end point
    ]},
  ],
  stroke: 10,
  fill: true,
  color: '#6a3726',
  backface: false,
})
```

From the code above, you might wonder, what does `backface` do? I asked that question, and the answer is indeed mindblowing. For our 3D models, say when you place a circle on another shape, it creates a "hole" on the container object. Technically, when you move the object around, you can see an instance of it on the other side. We don't want that on our faces, right? Since the eyes and mouth really just appear on the front and not on the back. That is where `backface` comes in. Just set it to `false` and it doesn't appear on the back side anymore.

To make all of this work, we have to render and animate it.

```javascript
function animate() {
  illo.updateRenderGraph()
  requestAnimationFrame( animate );
}

animate()
```

For this sample, I made the animation simple, where the user can just drag the object to rotate it around. But there are other animation options, and you can make them custom as well.

To check out the full code, click this [link](https://codepen.io/binkymilk/pen/bPNLWN).

I definitely learned a lot from this exercise, and if given a chance where I need to use 3D models in a project, I would definitely use Zdog again.