import React from "react";
import Button from '@atlaskit/button';
import styled from "styled-components";

const ButtonStyled = styled(Button)`
margin-top: 5px;
text-align: left;
justify-content: left;
`;

export default function Todo() {
    return (
        <>
            <ButtonStyled shouldFitContainer>Item1</ButtonStyled>
        </>
    );
}