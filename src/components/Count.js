import React, { Component } from 'react'
import EmployeeProviderContext from '../contexts/EmployeeProviderContext'

export default class Count extends Component {
    static contextType = EmployeeProviderContext;

    render() {

        return (
            <div>
                <h5 className="text-secondary"><b>Number of all employees: {this.context.total}</b></h5>
            </div>
        )
    }
}
