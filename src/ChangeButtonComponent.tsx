import * as React from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Col, Input } from 'reactstrap';

export default class ChangeButtonComponent extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        modal: false,
        id: this.props.beer.id,
        name: null,
        description: null
      };
  
      this.toggle = this.toggle.bind(this);
      this.change = this.change.bind(this);
      this.click = this.click.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    change() {
        axios.post('http://localhost:8080/beers/update', {
            id: this.state.id,
            name: this.state.name,
            description: this.state.description
        })
        .then(() => this.props.onChangeF());
    }

    click() {
        this.change();
        this.toggle();
    }
  
    render() {
      return (
        <div>
          <Button color="primary" onClick={this.toggle} className="float-left">Change</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Change Beer</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup row={true}>
                        <Label sm={2}>Name</Label>
                        <Col sm={10}>
                            <Input onChange={event => this.setState({name: event.target.value})} />
                        </Col>
                    </FormGroup>

                    <FormGroup row={true}>
                        <Label sm={2}>Description</Label>
                        <Col sm={10}>
                            <Input onChange={event => this.setState({description: event.target.value})}  />
                        </Col>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="info" onClick={this.click}>Save</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }