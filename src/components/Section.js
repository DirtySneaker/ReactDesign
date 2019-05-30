import React from 'react'
import styled from 'styled-Components'
import Wave from './Wave';

const SectionGroup = styled.div`
    background: url(${props => props.image});
    height: 750px;
    background-size: cover;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;

    @media (max-width:640px) {
        height: 820px;
    }
`
const SectionLogo = styled.img `
    align-self: end;
    width: 120px;
    margin: 0 auto;
`
const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    grid-template-rows: auto 100%;
    margin: 0 40px;
    grid-gap: 20px;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`
const SectionTitle = styled.h3`
    color: #FFF;
    font-size: 50px;
    margin: 0;
    line-height: 1.2;

    @media (max-width: 720px) {
        font-size: 32px;
    }
`
const SectionText = styled.p`
    color: #FFF;
`
const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`
const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg);
`

const Section = props => (
    <SectionGroup image={props.image}>
        <WaveTop><Wave /></WaveTop>
        <WaveBottom><Wave /></WaveBottom>
        <SectionLogo src={props.logo} />
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>

    </SectionGroup>
)

export default Section