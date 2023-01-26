import React from 'react'

const Register = () => {
    return (
        <>
            <div class="loginContainer regsiterContainer">
                <div></div>
                <div class="logContainer ">

                    <form class="sha" action="">
                        <h2 class="margin-left" >Regsiter</h2>
                        <div class="loginForm">
                            <input type="text" placeholder="Enter your Name" name="email" id="" />
                        </div>
                        <div class="loginForm">
                            <input type="email" placeholder="Enter your Email" name="password" id="" />
                        </div>
                        <div class="loginForm">
                            <input type="number" placeholder="Enter your mobile number" name="password" id="" />
                        </div>
                        <div class="loginForm">
                            <input type="text" placeholder="Password" name="password" id="" />
                        </div>
                        <div class="loginForm">
                            <input type="text" placeholder="Confirm password" name="password" id="" />
                        </div>
                        <h5>Already have an account <a href="#">Login</a> </h5>
                    </form>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default Register