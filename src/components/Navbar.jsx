// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
//       <a href="index.html" className="navbar-brand d-flex align-items-center">
//         {/* <h1 className="m-0">
//           <img
//             className="img-fluid me-3"
//             src="img/icon/icon-02-primary.png"
//             alt=""
//           />
//           Insure
//         </h1> */}
//       </a>
//       <button
//         type="button"
//         className="navbar-toggler"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarCollapse"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarCollapse">
         
//         <div className="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0">
//           <h2>Sereklai ya mapinduzi zanzibar</h2>
//           <h2>MAMLAKA YA MAZINGIRA ZANZIBAR</h2>
         
//           <a href="/" className="nav-item nav-link active">
//             Home
//           </a>
//           <a href="about" className="nav-item nav-link">
//             About Us
//           </a>
//           <a href="service" className="nav-item nav-link">
//             Our Services
//           </a>
//           <a href="gallery" className="nav-item nav-link">
//             Gallery
//           </a>
//           <a href="news" className="nav-item nav-link">
//             News and Events
//           </a>

//           <div className="nav-item dropdown">
//             <a
//               href="#"
//               className="nav-link dropdown-toggle"
//               data-bs-toggle="dropdown"
//             >
//               Blog
//             </a>

//             <div className="dropdown-menu bg-light border-0 m-0">
//               <a href="feature.html" className="dropdown-item">
//                 News and Events
//               </a>
//               <a href="appointment.html" className="dropdown-item">
//                 Press Release
//               </a>
//             </div>
//           </div>
//           <a href="contact.html" className="nav-item nav-link">
//             Contact Us
//           </a>
//         </div>
//       </div>
//       <a href="" className="btn btn-primary px-3 d-none d-lg-block">
//         Get A Quote
//       </a>
//     </nav>
//   );
// };

// export default Navbar;


//new

// import React from "react";

// const Navbar = () => {
//   return (
//     <>
//       {/* Heading zone - placed OUTSIDE the navbar */}
//       <div className="text-center py-2 bg-white">
//         <h4 className="mb-0 text-uppercase">SERIKALI YA MAPINDUZI YA ZANZIBAR</h4>
//         <h6 className="text-success">Mamlaka ya Mazingira Zanzibar (ZEMA)</h6>
//       </div>

//       {/* Real navbar */}
//       <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 shadow-sm">
//         <a href="/" className="navbar-brand d-flex align-items-center">
//           {/* Logo or title if needed */}
//         </a>

//         <button
//           type="button"
//           className="navbar-toggler"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarCollapse"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarCollapse">
//           <div className="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0">
//             <a href="/" className="nav-item nav-link active">Home</a>
//             <a href="/about" className="nav-item nav-link">About Us</a>
//             <a href="/service" className="nav-item nav-link">Our Services</a>
//             <a href="/gallery" className="nav-item nav-link">Gallery</a>
//             <a href="/news" className="nav-item nav-link">News and Events</a>

//             <div className="nav-item dropdown">
//               <a
//                 href="#"
//                 className="nav-link dropdown-toggle"
//                 data-bs-toggle="dropdown"
//               >
//                 Blog
//               </a>
//               <div className="dropdown-menu bg-light border-0 m-0">
//                 <a href="/feature" className="dropdown-item">News and Events</a>
//                 <a href="/appointment" className="dropdown-item">Press Release</a>
//               </div>
//             </div>

//             <a href="/contact" className="nav-item nav-link">Contact Us</a>
//           </div>
//         </div>

//         <a href="#" className="btn btn-primary px-3 d-none d-lg-block">
//           Get A Quote
//         </a>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// import React from "react";

// const Navbar = () => {
//   return (
//     <>
//       {/* Heading zone - LOGO LEFT, TEXT RIGHT */}
//       <div className="bg-white px-4 py-2 d-flex align-items-center">
//         {/* Logo ya SMZ upande wa kushoto */}
//         <div className="me-3">
//           <img
//             src="../img/logo.png" // hakikisha hii ni path sahihi ya logo yako
//             alt="SMZ Logo"
//             style={{ height: "60px", width: "auto" }}
//           />
//         </div>

//         {/* Maandishi ya heading */}
//        <div className="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0">
//           <h4 className="mb-0 text-uppercase">SERIKALI YA MAPINDUZI YA ZANZIBAR</h4>
//           <h6 className="text-success">Mamlaka ya Mazingira Zanzibar (ZEMA)</h6>
//         </div>
//       </div>

//       {/* Real navbar (haijabadilika) */}
//       <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 shadow-sm">
//         <a href="/" className="navbar-brand d-flex align-items-center" />
//         <button
//           type="button"
//           className="navbar-toggler"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarCollapse"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarCollapse">
//           <div className="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0">
//             <a href="/" className="nav-item nav-link active">Home</a>
//             <a href="/about" className="nav-item nav-link">About Us</a>
//             <a href="/service" className="nav-item nav-link">Our Services</a>
//             <a href="/gallery" className="nav-item nav-link">Gallery</a>
//             <a href="/news" className="nav-item nav-link">News and Events</a>

//             <div className="nav-item dropdown">
//               <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
//                 Blog
//               </a>
//               <div className="dropdown-menu bg-light border-0 m-0">
//                 <a href="/feature" className="dropdown-item">News and Events</a>
//                 <a href="/appointment" className="dropdown-item">Press Release</a>
//               </div>
//             </div>

//             <a href="/contact" className="nav-item nav-link">Contact Us</a>
//           </div>
//         </div>

//         <a href="#" className="btn btn-primary px-3 d-none d-lg-block">
//           Get A Quote
//         </a>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Heading zone - LOGO LEFT, TEXT RIGHT */}
      <div className="bg-success px-4 py-2 d-flex align-items-center text-white">
        {/* Logo ya SMZ upande wa kushoto */}
        <div className="me-3">
          <img
           src="img/icon/logo.png"
           
            alt="SMZ Logo"
            style={{ height: "60px", width: "auto" }}
          />
        </div>

        {/* Maandishi ya heading */}
        <div className="navbar-nav mx-auto pe-4 py-3 py-lg-0">
          <h4 className="mb-0 text-uppercase text-white">SERIKALI YA MAPINDUZI YA ZANZIBAR</h4>
          <h6 className="text-light">Mamlaka ya Mazingira Zanzibar (ZEMA)</h6>
        </div>
      </div>

      {/* Real navbar */}
      <nav className="navbar navbar-expand-lg bg-success navbar-dark sticky-top px-4 px-lg-5 shadow-sm">
        <a href="/" className="navbar-brand d-flex align-items-center" />
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto rounded pe-4 py-3 py-lg-0">
            <a href="/" className="nav-item nav-link active text-white">Home</a>

            {/* Dropdown ya kuhusu sisi */}
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown">
                Kuhusu Sisi
              </a>
              <div className="dropdown-menu bg-light border-0 m-0">
                <a href="/history" className="dropdown-item">Historia ya ZEMA</a>
                <a href="/vision" className="dropdown-item">Dhamira</a>
                {/* <a href="/mission" className="dropdown-item">Dhima</a> */}
                <a href="/objective" className="dropdown-item">Lengo Kuu</a>
              </div>
            </div>

            <a href="/service" className="nav-item nav-link text-white">Huduma Zetu</a>
            <a href="/gallery" className="nav-item nav-link text-white">Machapisho</a>
            <a href="/news" className="nav-item nav-link text-white">Kituo cha Habari</a>

            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown">
                Blog
              </a>
              <div className="dropdown-menu bg-light border-0 m-0">
                <a href="/feature" className="dropdown-item">News and Events</a>
                <a href="/appointment" className="dropdown-item">Press Release</a>
              </div>
            </div>

            <a href="/contactus" className="nav-item nav-link text-white">Mawasiliano</a>
          </div>
        </div>

        <a href="#" className="btn btn-light px-3 d-none d-lg-block">
          Get A Quote
        </a>
      </nav>
    </>
  );
};

export default Navbar;

















