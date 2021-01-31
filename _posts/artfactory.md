---
title: 'Art Factory - 5 unexpected issues when bringing an AR app to production'
cover: '/images/3/cover.jpg'
date: '10-January-2019'
description: 'I recently developed and published an augmented reality app for Art Factory gallery and marketing. Issues arised.'
---
I recently developed and published an augmented reality app for Art Factory gallery and marketing. Issues arised.', '
<blockquote> <a href="https://www.facebook.com/events/299135390835794/">Art Factory</a> is a festival that brings beer
    and music around art. The main reason all these awesome people meet is to bring art to a now empty factory. And this
    year there was not just ART, but Augmented Art! Hurray!
    <br />
    Therefore, they needed to show the <a href="https://www.facebook.com/events/299135390835794/">festival</a>'s
    program, singers, artists, sponsors
    and so on through an app. But that was boring so we also added a view just for AR, to augment almost all the
    promotional materials, including a bottle of beer.
</blockquote>
<p> What can be simpler than that? It's
    basically static content everywhere and for AR just import <a href="http://www.vuforia.com">Vuforia</a> and drag
    and drop what I need in the scene. And a month to do it? More than enough!
</p>
<blockquote>...mistakes were
    made. </blockquote>
<h2> 1. Unity vs Native</h2>
<h3> Native is always empowering. But when the schedule is
    thight, faster alternatives might be found </h3>
<p> The Unity part might be overkill, I admit it. However, my
    native skills are based only on what I did during faculty (although I plan to work on this) and the time was quite
    short.
    So the choice was very subjective. However, at more then a couple points it proved to me it was a smart
    decision. Just to enumerate a few : </p>

<ul>
    <li> UI is made really easy by the way Unity Canvas is
        designed. <i>Responsiveness</i> it's also quite powerful and easy thanks to the pivots and anchors. </li>

    <li> Animations. Still on UI, but also on the AR part. There is not a more natural way of working with animations
        then through a <b>game engine</b></li>
    <li> Custom UI elements. On each page there was a 3D circular menu,
        hidden by some colorful waves. It had to have custom speed and snap into place when dragging. It's a pinch
        easier to do in an editor then through other more traditional ways.
        You can find the component <a
            href="https://github.com/silidragos/3D-programming-utils/tree/master/Unity%20General/UI-elements">here</a>
        if you want to use it. </li>
    <li> The whole 3D scene of the augmentation part. More here to come </li>

    <li> "Easy" to export on both Android and iOS. Write once, run everywhere. More to say here, because it was no
        piece of cake for me, doing my first release to the stores. </li>
</ul>

<img style="width:
    250px;" src="/images/3/circular-menu.gif" />

There were some minuses
also:
<ul>
    <li> Classic UI elements. Unity doesn't really have out-of-the-box support for the old, boring UI
        elements you would actually need in a non-game app, like tables and lists.</li>
    <li> No out-of-the-box
        support for Android specific functionalities. Like taking screenshots and seeing them in the gallery. </li>

    <li> I found it so complicated to bring a Google Maps "iframe" in the app, I ended up putting a link on a picture.
        Close enough! </li>
    <li> The abstraction levels can take some of the control you'd have when writing
        native code. </li>
</ul>

<img src="/images/3/2.jpg" />



<h2> 2. How much can you actually automate Vuforia </h2>
<h3> When trying to use more than the editor/public
    functionalities of Vuforia, it can get difficult to find references </h3>
<p>
    In case you have never heard
    about Vuforia, they make you this proposition: </p>
<blockquote> Deliver AR innovation with the market-leading
    Vuforia platform </blockquote>
<p>
    And they are right. Besides using <b>ARCore</b> and <b>ARKit</b> they
    actually are one of the most perfomant platform to use, and also works on a wider range of devices then the two
    frameworks I just mentioned.
    It also has functionality over ARCore and ARKit so you can use them together. Plus,
    it's crazy easy to use in Unity (<a
        href="https://library.vuforia.com/articles/Training/getting-started-with-vuforia-in-unity.html">check it
        out</a>).
</p>
<p>
    And now, for the problematic part. The app is based on scanning flat images(or
    the packaging of a beer, which got a bit more complex) and other flat images or videos/gifs should magically appear
    over it. Whenever you scan it again, another random piece of art should appear.
    Vuforia is pretty straight
    forward about this. You should just make a <b>database</b> on their website, download it and put it in your app, and
    then create an <b>ImageTarget</b> GameObject for each recognizable image target, and give it some custom behavior
    when activated.
</p>
<p>
    You see the problem? One GameObject for each target.
</p>
<blockquote> "Ok, so make a script to make a
    GameObject for each ImageTarget in the Database" </blockquote>
<p>
    It's not as easy as it sounds. <b>After
        you instantiate your ImageTargets, Vuforia instantiates all the others on runtime </b>, so it would give them
    some behavior since they are not recognizable (I think).
    Futhermore, Vuforia is not really
    documentation-friendly, when it comes to writing code in Unity. They assume you are going to do all the job in the
    editor. However, after some googling I came up(copied) with <a
        href="https://github.com/silidragos/3D-programming-utils/blob/master/AR/VuforiaGenerateTrackersFromDataset.cs">this
        code</a> to generate all the image targets in a db.
</p>


<img src="/images/3/5.jpg" />

<p>
    Another problem is you won't want to
    have parented to each ImageTarget a GameObject that would give you random images, therefore a duplicated GameObject
    with exactly same behavior.
    Therefore, I recommend creating a "Shared GameObject" that would simply change
    his parent based on what ImageTarget is available. That requires again a little bit of coding on Vuforia side, and I
    really recommend reading <b>ImageTargetBehavior</b> script on any ImageTarget GameObject to understand how that
    works.
</p>

<h2>3. Small but big issues </h2>

<h3> Preparing videos </h3>
<p> I fought a lot
    with loading <b>GIFs</b>. But they are quite big in size and not supported by Unity. And just before giving up ... I
    had a great revelation. </p>
<blockquote> Gifs are just like videos, but more performant. </blockquote>
<p>
    So all the 50+ mb gifs were now 2mb videos. For Unity, I recommend using <b>MP4</b> or <b>WEBM</b>. <i>Did you know
        that there are formats of WEBM that also support transparency?</i> </p>
<p> So now I had about 50 Textures
    and Videoclips. The videoclips are not instantly loaded into memory. They need buffering. On my phone it went almost
    right, but on others the app was crashing for apparently no reason.
    The reason was I played random videos, one
    after another, without preparing them, and at some point the change would be too fast. Tryin to load too many videos
    made it crash.
    Furthermore, whenever one target is recognized, I needed to show a random image or video, so not
    just random videos.
    <br />So I had to come with a...let's say interesting solution.
</p>
<p>
    <b>Solution</b>: A shared GameObject(I've talked about at <b>point 2</b> also) that has as parent always the
    <b>recognized ImageTarget</b>. The <b>Shared GameObject</b> has as childs <b>two VideoClip GameObjects</b> and one
    <b>Image GameObject</b>.
    <br /> Here's the trick. I always had two videoclips prepared. After one is watched,
    it gets another random one. I also choose randomly what to show, image or video, pondered by the size of each
    database.
</p>

<h3> Focusing camera </h3>
<blockquote> It works on my machine!! </blockquote>
<p>
    Another subtle issue was that when activating Vuforia, the phone camera stopped focusing on some mobile phones. So
    mine went great and made this bug hard to catch.
    Just use <a
        href="https://github.com/silidragos/3D-programming-utils/blob/master/AR/VuforiaCameraFocusController.cs">this</a>
    code on your camera, please. Or better, @Vuforia, just make this by default!!</p>

<h3> Licensing $$$ </h3>

<p>You don't want the Unity splash screen? You need the PRO version : <b> 35$ / month </b>.
    <br />
    You
    need Vuforia? <b>500$</b> one time or <b>100$/month</b> and limited amount of usages
    <br />
    Google Play?
    <b>25$</b>
    <br />
    Apple Store? <b>99$/month</b> (best case)
    <br />


<h3> Mobile is a broad term </h3>
<p>It might work on your phone. On your processor. On your resolution. On your
    Android version. On your developer-enabled system. But there are hundreds of other versions that may have it
    differently. Just think about all the resolutions. Auch!</p>

<h2> Deploying to Android </h2>
Android is
much easier then iOS when it comes to publishing. Everyone knows that. You need to give it a name, generate a
certificate and remember(!!) it so you'll be able to update it.
Once you have the apk, some screenshots and a video
you can create an account, pay the 25$, fill a form and you are ready to publish. Google has a great dashboard so you
can publish in Dev, Closed Alpha, Open Beta or Release.
The Rollout is accepted in about <b>2-3 hours</b>.
I
literally had no problem. Except the... </p>

<img src="/images/3/6.jpg" />

<h2>4. The 100mb problem </h2>
<p><b>You can
        put in Google Play only maximum 100mb APKs </b>. One day before the festival, when I found out, it wasn't that
    bad, I did some research and found out that you need to <b>externalize some resources in some .obb files</b>. The
    upload worked great!
</p>
<blockquote>Until we tested it, one hour before the festival. And it didn't work.
    DISASTER!</blockquote>
<p>
    "But it works on my machine!!"
    <br />
    Exactly! One hour later (festival
    already on), it hit me. Vuforia is the one not working. Why? It crashes. It cannot initialize. Why?
    <br />

    It's on that *#%#$% OBB!
    <br /><br />
    <b>Solution</b>? I was extremely lucky I got 84MB after shrinking all
    the images in app and converting videos to mp4 x264. But that was a lucky shot. I promise to come back with the
    <b>actual solution</b> on my github.


<h2>5. Deploying to iOS </h2>
I end up with my failure of putting it on iOS in good time. Those are the problems in
the order I encountered them:
<ul>
    <li>Unity builds an xcode solution you need to build on a Mac.</li>
    <li>
        You need to find a friend with a Mac(Thanks Cosmin). He will hit a few problems such as "you need to delete
        some quotes from a text file", have errors on simulator and come back next day with an iPhone. It will work on
        iPhone.</li>
    <li>You need an iOS developer account (or organization). Pay 99$ and associate it with an Apple
        device. You don't have one? Find one!</li>
    <li>Wait <b>2-3 working days</b> for it to be accepted. If any
        problem comes up with how you completed the form you might wait for 2 more.</li>
    <li>Wait <b>2-3 working
            days</b> for approving the app. Sadly, I hadn't reach this point.</li>
</ul>


<img style="width: 250px;" src="/images/3/beer.gif" />

<h2> Conclusion </h2>

<p>Unity is a powerful tool. It's not the classical developer way of doing things but in short amounts of times
    you can build something people would love to use.
    <br /> If you have the money, Vuforia should be the first you
    think about when doing any simple AR stuff, that should work for everybody. I loved the whole process.
    <br />
    Although problems kept arising, don't dispear! My main problem was the lack of time, but except that, the problems
    were scarce and solutions easy to find on Google.
    I think the main things you need are <b>time</b>,
    <b>patience</b> and <b> build experience</b>. You can't get something right from the first time, but it's
    certainly worth a shot. Keep your head up and keep working on it!
</p>

<hr />
<p> Even easy stuff such as Image Targets with 2D art can give such a big impression to the newcomers. We
    need more chances to empower the artistic view through these powerful technologies and show everyone how powerfull
    such an impression can be.
    I really wish we'd go past the 2D Augmented Reality into more immersive ones. But
    it's all about small steps towards that.
    <br />
    Augmented Reality is hard to bring to the people because
    you don't only need good programmers but the visuals and the story are equally important. It's all about
    collaboration.
</p>

<hr />
<p class="call-to-action"> If you have any idea, you need some help or you want us to collaborate on AR
    just give me a message and I'll be glad to help! If you just want to keep reading articles about how it's made,
    subscribe to <b>newsletter</b>. Let's bring AR to mainstream! </p>
<p>** Al pictures are either from the
    event's facebook or app's google play page </p>