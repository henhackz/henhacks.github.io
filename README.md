# Sound-ificator-inator
A project dedicated to reducing overstimulation in noisy environments for neurodivergent people (or anyone else who suffers from sensory issues)!

Sound-ificator-inator works by emulating the sounds of a real environment of your choosing. If you turn your head, the sounds in your headphones change with your movement. We do not currently own earbuds with gyro capability, so we have emulated the head movement using a model 4b raspberry pi and a sense hat. This is only for the purpose of our prototype.

## Features
We're really proud of this. Here are some of the features we created:
- Dynamic positional audio
- Gyro reading locally on the raspberry pi
- Custom API for reading in gyroscopic data
- 3D Render using three.js
- Completely functional front end with user-friendly UI

## Set Up
To run your own instance of Sound-ificator-inator, you will need three things:
- A raspberry pi with a sense hat
- A server or device to run the express.js code on (this is for the API)
- A device to run the source code locally (and be the same as the prior)

First, fork this repo. Run the code from main on whatever machine you have dictated to run the source code. Then, either run the express.js code on that same machine or deploy it to Render; there are more instructions on this below. Change the link in requests.post to your deployment link. Finally, run req.py on your raspberry pi.

For the express.js server, we used Render to deploy it. You can find our instance [right here](https://soundificatorinator.onrender.com/). You can use Render to deploy your own instance of the API or simply run it locally. Just remember that **you must change the requests link in the req.py file.**

Once all three of these are running, you're set! For further instructions or help, we recommend these resources:
- https://mui.com/toolpad/how-to-guides/render-deploy/
- https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

## Why is it named that?
Answer:

![Doofenshmirtz](https://thepioneerpress.org/wp-content/uploads/2021/05/DoofenshmirtzFull.jpg)
