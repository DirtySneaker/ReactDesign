import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup"> 
       <h1>Hi People From Mars</h1>
       <p>Welcome to your new & Awesome Gatsby site. Welcome to your new & Awesome Gatsby site. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.</p>
        <div className="ButtonStyle1">
         <Link to="/page-2/">Go to page 2</Link>
          <div className="Logos">
            <img href="#" className="ToolsLogo" src={require('..//images/logo-sketch.png')} width="50px;" />
            <img href="#" className="ToolsLogo" src={require('..//images/logo-figma.png')} width="50px;" />
            <img href="#" className="ToolsLogo" src={require('..//images/logo-framer.png')} width="50px;" />
            <img href="#" className="ToolsLogo" src={require('..//images/logo-studio.png')} width="50px;" />
            <img href="#" className="ToolsLogo" src={require('..//images/logo-react.png')} width="50px;" />
            <img href="#" className="ToolsLogo" src={require('..//images/logo-swift.png')} width="50px;" />
          </div>
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>Tons more courses coming soon!</h2>
        <div className="cardGroup">
          <Card 
          title="React for Designers"
          text="12+ Courses"
          image={require('../images/wallpaper.jpg')}/>
          <Card 
          title="Designer for People"
          text="12+ Courses"
          image={require('../images/wallpaper2.jpg')}/>
          <Card 
          title="People for Dogs"
          text="12+ Courses"
          image={require('../images/wallpaper3.jpg')}/>
          <Card 
          title="Dogs for President"
          text="12+ Courses"
          image={require('../images/wallpaper4.jpg')}/>
        </div>
    </div>
    <Section 
    image={require('../images/wallpaper2.jpg')}
    logo={require('../images/logo-react.png')}
    title="React For Designers"
    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
    />
    {staticdata.cells.map(cell => (
      <Cell 
      title={cell.title} 
      image={cell.image}
      />
    ))}

  </div>
)

export default IndexPage