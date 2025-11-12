'use client'
import styled from "@emotion/styled"
import SignupForm from "../components/signup/signupform"
const Signup = () => {
    return(
        <SignupLayout>
            <SignupForm />
        </SignupLayout>
    )
}

export default Signup;

const SignupLayout = styled.div`
  width : 100%;
  padding : 100px;
  height : 100vh;
  display : flex;
  justify-content : center;
  align-items : center;
`