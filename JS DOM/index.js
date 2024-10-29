const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg'
];
let currentIndex = 0;

document.getElementById('mainImage').src = images[currentIndex];

function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    document.getElementById('mainImage').src = images[currentIndex];
}

const thumbnailContainer = document.querySelector('.thumbnail-container');
images.forEach((image, index) => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.classList.add('thumbnail');
    imgElement.onclick = () => {
        currentIndex = index;
        document.getElementById('mainImage').src = images[currentIndex];
    };
    thumbnailContainer.appendChild(imgElement);
});
