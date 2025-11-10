'use client'
import styled from "@emotion/styled"
import color from "@/app/packages/design-system/src/color"
import { useState } from "react"


const CreateForm = () => {

    const [chose,setchose] = useState(false);
    const [yes,setyes] = useState(false);
    const [no,setno] = useState(true);

    function Change(){
        setchose(!chose);
        setyes(!yes);
        setno(!no);
    }

    return(
        <CreateLayout>
            <IconBox>
                <img src="/svg/close.svg" />
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
                <PublicButton onClick={() => {Change()}}>
                    <ChoseTextLayout>
                    <ChsoeTextBox>
                    <ChoseText chose={yes}>예</ChoseText>
                    </ChsoeTextBox>

                    <ChsoeTextBox>
                    <ChoseText chose={no}>아니오</ChoseText>
                    </ChsoeTextBox>
                    </ChoseTextLayout>
                    <ChoseBox chose={chose} />
                </PublicButton>
            </TitleBox>
            <div>
                
            </div>
            <div>
                
            </div>
        </CreateLayout>
    )

}

export default CreateForm;

const CreateLayout = styled.div`
    width :64%;
    height : 80%;
    border : 1px solid ${color.secondery};
    border-radius : 12px;
    padding : 24px 24px;
    display : flex;
    flex-direction : column;
    align-items : center;
    gap : 24px;
`

const IconBox = styled.div`
    width : 100%;
    display : flex;
    justify-content : end;
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
    transition : all 0.3s ease;
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
    transition : all 0.3s ease;
    position : relative;
    display : flex;

`

const ChoseBox = styled.div<{ chose: boolean }>`
    width : 50%;
    height : 40px;
    background-color : ${color.primary};
    position : absolute;
    transition : all 0.3s ease;
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