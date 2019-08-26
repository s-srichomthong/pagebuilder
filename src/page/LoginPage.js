import React, {useState} from 'react';
import Button from "reactstrap/es/Button";
import Cookies from 'universal-cookie';
import {Application, ReqMethod} from "../utils/Constant";
import {ServiceApi} from "../service/ServiceApi";

export default function LoginPage() {
    const cookies = new Cookies();
    cookies.remove(Application.APP_NAME);

    const [username, typingUsername] = useState("");
    const [password, typingPassword] = useState("");

    function reqListener () {
        console.log(this.responseText);
    }

    let call = new XMLHttpRequest();
    call.addEventListener("load", reqListener);
    call.open(ReqMethod.GET, ServiceApi.news);
    call.send();

    function AttemptToLogin() {
        if (checkAuth()){
            console.log("Cookies Redirect : " + cookies.get(Application.APP_NAME));
            window.location.href = "/";
        } else {
            console.log("Cookies name false : " + cookies.get(Application.APP_NAME));
            cookies.remove(Application.APP_NAME);
        }
    }

    function checkAuth(){
        if (username && password){
            cookies.set(Application.APP_NAME, username, { path: '/' });
        } else cookies.remove(Application.APP_NAME);
        return cookies.get(Application.APP_NAME);
    }

    function handleKeyDown(key) {
        if (key === 'Enter') {
            AttemptToLogin()
        }
    }

    return (
        <div className="App container-fluid">
            <form>
                Username : <input id="username" type="text" autoComplete="username"
                                  onChange={ event => typingUsername(event.target.value)} /> <br/> <br/>
                Password : <input id="password" type="password" autoComplete="current-password"
                                  onChange={ event => typingPassword(event.target.value)}
                                  onKeyPress={ event => handleKeyDown(event.key) }/> <br/>
                <Button onClick={ () => new AttemptToLogin() }> Login </Button>
            </form>

        </div>
    );
}