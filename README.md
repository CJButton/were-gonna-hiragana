


Were-Gonna-Hiragana
--------------------------------
Project can be accessed at: https://cjbutton.github.io/were-gonna-hiragana/#/

Were-Gonna-Hiragana is an education application designed to help users
gain basic ability to read Japanese letters.

The student will move through 'sets' of characters ordered in a logical
pattern. Each set has (usually) five characters which they are asked to
memorize. They they are quizzed on them. Three cards are presented to the
student. One letter at a time is show, and they are asked the correct way
to pronounce the letter.

This app was created so as to gain a better understanding of animations
in CSS.

This project was created using React, JavaScript, and HTML.

-------------------------

the Splash

Upon loading the splash page, the app's name zooms in and the sun rises from
behind.

![splash screen](images/splash.png)

The sun object is hidden behind the text using positive: absolute and the
z-index. This allows different nodes to be placed at various levels on
the page.

![sun animation picture](images/sunani.png)

Below the standard CSS for borders and such are the keyframes needed to
have the object move. The animations here do two things, the first is it
moves the sun object up 120 pixels. The second is that the object's size
grows from 30% to 140%. (We can see this in the .3 -> 1.4)

![dropdown example](images/dropdown.png)

Of note here is the dropdown. It is a handrolled feature, as the built in
dropdowns do not allow as much flexibility as I had wanted. It's easily created
by having the button above it show/hide the component. If it's clicked,
the component shows up. Click anywhere else on the screen, and the component
hides again.

the Study Page

After beginning, the user is taken to this page to learn the characters,
how to read them, and their pronunciation.

![study](images/study.png)

As they appear on screen, they cascade down. This effect was created by
having keyframes let the node slide down a mere 20 pixels.

![cascade code](images/cascade.png)

the Quiz

![quiz](images/quiz.png)

Here the student is quizzed on the correct reading for each character. The
cards at the bottom will flip using na onClick event handler. Once the
correct answer is found, all cards flip back over, and the next character is
shown.

![card flip](images/cardflip.png)

This animation was a little trickier than the others, as the card needed
to remain in place, and appear to be one single object. Each card has both
a front and a back.

![front back of each card](images/frontback.png)

Using transform, we can rotate the object in any direction we wish. Here we
have it move on its Y axis.

---------------------------------------

the Future

- The most obvious feature to do next would be to create a backend. At present,
there is another component which is handing off the correct data for each
quiz.

- This backend could also be used to store users' data and allow them to
see their progress.
