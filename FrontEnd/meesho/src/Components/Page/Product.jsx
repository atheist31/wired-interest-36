import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Product.scss"
import { Card, Image, CardBody, CardFooter ,Stack,Heading, Text, Divider, ButtonGroup, Button, Flex} from '@chakra-ui/react'
import Filter from './Filter';
import { useDispatch } from 'react-redux';
import { cart_add } from '../Admin/Redux/UserRedux/action';

function Product() {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([]);

  const handleCart = (product) =>{
   dispatch(cart_add(product))
  }

  useEffect(() => {
    axios.get('http://localhost:8080/products')
      .then(response => {
        setProducts(response.data);
        //console.log(response.data);
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
    <div className="product_main" style={{display:Flex}}>

      {/* <div><Filter/></div> */}

<div className='product_page'>
      {products.map(product => (
        <Card maxW='sm' key={product._id}>
        <CardBody>
          <Image
           boxSize='300px'
            src={product.imageURL}
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
            <Stack>
              <Text>
                {`Rating : ${product.rating}`}
              </Text>
              <Text>
                {product.reviews}
              </Text>
            </Stack>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='pink'>
              Buy now
            </Button>
            <Button onClick={()=>handleCart(product)} variant='ghost' colorScheme='black'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      ))}
    </div>

    </div>
    

  );
}

export default Product;
