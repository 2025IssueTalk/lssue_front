'use client'
import styled from "@emotion/styled"
import color from "@/app/packages/design-system/src/color";

const SignupForm = () => {
    return(
    <SignupFormLayout>
        <TextArea>
        <Title>회원가입</Title>
        <SubTitle>토론의 장에 들어가려면 회원이 되어야해요</SubTitle>
        </TextArea>
        <TitleBox>
            <Title>닉네임</Title>
            <Inputs>
            <InputFild type="text" placeholder="닉네임을 입력해주세요"></InputFild>
            <CheckButton>중복확인</CheckButton>
            </Inputs>
        </TitleBox>
        
        <TitleBox>
            <Title>비밀번호</Title>
            <Inputs>
            <InputFild type="number" placeholder="비밀번호를 입력해주세요"></InputFild>
            </Inputs>
        </TitleBox>

        <TitleBox>
            <Title>비밀번호 확인</Title>
            <Inputs>
            <InputFild type="number" placeholder="비밀번호를 재입력해주세요"></InputFild>
            </Inputs>
        </TitleBox>

        <TitleBox>
            <Title>이메일 주소</Title>
            <EmailArea>
                
            <EmialBox>
            <EmailInputs type="text" placeholder="이메일을 입력해주세요" />
            </EmialBox>
            @
            <EmialBoxs>
            <MailChoseButton>직접입력</MailChoseButton> 
            </EmialBoxs>

            <EmailButton>
                <SubmitButtonText>인증번호 발송</SubmitButtonText>
            </EmailButton>

            </EmailArea>
        </TitleBox>

        <SubmitButton>
                <SubmitButtonText>로그인</SubmitButtonText>
        </SubmitButton>
    </SignupFormLayout>
    )

}

export default SignupForm;

const CheckButton = styled.button`
    width : 20%;
    height : 120%;
    border : none;
    background-color : ${color.primary};
    border-radius : 30px;
    color : white;
    font-family : G_middle;
    font-size : 1.4vh;
    transition : all 0.3s ease-in-out;

    &:hover {
        background-color : ${color.secondery};
    }

    outline : none;
`

const SignupFormLayout = styled.div`
    width : 50%;
    height : 100%;
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
    font-size : 2vh;
`
const SubTitle = styled.p`
    color : ${color.thriedy};
    font-family : G_middle;
    font-size : 1.6vh;
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

const Inputs = styled.div`

    width : 100%;
    background-color : white;
    border : 1px solid #586D69;
    padding : 8px 8px;
    font-family : G_middle;
    font-size : 1vw;
    border-radius : 30px;
    display : flex;
    justify-content : space-between;
    align-items : center;

`

const InputFild = styled.input`
    width : 70%;
    background-color : #ffffffff;
    border : none; 
    font-family : G_middle;
    font-size : 1vw;
    color : #8A8A8A;

    ::placeholder{
        font-family : G_middle;
        font-size : 1vw;
        color : #8A8A8A;
    }

    outline : none;
`

const SubmitButton = styled.button`
    width : 18%;
    height : 36px;
    border : none;
    background-color : ${color.primary};
    border-radius : 30px;

    transition : all 0.3s ease-in-out;

    &:hover {
        background-color : ${color.secondery};
    }

    outline : none;

`

const SubmitButtonText = styled.p`
    color : white;
    font-family : G_middle; 
    font-size : 1vw;
    padding : 4px;
`

const EmialBox = styled.div`
    width : 40%;
    background-color : white;
    border : 1px solid #586D69;
    padding : 8px 8px;
    font-family : G_middle;
    font-size : 1vw;
    border-radius : 30px;
    display : flex;
    justify-content : space-between;
    align-items : center;
    `

const EmialBoxs = styled.div`
    width : 28%;
    background-color : white;
    border : 1px solid #586D69;
    padding : 8px 8px;
    font-family : G_middle;
    font-size : 1vw;
    border-radius : 30px;
    display : flex;
    justify-content : space-between;
    align-items : center;
    `

const EmailInputs = styled.input`
    width : 100%;
    background-color : #ffffffff;
    border : none; 
    font-family : G_middle;
    font-size : 1vw;
    color : #8A8A8A;

    ::placeholder{
        font-family : G_middle;
        font-size : 1vw;
        color : #8A8A8A;
    }

    outline : none;
`

const MailChoseButton = styled.button`
    width : 100%;
    background-color : #ffffffff;
    border : none; 
    font-family : G_middle;
    font-size : 1vw;
    color : #8A8A8A;

    ::placeholder{
        font-family : G_middle;
        font-size : 1vw;
        color : #8A8A8A;
    }

    outline : none;
`



const EmailArea = styled.div`
    display : flex;
    flex-direction : row;
    justify-content: space-between;
    align-items : center;
`

const EmailButton = styled.button`
    width : 24%;
    height : 100%;
    border : none;
    background-color : ${color.primary};
    border-radius : 30px;

    transition : all 0.3s ease-in-out;

    &:hover {
        background-color : ${color.secondery};
    }

    outline : none;
    `