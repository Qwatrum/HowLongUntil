document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');

    const interval = 1000;

    const targetEvents = [
        { name: "New Year 🎆", dateTime: '2025-01-01T00:00:00'},
        { name: "Next Lunar Eclipse 🌙", dateTime: '2025-03-14T03:57:28'},
        { name: "Quadrantid Meteor Shower", dateTime: '2025-01-03T00:00:00'},
        { name: "Perseid Meteor Shower", dateTime: '2025-08-12T00:00:00'},
        { name: "Next Total Solar Eclipse ☀️", dateTime: '2025-04-08T02:00:00'},
        { name: "Holi (Festival of Colors) ", dateTime: '2025-03-13T00:00:00'},
        { name: "Tour de France (Start)🚴‍♂️", dateTime: '2025-07-05T11:00:00'},
        { name: "Oktoberfest 🍻", dateTime: '2025-09-20T12:00:00'},
        { name: "Burning Man", dateTime: '2025-08-24T00:00:00'},
        { name: "International Olympiad in Informatics 💻", dateTime: '2025-07-27T00:00:00'},
    ];

    function updateCountdown() {
        const now = new Date();
        const countdownBoxes = [];

        targetEvents.forEach( (event) => {
            const targetDate = new Date(event.dateTime);

            if(targetDate > now) {
                let timeDiff = targetDate - now;

                const hoursDiff = Math.floor(timeDiff / (1000 *60*60));
                const minutesDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000* 60));
                const secondDiff = Math.floor((timeDiff % (1000 * 60)) / 1000);

                countdownBoxes.push({
                    name: event.name,
                    date: targetDate.toLocaleDateString(),
                    time: event.dateTime.split('T')[1],
                    hoursDiff,
                    minutesDiff,
                    secondDiff,
                });
            }
        });

        countdownBoxes.sort((a, b) => {
            const timeA = a.hoursDiff * 3600 + a.minutesDiff * 60 + a.secondDiff;
            const timeB = b.hoursDiff * 3600 + b.minutesDiff * 60 + b.secondDiff;
            return timeA - timeB;
        });

        countdownElement.innerHTML = '';

        if (countdownBoxes.length > 0) {
            countdownBoxes.forEach((boxData) => {
                addCountdownBox(
                    countdownElement,
                    boxData.name,
                    boxData.date,
                    boxData.time,
                    boxData.hoursDiff,
                    boxData.minutesDiff,
                    boxData.secondDiff
                );
            });
        } else {
            addNoEventMessage(countdownElement);
        }

        setTimeout(updateCountdown, interval);
    }

    function addCountdownBox(container, name, date, time, hours, minutes, seconds) {
        const box = document.createElement('div')
        box.classList.add("countdown-box");

        box.style.border = "2px solid #047870";
        box.style.fontSize = "24px";

        box.innerHTML = `
            <div>${name}</div>
            <div>${date}, ${time}</div>
            <div>${hours}h ${minutes}m ${seconds}s</div>
        `;

        container.appendChild(box);
    }

    function addNoEventMessage(container) {
        const message = document.createElement("div");
        message.classList.add("no-events-message");
        message.innerHTML = "No upcoming events.\n\nWhy don't add your own?\nClick the GitHub link and visit the repo!";
        container.appendChild(message);
    }


    updateCountdown();
});