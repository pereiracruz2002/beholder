import React, {useEffect,useState, useRef} from 'react';
import { useHistory } from 'react-router-dom';
import {getSettings} from '../../services/SettingsServices';
import Menu  from '../../components/Menu/Menu';


function Settings(){

    const inputEmail = useRef('');
    const inputNewPassword = useRef('');
    const inputConfirmPassword = useRef('');
    const inputApiUrl = useRef('');
    const inputAccessKey = useRef('');
    const inputSecretKey = useRef('');

    const history = useHistory();

    const [error, setError] = useState('');

    const [success, setSuccess] = useState('');

   

    useEffect(()=>{
        const token = localStorage.getItem('token');
        getSettings(token)
        .then(settings=>{
            inputEmail.current.value = settings.email;
            inputApiUrl.current.value = settings.apiUrl;
            inputAccessKey.current.value = settings.acessKey;
        }).catch(err=>{
            if(err.response && err.response.status===401){
               return history.push('/');
            }
            if(err.response)
                setError(err.response.data)
            else
            setError(err.response)
        })
    },[])

    

    function onFormSubmit(event){

    }

    return(
        <React.Fragment>
            <Menu />
            <main className="content">
               <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4'>
                    <div className='d-block mb-4 mb-md-0'>
                        <h1 className='h4'>Settings</h1>
                    </div>
               </div>
               <div className="row">
                    <div className="col-12">
                        <div className="card card-body border-0 shadow mb-4">
                            <h2 class="h5 mb-4">General information</h2>
                            <form onSubmit={onFormSubmit}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input ref={inputEmail} className="form-control" id="email" type="email" placeholder="Enter your first name" required />
                                        </div>
                                    </div>   
                                </div>
                                <div className='row'>
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <label htmlFor="newPassword">New Password</label>
                                            <input ref={inputNewPassword} className="form-control" id="newPassword" type="password" placeholder="Enter your new password" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <label htmlFor="confirmPassword">Confirm Password</label>
                                            <input  ref={inputConfirmPassword} className="form-control" id="confirmPassword" type="password" placeholder="Confirm your new password" required />
                                        </div>
                                    </div>
                                </div>
                                <h2 class="h5 my-4">Exchange Info</h2>
                                <div className="row">
                                    <div className="col-sm-12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="apiUrl">API URL</label>
                                            <input ref={inputApiUrl} className="form-control" id="apiUrl" type="text" placeholder="Enter your Api Url" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="acessKey">Access Key</label>
                                            <input  ref={inputAccessKey} className="form-control" id="acessKey" type="text" placeholder="Enter your Access Key" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="secretKey">New Secret Key</label>
                                            <input  ref={inputSecretKey} className="form-control" id="secretKey" type="password" placeholder="Enter your Access Key" required />
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <button class="btn btn-gray-800 mt-2 animate-up-2" type="submit">Save</button>
                                </div>
                                {
                                    error ?
                                    <div className="alert alert-danger mt-2">
                                        {error}
                                    </div> : <React.Fragment></React.Fragment>
                                }
                                {
                                    success ?
                                    <div className="alert alert-success mt-2">
                                        {success}
                                    </div> : <React.Fragment></React.Fragment>
                                }
                            </form>
                        </div>
                    </div>
               </div>
            </main>
        </React.Fragment>
       
    )
}

export default Settings;