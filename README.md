# Album Tracker

## Project Description

This is an Album Tracker. A React Web Application thath allows users to discover music albums, view their dstails, and their tracks. Also listen to available previews and keep your own collection with listening statuses, ratings and notes. There is also Deezer and an AI-powered recommendations of albums based on your preferences!

## Screenshot and Live Link

Live Website - https://gemini-albumtracker.vercel.app/
Github Repo - https://github.com/Serial-Gemini/album-tracker
- Search results screenshot `file:///:/album-tracker/mysearchreults.png`
- Album detail screenshot: `screenshots/album-detail.png`
- Recommendations screenshot: `screenshots/recommendations.png`

## Features

- Search for albums and artists using the iTunes Search API.
- View album artwork, release year, genre, and track listings.
- Listen to available 30-second audio previews.
- Use a mini player with playback controls and a seek bar.
- Save albums with a listening status, star rating, and notes.
- Filter and sort the saved collection.
- Use the Deezer embedded player when a matching album is available.
- Receive AI-generated album recommendations based on saved albums and ratings.

## Technology Stack

- React
- Vite
- JavaScript and JSX
- CSS
- React Context API
- React Hooks
- Browser localStorage
- iTunes Search API
- Deezer API and embedded player
- Google Gemini API
- Git and GitHub
- Vercel

## How to Run Locally

1. Install Node.js and Git.
2. Clone the GitHub repository.
3. Open the project directory in a terminal.
4. Run `npm install`.
5. Create `.env.local` in the project root and add `GEMINI_API_KEY=your-key-here`.
6. Run `npm run dev`.
7. Open the local URL printed by Vite.

Never commit `.env.local` or expose API keys in frontend code.

## Limitations

- iTunes audio previews are limited to approximately 30 seconds.
- The saved collection is stored in the browser and is not synchronized between devices.
- Full Deezer playback depends on album availability, account access, subscription, and regional restrictions.
- AI recommendations may be inaccurate, and matching results depend on the availability of corresponding albums in iTunes.
- External API availability and rate limits may affect the application.

## AI Privacy Notice

The recommendations feature sends saved album titles, artist names, ratings, and listening statuses to Google's Gemini API. Album notes are not sent. The application uses a server-side function to keep the Gemini API key out of browser code.

## Disclaimer

This project is an educational application and is not affiliated with or endorsed by Apple, Spotify, Deezer, or Google.

## Submission

- GitHub repository URL
- Live Vercel website URL
- Screenshot of search results
- Screenshot of the album detail page
- Screenshot of recommendations
- Completed reflection questions
