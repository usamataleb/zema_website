import React, { useState } from "react";
import { Button, Accordion } from "react-bootstrap";
import Modal from "../components/Modal/Modal";
import { departmentsData, unitsData, boardMembers } from "../lib/constant";

const OrganizationStructure = () => {
  const [modalContent, setModalContent] = useState(null);
  const handleClose = () => setModalContent(null);
  const handleShow = (title, content) => setModalContent({ title, content });

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}
        >
          <h2 className="fw-bold mb-4 text-center text-success">
            Organizational Structure of ZEMA
          </h2>
           <p className="text-dark text-center">
            The Zanzibar Environmental Management Authority (ZEMA) operates
            under the Office of the First Vice President and is governed in
            accordance with the Environmental Management Act No. 3 of 2015, as
            amended in 2023. The institutional structure of ZEMA, approved by
            the Government in July 2020, is designed to ensure effective
            regulation, coordination, enforcement, and oversight of
            environmental management across Zanzibar.
          </p>
        </div>

       


        {/* Board of ZEMA Description */}
        <div
          className="bg-light rounded p-4 shadow-sm mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <h4 className="mb-3 text-success fw-bold">The Board of ZEMA</h4>
          <p className="text-dark">
            ZEMA is governed by a Board of ZEMA, which provides strategic
            leadership, policy direction, and oversight of the Authority’s
            operations. The Board ensures accountability, approves strategic and
            operational plans, reviews institutional performance, and ensures
            that ZEMA’s programmes align with national development priorities
            and environmental sustainability goals.
          </p>
          <Button
            variant="success"
            onClick={() =>
              handleShow(
                "Functions of the Board",
                <>
                  <p className="text-dark">
                    In accordance with Section 17 of the Zanzibar Environmental
                    Management Act, 2015 (as amended in 2023), the functions of
                    the Board include:
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Overseeing the implementation of the Authority’s functions
                      to ensure that its objectives are effectively achieved;
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Approving the plans and budget of the Authority;
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Providing direction to the Director General on matters
                      related to the administration and management of the
                      Authority;
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Establishing sections and appointing Heads of Sections
                      within the Authority; and
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Performing any other functions deemed necessary for the
                      effective discharge of the Authority’s mandate.
                    </li>
                  </ul>
                </>,
              )
            }
          >
            View Functions of the Board
          </Button>

          <Modal
            show={!!modalContent}
            handleClose={handleClose}
            title={modalContent?.title}
          >
            {modalContent?.content}
          </Modal>
        </div>

        {/* Board Members Table */}
        <div className="wow fadeInUp mb-5" data-wow-delay="0.1s">
          <h4 className="mb-4 text-success fw-bold">
            Current members of the Board
          </h4>
          <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover">
              <thead className="bg-success text-white">
                <tr>
                  <th scope="col">S/No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Position</th>
                  <th scope="col">Discipline</th>
                </tr>
              </thead>
              <tbody>
                {boardMembers.map((member, index) => (
                  <tr key={index}>
                    <td>{member.sn}</td>
                    <td>{member.name}</td>
                    <td>{member.position}</td>
                    <td>{member.discipline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Structure */}
        <div className="row g-4">
          <div className="col-12 wow fadeInUp" data-wow-delay="0.4s">
            <div className="bg-light rounded p-4 shadow-sm">
              <h4 className="mb-3 text-success fw-bold">
                The Director General
              </h4>
              <p className="text-dark">
                The Director General (DG) serves as the Chief Executive Officer
                of the Zanzibar Environmental Management Authority (ZEMA) and is
                responsible for the overall management, administration, and
                operational leadership of the Authority. The DG ensures that
                ZEMA effectively fulfills its mandate of environmental
                regulation, protection, and sustainable development across
                Zanzibar.
              </p>
            </div>
          </div>

          <div className="col-12 wow fadeInUp" data-wow-delay="0.5s">
            {/* STarts Here  */}
            <div className="bg-light rounded p-4 shadow-sm">
              <h4 className="mb-3 text-success fw-bold">
                ZEMA’s Core Departments and Division
              </h4>
              <p className="text-dark">
                ZEMA is structured into the following two Departments:
              </p>

              <div className="bg-light rounded shadow-sm">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <h4 className="mb-0 text-success fw-bold">
                        {departmentsData.dept1.title}
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="text-dark">
                        This Department is responsible for implementing
                        environmental policies, laws, regulations, and
                        guidelines. Its core functions include conducting
                        environmental and social impact assessments,
                        environmental audits, environmental operations and
                        patrols, and environmental monitoring.
                      </p>
                      <Button
                        variant="success"
                        size="sm"
                        className="mb-3"
                        onClick={() =>
                          handleShow(
                            "Responsibilities of " +
                              departmentsData.dept1.title,
                            <ul className="list-unstyled">
                              {departmentsData.dept1.functions.map(
                                (func, idx) => (
                                  <li key={idx} className="mb-2">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    {func}
                                  </li>
                                ),
                              )}
                            </ul>,
                          )
                        }
                      >
                        View Department Responsibilities
                      </Button>

                      <div className="mt-3 ps-3 border-start border-success border-4">
                        <h5 className="fw-bold">Divisions:</h5>
                        <ul className="list-unstyled">
                          {departmentsData.dept1.divisions.map((div, idx) => (
                            <li key={idx} className="mb-4">
                              <i className="bi bi-check-circle-fill text-success me-2"></i>
                              <strong>{div.name}:</strong> <br />
                              <div className="ms-4 mt-2">
                                {div.description}
                                <br />
                                <Button
                                  variant="outline-success"
                                  size="sm"
                                  className="mt-2"
                                  onClick={() =>
                                    handleShow(
                                      "Functions of " + div.name,
                                      <ul className="list-unstyled">
                                        {div.functions.map((func, fIdx) => (
                                          <li key={fIdx} className="mb-2">
                                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                                            {func}
                                          </li>
                                        ))}
                                      </ul>,
                                    )
                                  }
                                >
                                  View Division Functions
                                </Button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <div className="bg-light rounded shadow-sm mt-3">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <h4 className="mb-0 text-success fw-bold">
                        {departmentsData.dept2.title}
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="text-dark">
                        Responsible for delivering services related to human
                        resource management, administration, personnel
                        management, institutional planning, and statistics.
                      </p>
                      <Button
                        variant="success"
                        size="sm"
                        className="mb-3"
                        onClick={() =>
                          handleShow(
                            "Responsibilities of " +
                              departmentsData.dept2.title,
                            <ul className="list-unstyled">
                              {departmentsData.dept2.functions.map(
                                (func, idx) => (
                                  <li key={idx} className="mb-2">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    {func}
                                  </li>
                                ),
                              )}
                            </ul>,
                          )
                        }
                      >
                        View Department Responsibilities
                      </Button>

                      <div className="mt-3 ps-3 border-start border-success border-4">
                        <h5 className="fw-bold">Divisions:</h5>
                        <ul className="list-unstyled">
                          {departmentsData.dept2.divisions.map((div, idx) => (
                            <li key={idx} className="mb-4">
                              <i className="bi bi-check-circle-fill text-success me-2"></i>
                              <strong>{div.name}:</strong> <br />
                              <div className="ms-4 mt-2">
                                {div.description}
                                <br />
                                <Button
                                  variant="outline-success"
                                  size="sm"
                                  className="mt-2"
                                  onClick={() =>
                                    handleShow(
                                      "Functions of " + div.name,
                                      <ul className="list-unstyled">
                                        {div.functions.map((func, fIdx) => (
                                          <li key={fIdx} className="mb-2">
                                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                                            {func}
                                          </li>
                                        ))}
                                      </ul>,
                                    )
                                  }
                                >
                                  View Division Functions
                                </Button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            {/* Ends Here  */}
          </div>

          <div className="col-12 wow fadeInUp" data-wow-delay="0.8s">
            <div className="bg-light rounded p-4 shadow-sm">
              <h4 className="mb-3 text-success fw-bold">ZEMA Pemba Office</h4>
              <p className="text-dark mb-0">
                The ZEMA Pemba Office is responsible for coordinating all
                functions and activities of the Authority, including its
                Departments, Divisions, and Units, within Pemba. The office is
                headed by a Coordinator, who oversees operations and ensures
                that all activities align with ZEMA’s strategic objectives and
                mandate.
              </p>
            </div>
          </div>

          <div className="col-12 wow fadeInUp" data-wow-delay="0.7s">
            <div className="bg-light rounded p-4 shadow-sm">
              <h4 className="mb-3 text-success fw-bold">
                Units Reporting to the Director General
              </h4>
              <p className="text-dark">
                Six operational units report directly to the Director General of
                ZEMA. These units play a critical role in supporting the
                strategic, administrative, and operational functions of the
                Authority. Each unit is tasked with specific responsibilities to
                ensure effective governance, compliance, and service delivery.
                The units are as follows:{" "}
              </p>
              <div className="row g-3">
                {unitsData.map((unit, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4">
                    <div className="border rounded p-3 h-100 bg-white d-flex flex-column justify-content-between">
                      <h6 className="fw-bold text-dark mb-3">{unit.name}</h6>
                      <Button
                        variant="outline-success"
                        size="sm"
                        className="w-100 mt-auto"
                        onClick={() =>
                          handleShow(
                            "Functions of " + unit.name,
                            <>
                              <p className="text-dark">{unit.description}</p>
                              <h6 className="fw-bold mt-3">Key Functions:</h6>
                              <ul className="list-unstyled">
                                {unit.functions.map((func, fIdx) => (
                                  <li key={fIdx} className="mb-2">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    {func}
                                  </li>
                                ))}
                              </ul>
                            </>,
                          )
                        }
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ORGANIZATION STRUCTURE CHART */}
        <div className="org-chart-container my-5 overflow-auto">
          <div className="org-tree">
            <ul>
              <li>
                <div className="org-box main">BOARD OF ZEMA</div>
                <ul>
                  <li>
                    <div className="org-box main">DIRECTOR GENERAL</div>

                    {/* Three Main Branches: Left Units, Departments, Right Units */}
                    <ul>
                      {/* Left Units Group */}
                      <li>
                        <ul className="vertical-subtree">
                          <li>
                            <div className="org-box">INTERNAL AUDIT UNIT</div>
                          </li>
                          <li>
                            <div className="org-box">LEGAL SERVICES UNIT</div>
                          </li>
                          <li>
                            <div className="org-box">
                              PROCUREMENT AND DISPOSAL UNIT
                            </div>
                          </li>
                        </ul>
                      </li>

                      {/* Departments Group (Center - Horizontal) */}
                      <li>
                        <ul>
                          {/* Dept 1 */}
                          <li>
                            <div className="org-box big">
                              DEPARTMENT OF ENVIRONMENTAL ASSESSMENT, MONITORING
                              AND OPERATIONS
                            </div>
                            <ul>
                              <li>
                                <div className="org-box small">
                                  DIVISION OF ENVIRONMENTAL ASSESSMENT
                                </div>
                                <ul className="vertical-subtree">
                                  <li>
                                    <div className="org-box tiny">
                                      ENVIRONMENTAL ASSESSMENT SECTION
                                    </div>
                                  </li>
                                  <li>
                                    <div className="org-box tiny">
                                      ENVIRONMENTAL AUDIT SECTION
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <div className="org-box small">
                                  DIVISION OF ENVIRONMENTAL MONITORING AND
                                  OPERATIONS
                                </div>
                                <ul className="vertical-subtree">
                                  <li>
                                    <div className="org-box tiny">
                                      ENVIRONMENTAL MONITORING SECTION
                                    </div>
                                  </li>
                                  <li>
                                    <div className="org-box tiny">
                                      ENVIRONMENTAL OPERATIONS AND PATROL
                                      SECTION DORIA
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>

                          {/* Dept 2 */}
                          <li>
                            <div className="org-box big">
                              DEPARTMENT OF HUMAN RESOURCES, ADMINISTRATION AND
                              PLANNING
                            </div>
                            <ul>
                              <li>
                                <div className="org-box small">
                                  DIVISION OF HUMAN RESOURCES AND ADMINSITRATION
                                </div>
                                <ul className="vertical-subtree">
                                  <li>
                                    <div className="org-box tiny">
                                      HUMAN RESOURCES SECTION
                                    </div>
                                  </li>
                                  <li>
                                    <div className="org-box tiny">
                                      ADMINISTRATION SECTION
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <div className="org-box small">
                                  DIVISION OF PLANNING AND STATISTICS
                                </div>
                                <ul className="vertical-subtree">
                                  <li>
                                    <div className="org-box tiny">
                                      PLANNING SECTION
                                    </div>
                                  </li>
                                  <li>
                                    <div className="org-box tiny">
                                      STATISTIC SECTION
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>

                          {/* Pemba Office */}
                          <li>
                            <div className="org-box big">PEMBA ZEMA OFFICE</div>
                          </li>
                        </ul>
                      </li>

                      {/* Right Units Group */}
                      <li>
                        <ul className="vertical-subtree">
                          <li>
                            <div className="org-box">
                              INFORMATION AND COMMUNITY UNIT
                            </div>
                          </li>
                          <li>
                            <div className="org-box">IT AND GIS UNIT</div>
                          </li>
                          <li>
                            <div className="org-box">ACCOUNTING UNIT</div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style>
        {`
          .org-chart-container {
            display: flex;
            justify-content: center;
            padding: 20px;
          }

          .org-tree ul {
            padding-top: 20px; 
            position: relative;
            transition: all 0.5s;
            display: flex;
            justify-content: center;
          }

          .org-tree li {
            text-align: center;
            list-style-type: none;
            position: relative;
            padding: 20px 5px 0 5px;
            transition: all 0.5s;
          }

          /* Connectors */
          .org-tree li::before, .org-tree li::after {
            content: '';
            position: absolute; 
            top: 0; 
            right: 50%;
            border-top: 2px solid #198754;
            width: 50%; 
            height: 20px;
          }

          .org-tree li::after {
            right: auto; 
            left: 50%;
            border-left: 2px solid #198754;
          }

          /* Remove connectors from single children */
          .org-tree li:only-child::after, .org-tree li:only-child::before {
            display: none;
          }

          .org-tree li:only-child { 
            padding-top: 0;
          }

          /* Remove left connector from first child and right connector from last child */
          .org-tree li:first-child::before {
            border: 0 none;
          }
          
          .org-tree li:last-child::after {
            border: 0 none;
          }

          /* Vertical line descending */
          .org-tree li:last-child::before {
            border-right: 2px solid #198754;
            border-radius: 0 5px 0 0;
          }

          .org-tree li:first-child::after {
            border-radius: 5px 0 0 0;
          }

          /* Downward connector from parent */
          .org-tree ul ul::before {
            content: '';
            position: absolute; 
            top: 0; 
            left: 50%;
            border-left: 2px solid #198754;
            width: 0; 
            height: 20px;
          }

          /* --- VERTICAL SUBTREE STYLES --- */
          .org-tree ul.vertical-subtree {
             flex-direction: column;
             align-items: center;
             padding-top: 0;
          }

          .org-tree ul.vertical-subtree > li {
             padding: 10px 0;
             width: auto;
          }

          /* Disable standard connectors for vertical subtree items */
          .org-tree ul.vertical-subtree > li::before, 
          .org-tree ul.vertical-subtree > li::after {
             display: none;
          }

          /* Add vertical line above each item in vertical subtree */
          .org-tree ul.vertical-subtree > li::before {
             content: '';
             display: block;
             position: absolute;
             top: 0;
             left: 50%;
             width: 0;
             height: 10px; /* Connect to previous item or parent */
             border-left: 2px solid #198754;
          }

          /* Fix parent connector for vertical subtree: Line from parent down to list */
          .org-tree ul.vertical-subtree::before {
             content: '';
             position: absolute;
             top: -20px; /* Extend up to parent 'li' padding */
             left: 50%;
             width: 0;
             height: 20px;
             border-left: 2px solid #198754;
             display: block;
          }


          /* Box Styling */
          .org-box {
            border: 2px solid #198754;
            padding: 10px;
            display: inline-block;
            border-radius: 5px;
            text-decoration: none;
            color: #333;
            font-family: arial, verdana, tahoma;
            font-size: 14px;
            background: #fff;
            transition: all 0.5s;
            min-width: 150px;
            font-weight: 600;
            z-index: 10;
            position: relative;
          }

          .org-box.main {
            background: #e8f5e9;
            font-size: 16px;
            min-width: 200px;
          }

          .org-box.big {
            background: #f1fff4;
            min-width: 180px;
          }

          .org-box.small {
            background: #f4fff9;
            font-size: 13px;
          }
          
          .org-box.tiny {
            font-size: 12px;
            min-width: 120px;
            padding: 5px;
          }
          
          .org-group-label {
             font-weight: bold;
             color: #198754;
             margin-bottom: 5px;
             text-decoration: underline;
          }

          /* Hover Effects */
          .org-box:hover {
            background: #c8e6c9;
            color: #000;
            border: 2px solid #000;
            transform: scale(1.05);
            z-index: 20;
          }
          
          /* Responsiveness for Tree */
          @media (max-width: 992px) {
             .org-tree ul {
                flex-direction: column;
                align-items: center;
                padding-left: 0;
             }
             
             .org-tree li {
                padding: 10px 0;
                width: 100%;
             }
             
             /* Disable standard tree connectors on mobile and use simple lines */
             .org-tree li::before, .org-tree li::after, .org-tree ul ul::before {
                display: none; 
             }
             
             /* Add simple vertical line for mobile flow */
             .org-tree li {
                border-left: 2px solid #198754;
                margin-left: 20px;
                text-align: left;
                padding-left: 15px;
             }
             
             .org-box {
                width: 100%;
                text-align: left;
             }
             
             .org-tree > ul > li {
                border-left: none;
                margin-left: 0;
                padding-left: 0;
             }
          }
        `}
      </style>
    </div>
  );
};

export default OrganizationStructure;
