'use client'
import styled from "@emotion/styled"
import color from "@/app/packages/design-system/src/color"
import { useState } from "react"
import { useRouter } from "next/navigation"


const CreateForm = () => {
    const router = useRouter();
    const [chose,setchose] = useState(false);
    const [yes,setyes] = useState(false);
    const [no,setno] = useState(true);

    function ChangeYes(){
        setchose(false);
        setyes(false);
        setno(true);
    }

    function ChangeNo(){
        setchose(true);
        setyes(true);
        setno(false);
    }

    return(
        <CreateLayout>
            <IconBox>
                <img src="/svg/close.svg" onClick={() => {router.back()}} />
            </IconBox>
            <TitleBox>
                <Title>방제목</Title>
                <InputFild type="text" placeholder="방제목을 입력해주세요"/>
            </TitleBox>
            <TitleBox>
                <Title>참여 인원수</Title>
                <Buttons>
                    <ChoseButtton>1:1</ChoseButtton>
                    <ChoseButtton>2:2</ChoseButtton>
                    <ChoseButtton>3:3</ChoseButtton>
                </Buttons>
            </TitleBox>
            <TitleBox>
                <Title>공개 설정</Title>
                <PublicButton>
                    <ChoseTextLayout>
                    <ChsoeTextBox onClick={() => {ChangeYes()}}>
                    <ChoseText chose={yes}>예</ChoseText>
                    </ChsoeTextBox>

                    <ChsoeTextBox onClick={() => {ChangeNo()}}>
                    <ChoseText chose={no}>아니오</ChoseText>
                    </ChsoeTextBox>
                    </ChoseTextLayout>
                    <ChoseBox chose={chose} />
                </PublicButton>
            </TitleBox>
            <PasswordBox visible={no}>
                <Title>비밀번호</Title>
                <InputFild type="number" placeholder="비밀번호를 입력해주세요"/>
            </PasswordBox>
            <TitleBox>
                <Title>토론주제</Title>
                <InputFild type="text" placeholder="토론주제를 입력해주세요"/>
            </TitleBox>

            <SubmitButton>
                <SubmitButtonText>방생성</SubmitButtonText>
            </SubmitButton>
        </CreateLayout>
    )

}

export default CreateForm;

const CreateLayout = styled.div`
    width :64%;
    
    border : 1px solid ${color.secondery};
    border-radius : 12px;
    padding : 24px 24px;
    display : flex;
    flex-direction : column;
    align-items : center;
    gap : 36px;

    transition : all 0.3s ease-in-out;
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

const PasswordBox = styled(TitleBox)<{ visible: boolean }>`
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    max-height: ${({ visible }) => (visible ? "100px" : "0")};
    overflow: hidden;
    transition: all 0.4s ease-in-out;
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

const Buttons = styled.div`
    width : 100%;
    display :flex;
    flex-direction : row;
    gap : 12px;
`

const ChoseButtton = styled.button`
    width : 100%;
    height : 40px;
    border :1.3px solid  ${color.secondery};
    background-color : white;
    border-radius : 12px;
    font-family : G_middle;
    font-size : 1vw;
    color : black;
    transition : all 0.3s ease-in-out;
    &:hover  {
        background-color :${color.secondery};
        color : white;
    }
`

const PublicButton = styled.div`

    width : 14%;
    height : 40px;
    border :1.3px solid  ${color.primary};
    border-radius : 15px;
    overflow : hidden;
    transition : all 0.3s ease-in-out;
    position : relative;
    display : flex;

`

const ChoseBox = styled.div<{ chose: boolean }>`
    width : 50%;
    height : 40px;
    background-color : ${color.primary};
    position : absolute;
    transition : all 0.3s ease-in-out;
    left: ${({ chose }) => (chose ? "50%" : "0%")};
    z-index : 0;
`

const ChoseTextLayout = styled.div`
    width : 100%;
    display : flex;
    justify-content : space-between;
    z-index : 100;
    align-items : center;
    padding : 4px 0px;
    display : flex;
    flex-direction : row;
`

const ChsoeTextBox = styled.div`
    width : 50%;
    height : 100%;
    display : flex;
    align-items : center;
    justify-content : center;
`

const ChoseText = styled.p<{ chose: boolean }>`

    font-family : G_middle;
    font-size : 0.9vw;
    color : ${({ chose }) => (chose ? `${color.primary}` : "white")};
    cursor : pointer;

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