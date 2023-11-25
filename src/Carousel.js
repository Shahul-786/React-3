import React from 'react';
import { Carousel } from 'react-bootstrap';

const watchImages = [
  'https://media.istockphoto.com/id/533714204/photo/businessman-checking-time-from-watch.jpg?s=1024x1024&w=is&k=20&c=l6CaWdHY5CuJfEEo22DRUpvoTVhywyGX_GY_xg02peo=',
  'https://media.istockphoto.com/id/1248803286/photo/portrait-of-bearded-caucasian-man-in-beige-jacket-and-white-shirt-in-the-city-business.jpg?s=1024x1024&w=is&k=20&c=F81T1lge3HozQtW5cN_prs75fFVs_RzeTS_M33IY7PA=',
  'https://media.istockphoto.com/id/473960852/photo/runner-in-the-park-preparing-for-jogging.jpg?s=1024x1024&w=is&k=20&c=s1ngt22D7qqXLJtTd7-Ocr96yAfydunciIE0D0bC8Mo=',
];

const captions = [
  'Explore the elegance of our watches.',
  'Stay stylish with our latest collections.',
  'Embrace an active lifestyle with our sporty designs.',
];

const AppCarousel = () => {
  return (
    <Carousel>
      {watchImages.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Watch ${index + 1}`}
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
           <p>{captions[index]}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default AppCarousel;
