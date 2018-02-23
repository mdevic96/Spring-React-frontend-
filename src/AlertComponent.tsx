import * as React from 'react';
import { Alert } from 'reactstrap';

export default class AlertComponent extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            visible: true
        };

        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss() {
        this.setState({visible: false});
    }

    render() {
        return(
            <div>
                <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                    No records found. You can add records by pressing 'Add New Beer' button.
                </Alert>
            </div>
        );
    }
}