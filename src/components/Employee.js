import React, { Component,} from 'react'
import '../styles/Employee.css'

export default class Employee extends Component {

    render() {
        return (
            <div className="card border-light m-3">
                <div className="card-header">
                    <h4>
                       {this.props.employee.first_name} {this.props.employee.last_name}
                    </h4>
                </div>
                <div className="card-body">
                    <p className="card-text">
                        <img className ="mb-2 avatar" src={this.props.employee.avatar}/><br/>
                        {this.props.employee.email}
                    </p>
                </div>
          </div>
        )
    }
}
