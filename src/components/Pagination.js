import React, { Component } from 'react'
import '../styles/Pagination.css'
import EmployeeProviderContext from '../contexts/EmployeeProviderContext'

export default class Pagination extends Component {
    static contextType = EmployeeProviderContext;

    change() {
        this.context.changeUrl("https://reqres.in/api/users?page=2");
    }

    render() {
        const {total, per_pages, total_pages} = this.context.dataApi;


        let numberOfItems = total;
        let limitPerPage = per_pages;
        let totalPages = total_pages;
        let createdPages = [];

        createdPages.push(
            <li className="page-item">
                <a className="page-link" href="#">&laquo;Prev</a>
            </li>
        );

        createdPages.push(
            <li className="page-item active">
                <a className="page-link" href="#"  onClick={this.change}>1</a>
            </li>
        );
        
        for(let i=2; i<totalPages+1; i++){
            createdPages.push(
            <li className="page-item">
                <a className="page-link" key={i} href="#">{i}</a>
            </li>
            );
        }

        createdPages.push(
            <li className="page-item">
                <a className="page-link" href="#">Next&raquo;</a>
            </li>
        );

        return (
            <div>
                <ul className="pagination">
                    {createdPages}
                </ul>
            </div>
        )
    }
}
