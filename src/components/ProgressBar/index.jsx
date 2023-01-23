import { useRef, useState } from "react"
import { Button, Card, Col, Container, Row, ProgressBar as BarProgress, Form, Modal } from "react-bootstrap"
import ProgressBar2 from "./ProgressBar2";

export const ProgressBar = () => {
    const [now, setNow] = useState(0);
    const inputRef = useRef(null)
    const [intervalState, setIntervalState] = useState(null)
    const [btnDisable, setBtnDisable] = useState(true)
    const [showModal, setShowModal] = useState(false)

    const handleDownload = () => {
        const inputValue = +inputRef.current?.value
        const validValue = !isNaN(inputValue) && inputValue > 0 && inputValue <= 100
        setShowModal(!validValue)

        if(intervalState){
            clearInterval(intervalState)
        }

        if(validValue) {
            const interval = setInterval(() => {
                setNow((now) => {
                    if (now === inputValue) {
                        clearInterval(interval)
                        return now
                    }
                    return now + 1
                })
            }, 1000);
            setIntervalState(interval)
        } else {
            handleReset()
        }
    }
    const handleReset = () => {
        clearInterval(intervalState)
        setNow(0)
    }
    const handleChange = ({ target: { value } }) => {
        setBtnDisable(!!!+value)
    }
    const handleClose = () => setShowModal(false);

    return (
        <Container>
            <Row className="mt-5">
                <Col xs={12} md={{ span: 8, offset: 2 }} className="text-center">
                    <Card style={{ width: '30rem' }} className="m-auto">
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>Progress Bar</Card.Title>
                            <BarProgress animated now={now} label={`${now}%`} />
                            <ProgressBar2 now={now} label={`${now}%`}/>
                            <Form.Control
                                placeholder="ingresar porcentaje"
                                className="my-3"
                                ref={inputRef}
                                onChange={handleChange}
                            >
                            </Form.Control>
                            <Button onClick={handleDownload} variant="primary" disabled={btnDisable}>descargar</Button>
                            <Button onClick={handleReset} variant="danger" className="mx-1">resetear</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <h2 className="text-danger text-center py-4">ERROR.. ❌</h2>
                        <p className="text-muted fs-4 text-center">
                            Solo se acepta valores numéricos. El valor debe ser mayor a 0 y
                            menor e igual a 100.
                        </p>
                    </>
                </Modal.Body>
            </Modal>
        </Container>
    )
}