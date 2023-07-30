import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function GenerateUserVoice() {

    return (
      <>
      <Form.Label>Enter the text</Form.Label>
      <Form.Control
        placeholder='Eg. I was walking on the street'
      />
      <Button>Submit</Button>
      </>

    )
  }
  
  export default GenerateUserVoice
  