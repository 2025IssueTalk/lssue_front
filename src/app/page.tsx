'use client'
import styled from "@emotion/styled"
import color from "./packages/design-system/src/color";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  return (
    <HomeLayout>
      <div>
        <SubTitle>여러 주제로 같이 이야기 나누는</SubTitle>
        <Title>AI와 함께하는 건전한 토론</Title>
        <Button onClick={() => {router.push("/discussion")}}>토론하기</Button>
      </div>
      <div>
         <Logo src="/svg/logo.svg"/>
      </div>
    </HomeLayout>
  );
}

const HomeLayout = styled.div`
  width : 100%;
  padding : 10px;
  height : 100vh;
  display : flex;
  flex-direction : row;
  align-items : center;
  justify-content : center;
  gap : 12vw;
`

const SubTitle = styled.p`
  font-family : G_middle;
  color : ${color.primary};
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
  background-color : ${color.primary};
  color : white;
  font-family : G_middle;
  font-size : 0.8vw;
  cursor : pointer;
  transition : all 0.3s ease;
  &:hover {
    background-color : #516662ff;
  }
`