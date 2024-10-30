document.addEventListener("DOMContentLoaded", function () {
    const calendarContainer = document.querySelector(".container");
    let currentYear = 2025; // Initial year
    let currentMonth = 0; // January

    // Example of occupied and free days
    const occupiedDays = [5, 10, 15]; // Example occupied days
    const freeDays = [1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    const renderCalendar = (year, month) => {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        calendarContainer.querySelector(".month h2").textContent = monthNames[month];
        calendarContainer.querySelector(".year h2").textContent = year;

        const daysContainer = calendarContainer.querySelector(".days");
        daysContainer.innerHTML = "";

        const lastDayCurrentMonth = new Date(year, month + 1, 0).getDate();
        const lastDayPrevMonth = new Date(year, month, 0).getDate();
        const startDayOfWeek = new Date(year, month, 1).getDay();

        // Previous month days
        for (let i = startDayOfWeek; i > 0; i--) {
            const dayElem = document.createElement("div");
            dayElem.className = "day";
            dayElem.textContent = lastDayPrevMonth - i + 1;
            dayElem.style.color = "grey"; 
            daysContainer.appendChild(dayElem);
        }

        // Current month days
        for (let i = 1; i <= lastDayCurrentMonth; i++) {
            const dayElem = document.createElement("div");
            dayElem.className = "day";
            dayElem.textContent = i;
            if (occupiedDays.includes(i)) {
                dayElem.classList.add("occupied"); // Add occupied class
            } else if (freeDays.includes(i)) {
                dayElem.classList.add("free"); // Add free class
            }
            dayElem.addEventListener("click", () => displayDate(i, month, year));
            daysContainer.appendChild(dayElem);
        }

        // Next month days
        const daysDisplayed = daysContainer.children.length;
        for (let i = 1; daysDisplayed + i <= 42; i++) {
            const dayElem = document.createElement("div");
            dayElem.className = "day";
            dayElem.textContent = i;
            dayElem.style.color = "grey"; 
            daysContainer.appendChild(dayElem);
        }
    };

    // Remaining functions (navigateMonth, navigateYear, displayDate, smoothTransition)
    // ... (keep the existing functions as before)
    
    // Initialize calendar
    renderCalendar(currentYear, currentMonth);
});
