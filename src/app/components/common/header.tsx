'use client'
import styled from "@emotion/styled"
import { useRouter } from "next/navigation"
const Header = () => {

    const router = useRouter();
    return(
    <HeaderLayout>
        <Logo src="/svg/logo.svg" onClick={() => {router.push("/")}}/>

        <Routers>
            <RouterText onClick={() => {router.push("/discussion")} }>토론하기</RouterText>
            <RouterText>오늘의 주제</RouterText>
        </Routers>

        <LoginForm>
            <RouterText>로그인</RouterText>
            <RouterText>회원가입</RouterText>
        </LoginForm>
    </HeaderLayout>

    )
}

export default Header;

const HeaderLayout = styled.div`
    width : 100%;
    border-bottom : 1px solid #c5c5c5ff;
    height : 8vh;
    display : flex;
    justify-content : space-between;
    align-items : center;
    flex-direction : row;
    padding : 0px 100px;
    position : fixed;
    background-color : white;

`
const Logo = styled.img`
    width : 10vh;
    height : auto;
`

const Routers = styled.div`
    display : flex;
    gap : 10px;
`

const RouterText = styled.p`
    font-family : G_middle;
    font-size : 14px;
    cursor : pointer;
`

const LoginForm = styled.div`
    display : flex;
    gap : 10px;
`