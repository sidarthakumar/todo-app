import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function AppTodo() {
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <input
            type='text'
            placeholder='Enter Todo Here'
          />
        </Col>
        <Col sm={4}>
          <input type='date' />
        </Col>
        <Col sm={2}>
          <Button variant='success'>Add</Button>{' '}
        </Col>
      </Row>
    </Container>
  );
}
export default AppTodo;
