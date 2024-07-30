import React, { useState } from "react";
export default function Home(){
    const initialValues={name:"",cno:"",emailId:"",username:"",dob:"",address:""};
    const [formValues,setFormValues]=useState(initialValues);
    const [formError,setFormError]=useState({});
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const handleChange=(e)=>{
        const { name, value}=e.target;
        setFormValues({...formValues,[name]:value});
        console.log(formValues);
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setFormError(validate(formValues));
        console.log(formError);

    };
    const validate =(values)=>{
        const errors={};
        if(!values.name){
            errors.name="Name is required";
        }
        if(!values.cno){
            errors.cno="Contact No. is required";
        }
        if(!values.emailId){
            errors.emailId="email id is required";
        }else if(!values.emailId.match(isValidEmail)){
            errors.emailId="email id not correct format";
        }
        if(!values.username){
            errors.username="username is required";
        }
        if(!values.dob){
            errors.dob="date of birth is required";
        }
        if(!values.address){
            errors.address="address is required";
        }
        return errors;
    }
    return(
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row" id="sigup">
                <div className="col-lg-12" >
                    <h3 className="mb-3">Signup</h3>
                    <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Name</span>
                                <input type="text" className="form-control" name="name" onChange={handleChange} value={formValues.name} id="name" aria-describedby="basic-addon1"></input>
                            </div>
                            <p>{formError.name}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Contact No</span>
                                <input type="number" className="form-control" name="cno" onChange={handleChange} id="cno" value={formValues.cno} aria-describedby="basic-addon1"></input>
                            </div>
                            <p>{formError.cno}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Email Id</span>
                                <input type="text" className="form-control" name="emailId" onChange={handleChange} id="emailId" value={formValues.emailId} aria-describedby="basic-addon1"></input>
                            </div>
                            <p>{formError.emailId}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Username</span>
                                <input type="text" className="form-control" name="username" onChange={handleChange} id="username" value={formValues.username} aria-describedby="basic-addon1"></input>
                            </div>
                            <p>{formError.username}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Date of Birth</span>
                                <input type="date" className="form-control" name="dob" onChange={handleChange} id="dob" value={formValues.dob} aria-describedby="basic-addon1"></input>
                            </div>
                            <p>{formError.dob}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Address</span>
                                <textarea type="date" className="form-control" name="address" onChange={handleChange} id="address"  aria-describedby="basic-addon1">{formValues.address}</textarea>
                            </div>
                            <p>{formError.address}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <button className="btn btn-info btn-sm" id="save" type="submit" >Register</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
} 