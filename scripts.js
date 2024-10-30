document.addEventListener("DOMContentLoaded", function () {
    const calendarContainer = document.querySelector(".container");
    let currentYear = 2025; // Initial year
    let currentMonth = 0; // January

    const renderCalendar = (year, month) => {
        // Update month and year display
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        calendarContainer.querySelector(".month h2").textContent = monthNames[month];
        calendarContainer.querySelector(".year h2").textContent = year;

        // Clear previous days
        const daysContainer = calendarContainer.querySelector(".days");
        daysContainer.innerHTML = "";

        // Calculate days of current, previous, and next months
        const lastDayCurrentMonth = new Date(year, month + 1, 0).getDate();
        const lastDayPrevMonth = new Date(year, month, 0).getDate();
        const startDayOfWeek = new Date(year, month, 1).getDay();

        // Display previous month's last few days if offset needed
        for (let i = startDayOfWeek; i > 0; i--) {
            const dayElem = document.createElement("div");
            dayElem.className = "day";
            dayElem.textContent = lastDayPrevMonth - i + 1;
            dayElem.style.color = "grey"; // Style for previous month's days
            dayElem.addEventListener("click", () => navigateMonth(-1));
            daysContainer.appendChild(dayElem);
        }

        // Display current month days
        for (let i = 1; i <= lastDayCurrentMonth; i++) {
            const dayElem = document.createElement("div");
            dayElem.className = "day";
            dayElem.textContent = i;
            dayElem.addEventListener("click", () => displayDate(i, month, year));
            daysContainer.appendChild(dayElem);
        }

        // Display next month's first few days if necessary
        const daysDisplayed = daysContainer.children.length;
        for (let i = 1; daysDisplayed + i <= 42; i++) {
            const dayElem = document.createElement("div");
            dayElem.className = "day";
            dayElem.textContent = i;
            dayElem.style.color = "grey"; // Style for next month's days
            dayElem.addEventListener("click", () => navigateMonth(1));
            daysContainer.appendChild(dayElem);
        }
    };

    const navigateMonth = (offset) => {
        currentMonth += offset;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        } else if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentYear, currentMonth);
        smoothTransition();
    };

    const navigateYear = (offset) => {
        currentYear += offset;
        renderCalendar(currentYear, currentMonth);
        smoothTransition();
    };

    const displayDate = (day, month, year) => {
        const outputBox = document.querySelector(".output");
        outputBox.textContent = `Selected Date: ${day}-${month + 1}-${year}`;
    };

    const smoothTransition = () => {
        const calendar = document.querySelector(".calander");
        calendar.style.transform = "scale(1.02)";
        setTimeout(() => (calendar.style.transform = "scale(1)"), 200);
    };

    // Event listeners for month and year buttons
    document.querySelector(".month button:nth-child(1)").addEventListener("click", () => navigateMonth(-1));
    document.querySelector(".month button:nth-child(3)").addEventListener("click", () => navigateMonth(1));
    document.querySelector(".year button:nth-child(1)").addEventListener("click", () => navigateYear(-1));
    document.querySelector(".year button:nth-child(3)").addEventListener("click", () => navigateYear(1));

    // Image gallery functionality
    let currentImageIndex = 0;
    const images = [
        "images/shop.png",
        "images/shop2.png",
        "images/shop3.png"
    ];

    function changeImage(thumbnail) {
        const mainImage = document.getElementById('main-image');
        mainImage.src = thumbnail.src;
        currentImageIndex = images.indexOf(thumbnail.src);
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        document.getElementById('main-image').src = images[currentImageIndex];
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        document.getElementById('main-image').src = images[currentImageIndex];
    }

    // Attach event listeners to thumbnails
    document.querySelectorAll('.thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('click', () => changeImage(thumbnail));
    });

    // Initialize calendar
    renderCalendar(currentYear, currentMonth);
});
