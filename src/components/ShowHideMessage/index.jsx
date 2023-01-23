import { Button, Col, Container, Row, Toast } from "react-bootstrap"
import { useShow } from "../../hooks/useShow"

export const ShowHideMessage = () => {
    const {show, handleShowMessage} = useShow(false)
    
    return (
        <Container>
        <Row className="mt-5">
        <Col xs={12} md={{span:6,offset:3}} className="text-center">
            <Button onClick={handleShowMessage} variant={!show ? 'success' : 'danger'} className="mb-2">
                {!show ? 'Mostrar' : 'Ocultar'} mensage
            </Button>
            <Toast show={show} onClose={handleShowMessage} className="m-auto">
            <Toast.Header>
                <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                />
                <strong className="me-auto">ReactJS</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Primera clase</Toast.Body>
            </Toast>
        </Col>
        </Row>
        </Container>
    )
}