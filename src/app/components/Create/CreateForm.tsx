'use client'
import styled from "@emotion/styled"
import color from "@/app/packages/design-system/src/color"


const CreateForm = () => {
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

const PublicOption = styled.div`
`