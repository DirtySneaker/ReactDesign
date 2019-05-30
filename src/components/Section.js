import React from 'react'
import styled from 'styledComponents'

const SectionGroup = styled.div`
    background: #000;
    height: 750px;
`
const SectionLogo = styled.img `
`
const SectionTiteGroup = styled.div`
`
const SectionTitle = styled.h3`
`
const SectionText = styled.p`
`

const Section = props => (
    <SectionGroup image={props.image}>
        <SectionLogo src={props.logo} />
        <SectionTiteGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTiteGroup>
    </SectionGroup>
)

export default Section