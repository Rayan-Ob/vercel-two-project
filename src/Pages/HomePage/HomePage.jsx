import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Services from '../../Components/Services/Services'
import ServiceItem from '../../Components/ServiceItem/ServiceItem'
import ExploreSection from '../../Components/ExploreSection/ExploreSection'
import ExploreItem from '../../Components/ExploreItem/ExploreItem'
import TrendyCard from '../../Components/TrendyCard/TrendyCard'


// photos
import HeroPage1 from "../../assets/images/HeroPage1.png"
import citiesPhoto from "../../assets/images/ExploreCities.jpg"
import nature from "../../assets/images/nature.webp"



function HomePage() {
  return (
    <div>

      <Hero background={HeroPage1} title="No matter where you’re going to, 
        we’ll take you there" classTitle="title-gray">
      </Hero>

      {/* Services section */}
      <Services desc="CATEGORY" title="We Offer Best Services" gridService="grid-services-category" >
        {serviceCards.map((element, index) => {
          return (
            <ServiceItem key={index} image={`/src/assets/images/${element.img}`} service={element.service} description={element.desc} />
          )
        })}
      </Services>

      {/* Explore Section */}
      <ExploreSection>
        <ExploreItem background={nature} explore="Explore Nature" />
        <ExploreItem background={citiesPhoto} explore="Explore Cities" />
      </ExploreSection>


      {/* Trendy Section */}
      <Services desc="TRENDY" title="Our Trending Tour Packages" gridService="grid-services-trendy">
        {trendyCards.map((element, index) => {
          return (
            <TrendyCard key={index} image={`/src/assets/images/${element.image}`} flag={`/src/assets/images/${element.flag}`} days={element.daysNumber} people={element.people}
              rate={element.rate} country={element.country} description={element.desc} />
          )
        })}
      </Services>


    </div>




  )
}

export default HomePage