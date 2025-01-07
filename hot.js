// thanks copilot
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

// thanks copilot
function getTimeToAtticusBirthday() {
    const now = new Date();

    let year = now.getUTCFullYear();
    let month = now.getUTCMonth();

    if (
        now.getUTCDate() > 6 ||
        (now.getUTCDate() === 6 &&
            now.getUTCHours() >= 17 &&
            now.getUTCMinutes() >= 14)
    ) {
        month += 1;
        if (month > 11) {
            month = 0;
            year += 1;
        }
    }

    const nextSixth = new Date(Date.UTC(year, month, 6, 17, 14, 0, 0));
    const timeDifference = nextSixth.getTime() - now.getTime();

    console.log(nextSixth);

    return Math.floor(timeDifference / 1000);
}

// thanks copilot
function getTimeToAtticusFurry() {
    const now = new Date();

    const startOfYear = Date.UTC(now.getUTCFullYear(), 0, 1);
    const secondsSinceStartOfYear = (now.getTime() - startOfYear) / 1000;

    return Math.round(31536000 - secondsSinceStartOfYear - 2592000);
}

// thanks copilot
function formatDuration(seconds) {
    const pad = (value) => value.toString().padStart(2, "0");

    const years = Math.floor(seconds / 31536000);
    seconds %= 31536000;
    const months = Math.floor(seconds / 2592000);
    seconds %= 2592000;
    const days = Math.floor(seconds / 86400);
    seconds %= 86400;
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${pad(years * 12 + months)}:${pad(days)}:${pad(hours)}:${pad(
        minutes
    )}:${pad(secs)}`;
}
