'use client'
import styled from "@emotion/styled"
import TopicCard from "../components/topic/topiccard"
import color from "../packages/design-system/src/color"

const Topic = () => {
    return(
        <TopicLayout>
          <TitleBox>
            <Title>오늘의 주제추천</Title>
          </TitleBox>


        <CardBox>
          <TopicCard />
          <TopicCard />
          <TopicCard />
        </CardBox>
        </TopicLayout>
    )

}

export default Topic;

const TopicLayout = styled.div`
  width : 100%;
  height : 100vh;
  padding : 100px;
  display : flex;
  flex-direction : column;
  justify-content : space-between;
  align-items : center;
` 

const CardBox = styled.div`
  width : 100%;
  height : 90%;
  display : flex;
  flex-direction : row;
  justify-content : space-between;
  align-items : center;
`

const TitleBox = styled.div`
  width : 100%;
  height : 10%:
`

const Title = styled.div`
    font-family : G_middle; 
    font-size : 1.2vw;
    padding : 4px;
    color : ${color.primary};
`
