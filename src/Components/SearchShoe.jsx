import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const SearchShoe = () => {
    const [data, setData] = useState(
        {
            "name": ""
        }
    )

    const [result, setResult] = useState([])

    const deleteShoe = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8089/delete", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "deleted") {
                    alert("Successfully Deleted")
                } else {
                    alert("error in deletion")
                }
            }).catch().finally()
    }

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8089/search", data).then(
            (response) => {
                setResult(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        ).finally()
    }

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={readValue}>Search</button>
                            </div>
                            <div className="row">
                                <div className="col col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">NAME</th>
                                                <th scope="col">EMAIL</th>
                                                <th scope="col">SIZE</th>
                                                <th scope="col">COMPANY</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {result.map(
                                                (value,index)=>{
                                                    return <tr>
                                                    <th scope="row">{value.name}</th>
                                                    <td>{value.email}</td>
                                                    <td>{value.size}</td>
                                                    <td>{value.company}</td>
                                                    <td><button className="btn btn-danger" onClick={()=>{deleteShoe(value._id)}}>Delete</button></td>
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
        </div>
    )
}

export default SearchShoe