
import Panels from "../components/Panels";
import NewsEvent from "../components/NewsEvents";
import RightPanel from "../components/rightpanel";
import OurPartner from "../components/OurPartners";
import Announcement from "../components/Announcement";

const Home = () => {
  return (
    <>
      <Panels />
      {/* <Director /> */}
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <RightPanel />
          </div>
          <div className="col-md-4">
            <Announcement />
          </div>
        </div>
      </div>

      {/* <Slider/> */}
      <NewsEvent title="Latest News" />


      <OurPartner title="Our Partners" />
      {/* <Service /> */}
      {/* <Features /> */}
      {/* <Appointment /> */}
      {/* <Facts /> */}
      {/* <Contact /> */}
      {/* <Leaders /> */}
    </>
  );
};

export default Home;
