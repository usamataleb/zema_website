const Appointment = () => {
  return (
        <div className="container-fluid py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
                    <h1 className="display-6 mb-5">We're Award Winning Insurance Company</h1>
                    <p className="mb-5">Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna.</p>
                    <div className="bg-light rounded p-3">
                        <div className="d-flex align-items-center bg-white rounded p-3">
                            <img className="flex-shrink-0 rounded-circle me-3" src="img/profile.jpg" alt="" />
                            <h5 className="mb-0">Call Us: +012 345 6789</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="bg-light rounded p-5">
                        <form>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="gname" placeholder="Gurdian Name"/>
                                        <label for="gname">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="gmail" placeholder="Gurdian Email"/>
                                        <label for="gmail">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="cname" placeholder="Child Name"/>
                                        <label for="cname">Your Mobile</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="cage" placeholder="Child Age"/>
                                        <label for="cage">Service Type</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a message here" id="message" style="height: 80px"></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary py-3 px-5" type="submit">Get Appointment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

     );
};

export default Appointment;