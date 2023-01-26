import React from 'react'

const Login = () => {
    return (
        <>
            <div class="loginContainer">
                <div></div>
                <div class="logContainer">

                    <form class="sha" action="">
                        <h2 class="margin-left" >Login</h2>
                        <div class="loginForm">
                            <input type="email" placeholder="Enter your Email" name="email" id="" />
                        </div>
                        <div class="loginForm">
                            <input type="text" placeholder="Enter password" name="password" id="" />
                        </div>
                        <h5>Don't have an account <a href="google.com">Register</a> </h5>
                    </form>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default Login