'use client'
import styled from "@emotion/styled"
import { useRouter , usePathname } from "next/navigation"

const Discussion = () => {

    const router = useRouter();
    const path = usePathname();
    return(
        <DiscussionLayout>
            <ButtonBox>
            <RoomCreateButton onClick={() => {router.push(`${path}/create`)}}>방 생성하기</RoomCreateButton>
            </ButtonBox>

        </DiscussionLayout>
    )

}

export default Discussion;

const DiscussionLayout = styled.div`
  width : 100%;
  padding : 100px;
  height : 100vh;
  display : flex;
  flex-direction : row;
  align-items : center;
  justify-content : center;
  gap : 12vw;
` 

const RoomCreateButton = styled.button`
  background-color : white;
  color : #FF0055;
  border : 1px solid #FF0055;
  padding : 12px 36px;
  border-radius : 25px; 
`

const ButtonBox = styled.div`
  width : 100%;
  height : 100%;

`