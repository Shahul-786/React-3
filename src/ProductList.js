import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const products = [
  { name: 'Product 1', image: 'https://media.istockphoto.com/id/472510174/photo/wrist-watch.jpg?s=1024x1024&w=is&k=20&c=o9pbAt6euWWdB-PvX1JpdhW2qrarna7rkwA1u_lWMe8=', reviews: ['Good quality', 'Nice design'] },
  { name: 'Product 2', image: 'https://media.istockphoto.com/id/626068324/photo/time-to-go.jpg?s=1024x1024&w=is&k=20&c=cv_kMDiM37uG5lFhxGFq4x_ikGfFa1m7Spd-8HvVZ1E=', reviews: ['Excellent product', 'Fast delivery'] },
  { name: 'Product 3', image: 'https://media.istockphoto.com/id/92467608/photo/watches-ii.jpg?s=1024x1024&w=is&k=20&c=DwHTuEbzjkgaOFmetUI2jZyYrw7nbx6qgpm_OxOrHoE=', reviews: ['Unique design, Highly recommended'] },
  { name: 'Product 4', image: 'https://media.istockphoto.com/id/1308600615/photo/expensive-watches.jpg?s=1024x1024&w=is&k=20&c=6uQlF7IqKSpvq4tVIkBep2BDSh4is50O4FXoKkeHMdA=', reviews: ['Sturdy build', 'Satisfied with the purchase'] },
  { name: 'Product 5', image: 'https://media.istockphoto.com/id/862529406/photo/male-wristwatch.jpg?s=1024x1024&w=is&k=20&c=bnoqIEUGFM3z7Zv2oSZgxZV4ke8W8M51aVSfpSommUQ=', reviews: ['Beautiful design', 'Good value for money'] },
  { name: 'Product 6', image: 'https://media.istockphoto.com/id/139542946/photo/watches.jpg?s=1024x1024&w=is&k=20&c=bye4w3o7pEuQqS0TkN-79ZdgwC489aY1KITzzd83YOY=', reviews: ['Impressive quality', 'Prompt delivery'] },
  { name: 'Product 7', image: 'https://media.istockphoto.com/id/862529632/photo/male-wristwatch.jpg?s=1024x1024&w=is&k=20&c=WxDc7XBLJTqM_2X_dsW9LacXJmioOEn8uarKWoT1afQ=', reviews: ['Comfortable to wear', 'Great customer service'] },
  { name: 'Product 8', image: 'https://media.istockphoto.com/id/1369598396/photo/wrist-watch-and-wallet-on-the-table.jpg?s=1024x1024&w=is&k=20&c=2tZJSaypt1Nx0hB68lNtlMq-_y0uYIHy1gnYSHNW_vM=', reviews: ['Sleek design', 'Happy with the purchase'] },
  { name: 'Product 9', image: 'https://media.istockphoto.com/id/472510174/photo/wrist-watch.jpg?s=1024x1024&w=is&k=20&c=o9pbAt6euWWdB-PvX1JpdhW2qrarna7rkwA1u_lWMe8=', reviews: ['Durable product', 'Easy to use'] },
  { name: 'Product 10', image: 'https://media.istockphoto.com/id/626068324/photo/time-to-go.jpg?s=1024x1024&w=is&k=20&c=cv_kMDiM37uG5lFhxGFq4x_ikGfFa1m7Spd-8HvVZ1E=', reviews: ['Fantastic product', 'Fast shipping'] },
  { name: 'Product 11', image: 'https://media.istockphoto.com/id/92467608/photo/watches-ii.jpg?s=1024x1024&w=is&k=20&c=DwHTuEbzjkgaOFmetUI2jZyYrw7nbx6qgpm_OxOrHoE=', reviews: ['Impressive durability', 'Great value'] },
  { name: 'Product 12', image: 'https://media.istockphoto.com/id/1308600615/photo/expensive-watches.jpg?s=1024x1024&w=is&k=20&c=6uQlF7IqKSpvq4tVIkBep2BDSh4is50O4FXoKkeHMdA=', reviews: ['Sleek and modern design', 'Quick and secure delivery'] },
];

const AppProductList = () => {
    return (
      <div className="product-list">
        {products.map((product, index) => (
          <Card key={index} className="product-card">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title className="product-card-title">{product.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              {product.reviews.map((review, idx) => (
                <ListGroup.Item key={idx} className="product-review">{review}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        ))}
      </div>
    );
  };
  
  export default AppProductList;
