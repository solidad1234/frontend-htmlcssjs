
document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', () => {
       
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';

        const lightboxImage = document.createElement('img');
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.appendChild(lightboxImage);
        
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});


document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (name === '' || email === '' || phone === '') {
        alert('Please fill in all required fields.');
        event.preventDefault(); 
    } else {
        alert('Your message has been sent!'); 
    }
});
