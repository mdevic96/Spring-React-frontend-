import * as React from 'react';
import { Button, Modal, Form, FormGroup, Label, Col, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

export default class AddNewBeerComponentButton extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            modal: false,
            id: null,
            name: null,
            description: null
        };

        this.toggle = this.toggle.bind(this);
        this.add = this.add.bind(this);
        this.myClick = this.myClick.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    add() {
        if(this.state.id) {
            axios.post('http://localhost:8080/beers/create', {
            id: this.state.id,
            name: this.state.name,
            description: this.state.description
        })
        .then(() => this.props.onAdd());
        }
    }

    myClick() {
        this.add();
        this.toggle();
    }

    render() {
        return(
            <div>
                <Button color="primary" size="md" style={{marginTop: 20, marginBottom: 25}} onClick={this.toggle}>Add New Beer</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>New Beer</ModalHeader>
                    <ModalBody>
                        <Form >
                            <FormGroup row={true}>
                                <Label sm={2}>ID</Label>
                                <Col sm={10}>
                                    <Input onChange={event => this.setState({id: event.target.value})} />
                                </Col>
                            </FormGroup>

                            <FormGroup row={true}>
                                <Label sm={2}>Name</Label>
                                <Col sm={10}>
                                    <Input onChange={event => this.setState({name: event.target.value})} />
                                </Col>
                            </FormGroup>

                            <FormGroup row={true}>
                                <Label sm={2}>Description</Label>
                                <Col sm={10}>
                                    <Input onChange={event => this.setState({description: event.target.value})} />
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.myClick} color="primary">Save</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}