document.addEventListener('DOMContentLoaded', function() {
    // Highlight current category
    const categoryLabels = document.querySelectorAll('.category-labels span');
    const newsItems = document.querySelectorAll('.news-item');

    categoryLabels.forEach((label, index) => {
        label.addEventListener('click', () => {
            // Remove active class from all labels
            categoryLabels.forEach(l => l.classList.remove('active'));
            // Add active class to clicked label
            label.classList.add('active');
            
            // Highlight corresponding news item
            newsItems.forEach(item => item.classList.remove('active'));
            newsItems[index].classList.add('active');
        });
    });

    // Add hover effects
    newsItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('hover');
        });
        
        item.addEventListener('mouseleave', () => {
            item.classList.remove('hover');
        });
    });
});
