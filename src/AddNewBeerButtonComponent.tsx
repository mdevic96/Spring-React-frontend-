import * as React from 'react';
import { Button, Modal, Form, FormGroup, Label, Col, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

export default class AddNewBeerComponentButton extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
        this.add = this.add.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    add() {
        axios.post('http://localhost:8080/beers', {
            id: this.refs.id,
            name: this.refs.name,
            description: this.refs.description
        })
        .then(response => response.data);
    }

    render() {
        return(
            <div>
                <Button color="primary" size="md" style={{marginTop: 25}} onClick={this.toggle}>Add New Beer</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>New Beer</ModalHeader>
                    <ModalBody>
                        <Form >
                            <FormGroup row={true}>
                                <Label sm={2}>ID</Label>
                                <Col sm={10}>
                                    <Input id="id" />
                                </Col>
                            </FormGroup>

                            <FormGroup row={true}>
                                <Label sm={2}>Name</Label>
                                <Col sm={10}>
                                    <Input id="name" />
                                </Col>
                            </FormGroup>

                            <FormGroup row={true}>
                                <Label sm={2}>Description</Label>
                                <Col sm={10}>
                                    <Input id="description" />
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.add} color="primary">Save</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}