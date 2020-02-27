import React, { Component } from "react";
import API from "../utils/API";

class DataTable extends Component {
    state = {
        table: []
    };
    componentDidMount() {
        API.getInfo()
            .then(res => this.setState({ table: res.data.results }))
            .catch(err => console.log(err));
    }
    handleSort = e => {
        e.preventDefault();
        var newTable = this.state.table.sort((a, b) => {
            return +(a.name.first > b.name.first) || -(a.name.first < b.name.first);
        });
        this.setState({ table: newTable });
    };
    render() {

        return (
            <table>
                <tr>
                    <th>Profile</th>
                    <th onClick={this.handleSort}>
                        First Name
                    </th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                </tr>
                {this.state.table.map(person => (
                    <tr>
                        <td>
                            <img src={person.picture.thumbnail} />
                        </td>
                        <td>{person.name.first}</td>
                        <td>{person.name.last}</td>
                        <td>{person.phone}</td>
                        <td>{person.email}</td>
                    </tr>
                ))}
            </table>
        )
    }
}
export default DataTable;