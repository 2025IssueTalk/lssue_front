'use client'
import styled from "@emotion/styled"

export default function Home() {
  return (
    <HomeLayout>
      <div>
        <SubTitle>여러 주제로 같이 이야기 나누는</SubTitle>
        <Title>AI와 함께하는 건전한 토론</Title>
        <Button>토론하기</Button>
      </div>
      <div>
         <Logo src="/svg/logo.svg"/>
      </div>
    </HomeLayout>
  );
}

const HomeLayout = styled.div`
  width : 100%;
  padding : 100px;
  height : 100vh;
  display : flex;
  flex-direction : row;
  align-items : center;
  justify-content : center;
  gap : 12vw;
`

const SubTitle = styled.p`
  font-family : G_middle;
  color : #FF0055;
  font-size : 1vw;
`

const Title = styled.p`
  font-family : G_middle;
  color : black;
  font-size : 4vw;
`

const Logo = styled.img`
    width : 52vh;
    height : auto;
`

const Button = styled.button`
  width : 10vw;
  height : 4vh;
  border-radius : 50px;
  border : none;
  background-color : #FF0055;
  color : white;
  font-family : G_middle;
  font-size : 0.8vw;
  cursor : pointer;
  transition : all 0.3s ease;
  &:hover {
    background-color : #ff6e9eff;
  }
`