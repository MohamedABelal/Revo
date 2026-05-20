/**
 * REVO Agency - Shared UI Components Loader (Bilingual Header & Footer)
 * Handles dynamic navigation menu, active states, page depth prefixing,
 * scroll styling, mobile menu toggling, and language switching (AR/EN).
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. DETERMINE LANGUAGE AND DIR STRUCTURE
    const isEnglish = window.location.pathname.includes('/en/') || window.location.pathname.includes('\\en\\');
    const isBlogFolder = window.location.pathname.includes('/Blogs/') || window.location.pathname.includes('\\Blogs\\');
    const isBlogPage = window.location.pathname.endsWith('blog.html');
    const isHomePage = !isBlogFolder && !isBlogPage;

    // Apply HTML attributes dynamically
    if (isEnglish) {
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
    } else {
        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";
    }

    // Resolve asset and link prefix dynamically
    let prefix = '';
    if (isEnglish) {
        prefix = isBlogFolder ? '../../' : '../';
    } else {
        prefix = isBlogFolder ? '../' : '';
    }

    // Extract current page file name for language toggle
    const pathParts = window.location.pathname.split('/');
    const pageName = pathParts[pathParts.length - 1] || 'index.html';

    // 2. INJECT HEADER NAVBAR
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        if (isEnglish) {
            // ENGLISH NAVBAR
            headerPlaceholder.innerHTML = `
            <header id="header">
                <a href="${isHomePage ? '#' : prefix + 'en/index.html'}" class="logo" style="display: flex; align-items: center; padding: 0;">
                    <img src="${prefix}images/LogoArtboard 5.png" alt="REVO" style="height: 38px; width: auto; object-fit: contain; background: #ffffff; padding: 4px 10px; border-radius: 6px; box-shadow: 0 4px 12px rgba(255,255,255,0.1);">
                </a>
                <nav id="nav-menu">
                    <a href="${isHomePage ? '#' : prefix + 'en/index.html'}" class="${isHomePage ? 'active' : ''}">Home</a>
                    <a href="${isHomePage ? '#services' : prefix + 'en/index.html#services'}">Services</a>
                    <a href="${isHomePage ? '#pricing' : prefix + 'en/index.html#pricing'}">Pricing</a>
                    <a href="${prefix}en/blog.html" class="${isBlogPage || isBlogFolder ? 'active' : ''}">Blog</a>
                    ${isHomePage ? '<a href="#approach">Process</a>' : ''}
                    <a href="${isHomePage ? '#contact' : prefix + 'en/index.html#contact'}">Contact</a>
                    
                    <!-- Language Toggle to Arabic -->
                    <a href="${isBlogFolder ? '../../Blogs/' + pageName : '../' + pageName}" class="lang-switch" style="border: 1px solid var(--card-border); padding: 0.35rem 0.8rem; border-radius: 30px; font-size: 0.85rem; font-weight: 600; text-decoration: none; color: var(--text-muted); transition: var(--transition);">عربي</a>
                    
                    <a href="https://wa.me/201017595829" target="_blank" class="cta-btn">
                        Free Consultation <i class="fa-solid fa-chevron-right"></i>
                    </a>
                </nav>
                <div class="menu-toggle" id="menu-btn">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </header>
            `;
        } else {
            // ARABIC NAVBAR
            headerPlaceholder.innerHTML = `
            <header id="header">
                <a href="${isHomePage ? '#' : prefix + 'index.html'}" class="logo" style="display: flex; align-items: center; padding: 0;">
                    <img src="${prefix}images/LogoArtboard 5.png" alt="REVO" style="height: 38px; width: auto; object-fit: contain; background: #ffffff; padding: 4px 10px; border-radius: 6px; box-shadow: 0 4px 12px rgba(255,255,255,0.1);">
                </a>
                <nav id="nav-menu">
                    <a href="${isHomePage ? '#' : prefix + 'index.html'}" class="${isHomePage ? 'active' : ''}">الرئيسية</a>
                    <a href="${isHomePage ? '#services' : prefix + 'index.html#services'}">الخدمات</a>
                    <a href="${isHomePage ? '#pricing' : prefix + 'index.html#pricing'}">باقاتنا</a>
                    <a href="${prefix}blog.html" class="${isBlogPage || isBlogFolder ? 'active' : ''}">المدونة</a>
                    ${isHomePage ? '<a href="#approach">طريقة عملنا</a>' : ''}
                    <a href="${isHomePage ? '#contact' : prefix + 'index.html#contact'}">تواصل معنا</a>
                    
                    <!-- Language Toggle to English -->
                    <a href="${isBlogFolder ? '../en/Blogs/' + pageName : 'en/' + pageName}" class="lang-switch" style="border: 1px solid var(--card-border); padding: 0.35rem 0.8rem; border-radius: 30px; font-size: 0.85rem; font-weight: 600; text-decoration: none; color: var(--text-muted); transition: var(--transition);">EN</a>
                    
                    <a href="https://wa.me/201017595829" target="_blank" class="cta-btn">
                        استشارة مجانية <i class="fa-solid fa-chevron-left"></i>
                    </a>
                </nav>
                <div class="menu-toggle" id="menu-btn">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </header>
            `;
        }
    }

    // 3. INJECT FOOTER
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        if (isEnglish) {
            // ENGLISH FOOTER
            footerPlaceholder.innerHTML = `
            <footer>
                <a href="${isHomePage ? '#' : prefix + 'en/index.html'}" class="footer-logo" style="display: inline-block;">
                    <img src="${prefix}images/LogoArtboard 5.png" alt="REVO" style="height: 46px; width: auto; object-fit: contain; background: #ffffff; padding: 6px 12px; border-radius: 8px; box-shadow: 0 4px 12px rgba(255,255,255,0.1);">
                </a>
                <div class="footer-links">
                    <a href="${isHomePage ? '#' : prefix + 'en/index.html'}">Home</a>
                    <a href="${isHomePage ? '#services' : prefix + 'en/index.html#services'}">Services</a>
                    <a href="${isHomePage ? '#pricing' : prefix + 'en/index.html#pricing'}">Pricing</a>
                    <a href="${prefix}en/blog.html" class="${isBlogPage || isBlogFolder ? 'active' : ''}">Blog</a>
                    ${isHomePage ? '<a href="#approach">Process</a>' : ''}
                    <a href="${isHomePage ? '#contact' : prefix + 'en/index.html#contact'}">Contact</a>
                </div>
                <div class="social-icons">
                    <a href="#" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://wa.me/201017595829" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
                <div class="copyright">
                    &copy; 2026 REVO Agency for Advertising & Digital Marketing. All rights reserved.
                </div>
            </footer>
            `;
        } else {
            // ARABIC FOOTER
            footerPlaceholder.innerHTML = `
            <footer>
                <a href="${isHomePage ? '#' : prefix + 'index.html'}" class="footer-logo" style="display: inline-block;">
                    <img src="${prefix}images/LogoArtboard 5.png" alt="REVO" style="height: 46px; width: auto; object-fit: contain; background: #ffffff; padding: 6px 12px; border-radius: 8px; box-shadow: 0 4px 12px rgba(255,255,255,0.1);">
                </a>
                <div class="footer-links">
                    <a href="${isHomePage ? '#' : prefix + 'index.html'}">الرئيسية</a>
                    <a href="${isHomePage ? '#services' : prefix + 'index.html#services'}">الخدمات</a>
                    <a href="${isHomePage ? '#pricing' : prefix + 'index.html#pricing'}">باقاتنا</a>
                    <a href="${prefix}blog.html" class="${isBlogPage || isBlogFolder ? 'active' : ''}">المدونة</a>
                    ${isHomePage ? '<a href="#approach">طريقة عملنا</a>' : ''}
                    <a href="${isHomePage ? '#contact' : prefix + 'index.html#contact'}">تواصل معنا</a>
                </div>
                <div class="social-icons">
                    <a href="#" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://wa.me/201017595829" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
                <div class="copyright">
                    &copy; 2026 وكالة ريفو للدعاية والإعلان والتسويق الرقمي (Revo Agency). جميع الحقوق محفوظة.
                </div>
            </footer>
            `;
        }
    }

    // 4. SET UP COMMON EVENTS (Mobile Menu Toggle & Header Scroll Effect)
    setupHeaderEvents();
});

/**
 * Attaches the header scroll styling and responsive mobile toggle event listeners.
 */
function setupHeaderEvents() {
    // Header Scroll Effect
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking nav links
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
}
