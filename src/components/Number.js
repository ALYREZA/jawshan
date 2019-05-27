import React from "react"
import styled from "@emotion/styled/macro"
import persianJs from "persianjs";
const Icon = styled.span `
    
`;

const Number = ({cnt}) => (
    <Icon cnt={cnt}>
        <span>&#xFD3F;</span>
        {persianJs(cnt + 1)
            .englishNumber()
            .toString()}
        <span>&#xFD3E;</span>
    </Icon>
);

export default Number;