import React, { Component } from 'react'
import EmployeeProviderContext from '../contexts/EmployeeProviderContext'
import EmployeeList from './EmployeeList';
import Count from './Count';
import Pagination from './Pagination';

export default class EmployeeProvider extends Component {
    constructor(props){
        super(props);

        this.state = {
            dataApi: {},
            totalEmployees: 0,
            url:'https://reqres.in/api/users'
        }
    }

    componentDidMount()
    {
        this.getDataFromApi(this.state.url);
    }

    getDataFromApi = async (url) => {

        const response = await fetch(url);
        const dataJson = await response.json();

        this.setState({dataApi: dataJson});
        const {total} = dataJson;
        this.setState({totalEmployees: total});
    }

    changeUrl = (new_url) => {
        this.setState({url: new_url});
    }



    render() {
        return (
            <EmployeeProviderContext.Provider value={{dataApi: this.state.dataApi, total: this.state.totalEmployees, changeUrl: this.changeUrl}}>
                <div>
                    <h1 className="text-primary">
                        Employee List
                    </h1>
                    <Count/>
                    <EmployeeList/>
                </div>

            </EmployeeProviderContext.Provider>
            
        )
    }
}
