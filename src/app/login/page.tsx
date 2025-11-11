'use client'
import styled from "@emotion/styled"
import LoginForm from "../components/login/loginform"
const Login = () => {
    return(
        <LoginLayout>
            <LoginForm />
        </LoginLayout>
    )
}

export default Login;

const LoginLayout = styled.div`
  width : 100%;
  padding : 100px;
  height : 100vh;
  display : flex;
  justify-content : center;
  align-items : center;
`