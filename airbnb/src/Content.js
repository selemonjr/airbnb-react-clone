import { City } from "./City";
import { Places } from "./Places";
import { Discover } from "./Discover";
const Content = () => {
    return (
        <div>
            <div className="contentEl">
               <div className="mainContent">
                   <h1 className="explore">Explore Nearby</h1>
                   <div className="places">
                       <div className="boxes">
                           {City.map((places) => {
                               const {imgEl,city_name,city_time} = places;
                               return (
                                   <>
                                <div className="imageImg">
                                <img src={imgEl} alt="" />
                            </div>
                            <div className="city">
                                <div className="cityName"><p>{city_name}</p></div>
                                <div className="cityTime"><p>{city_time}</p></div>
                            </div>
                            </>
                               )
                           })}
                       </div>
                   </div>
               </div>
            </div>
            <div className="live">
                   <div className="liveTitle">
                       <h1>Live anywhere</h1>
                       <div className="livePlaces">
                           <div className="box">
                               {Places.map((place) => {
                                   const {liveImg,liveName} = place;
                                   return (
                                       <>
                                  <div className="liveListings">
                                  <img src={liveImg} alt="" />
                               <div className="liveName"><h3>{liveName}</h3></div>
                                  </div>
                                       </>
                                   )
                               })}
                           </div>
                          
                       </div>
                   </div>
               </div>
               <div className="discover">
                   <div className="discoverTitle">
                       <h1>Discover things to do</h1>
                   </div>
                   <div className="discoverEl">
                       <div className="dark_host">
                       <div className="hostImg">
                           <div className="mainContentLink">
                              {Discover.map((discover) => {
                                  const {discoverImg,experiences,discoverActivity} = discover;
                                  return (
                                      <>
                              <div className="contentLinkEl">
                              <img src={discoverImg} alt="" />
                                <h4 className="experiences">{experiences}</h4>
                               <p className="discoverActivity">{discoverActivity}</p>
                              </div>
                                      </>
                                  )
                              })}
                           </div>
                       </div>
                    </div>
                    </div>
                    </div>
                    </div>
    )
}

export default Content
