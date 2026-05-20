/**
 * REVO Agency - Single Blog Post Reading Progress Bar Script
 */
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', updateReadingProgressBar);
});

/**
 * Updates the horizontal progress bar width at the top based on document scroll depth.
 */
function updateReadingProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    if (height > 0) {
        const scrolled = (winScroll / height) * 100;
        const myBar = document.getElementById("myBar");
        if (myBar) {
            myBar.style.width = scrolled + "%";
        }
    }
}
