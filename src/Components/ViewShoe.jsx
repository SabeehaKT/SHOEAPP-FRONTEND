import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewShoe = () => {
    const [data,setData]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8089/view").then(
            (response)=>{
                setData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">NAME</th>
                                            <th scope="col">EMAIL ID</th>
                                            <th scope="col">SHOE SIZE</th>
                                            <th scope="col">SHOE COMPANY</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(
                                            (value,index)=>{
                                                return <tr>
                                                <th scope="row">{value.name}</th>
                                                <td>{value.email}</td>
                                                <td>{value.size}</td>
                                                <td>{value.company}</td>
                                            </tr>
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewShoe