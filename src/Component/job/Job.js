import CardTitle from "react-bootstrap/esm/CardTitle";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Job(){
    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '30px' }}>
             <Card style={{ width: '18rem', marginTop: '20px' }}>
          <Card.Body>
          <CardTitle> Software Engineer</CardTitle>
            <Card.Text style={{ marginBottom: '10px' }}>
          Minimum  1-2years of experience is required in Computer Science or related field.
            </Card.Text> 
            <CardTitle>Technical Expert</CardTitle>
            <Card.Text style={{ marginBottom: '10px' }}>
            Candiate should have overall experience in handling technologies.
            </Card.Text>
            <Button variant="primary">Find More</Button>
          </Card.Body>
        </Card>
        </div>
    )
}
export default Job;