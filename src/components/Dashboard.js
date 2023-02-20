import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';



const Dashboard = () =>
(   
    <Container>
        <h2>Welcome, Advisor</h2>
        <Button variant="dark" className="mx-auto">Client List</Button>

        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Client ID</th>
                <th>Client Name</th>
                <th>Proposed</th>
                <th>Pending</th>
                <th>Net Investment</th>
                <th>Market Value</th>
                <th>Inception Date</th>
                {/* <th>Actions</th> */}
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
            <td>Mark Wahlberg</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                </tr>
                <tr>
                <td>1</td>
                <td>Mark Wahlberg</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                </tr>
                <tr>
                <td>1</td>
                <td>Mark Wahlberg</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                </tr>
                <tr>
                <td>1</td>
                <td>Mark Wahlberg</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                </tr>
            </tbody>
        </Table>
    </Container>
)


export default Dashboard;