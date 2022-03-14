'use strict';

// algoritm
// create addImage func
// create promise => return promise
// resolve(data)
//

const addImage = url => {
  const promise = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.src = url;
    imgElem.alt = 'New Photo';

    const pageElem = document.querySelector('.page');
    pageElem.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };

    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () => reject(new Error('Image load is failed...')));
  });

  return promise;
};

//const urlAdress =
//  '1https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

//const myPromise = addImage(urlAdress);

//myPromise.then(data => {
//  const imageSizeInfoElem = document.querySelector('.image-size');
//  imageSizeInfoElem.textContent = `${data.width} x ${data.height}`;
//});

//myPromise.catch(err => console.log(err));
