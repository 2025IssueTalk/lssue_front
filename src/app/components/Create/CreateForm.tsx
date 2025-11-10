'use client'
import styled from "@emotion/styled"
import color from "@/app/packages/design-system/src/color"


const CreateForm = () => {
    return(
        <CreateLayout>
            <img src="/svg/close.svg" />
        </CreateLayout>
    )

}

export default CreateForm;

const CreateLayout = styled.div`
    width :70%;
    height : 80%;
    border : 1px solid ${color.secondery};
    border-radius : 15px;
    padding : 24px 36px;
`