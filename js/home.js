/**
 * REVO Agency - Home Page Interactive Logic
 * Handles interactive FAQ Accordion and WhatsApp Audit Form redirection.
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Interactive FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all FAQ items
                faqItems.forEach(i => {
                    i.classList.remove('active');
                    const ans = i.querySelector('.faq-answer');
                    if (ans) ans.style.maxHeight = null;
                });

                // Toggle selected
                if (!isActive) {
                    item.classList.add('active');
                    const answer = item.querySelector('.faq-answer');
                    if (answer) {
                        answer.style.maxHeight = answer.scrollHeight + "px";
                    }
                }
            });
        }
    });
});

/**
 * Handles marketing audit form submission, formatting the client's entries into
 * a sleek, pre-populated WhatsApp message, and dynamically redirecting.
 */
function handleAuditSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('clientName').value;
    const business = document.getElementById('businessName').value;
    const phone = document.getElementById('clientPhone').value;
    const website = document.getElementById('clientWebsite').value;
    const service = document.getElementById('requestedService').value;
    const message = document.getElementById('clientMessage').value;
    
    // Check if the current page is English
    const isEnglish = window.location.pathname.includes('/en/');
    
    // Format WhatsApp Message dynamically based on language
    let whatsappText = "";
    if (isEnglish) {
        whatsappText = `*Free Marketing Audit Request - Revo Agency*%0A%0A` +
                       `• *Name:* ${name}%0A` +
                       `• *Business:* ${business}%0A` +
                       `• *Phone:* ${phone}%0A` +
                       `• *Website/Page:* ${website}%0A` +
                       `• *Service:* ${service}%0A` +
                       `• *Details:* ${message}`;
    } else {
        whatsappText = `*طلب فحص تسويقي مجاني - وكالة ريفو*%0A%0A` +
                       `• *الاسم:* ${name}%0A` +
                       `• *اسم المشروع:* ${business}%0A` +
                       `• *رقم الهاتف:* ${phone}%0A` +
                       `• *الموقع/الصفحة:* ${website}%0A` +
                       `• *الخدمة المطلوبة:* ${service}%0A` +
                       `• *تفاصيل:* ${message}`;
    }
    
    // WhatsApp Link (Revo official phone number: 01017595829)
    const whatsappUrl = `https://wa.me/201017595829?text=${whatsappText}`;
    
    // Show Success Screen & set redirect link
    document.getElementById('auditForm').style.display = 'none';
    const successScreen = document.getElementById('successScreen');
    if (successScreen) {
        successScreen.style.display = 'block';
    }
    
    const redirectBtn = document.getElementById('whatsappRedirectBtn');
    if (redirectBtn) {
        redirectBtn.href = whatsappUrl;
    }
    
    // Auto redirect using window.location.href (guaranteed not to be blocked by browser popup blockers)
    setTimeout(() => {
        window.location.href = whatsappUrl;
    }, 1500);
}
