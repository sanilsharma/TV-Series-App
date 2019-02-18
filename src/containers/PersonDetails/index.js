import React, { Component } from 'react';
import { Table, Header, Segment} from 'semantic-ui-react';
import NewDetailsForm from '../NewDetailForm';
 

class PersonDetails extends Component {

    state = {
        persons : []
    }
    
    componentDidMount() {
        fetch('/data/get')
            .then( (res) => res.json() )
            .then( persons => this.setState({ persons : persons }, () => console.log("Person's fetched .....", persons)))
    }
    

    render() {
        const rows = this.state.persons.map(persons =>{
            return (
                <Table.Row key={ persons.id }>
                    <Table.Cell>{ persons.name }</Table.Cell>
                    <Table.Cell>{ persons.age }</Table.Cell>
                    <Table.Cell>{ persons.gender }</Table.Cell>
                </Table.Row>
        )});
        return (
            <div className="ui container">
                <Segment>
                    <Header> Details </Header>
                    <Table striped>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Age</Table.HeaderCell>
                                <Table.HeaderCell>Gender</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            { rows }
                        </Table.Body>
                    </Table>
                </Segment>
                <NewDetailsForm />
            </div>
            
        );
    }
}

export default PersonDetails;