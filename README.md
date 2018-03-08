# BlogCodingAudition

## Instructions to run
It is recommended to run this program in a virtual environment, which can be created and entered with the commands:

```
virtualenv -p python3 env
source activate env
```

After creating your virtual environment, you need to install the required libraries and modules by executing both of the following commands in the ```webproject``` directory:

```
pip install -r requirements.txt
npm install
```
Finally, the server can be started on Linux with 
```
./exec.sh
```
or by running the following two commands
```
node_modules/.bin/webpack --config webpack.local.config.js
./manage.py runserver
```
 The server will start, and can be accessed by navigating to 127.0.0.1:8000 on the machine the server is running on. Alternatively, you may change the second line of ```exec.sh``` to
```
./manage.py runserver <ip>
```
where ```<ip>``` is the ip address of the device being run on. Make sure to add this address to ```ALLOWED_HOSTS``` in ```webproject/webproject/settings.py```

This server is currently set to run in debug mode, and is not fully prepared for deployment in a production server. See [this site](https://docs.djangoproject.com/en/2.0/topics/security/) or run ```./manage.py check --deploy```for the basics on setting up the server for SSL, and connect the website to your web server to allow it to serve static files to clients.

## Items Implemented

All basic items were attempted. The entire site does not use ReactJS, falling into a single page application, as client side manipulation of some data was ulitmately ruled too liable to manipulation from outside sources (note that, without SSL, neither server-side scripting or client-side scripting are secure for the user).

Item 1 (Responsive Design) was incorporated from the very beginning, as I was quite familiar with Bootstrap.

Item 5 (Social Integration) was also implemented, as it was a very simple process to incorporate a simple "like" widget from Facebook. However, the formatting on the widget does not agree with mobile devices, as it is forced to be larger than the width of many devices. As a compromise, the widget doesn't look perfect on desktop devices, but is still usable on both devices. If time allowed, I would instead attempt to investigate alternative solutions to this problem, though such widgets seem especially difficult to manipulate with simple CSS.

Items 2 and 3 (relating to Entity Framework) were throughly researched, but I personally could not figure out how to create communication channels between Entity Framework and Django without damaging the integrity of either tool. It was ultimately decided to be left for integration at a later time, with the assistance of a more expert user of the softwares.

Items 4 and 6 had solutions researched, and given another few days, I believe I could implement such a system, though the current sprint did not afford the time.

## Time Spent

When the project began, I was largely unfamiliar with both Django and ReactJS, though I had used similar technologies before, as well as both of these in previous projects. Overall, approximately 20-30 hours were spent familiarizing myself with both technologies, interspersed throughout the project. This took the largest portion of my time, but also includes time attempting to understand examples and apply them to my project in various ways.

I also spent approximately 4 hours attempting to learn Entity Framework, as well as attempting to connect it and the logic of Django. Since it was a non-required element, no more time was devoted to this portion.

Set up and basic templating of the Django application took approximately 4-5 hours, and refining their implementations and functionality took an additional 2-3 hours.

Creating React pages took an unusually long time, approximately 4 hours for implementation, with an additional 3-4 hours devoted to refinement. This was due in part to the need to go back and forth between documentation and my own code, as I had several fundamental misunderstandings about how React was intended to be used. If given the chance to restructure the project, I would likely attempt to incorporate React into more of the site.

Various debugging activities were interspersed during the development cycle, and are generally included in the above listed development time. However, after all other parts were completed, an additional 2-3 hours were spent testing the site in other ways, such as more complete data handling tests, as well as a small amount of user testing.

Overall, I would estimate somewhere around 45 hours spent on this project. However, this is largely due to the amount of research and understanding verification required for this project. If asked to reimplement this solution, it should be easy to refactor or recreate in about half the time, leaving plenty of time for full unit testing.




