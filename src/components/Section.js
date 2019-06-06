import React from 'react'
import styled from 'styled-components'
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
        height: 750px;
    }
`
const SectionLogo = styled.img `
    align-self: end;
    width: 120px;
    margin: 0 auto;
`
const SectionTitleGroup = styled.div`
    max-width: 700px;
    display: grid;
    grid-template-columns: 300px auto;
    grid-template-rows: auto 100%;
    margin: 10px auto;
    grid-gap: 20px;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
        max-width: 90%;
        text-align: center;
        margin: 20px auto;
        grid-gap: 0px;
    }
`
const SectionTitle = styled.h3`
    color: white;
    font-size: 50px;
    margin: 10px;
    line-height: 1.1;

    @media (max-width: 720px) {
        font-size: 32px;
    }
`
const SectionText = styled.p`
    color: white;
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