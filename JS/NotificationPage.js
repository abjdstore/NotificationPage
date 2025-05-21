document.addEventListener('DOMContentLoaded', function () {
    // Notification data
    const notifications = {
        "reset-password-section": {
            title: "Reset Password Notification",
            sections: [
                {
                    title: "Employee",
                    options: [
                        {label: "Email", id: "resetEmployeeEmail", checked: true},
                        {label: "Business Email", id: "resetEmployeeBusinessEmail", checked: true},
                    ],
                },
                {
                    title: "User",
                    options: [
                        {label: "Email", id: "resetUserEmail", checked: true},
                        {label: "Business Email", id: "resetUserBusinessEmail", checked: true},
                    ],
                },
            ],
        },
        "welcome-update-section": {
            title: "Welcome and Update Notification",
            sections: [
                {
                    title: "Employee",
                    options: [
                        {label: "Email", id: "welcomeEmployeeEmail", checked: true},
                        {label: "Business Email", id: "welcomeEmployeeBusinessEmail", checked: true},
                    ],
                },
                {
                    title: "User",
                    options: [
                        {label: "Email", id: "welcomeUserEmail", checked: true},
                        {label: "Business Email", id: "welcomeUserBusinessEmail", checked: true},
                    ],
                },
            ],
        },
        "super-admin-section": {
            title: "Super Admin Receive Notification",
            sections: [
                {
                    title: "Super Admins",
                    options: [
                        {label: "Abdullatif Aladwan (admin02@abjd.store)", id: "adminEmployeeEmail", checked: false},
                        {label: "Dr.Yousef (abjdinvadmn@gmail.com)", id: "adminEmployeeBusinessEmail", checked: false},
                    ],
                },
            ],
        },
    };

    // Sidebar links
    const sidebarLinks = document.querySelectorAll('.menu-item');
    const notificationSection = document.getElementById('notification-section');

    // Render notification content
    function renderNotifications(type) {
        const data = notifications[type];
        if (!data) return;

        notificationSection.innerHTML = '';

        const title = document.createElement('h1');
        title.textContent = data.title;
        notificationSection.appendChild(title);

        data.sections.forEach((section) => {
            const sectionTitle = document.createElement('h2');
            sectionTitle.textContent = section.title;
            notificationSection.appendChild(sectionTitle);

            section.options.forEach((option) => {
                const formCheck = document.createElement('div');
                formCheck.className = 'form-check';

                const input = document.createElement('input');
                input.className = 'form-check-input';
                input.type = 'checkbox';
                input.id = option.id;
                input.checked = option.checked;

                const label = document.createElement('label');
                label.className = 'form-check-label';
                label.setAttribute('for', option.id);
                label.textContent = option.label;

                formCheck.appendChild(input);
                formCheck.appendChild(label);

                notificationSection.appendChild(formCheck);
            });
        });
    }

    // Handle sidebar link clicks
    sidebarLinks.forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove "active" class from all links
            sidebarLinks.forEach((l) => l.classList.remove('active'));

            // Add "active" class to clicked link
            this.classList.add('active');

            // Render the corresponding notification section
            const type = this.id.replace('-link', '-section');
            renderNotifications(type);
        });
    });

    // Initial render
    document.getElementById('reset-password-link').click();
    const saveButton = document.querySelector('.btn-save');
    const confirmSaveButton = document.getElementById('confirmSave');
    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));

    saveButton.addEventListener('click', function () {
        confirmationModal.show();
    });

    confirmSaveButton.addEventListener('click', function () {
        const settings = {};
        checkboxes.forEach(checkbox => {
            settings[checkbox.id] = checkbox.checked;
        });

        console.log('Saving settings:', settings);

        confirmationModal.hide();

        setTimeout(() => {
            alert('Settings saved successfully!');
        }, 500);
    });
});