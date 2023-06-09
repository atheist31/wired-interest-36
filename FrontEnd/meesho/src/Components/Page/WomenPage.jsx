import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Product.scss"
import { Card, Image, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import Navbar1 from "../Navbar1"
import Navbar2 from "../Navbar2"

function WomanPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/products?category=Women')
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    // <div className='product_page'>
    //   {products.map(product => (
    //     <div key={product.id} className='product_card'>
    //         <div className="imgSize">
    //       <img src={product.imageURL} alt={product.name} />
    //         </div>
    //       <h2>{product.itemName}</h2>
    //       <p>{product.price}</p>
    //       <p>{product.deliveryStatus}</p>
    //       <div>
    //       <p>{product.rating}</p>
    //       <p>{product.reviews}</p>
    //       </div>
    //       <button>Add to Cart</button>
    //     </div>
    //   ))}
    // </div>

    <div>


<div>
<Navbar1 />
<Navbar2 />
</div>

<div>


    <div className='product_page'>
      {products.map(product => (
        <Card maxW='sm'>
        <CardBody>
          <Image
            src={product.imageURL}
            boxSize='300px'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='m'>{product.itemName}</Heading>
            <Text>
              {`₹ ${product.price}`}
            </Text>
            <Text color='gray' fontSize='15'>
              {product.deliveryStatus}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='pink'>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='black'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      ))}
    </div>
    
</div>


</div>

  );
}

export default WomanPage;
