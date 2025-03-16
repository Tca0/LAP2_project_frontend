# trackIT - Lap 3 Coding Challenge

## Description

This is the client-side code for a habit tracker named trackIT.

## Deployment

- Client on <a href="https://trackit-habit-tracker.netlify.app/" target="_blank">Netlify</a>

## Usage

Once a user has registered and logged in, they can create, edit and track habits as well as their progress. When creating or editing a habit, users must give values for:

- name,
- difficulty (easy/medium/hard),
- frequency (daily/weekly/monthly),
- and repetitions.

Users can edit or delete habits by clicking the pencil icon for each habit. They can then delete a habit by pressing the 'delete' button or edit a habit by filling in the relevant fields and clicking the 'update' button.

In an attempt to gamify the app, we have decided to implement levels and experience for each user. New users are at level 1 with 0 exp (experience). They gain experience each time they complete a habit. A habit is completed when a user has reached the number of repetitions they have set for a habit within a given frequency. The amount of experience a user gains is dependent on the difficulty set for a habit. If the difficulty is 'easy', the user gains 10 exp once they have completed that habit. Similarly, if the difficulty is 'medium', they gain 20 exp and if it's hard, they gain 30 exp. Users can see how difficult their habits are on the dashboard. The '+' button for each habit is green for easy habits, amber for medium habits and red for hard habits. Completed habits turn gold and are only reset when it's the next calendar day, week or month depending on the frequency set for that habit. They can track their progress for each habit via streaks. These are displayed on each habit.

For example, imagine a user has decided they want to go to the gym 4 times a week. If they have successfully done this for 3 weeks, that habit will display 'Gym (x4)' in the title and '3 🔥'.

A user levels up once their exp for a given level >= 100. This is displayed visually via a user stats container at the top of their dashboard detailing their level, exp and progress in a given level via a progress bar.

## Technologies

### HTML/CSS

We used HTML to structure the application and CSS to style it.

### JavaScript

JavaScript was used to fetch data from the API and deliver the app's functionality.

## Links
* Back End - https://github.com/kroles1/LAP2_project_backend
* Front End - https://github.com/kroles1/LAP2_project_frontend
