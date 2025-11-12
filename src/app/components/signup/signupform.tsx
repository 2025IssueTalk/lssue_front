'use client'
import styled from "@emotion/styled"
import color from "@/app/packages/design-system/src/color";
import { useState } from "react";

const SignupForm = () => {

    const [turn,isturn] = useState(false);
    const [isopen ,setisopen] = useState(false);

    const [emailDomain, setEmailDomain] = useState("직접입력");
    const [isDirectInput, setIsDirectInput] = useState(true);
    
    function MailOpen(){
        isturn(!turn);
        setisopen(!isopen);
    }



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
            {isDirectInput ? (
                <MailChoseInput type="text" placeholder="직접입력" />
            ) :(
                <MailChoseButton>{emailDomain}</MailChoseButton> 
            )}
            <DropArrow turn={turn} onClick={() => {MailOpen()}}>
                <img src="/svg/droparrow.svg" />
            </DropArrow>
            <MailBar isoepn={isopen}>
                <MailChose onClick={() => {
                    setEmailDomain("")
                    setIsDirectInput(true)
                }}>
                <EmailText>직접입력</EmailText>
                </MailChose>
                <MailChose onClick={() => {
                    setEmailDomain("gmail.com")
                    setIsDirectInput(false)
                }}>
                <EmailText>gmail.com</EmailText>
                </MailChose>
                <MailChose onClick={() => {
                    setEmailDomain("naver.com")
                    setIsDirectInput(false)
                }}>
                <EmailText>naver.com</EmailText>
                </MailChose>
                <MailChose onClick={() => {
                    setEmailDomain("hanmail.net")
                    setIsDirectInput(false)
                }}>
                <EmailText>hanmail.net</EmailText>
                </MailChose>
                <NoUnderBarMailChose onClick={() => {
                    setEmailDomain("nate.com")
                    setIsDirectInput(false)
                }}>
                <EmailText>nate.com</EmailText>
                </NoUnderBarMailChose>
       
            </MailBar>
            </EmialBoxs>

            <EmailButton>
                <SubmitButtonText>인증번호 발송</SubmitButtonText>
            </EmailButton>

            </EmailArea>
        </TitleBox>
        <ButtonArea>
        <SubmitButton>
                <SubmitButtonText>회원가입</SubmitButtonText>
        </SubmitButton>
        <SubmitButtons>
                <SubmitButtonTexts>가입취소</SubmitButtonTexts>
        </SubmitButtons>
        </ButtonArea>
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

const SubmitButtons = styled.button`
    width : 18%;
    height : 36px;
    border : none;
    background-color : white;
    border-radius : 30px;
    border : 1px solid ${color.primary};

    transition : all 0.3s ease-in-out;

    &:hover {
        background-color : #e4e4e4ff;
    }

    outline : none;

`

const SubmitButtonTexts = styled.p`
    color : ${color.primary};
    font-family : G_middle; 
    font-size : 1vw;
    padding : 4px;
`
const EmailText = styled.p`
    color : black;
    font-family : G_middle; 
    font-size : 1vw;
    cursor : pointer;
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
    justify-content : center;
    align-items : center;
    position : relative;
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

const MailChoseInput = styled.input`
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
    display : flex;
    justify-content : center;
    align-items : center;
    text-align : center;
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

const MailBar = styled.div<{isoepn : boolean}>`
    position : absolute;
    width : 100%;
    padding : 0px 16px;
    background-color : #ffffffff;
    top:100%;
    border : 1px solid  ${color.primary};
    margin-top : 4px;
    border-radius : 12px;
    display : flex;
    flex-direction : column;
    justify-content : start;
    align-items : center;
    overflow : hidden;
    visibility : ${({ isoepn }) => (isoepn ? "visible" : "hidden")};
    height : max;
    max-height : ${({ isoepn }) => (isoepn ? "200px" : "0px")};
    transition : all 0.3s ease-in-out;
    
`

const MailChose = styled.div`
    width : 200%;
    border-bottom : 1px solid ${color.secondery};
    border-none;
    height : auto;
    padding : 4px;
    display : flex;
    justify-content : center;
    align-items : center;
`

const NoUnderBarMailChose = styled.div`
    width : 200%;
    border-none;
    height : auto;
    padding : 4px;
    display : flex;
    justify-content : center;
    align-items : center;
`

const DropArrow = styled.div<{ turn: boolean }>`
    width : 20%;
    height : 100%;
    padding : 8px;
    object-fit: contain;
    transform : ${({ turn }) => (turn ? "rotate(180deg)" : "rotate(0deg)")};
    transition : all 0.3s ease-in-out;
    display : flex;
    justify-content : center;
    align-items : center;
    
`

        
const ButtonArea = styled.div`
    width : 100%;
    display : flex;
    flex-direction : 36px;
    align-items : center;
    justify-content : center;
    gap : 10%;
    
`