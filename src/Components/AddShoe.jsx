import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddShoe = () => {
    const [data,setData]=useState(
        {
            "name":"",
            "email":"",
            "size":"",
            "company":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:[event.target.value]})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8089/add",data).then(
            (response)=>{
                // console.log(response.data)
                if (response.data.status=="added") {
                    alert("Successfully added")

                } else {
                    alert("error!")
                }
            }
        ).catch()
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 co-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form">Name</label>
                            <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email ID</label>
                            <input type="text" className="form-control" name="email" value={data.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Size</label>
                            <input type="text" className="form-control" name="size" value={data.size} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Company</label>
                            <select name="company" id="" className="form-control" value={data.company} onChange={inputHandler}>
                                <option value="Adidas">Adidas</option>
                                <option value="Reebok">Reebok</option>
                                <option value="Nike">Nike</option>
                                <option value="Puma">Puma</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddShoe