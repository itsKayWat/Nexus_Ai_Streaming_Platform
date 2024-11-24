class EventCalendar {
    constructor() {
        this.currentDate = new Date();
        this.calendarGrid = document.querySelector('.calendar-grid');
        this.monthDisplay = document.querySelector('.calendar-header h3');
        this.prevButton = document.querySelector('.prev-month');
        this.nextButton = document.querySelector('.next-month');
        
        // Sample events data (you can replace this with your own data/API)
        this.events = {
            '2023-12-15': { title: 'AI Technology Summit', participants: '1.2K' },
            '2023-12-20': { title: 'Gaming Championship', participants: '3.5K' },
            '2023-12-25': { title: 'Holiday Special Stream', participants: '2.8K' },
            // Add more events as needed
        };

        this.initializeCalendar();
    }

    initializeCalendar() {
        this.renderCalendar();
        this.setupEventListeners();
    }

    setupEventListeners() {
        if (this.prevButton) {
            this.prevButton.addEventListener('click', () => {
                this.currentDate.setMonth(this.currentDate.getMonth() - 1);
                this.renderCalendar();
            });
        }

        if (this.nextButton) {
            this.nextButton.addEventListener('click', () => {
                this.currentDate.setMonth(this.currentDate.getMonth() + 1);
                this.renderCalendar();
            });
        }
    }

    renderCalendar() {
        if (!this.calendarGrid || !this.monthDisplay) return;

        // Clear existing calendar
        this.calendarGrid.innerHTML = '';

        // Update month display
        const monthYear = this.currentDate.toLocaleString('default', { 
            month: 'long', 
            year: 'numeric' 
        });
        this.monthDisplay.textContent = monthYear;

        // Add day headers
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        days.forEach(day => {
            const dayHeader = document.createElement('div');
            dayHeader.className = 'calendar-day-header';
            dayHeader.textContent = day;
            this.calendarGrid.appendChild(dayHeader);
        });

        // Get first day of month and total days
        const firstDay = new Date(
            this.currentDate.getFullYear(),
            this.currentDate.getMonth(),
            1
        ).getDay();
        const totalDays = new Date(
            this.currentDate.getFullYear(),
            this.currentDate.getMonth() + 1,
            0
        ).getDate();

        // Add empty cells for days before first of month
        for (let i = 0; i < firstDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day empty';
            this.calendarGrid.appendChild(emptyDay);
        }

        // Add days of the month
        for (let day = 1; day <= totalDays; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.textContent = day;

            // Check if day has events
            const dateString = this.formatDate(
                new Date(
                    this.currentDate.getFullYear(),
                    this.currentDate.getMonth(),
                    day
                )
            );

            if (this.events[dateString]) {
                dayElement.classList.add('has-event');
                this.addEventTooltip(dayElement, this.events[dateString]);
            }

            // Add click handler for days
            dayElement.addEventListener('click', () => {
                this.handleDayClick(dateString);
            });

            this.calendarGrid.appendChild(dayElement);
        }
    }

    formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    addEventTooltip(element, eventData) {
        const tooltip = document.createElement('div');
        tooltip.className = 'event-tooltip';
        tooltip.innerHTML = `
            <h4>${eventData.title}</h4>
            <p>${eventData.participants} interested</p>
        `;

        element.addEventListener('mouseenter', () => {
            element.appendChild(tooltip);
        });

        element.addEventListener('mouseleave', () => {
            tooltip.remove();
        });
    }

    handleDayClick(dateString) {
        const event = this.events[dateString];
        if (event) {
            this.showEventModal(dateString, event);
        }
    }

    showEventModal(dateString, event) {
        // Create and show modal
        const modal = document.createElement('div');
        modal.className = 'event-modal';
        modal.innerHTML = `
            <div class="event-modal-content">
                <span class="close-modal">&times;</span>
                <h3>${event.title}</h3>
                <p class="event-date">${this.formatDisplayDate(dateString)}</p>
                <p class="event-participants">${event.participants} interested</p>
                <button class="register-btn">Register for Event</button>
            </div>
        `;

        document.body.appendChild(modal);

        // Add event listeners
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => {
            modal.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });

        // Register button functionality
        const registerBtn = modal.querySelector('.register-btn');
        registerBtn.addEventListener('click', () => {
            this.handleEventRegistration(dateString, event);
        });
    }

    formatDisplayDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('default', { 
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    handleEventRegistration(dateString, event) {
        // Add registration logic here
        console.log(`Registered for ${event.title} on ${dateString}`);
        // You could make an API call here to handle the registration
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'registration-success';
        successMessage.innerHTML = `
            <div class="success-content">
                <i class="fas fa-check-circle"></i>
                <h4>Registration Successful!</h4>
                <p>You've registered for ${event.title}</p>
                <button class="close-success">Close</button>
            </div>
        `;

        document.body.appendChild(successMessage);

        // Remove success message on click
        const closeSuccess = successMessage.querySelector('.close-success');
        closeSuccess.addEventListener('click', () => {
            successMessage.remove();
        });

        // Auto-remove after 3 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    }
}

// Initialize calendar when document is ready
document.addEventListener('DOMContentLoaded', () => {
    const calendar = new EventCalendar();
});
