'use client'
import styled from "@emotion/styled"
import { useRouter , usePathname } from "next/navigation"
import color from "../packages/design-system/src/color"
import DiscussionBox from "../components/discussion/discussionBox"

const Discussion = () => {

    const router = useRouter();
    const path = usePathname();

    return(
        <DiscussionLayout>
            <ButtonBox>
            <RoomCreateButton onClick={() => {router.push(`${path}/create`)}}>방 생성</RoomCreateButton>
            </ButtonBox>

            <DiscussionBox />
            <DiscussionBox />
            <DiscussionBox />
            <DiscussionBox />

        </DiscussionLayout>
    )

}

export default Discussion;

const DiscussionLayout = styled.div`
  width : 100%;
  padding : 100px;
  height : max;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : start;
  gap : 20px;
` 

const RoomCreateButton = styled.button`
  background-color : white;
  color : ${color.primary};
  border : 1px solid ${color.primary};
  padding : 12px 36px;
  border-radius : 15px; 
  font-family : G_middle;
`

const ButtonBox = styled.div`
  width : 100%;
`