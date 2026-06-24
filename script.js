
        // Intersection Observer for Snappy Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-snap').forEach(el => {
            observer.observe(el);
        });

        // Contact Form Submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = 'TRANSMITTING...';
            btn.style.pointerEvents = 'none';
            
            setTimeout(() => {
                const name = document.getElementById('name').value;
                alert(`PAYLOAD RECEIVED FROM: ${name.toUpperCase()}`);
                this.reset();
                btn.innerHTML = originalText;
                btn.style.pointerEvents = 'auto';
            }, 800);
        });