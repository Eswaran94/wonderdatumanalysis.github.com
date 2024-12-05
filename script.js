// Add smooth pop-up or enhanced interaction if required
document.querySelectorAll('.container').forEach(container => {
    container.addEventListener('mouseover', () => {
        container.style.transform = 'scale(1.1)';
        container.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
    });
    container.addEventListener('mouseout', () => {
        container.style.transform = 'scale(1)';
        container.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

document.querySelectorAll('.container').forEach(container => {
    container.addEventListener('click', () => {
        alert(`You clicked on "${container.querySelector('.container-title').innerText}"`);
    });
});
