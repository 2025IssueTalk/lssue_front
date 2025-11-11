'use client'
import styled from "@emotion/styled"
import color from "@/app/packages/design-system/src/color";

const LoginForm = () => {
    return(
    <LoginFormLayout>
        <TextArea>
        <Title>로그인</Title>
        <SubTitle>로그인 후 이슈톡을 이용하세요</SubTitle>
        </TextArea>
        <TitleBox>
            <Title>닉네임</Title>
            <InputFild type="text" placeholder="닉네임을 입력해주세요"/>
        </TitleBox>
        <TitleBox>
            <Title>비밀번호</Title>
            <InputFild type="number" placeholder="비밀번호를 입력해주세요"/>
        </TitleBox>

        <SubmitButton>
                <SubmitButtonText>로그인</SubmitButtonText>
            </SubmitButton>
    </LoginFormLayout>
    )

}

export default LoginForm;

const LoginFormLayout = styled.div`
    width : 50%;
    height : 60%;
    border : 1px solid #CACACA;
    border-radius : 30px;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    gap : 30px;
`

const Title = styled.p`
    color : ${color.primary};
    font-family : G_middle;
    font-size : 2.4vh;
`
const SubTitle = styled.p`
    color : ${color.thriedy};
    font-family : G_middle;
    font-size : 2vh;
`

const TextArea = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`

const TitleBox = styled.div`
    width : 70%;
    display : flex;
    flex-direction : column;
    gap : 10px;
`
const InputFild = styled.input`
    width : 100%;
    background-color : white;
    border : 1px solid #586D69;
    padding : 6px 12px;
    font-family : G_middle;
    font-size : 1vw;
    border-radius : 24px;
    color : #8A8A8A;

    ::placeholder{
        font-family : G_middle;
        font-size : 1vw;
        color : #8A8A8A;
    }

    outline : none;
`

const SubmitButton = styled.button`
    width : 12%;
    height : 30px;
    border : none;
    background-color : ${color.primary};
    border-radius : 30px;

    transition : all 0.3s ease-in-out;

    &:hover {
        background-color : ${color.secondery};
    }

`

const SubmitButtonText = styled.p`
    color : white;
    font-family : G_middle; 
    font-size : 1vw;
    padding : 4px;
`