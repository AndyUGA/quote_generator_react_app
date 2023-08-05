
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getRandomQuote();
  }, []);

  async function getRandomQuote() {

    let resp = await axios.get(`https://dummyjson.com/quotes/random`);
    setQuote(resp.data.quote);
    setAuthor(resp.data.author);

  }



  return (
    <>
      <Container>
        <Row>
          <Col className='d-flex justify-content-center align-items-center vh-100'>
            <Card className='bg-light'>
              <Card.Body className='text-center my-4'>
                <Card.Text>
                  "{quote}"
                </Card.Text>
                <Card.Text className='text-end'>
                  --- {author}
                </Card.Text>
                <Button className='bg-navy mt-3' onClick={getRandomQuote}>
                  Generate Random Quote
                </Button>


              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default App;