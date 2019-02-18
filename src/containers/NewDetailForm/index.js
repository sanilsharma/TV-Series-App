import React from 'react';
import { Form, Header, Segment, Button } from 'semantic-ui-react'
class NewDetailsForm extends React.Component {
    state = {
        id: '',
        name: '',
        age: '',
        gender: ''
    };
    onChangeId = this._onChangeId.bind(this);
    onChangeName = this._onChangeName.bind(this);
    onChangeAge = this._onChangeAge.bind(this);
    onChangeGender = this._onChangeGender.bind(this);
    onSubmit = this._onSubmit.bind(this);
    render() {
        return (
            <div className="ui container">
                <Segment vertical>
                    <Header>New Details</Header>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Field>
                            <label>Id</label>
                            <input placeholder='Id' value={this.state.id} onChange={this.onChangeId} />
                        </Form.Field>
                        <Form.Field>
                            <label>Name</label>
                            <input placeholder='Name' value={this.state.name} onChange={this.onChangeName} />
                        </Form.Field>
                        <Form.Field>
                            <label>Age</label>
                            <input placeholder='Age' value={this.state.age} onChange={this.onChangeAge} />
                        </Form.Field>
                        <Form.Field>
                            <label>Gender</label>
                            <input placeholder='Gender' value={this.state.gender} onChange={this.onChangeGender} />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Segment>
            </div>
        );
    }
    _onChangeId(e) {
        this.setState({
            id: e.target.value
        });
    }
    _onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    _onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }
    _onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
    }
    _onSubmit() {
        const payload = {
            id: this.state.id,
            name: this.state.name,
            age: this.state.age,
            gender: this.state.gender
        };
        fetch('http://localhost:5000/data/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        
        this.setState({
            id: '',
            name: '',
            age: '',
            gender: ''
        });
    }
}


export default NewDetailsForm;