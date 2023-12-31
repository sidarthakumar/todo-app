/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function TodoItem({ todoName, todoDate }) {
  return (
    <Container>
      <Row className='s-row'>
        <Col
          sm={6}
          className='items-container'
        >
          {todoName}
        </Col>
        <Col
          sm={4}
          className='items-container'
        >
          {todoDate}
        </Col>
        <Col sm={2}>
          <Button
            variant='danger'
            className='s-button'
          >
            Delete
          </Button>{' '}
        </Col>
      </Row>
    </Container>
  );
}
export default TodoItem;
