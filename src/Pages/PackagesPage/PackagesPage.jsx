import BoxPackage from "../../Components/BoxPackage/BoxPackage"
import Hero from "../../Components/Hero/Hero"
import "./PackagePageStyle.css"

import heroimg from "../../assets/images/packagePage.png"

const PackagesPage = () => {
    return (
        <div>
            <Hero background={heroimg} title="Travel With Us" classTitle="title-white"></Hero>

            <div className="boxs-package-container">
                <BoxPackage image={`/src/assets/images/maladive.png`} date="27, September 2022" people="30+ People" country="Maldives" desc="Qui tempore voluptate qui quia commodi rem praesentium alias et." price="3000 $" rate="5.0" />
                <BoxPackage image={`/src/assets/images/swith.png`} date="13, October 2023" people="120+ People" country="Switzerland" desc="Qui tempore voluptate qui quia commodi rem praesentium alias et." price="1290 $" rate="4.9" />
                <BoxPackage image={`/src/assets/images/berlin.png`} date="2, November 2022" people="139+ People" country="Berlin" desc="Qui tempore voluptate qui quia commodi rem praesentium alias et." price="2790 $" rate="5.0" />
                <BoxPackage image={`/src/assets/images/torronto.png`} date="14, December 2022" people="50+ People" country="Torronto" desc="Qui tempore voluptate qui quia commodi rem praesentium alias et." price="1110 $" rate="4.0" />
                <BoxPackage image={`/src/assets/images/baku.png`} date="20, September 2022" people="80+ People" country="Baku" desc="Qui tempore voluptate qui quia commodi rem praesentium alias et." price="1220 $" rate="4.5" />
                <BoxPackage image={`/src/assets/images/chiense.png`} date="27, August 2022" people="100+ People" country="Chinese" desc="Qui tempore voluptate qui quia commodi rem praesentium alias et." price="2500 $" rate="5.0" />
            </div>
        </div>
    )
}

export default PackagesPage