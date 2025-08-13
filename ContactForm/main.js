       // Basic JS validation
        document.getElementById('contactForm').addEventListener('submit', function (e) {
            e.preventDefault();
            let valid = true;

            // Clear previous errors
            ['name', 'email', 'subject', 'message'].forEach(field => {
                document.getElementById(field + 'Error').classList.add('hidden');
            });

            // Name validation
            const name = document.getElementById('name').value.trim();
            if (!name) {
                document.getElementById('nameError').textContent = 'Full Name is required';
                document.getElementById('nameError').classList.remove('hidden');
                valid = false;
            }

            // Email validation
            const email = document.getElementById('email').value.trim();
            const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
            if (!email) {
                document.getElementById('emailError').textContent = 'Email is required';
                document.getElementById('emailError').classList.remove('hidden');
                valid = false;
            } else if (!emailPattern.test(email)) {
                document.getElementById('emailError').textContent = 'Email is invalid';
                document.getElementById('emailError').classList.remove('hidden');
                valid = false;
            }

            // Subject validation
            const subject = document.getElementById('subject').value.trim();
            if (!subject) {
                document.getElementById('subjectError').textContent = 'Subject is required';
                document.getElementById('subjectError').classList.remove('hidden');
                valid = false;
            }

            // Message validation
            const message = document.getElementById('message').value.trim();
            if (!message) {
                document.getElementById('messageError').textContent = 'Message is required';
                document.getElementById('messageError').classList.remove('hidden');
                valid = false;
            }

            // Success message
            if (valid) {
                document.getElementById('successMsg').classList.remove('hidden');
                document.getElementById('contactForm').reset();
                setTimeout(() => {
                    document.getElementById('successMsg').classList.add('hidden');
                }, 3000);
            }
        });