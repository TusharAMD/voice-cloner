import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Generate() {

    return (
      <>
      <div className='generate'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://i.ibb.co/hMFw62h/image.png" />
        <Card.ImgOverlay>
        <Card.Body>
          <Card.Title style={{backgroundColor:"rgba(255,255,255,0.8)"}}>Tushar</Card.Title>
          <Card.Text style={{backgroundColor:"rgba(255,255,255,0.8)"}}>
            This is Voice of Tushar trained using 42 audio files.
          </Card.Text>
          <Button variant="primary" href="generate/tushar">Generate this</Button>
        </Card.Body>
        </Card.ImgOverlay>
      </Card>
      </div>
      </>
    )
  }
  
  export default Generate
  