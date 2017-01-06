


Were-Gonna-Hiragana
--------------------------------

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

Upon loading the splash page, the app's name zooms in and the sun rises from
behind.

![splash screen](images/production_images/splash.png)

The sun object is hidden behind the text using positive: absolute and the
z-index. This allows different nodes to be placed at various levels on
the page.

![sun animation picture](images/production_images/sunani.png)

Below the standard CSS for borders and such are the keyframes needed to
have the object move. The animations here do two things, the first is it
moves the sun object up 120 pixels. The second is that the object's size
grows from 30% to 140%. (We can see this in the .3 -> 1.4)

![dropdown example](images/production_images/dropdown.png)

Of note here is the dropdown. It is a handrolled feature, as the built in
dropdowns do not allow as much flexibility as I had wanted. It's easily created
by having the button above it show/hide the component. If it's clicked,
the component shows up. Click anywhere else on the screen, and the component
hides again.

the Study Page

After beginning, the user is taken to this page to learn the characters,
how to read them, and their pronunciation.

![study](images/production_images/study.png)
