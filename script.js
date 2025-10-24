document.addEventListener('DOMContentLoaded', () => {
    const anthemButton = document.getElementById('anthemButton');
    const anthemSection = document.getElementById('anthem');

    anthemButton.addEventListener('click', () => {
        // Toggle the visibility of the Anthem section
        if (anthemSection.style.display === 'none' || anthemSection.style.display === '') {
            anthemSection.style.display = 'block';
            anthemButton.textContent = 'Hide National Call';
        } else {
            anthemSection.style.display = 'none';
            anthemButton.textContent = 'Hear the National Call';
        }

        // Optional: Scroll to the Anthem section when it appears
        if (anthemSection.style.display === 'block') {
            anthemSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});