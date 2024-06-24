# F&middot;R&middot;I&middot;E&middot;N&middot;D&middot;S Quiz

### Welcome to the Ultimate F&middot;R&middot;I&middot;E&middot;N&middot;D&middot;S Quiz

Are you a Friends fan, maybe the biggest Stan out there? Well why not prove it with the Ultimate Friends Quiz?
The Ultimate Friends Quiz has questions from all the series and questions get harder the further along through
the quiz you go. Will you be the Best of Friends or will you just be a mere acquaintance?

I created the Friends Quiz, because as a huge fan myself, I love testing my knowledge on the subject. Users will find the quiz to be somewhat of a challenge
as they navigate through the simple, intuitive and fun layout.

## CONTENTS LINKS

### User Experience(UX/UI)

- User stories
- Developer stories
- Color Scheme
- Typography
- Wireframes

### Features

- Overview
- Question and Answer Box
- Next button
- Keeping Score

### Technologies Used

- Languages Used
- Frameworks, Libraries and Programs

### Testing

- Code validation
- Accessability
- Testing Table

## User Experience

The quiz is of a simple but fully responsive design, using JavaScript to create a dynamic and interactive experience for the user. The question box has a multichoice answer section, that will only allow one attempt at the correct answer. If the correct answer is selected, a pop up alert box will appear with a Friends themed GIF. The user
will the click on the "Next" button to take them to the next question, and the computer will tally up their scores.

At the end of the quiz, depending on how well they did, there will be a Friend's theme anicdote to applaud or tease them!

### User Stories

1. As a user, I want to be able to find the site easily by inputting obvious keywords into the browser's searchbar.
2. As a user, I want to be able to learn how to play the game before I begin.
3. As a user, I want the questions to be somewhat challenging.
4. As a user, I want to navigate the page easily and intuitively.

### As a Developer:

1. I want users to feel engaged in the game.
2. I want the color-theme to envoke a feeling of familiarity and nostalgia
3. I want users to recognise quickly how simialr the font used is to the original.
4.

### Color Scheme

I decided to use the main color scheme in Monica's appartment which are widely recognised and cherished. Being purple and Gold,they also
go together very aesthicially. I also embedded an image of the notorious yellow frame which sits on Monica's door.
Another instantly recognisable feature on the sitcom.
The colors are used for the rules page and the main page for fluidity.

### Typography

I used Google fonts to find the closest to the Friends typography. To make the Friends logo more authentic, I used middots and coloured them to the friends logo

### Wire frames

As per The five planes, I used Balsamique Wireframes to conceptualize my vision for the quiz. I made the main quiz on mobile and desktops to see how it would look.
[Insert screenshots here}]

## Features

### Overview

I began developing my site using a mobile first approach, based on the Galaxy Fold Screen size(340px) and added media Queries for responsiveness on larger screens.

### Question and Answer Box

The question and answer box is located in the Friends Photo Frame image. The answer boxes will change to purple when hovered over. You get one chance to answer.
The questions will be shuffled each time you start the game, to give a better repeat experience.

### Next Button

Using Middots again, I made the Next Button look like the Friends logo. hover and click action

### Keeping Score

The score card is located under the Next button and is big enough that the user can easily glance during game play to see the score which is tallied up
as the game continues.

## Technologies used

### Languages

<li>HTML 5</li>
<li>CSS</li>
<li>Javascript</li>

### Frameworks, Libraries and Programs

### Google Fonts

### Favicon

###

## Testing

### Code Validation

I used W3C to validate the CSS, which came back with no errors
[insert screenshot here******]
I used Jigsaw to validate the HTML file, which returned no errors
[insert screenshot here******]
i used JSHint to validate the javascript code, which resulted in no errors
[insert screenshot here******]

### Accessability

To check the sites accessability, I used Lighthouse
[insert screenshot here******]

### Testing Table

| Feature:               | Expected outcome:                                                 | Pass/Fail: |
| :--------------------- | :---------------------------------------------------------------- | :--------- |
| Url address            | Landing/Rules Page                                                | Pass       |
| Rules Page             | Rules font is clear and legible                                   | Pass       |
| Begin Quiz Button      | Moves onto main landing page                                      | Pass       |
| Quiz Page              | 1st question renders                                              | Pass       |
| Quiz Page              | 4 possible answers to 1st q renders                               | Pass       |
| Shuffle Questions      | Each new round should have a questions asked in a different order | Pass       |
| Answer Buttons Hovered | Change to color purple when hovered over                          | Pass       |
| Answer Button clicked  | Only allowed to click one answer                                  | Pass       |
| Next Button clicked    | Question ans answer options change                                | Pass       |
| Score Board            | Correct answers are tallied up and shown on score board           | Pass       |
| Media Player mute      | Media player is muted until user interaction with controls        | Pass       |
| Media Player play      | Theme tune plays at user set volume                               | Pass       |
| End Game popup         | User score out of 10 alert box                                    | Pass       |
| Next Game              | when questions reach 10, restart game                             | Pass       |
