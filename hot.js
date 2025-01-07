function getAtticusAge() {
    const now = Date.now() / 1000;
    let time = 1736183640;
    let dilatedTime = (now - time) * 12;
    if (now - time > 2592000 * 13) {
        let time = 1736183640 + 2592000 * 13;
        dilatedTime = (now - time) * 12;
    }
    const seconds = Math.floor(dilatedTime);

    const units = [
        { label: "y", seconds: 31536000 },
        { label: "m", seconds: 2592000 },
        { label: "d", seconds: 86400 },
        { label: "h", seconds: 3600 },
        { label: "m", seconds: 60 },
        { label: "s", seconds: 1 },
    ];

    for (const unit of units) {
        const value = (seconds / unit.seconds).toFixed(1);
        if (value >= 1) {
            return `${value}${unit.label}`;
        }
    }

    return "0s";
}

function getTimeToAtticusBirthday() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const currentDay = now.getDate();

    // Determine the next birthday date
    let birthday;
    if (currentDay > 6) {
        // If today is past the 6th, set to the 6th of next month
        birthday = new Date(currentYear, currentMonth + 1, 6);
    } else {
        // Otherwise, set to the 6th of this month
        birthday = new Date(currentYear, currentMonth, 6);
    }

    // Calculate the time difference in seconds
    const timeDifference = (birthday - now) / 1000;

    return Math.round(timeDifference);
}

function getTimeToAtticusFurry() {
    const now = Date.now() / 1000;

    const currentYear = now % 31536000;

    return Math.round(31536000 - currentYear - 2592000);
}

// thanks gpt
function formatDuration(seconds) {
    const pad = (value) => value.toString().padStart(2, "0");

    // Start from the Unix epoch (January 1, 1970)
    const baseDate = new Date(0);
    const targetDate = new Date(seconds * 1000);

    // Calculate the difference in months, days, etc.
    let months = targetDate.getUTCMonth() - baseDate.getUTCMonth();
    let years = targetDate.getUTCFullYear() - baseDate.getUTCFullYear();
    if (months < 0) {
        months += 12;
        years -= 1;
    }

    const days = targetDate.getUTCDate() - 1; // Days start from 1, so subtract 1
    const hours = targetDate.getUTCHours();
    const minutes = targetDate.getUTCMinutes();
    const secs = targetDate.getUTCSeconds();

    // Convert total months (include years)
    months += years * 12;

    return `${pad(months)}:${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}