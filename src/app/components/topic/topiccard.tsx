'use client'
import styled from "@emotion/styled"
import color from "@/app/packages/design-system/src/color";

const TopicCard = () => {

    return(
        <TopicCardLayout>
            <ImgBox>
                <Img src="/yoon.jpeg" />
            </ImgBox>
            <ImgHidden />

            <TitleBox>
            <Title>윤석열 탄핵</Title>
            </TitleBox>
            
        </TopicCardLayout>

    )

}
export default TopicCard;

const TopicCardLayout = styled.div`
    width : 26%;
    height : 100%;
    border : 1px solid ${color.primary};
    border-radius : 1vw;
    overflow : hidden;
    display : flex;
    justify-content : center;
    align-items : start;
    flex-direction : column;
`

const TitleBox = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    jusify-content : center;
    align-items : end;
    padding : 4px;
`

const Title = styled.p`
    font-family : G_middle; 
    font-size : 1.2vw;
    padding : 4px;
    color : ${color.primary};
`

const ImgBox = styled.div`
    width : 100%;
    height : 80%;
    background-color : #434343;

`

const Img = styled.img`
    object-fit: cover;
    height : 100%;
    width : 100%;
`

const ImgHidden = styled.div`
    width : 200%;
    height : 20%;
    background-color : #ffffffff;
    transform : rotate(170deg);
    position : relative;
    top: -10%;
    left : -2%;
`