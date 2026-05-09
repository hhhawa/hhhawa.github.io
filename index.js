(function() {
            const hamburgerBtn = document.getElementById('hamburgerBtn');
            const navLinks = document.getElementById('navLinks');
            const topNav = document.getElementById('topNav');

            // 汉堡菜单切换
            if (hamburgerBtn && navLinks) {
                hamburgerBtn.addEventListener('click', function() {
                    const isOpen = navLinks.classList.toggle('open');
                    hamburgerBtn.classList.toggle('active');
                    hamburgerBtn.setAttribute('aria-expanded', isOpen);
                });

                // 点击导航链接后关闭菜单
                navLinks.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        navLinks.classList.remove('open');
                        hamburgerBtn.classList.remove('active');
                        hamburgerBtn.setAttribute('aria-expanded', 'false');
                    });
                });

                // 点击外部关闭菜单
                document.addEventListener('click', function(e) {
                    if (!navLinks.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                        navLinks.classList.remove('open');
                        hamburgerBtn.classList.remove('active');
                        hamburgerBtn.setAttribute('aria-expanded', 'false');
                    }
                });
            }

            // 导航栏滚动阴影
            let scrollTicking = false;
            window.addEventListener('scroll', function() {
                if (!scrollTicking) {
                    requestAnimationFrame(function() {
                        if (window.scrollY > 20) {
                            topNav.classList.add('scrolled');
                        } else {
                            topNav.classList.remove('scrolled');
                        }
                        scrollTicking = false;
                    });
                    scrollTicking = true;
                }
            });

            // 平滑滚动（兼容性处理）
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    const target = document.querySelector(targetId);
                    if (target) {
                        e.preventDefault();
                        const navHeight = topNav.offsetHeight;
                        const targetPosition = target.getBoundingClientRect().top + window
                            .pageYOffset - navHeight - 16;
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        })();