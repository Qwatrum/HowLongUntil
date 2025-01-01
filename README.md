# How long until...
---
###### A website showing countdowns how long it takes until an event
---

## Features:
* Many events with countdowns
* Sorted by time
* Countdown includes: Date (DDMMYYYY), time, and time until then in hours, minutes and seconds
* Easy to add your own events
![example](https://cloud-qbpfs4eg8-hack-club-bot.vercel.app/0image.png)

## Usage:
* Visit the website [here](https://qwatrum.github.io/HowLongUntil/ "https://qwatrum.github.io/HowLongUntil/")
* Or clone the repo and host it

## Add your own events:
* In `script.js` look for `const targetEvents = [...];` (line 6)
* There you can add your own events
* The order doesn't matter
* Follow this pattern:
    * Name. Date.
    * The date must look like: `2025-01-01T00:00:00`
    * (Year - Month - Day - 'T' - HH - MM - SS)
    * Example: `{ name: "New Year 🎆", dateTime: '2025-01-01T00:00:00'}`
* Simply reload the website

## Credits:
* Code: Qwatrum
* Design: Qwatrum
* Font: Anonymous Pro (Google Fonts)

made with <3 by Qwatrum
