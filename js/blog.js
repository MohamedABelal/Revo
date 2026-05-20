/**
 * REVO Agency - Blog Listing Category Filter & Search Logic
 */
let activeCategory = 'all';

/**
 * Filters the articles based on the clicked category tag.
 */
function filterCategory(category, element) {
    activeCategory = category;
    
    // Toggle active class on tags
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.classList.remove('active');
    });
    element.classList.add('active');
    
    filterArticles();
}

/**
 * Combines category filter and search query to filter active cards dynamically.
 */
function filterArticles() {
    const searchInput = document.getElementById('searchInput');
    const searchQuery = searchInput ? searchInput.value.toLowerCase() : '';
    const cards = document.querySelectorAll('.blog-card');
    const noResults = document.getElementById('noResults');
    let visibleCount = 0;

    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const cardTitleAttr = card.getAttribute('data-title') || '';
        const cardTitle = card.querySelector('h3') ? card.querySelector('h3').innerText.toLowerCase() : '';
        const cardDesc = card.querySelector('p') ? card.querySelector('p').innerText.toLowerCase() : '';
        
        const cardSearchText = cardTitleAttr.toLowerCase() + ' ' + cardTitle + ' ' + cardDesc;
        
        const matchesCategory = (activeCategory === 'all' || cardCategory === activeCategory);
        const matchesSearch = cardSearchText.includes(searchQuery);

        if (matchesCategory && matchesSearch) {
            card.style.display = 'flex';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    if (noResults) {
        if (visibleCount === 0) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
        }
    }
}

// Add event listener to search input for live filtering
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', filterArticles);
    }
});
