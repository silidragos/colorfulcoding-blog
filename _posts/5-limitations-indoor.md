---
title: '5 limitations to consider when augmenting indoor locations'
cover: '/images/6/Capture.JPG'
date: '22-February-2020'
description: 'Indoor Persistence Experiences are the coolest of AR usecases but can come with a lot of headaches'
---
<p> At the end of last year we provided the persistent AR layer for <b>BOB</b> - an application that acts as the
    communication layer between Coworking spaces and their communities. To be short, it was more of a demo run, that
    worked in 2 different locations. The main features were an announcement board in the kitchen, a community member
    board at the entrance and room calendars. We had only about 1 month at hand until demo day and show everyone not
    only how awesome AR is, but how useful persistency can be. Overall, this was a challenge I'm gladly we took.</p>
<video controls style="width: 250px; margin-left: 10%;" src="https://insidar.tech/img/bob.mp4"></video>

<h2>The process</h2>
<p>For indoor localization we used <a href="https://insidar.tech">InsidAR</a>. I know there are other SDKs that offer
    it, so why use this one, you probably never heard about it before. Well, first of all, this is the SDK I worked on
    for the last year. Good enough reason... Other reasons are:</p>
<ul>
    <li>Works on Unity over ARCore/ARKit SLAM systems</li>
    <li>All the scans and place recognition are on the cloud</li>
    <li>Visual dashboard on which I could easily check how recognizeable a room is.</li>
    <li>Having access to the list of scans, I could combine it with a coarse localization system I'll explain more about
        in step 5.</li>
</ul>
<blockquote>If you want to try at as part of the closed beta, please <a
        href="https://insidar.tech/index.html#contact">send us a message</a>! It's free for devs and you pay only once
    you go live.</blockquote>

<p>The steps to use such an SDK usually are:</p>
<ol>
    <li> Have your phone scan around the area you are interested in and place the interest points (anchors) inside the
        scene</li>
    <li> Upload the scan on cloud </li>
    <li> <b>**Differently from most SDKs, InsidAR allows you to scan much more at a time. Therefore you could upload a
            whole floor at once and then start placing anchors while on computer using our dashboard.**</b></li>
    <hr />
    <li> Client app scans/looks around</li>
    <li> The scan is compared with existing scans on server, and the best one is retrieved. **We did this one a bit
        differently** </li>
    <li> The candidate scan is placed more exactly inside the parent scan on the server </li>
</ol>

<p class="call-to-action" style="background-color:#ff560f">Now, whatever SDK I ever tried it had it's limitations,
    especially on place recognition. AR is awesome, but it still has its weak points, especially on mobile where scans
    are really sparse. <b>DO NOT</b> expect it to work in all the places ever, no matter the light conditions, the
    amount you pre-scanned and the structural changes in time. AR simply isn't so perfect right now. Sorry for ruining
    the magic in the next 5 points.</p>
<p>(To be fair I expect machine learning to make some of this points dissapear in the next years)</p>

<h2>1. Windows and mirrors are really confusing for most AR systems</h2>
<p>In the good case, windows are simply invisible for the AR system. In the bad case they are shiny, and random white
    colors are scanned as geometry. In the ugly case a combination of reflections and refractions add a mess of geometry
    based on what the SLAM system scans outside and what's reflected from the inside. Sheesh! </p>
<p> That's not as bad in apartements, museums and so on. But in office buildings? Oh well...</p>
<img
    src="https://images.adsttc.com/media/images/5db1/f3bd/3312/fd22/3f00/0580/newsletter/feature_-_cepezed-Lan_Handling_Technologies_Lucas_van_der_Wee_10.jpg?1571943336" />

<p> One of the usecases on the lists were calendars at meeting room entrances, so you can book one when in hurry.
    However, all meeting rooms had glass walls (including the doors), so identifying exactly where to put those
    calendars was almost impossible. Since we were in a hurry we had to take a step back and propose using stickers that
    can be scanned on each room. Not great but they proved their point. I still we can find a workaround in the future,
    but glasses can be a headache.</p>

<p>If you don't trust my worst, try this 3D scanner <a
        href="https://github.com/silidragos/colorfulcoding-projects/tree/master/1-ARCore%20Scanner">HERE</a> and see how
    it works. It's built directly over ARCore, so you can see what Google's SLAM system's limits are. With modifications
    it should work well with ARKit as well.</p>
<blockquote>When in doubt, get back to Image Targets -_- </blockquote>


<h2>2. Similar looking places</h2>
<p>We, and I think most systems use either geometry, color or a combination of both in order to recognize the location
    you are in. This works awesomely good on Hololens or Magic Leap and decently well on mobile. On mobile the main
    problem is that the scan's geometry is far from dense and algorithms cannot work at their full capacity. That's why,
    when places look mostly the same, the localization system can get confused.

<p> A few examples could be similar floors, staircases, tunnels etc. </p>
<img src="https://i.ytimg.com/vi/A9dlH2HKPgU/maxresdefault.jpg" />

<h3><b>Solution:</b>Use smarter systems, such as neural networks to differentiate between them (coarsely, look for an
    output like <b>You're at second floor</b>), and only after use the indoor localization system for exact placing your
    location.</h3>
<p> Basically what we did was to use an <b>image based recognition system</b>(Low exactity, Good Rate of success) before
    allowing you to use the actual <b>place recognition</b> (High Exactity, Lower rate of success). The image based
    recognition was based on neural networks, networks that are great of differentiating using more subtle features than
    our sparse 3D scans made with ARCore/ARKit could afford to do. The coarse image recognition was actually double
    great, since it worked real time, while the finer localization asked you to actively scan around and have a little
    patience. But more on that later. </p>
<p>In a nutshell, now we have 2 parent scans, one for each kitchens. We used the image-based localization to choose one
    of the two scans, and then match ourselves inside the one with high exactity. Easy-peasy! </p>



<h2>3. Everchanging places</h2>
<p>As I've said, we mostly look at color and geometry. Therefore, if you take out or add a big chung to the scene,
    changes of recognizing the place get worse. Usually the biggest change is caused by humans going in and out of the
    scene. The exception is made by programmers, the fact that we could stay motionless on a chair 8 hours actually
    could help the algorithms.</p>

<p> We did solve this quite easily by going for the entrance wall and some kitchen areas. There were people around but
    it was better than the central area where desks could move or people stayed more crowded. This is a limitation but
    in our case it wasn't a big one.</p>
<p> Moreover, since we had complete access to the scans we could actually rescan the changing parts and glue them back
    in if big indoor desing changes would occur.</p>

<blockquote>Avoid places that change a lot or have lots of people when you're scanning. If you can, scan while most
    people are out, so you'll have much less noise.</blockquote>

<img src="https://i.pinimg.com/originals/10/8c/3b/108c3bddcc5c059c2d0d2e4c74c43c3b.jpg" />

<h2>4. Contrasts are the key</h2>
<p> Install ARCore/ARKit, enable feature point visualization and start playing around. Scan a white wall, scan out the
    window, scan your room. What will you observe? SLAM Systems can only read things that are close to us (4-5 meteres
    away) and have lots of contrastant patterns. The white walls provide almost no feature points, while the carpet on
    the floor is full of information. Not only information but discriminative information, we need corners so they are
    not easily confused with others points and their movement can be tracked more easily.</p>

<p> We are lucky since Coworking Spaces look really cool nowadays and <b>Commons Coworking Spaces</b> was no exception.
    Awesome rooms to work with since there were lots of small art pieces all around.
<p>
    <img
        src="https://images.pexels.com/photos/173301/pexels-photo-173301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />


<h2>5. Scanning around is not intuitive for most people</h2>
<p> Since most AR systems are so closed, most of us have the illusion that AR works like magic. You open your phone and
    things work. It could be true for image targets, but for places the story is different. You have to scan a bit
    around you, you have to allow you phone to <b>SEE</b> where you are. We decided to do this using a loading bar that
    would grow only when you would walk around. That's another pitfall. Most people just rotate around, but if you don't
    translate yourself around, there's not enough parallax for SLAM to know the distances. </p>

<h3>Solution 1. Explain to users what you're doing.</h3>
<p> It's a bit tricky for now, and some might look at it as bad UX. I see it as normality for now. Asking for place
    recognition without seeing the place is like asking for a website to work deep underground on 4G. It's simply not
    there yet, but this should not stop you using this cool technology. After all, AR is about being immersed and
    experiencing what you see, it's not only about speed, as most things on the internet are.</p>

<h3>Solution 2. Coarse and fine localization </h3>
<p>Of course it would be a headache to scan all the time. Therefore we used the image based real time system not only to
    improve exactity but also for the app to guide you when you're in a place there is no point to scan. Therefore,
    whenever you where around office desks, meeting rooms etc, scanning was disable. Please go to the kitchen, or the
    entrance area to see stuff :). This also allowed us to break the parent scans in even more pieces.</p>

<img src="https://insidar.tech/img/coarse.gif" />
<img src="https://insidar.tech/img/fine2.gif" />


<h2>6*. Scans grow fast</h2>
<p> I remember being at an Augmented Reality conference and some SDK was showing off their localization technology. They
    scanned a bit the floor, put something there, closed the app, opened it, scanned a bit, the object was back! I
    thought it worked like magic. However, that's why I myself was fooled to believe the next step as really easy -
    augment the whole venue! </p>
<p> Besides all the limitations above (which in a conference venue are very present) the one they told me about was
    size. Having on huge scan for all the venue can easily be more than 1GB of data. </p>
<p> The solution I believe is the best for now is having coarse and fine localization. For the two coworking spaces the
    problem was not so bad. However we managed to compile all the image data in a neural network model. The 3D scans
    were around 1-2mb of data each, 3 scans at each location (total of max 12mb, but we only do searches inside 1-2mb of
    data at once). I still think better solutions might appear if their not already out there, but I'm also pretty proud
    of how this worked. We are going to start tests in other places and bigger venues, and see how it goes.</p>

<hr />
<p>With these problems in mind, we used <a href="https://insidar.tech">InsidAR.tech</a> . This is the SDK we were
    working on for the last year and we hope with the thought of empowering more the AR developer. We hope you found
    this interesting nonetheless. If you are interested to use it, too, you are lucky as we are in a Closed Beta phase
    and we do look for testers! Please go on the landing page and contact us for more!</p>
<img src="https://insidar.tech/img/logo_2_hor.png">