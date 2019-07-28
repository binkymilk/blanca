---
title: The WTF 😱 moments I had while building my React + Flask ML app
date: "2019-07-15"
---

I've heard of Flask before, and I know Flask and Django are the two most popular Python web frameworks. But I've never really worked with Flask, and for most projects, I end up using Django. 

Then I saw this tweet:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">unsolicited data science career advice: learn Flask + just enough React to be able to build functional front-ends for your DS work + just enough CSS to make it look not-horrible, it&#39;s like having a superpower (and it&#39;s not that hard)</p>&mdash; Joel Grus ♥️ 📓 (@joelgrus) <a href="https://twitter.com/joelgrus/status/1143951419151540225?ref_src=twsrc%5Etfw">June 26, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

And I'm like, "Oh wow, I know React and CSS, now I just have to learn Flask, and then I'll have a superpower."

So just like that, I stretched my arms, cracked my knuckles, and googled:

> flask react app tutorial for beginners

## WTF #1: Why are there no proper React + Flask tutorials on the web?! 😩

The tutorials that showed up were either too complicated for a beginner (bundled with a lot of things that I don't really need to learn) or were too long to study for a one-sitting project.

So I ended up spending a good 30 minutes just finding the right Flask + React tutorial. Then I read this article: [Create a complete Machine Learning web application using React and Flask](https://towardsdatascience.com/create-a-complete-machine-learning-web-application-using-react-and-flask-859340bddb33). 

Nice! This was my goal in the first place! And it was great for a beginner because I really did not want to dive deep on the machine learning part of the application. My main goal was to create a simple Flask + React app where I can easily integrate machine learning models so I'm off to a great start.

The [repo](https://github.com/kb22/ML-React-App-Template) was supposed to be a template for creating a Flask + React app but good thing there's an example inside on integrating the three.

I started installing dependencies, and then I realized...

## WTF #2: Where's my Flask boilerplate? 🤔

I think I sound stupid by now but do take note that I have 0 knowledge on Flask by this time. I was mostly exposed to Django, so I was expecting boilerplate files that would appear after I installed Flask.

And so I realized my WTF #1 &mdash; maybe that's why there aren't a lot of tutorials on Flask because essentially, you're building it from scratch. No specific files to learn about, no major CLI magic to memorize. I can have a Flask app with just one file.

But it was hard to wrap it around my head because, where do I start? What should I do next? I ended up copying the code from the repo above while trying to understand each line.

I realized that it wasn't so daunting at all. The flask app had only a few lines about the API. I recognized a few lines that were similar to Django, and I thought, "Flask isn't so bad at all." And that's exactly its purpose. I've been thinking about querying databases and complicated APIs, but there are really a lot of use cases where you just need a simple API like this one. And it's too much work if I tried doing this in Django.

Now, I've got my React and Flask app set up, how exactly are we sending the input from the front end to the machine learning model?

## WTF #3: joblib is the real MVP 😎

Now, you've trained your machine learning model, what's next? How do you connect this to your web app?

`joblib` is a python library that allows you to save your model (in this case, an iris classifier), so you use that to run whatever input that's coming from the front end app.

In my Flask app, I just load the model, pass the parameters, and get the output. It's that simple.

```python
# Saving the classifier
joblib.dump(classifier, 'classifier.joblib')

# Loading the classifier
classifier = joblib.load("classifier.joblib")
```

With these simple tools, I was able to create a full-stack application that interacts with a machine learning model. I'm guessing this would be more complicated if I used Django, especially that I don't really need to use a database to store inputs. If you want to check out bits of my code (feel free to ✨ [tweet me](https://twitter.com/binkymilk) ✨ if you think there are ways to improve them!), you can visit [this Github repo](https://github.com/binkymilk/siri).

There's still a lot to learn about Flask, but I'll get there soon when I tackle more complicated problems. Excited to ship off more machine learning applications using this tech stack soon!


