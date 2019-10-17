import React from 'react';
import people from '../../assets/images/people.jpg';
import ask from '../../assets/images/ask.jpg';
import protest from '../../assets/images/protest.jpg';
import worship from '../../assets/images/worship.jpg';
import experience from '../../assets/images/experience.jpg';
import feelings from '../../assets/images/feelings.jpg';

const Home = () => {
  return (
    <div>
      <section>
        <div className="container is-fluid">
          <h1 className="h3 pt-40 pb-40 home-title">10th June 2019</h1>
          <div className="columns">
            <div className="col-3">
              <div className="appcard">
                <div className="appcard-image">
                  <img src={ask} alt="ask question" />
                </div>
                <div className="appcard-content">
                  <h1 className="h5">Ask Questions</h1>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="appcard">
                <div className="appcard-image">
                  <img src={people} alt="people" />
                </div>
                <div className="appcard-content">
                  <h1 className="h5">Share your opinion</h1>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="appcard">
                <div className="appcard-image">
                  <img src={experience} alt="experience" />
                </div>
                <div className="appcard-content">
                  <h1 className="h5">Share your experience</h1>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="appcard">
                <div className="appcard-image">
                  <img src={feelings} alt="feelings" />
                </div>
                <div className="appcard-content">
                  <h1 className="h5">Share your feelings</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container is-fluid">
          <h1 className="h4 pt-40 pb-40 home-title">Most discussed topics</h1>
          <div className="columns">
            <div className="col-3">
              <div className="overlaycard">
                <div className="overlaycard-image">
                  <img src={protest} alt="rally protest" />
                </div>
                <div className="overlay">
                  <div className="overlaycard-content">
                    <h1 className="h4">Politics</h1>
                    <div className="overlaycard-span">55 Posts</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="overlaycard">
                <div className="overlaycard-image">
                  {/* <img src="./assets/images/apple-desk-internet-209151.jpg"> */}
                </div>
                <div className="overlay"></div>
                <div className="overlaycard-content">
                  <h1 className="h4">Science & Technology</h1>
                  <div className="overlaycard-span">21 Posts</div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="overlaycard">
                <div className="overlaycard-image">
                  {/* <img src="./assets/images/liverpool.jpg"> */}
                </div>
                <div className="overlay"></div>
                <div className="overlaycard-content">
                  <h1 className="h4">Sports</h1>
                  <div className="overlaycard-span">21 Posts</div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="overlaycard">
                <div className="overlaycard-image">
                  <img src={worship} alt="worship" />
                </div>
                <div className="overlay"></div>
                <div className="overlaycard-content">
                  <h1 className="h4">Religion</h1>
                  <div className="overlaycard-span">21 Posts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer">
        <div className="container is-fluid">
          <div className="columns">
            <div className="col-4">
              <div className="home-footer">
                <a href="#">ABOUT US</a>
                <a href="#">API</a>
                <a href="#">PRIVACY</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
