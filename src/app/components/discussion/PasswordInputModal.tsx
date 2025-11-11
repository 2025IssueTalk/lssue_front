'use client'
import color from "@/app/packages/design-system/src/color";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

type PasswordInputs = {
    isopen : boolean,
    setisopen : (isopen : boolean) => void;
}

const PasswordInputModal =  ( {isopen,setisopen} : PasswordInputs ) => {

    return(
        <PasswordInputModalLayout visible={isopen}>
            <PasswordInput>
                <IconBox>
                <img src="/svg/close.svg" onClick={() => {setisopen(!isopen)}} />
                </IconBox>

                <TitleBox>
                    <Title>비밀번호</Title>
                    <InputFild type="number" placeholder="비밀번호를 입력해주세요"/>
                </TitleBox>

            <SubmitButton>
                <SubmitButtonText>입장하기</SubmitButtonText>
            </SubmitButton>
            </PasswordInput>
        </PasswordInputModalLayout>
    )
}

export default PasswordInputModal;

const PasswordInputModalLayout = styled.div<{ visible: boolean }>`
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    pointer-events: ${({ visible }) => (visible ? "auto" : "none")};
    position : fixed;
    top : 0;
    left : 0;
    background-color : #262b27a0;
    width : 100vw;
    height : 100vh;
    backdrop-filter: blur(2px);
    display : flex;
    align-items : center;
    justify-content : center;
    transition : all 0.3s ease-in-out;
`

const PasswordInput = styled.div`
    width : 60%;
    height : 20vh;
    background-color : white;
    border-radius : 15px;
    border : 1px solid ${color.secondery};
    display : flex;
    flex-direction : column;
    padding : 24px 44px;
    align-items : center;
    gap : 12px;
`

const IconBox = styled.div`
    width : 100%;
    display : flex;
    justify-content : end;
    cursor : pointer;
`

const TitleBox = styled.div`
    width : 90%;
    display : flex;
    flex-direction : column;
    gap : 10px;

`

const Title = styled.p`
    color : ${color.primary};
    font-family : G_middle;
    font-size : 1.3vw;
`

const InputFild = styled.input`
    width : 100%;
    background-color : white;
    border : none;
    border-bottom : 1px solid #8A8A8A;

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
    margin-top : 12px;
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