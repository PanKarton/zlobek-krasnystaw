# Żłobek Miejski w Krasnymstawie - business website

Simple website created with [Next.js](https://nextjs.org/) and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

My first website for real client with real problems to solve. I gave my best and tried to take care of every element of the site.

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)

## General Information

- My goal was to create a new and fresh website according to the latest standards
- Website simplifies communication between parents and the nursery and vice versa
- The aim of the project was to gain commercial experience in working with a real client and solving their problems, domain and hosting purchase, and real deployment.
- Website is fully accessible meeting WCAG 2.1 standards

## Technologies Used - What's inside?

- React - version 18.2.0
- React-DOM - version 18.2.0
- Next - version 12.3.0
- TypeScript - version 4.8.4
- Styled Components - version 5.3.5
- React Icons - version 4.4.0
- react-copy-to-clipboard - version 5.1.0
- nextjs-progressbar - version 0.0.16
- react-markdown - version 8.0.4
- React Hook Form - version 7.37.0
- EmailJS - version 3.7.0
- @react-google-maps/api - version 2.13.1
- @apollo/client - version 3.7.1,
- graphql - version 16.6.0
- JEST - version 29.3.0
- React Testing Library - version 13.4.0
- dotenv - version 16.0.3
- ESLint - version 8.23.1
- Prettier - version 2.7.1

## Features

List the ready features here:

- Lazy loaded images
- Email contact form with validation and error handler
- Google map
- Clickable phone number link
- Button that copies account number to clipboard
- News posts page with 'Load more' button that loads paginated posts
- Archives list that loads news posts from particular month
- Links for downloading documents

## Screenshots

![Example screenshot](./img/screenshot.png)

## Setup

What are the project requirements/dependencies? Where are they listed? A requirements.txt or a Pipfile.lock file perhaps? Where is it located?

Proceed to describe how to install / setup one's local environment / get started with the project.

First, install all neccesary dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Status

Project is: _in progress_

## Room for Improvement

Room for improvement:

- Replace ORIGINAL and LEGAL images

To do:

- Gallery group folder images site
- Attach CMS for news and gallery
- Optional: Add decorative images to parent sites
- Add types to apollo.query in getStaticProps and getStaticPaths
- Tidy up graphql response types in pages
