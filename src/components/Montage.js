import React from 'react'

const Montage = ({montageTitle, alt, imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix, imgSeven, imgEight, imgNine, imgTen, imgEleven, imgTwelve, imgThirteen, imgFourteen, imgFifteen}) => (
        <header className="half mask">
          <div className="montageDull">
            <span className="montageDesc">
              <h5>{montageTitle}</h5>
            </span>
          </div>
          <div className="montage">
              <div>
                <img src={imgOne} alt={alt} />
                <img src={imgNine} alt={alt} />
                <img src={imgTwo} alt={alt} />
                <img src={imgTen} alt={alt} />
                <img src={imgThree} alt={alt} />
                <img src={imgEleven} alt={alt} />
                <img src={imgFour} alt={alt} />
              </div>

              <div>
                <img src={imgTwo} alt={alt} />
                <img src={imgTen} alt={alt} />
                <img src={imgThree} alt={alt} />
                <img src={imgEleven} alt={alt} />
                <img src={imgFour} alt={alt} />
                <img src={imgTwelve} alt={alt} />
                <img src={imgFive} alt={alt} />
              </div>

              <div>
                <img src={imgThree} alt={alt} />
                <img src={imgEleven} alt={alt} />
                <img src={imgFour} alt={alt} />
                <img src={imgTwelve} alt={alt} />
                <img src={imgFive} alt={alt} />
                <img src={imgThirteen} alt={alt} />
                <img src={imgSix} alt={alt} />
              </div>

              <div>
                <img src={imgFour} alt={alt} />
                <img src={imgTwelve} alt={alt} />
                <img src={imgFive} alt={alt} />
                <img src={imgThirteen} alt={alt} />
                <img src={imgSix} alt={alt} />
                <img src={imgFourteen} alt={alt} />
                <img src={imgSeven} alt={alt} />
              </div>

              <div>
                <img src={imgFive} alt={alt} />
                <img src={imgThirteen} alt={alt} />
                <img src={imgSix} alt={alt} />
                <img src={imgFourteen} alt={alt} />
                <img src={imgSeven} alt={alt} />
                <img src={imgFifteen} alt={alt} />
                <img src={imgEight} alt={alt} />
              </div>

              <div>
                <img src={imgSix} alt={alt} />
                <img src={imgFourteen} alt={alt} />
                <img src={imgSeven} alt={alt} />
                <img src={imgFifteen} alt={alt} />
                <img src={imgEight} alt={alt} />
                <img src={imgOne} alt={alt} />
                <img src={imgNine} alt={alt} />
              </div>

              <div>
                <img src={imgSeven} alt={alt} />
                <img src={imgFifteen} alt={alt} />
                <img src={imgEight} alt={alt} />
                <img src={imgOne} alt={alt} />
                <img src={imgNine} alt={alt} />
                <img src={imgTwo} alt={alt} />
                <img src={imgTen} alt={alt} />
              </div>

              <div>
                <img src={imgEight} alt="" />
                <img src={imgOne} alt="" />
                <img src={imgNine} alt="" />
                <img src={imgTwo} alt="" />
                <img src={imgTen} alt="" />
                <img src={imgThree} alt="" />
                <img src={imgEleven} alt="" />

              </div>


          </div>
        </header>
)

export default Montage
