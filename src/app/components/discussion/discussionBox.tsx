'use client'
import styled from "@emotion/styled"
import color from "@/app/packages/design-system/src/color";
import PasswordInputModal from "./PasswordInputModal";
import { useState } from "react"

const DiscussionBox = () => {

    const [isopen,setisopen] = useState(false);

    return(
        <DiscussionBoxLayout>
            <DiscussionInfomationBox>
                <Infomation>
                    <TitleInfomation>
                    <Title>윤석열 탄핵</Title>
                    <HashTag>#윤석열 탄핵</HashTag>
                    </TitleInfomation>
                    <div>
                    <Publics>공개방</Publics>
                    </div>
                </Infomation>

            </DiscussionInfomationBox>

            <EnterButton onClick={() => {setisopen(true)}}>
                <EnterText>입장</EnterText>
                <PeopleCount>(2/4)</PeopleCount>

            </EnterButton>
            



             <PasswordInputModal isopen={isopen} setisopen={setisopen} />

        </DiscussionBoxLayout>
    )
    

}

export default DiscussionBox;

const DiscussionBoxLayout = styled.div`
    width : 100%;
    height : 28vh;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    transition : all 0.3s ease-in-out;
`

const DiscussionInfomationBox = styled.div`
    border : 1px solid ${color.secondery};
    border-radius : 10px;
    height : 100%;
    width : 75%;
    overflow : hidden;
` 

const EnterButton = styled.button`
    background-color : ${color.primary};
    width : 15%;
    border : none;
    border-radius : 10px;
`

const Infomation = styled.div`
    width : 100%;
    background-color : ${color.primary};
    height : 40%;
    padding : 24px 36px;
    display : flex;
    flex-direction : column;
    gap : 12px;
`

const Title = styled.p`
    color : white;
    font-family : G_middle;
    font-size : 3vh;
`

const HashTag = styled.p`
    font-family : G_middle;
    color : white;
    font-size : 1.5vh;
`


const TitleInfomation = styled.div`
    display : flex;
    align-items : end;
    gap : 1vw;
`

const Publics = styled.p`
    font-family : G_middle;
    color : white;
    font-size : 2vh;
`

const EnterText = styled.p`
    font-family : G_middle;
    color : white;
    font-size : 2vh;
`

const PeopleCount = styled.p`
    font-family : G_middle;
    color : white;
    font-size : 1.6vh;
` 