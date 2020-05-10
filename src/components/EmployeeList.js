import React, { Component } from 'react'
import EmployeeProviderContext from '../contexts/EmployeeProviderContext'
import Employee from './Employee'
import '../styles/EmployeeList.css'

export default class EmployeeList extends Component {
    static contextType = EmployeeProviderContext;

    render() {
        const {data} = this.context.dataApi;
        let employees = [];

        if(data){
            employees = data.map(employee => <Employee key={employee.id} employee={employee}></Employee>);
        }
        
        return (
            <div className="employeeList">
                {employees}
            </div>
        )
    }
}
