const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryRef = document.querySelector('.gallery');

function createGalleryMarkup(images) {

  const galleryMarkup = images.map(image => `<li><img src=${image.url} alt=${image.alt}></li>`)
    .join(''); 
  
  
  galleryRef.insertAdjacentHTML("afterbegin", galleryMarkup);

  galleryRef.style.listStyle = "none";
  galleryRef.style.display = "flex";
  galleryRef.style.justifyContent = "space-between";

    for (let child of galleryRef.children) {
    child.firstChild.style.width = '250px';
    child.firstChild.style.height = '150px';
  }
}

createGalleryMarkup(images);