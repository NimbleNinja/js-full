'use strict';
// algoritm
// realize addImage func
// create img element
// add alt, src
// get page element
// add listener load and error events
// if load sucsess => callback(null, {width, height})
// else => callback(error)
export const addImage = (imgSrc, callback) => {
  // put your code here
  const imgElem = document.createElement('img');
  imgElem.alt = 'My photo';
  imgElem.src = imgSrc;

  const pageElem = document.querySelector('.page');
  pageElem.append(imgElem);

  const onImageLoad = () => {
    callback(null, imgElem);
  };

  imgElem.addEventListener('load', onImageLoad);
  imgElem.addEventListener('error', () => callback('Image load is failed'));
};

// callack function
const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};

// examples
addImage(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
  onImageLoaded,
);
