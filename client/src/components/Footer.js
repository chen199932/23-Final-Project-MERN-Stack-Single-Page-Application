import React from 'react';

import { Container } from 'react-bootstrap';

const AppFooter = () => {
    return (
        <>
            <Container fluid className="text-light page-footer d-flex">
                <Container>
                    <h5 className='pt-4'>Contact Me</h5>
                    <div className="d-lg-flex pb-4 justify-content-between">
                        <ul className="no-bullets">
                            <li><h6>Tommy Chen</h6></li>
                            <li>
                                <a className="footer-link" href="https://github.com/chen199932">
                                    <span><i className="far fa-folder pr-3"></i></span>
                                    https://github.com/chen199932
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="mailto:chen199932@gmail.com">
                                    <span><i className="far fa-envelope pr-3"></i></span>
                                    chen199932@gmail.com
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://github.com/chen199932">
                                    <span><i className="fab fa-github pr-3"></i></span>
                                    Tommy Chen
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://www.linkedin.com/in/tommy-chen-9b1b9917b/">
                                    <span><i className="fab fa-linkedin pr-3"></i></span>
                                    Tommy Chen
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>© 2020</p>
                        <p><a className="footer-link" href="https://github.com/chen199932/23-Final-Project-MERN-Stack-Single-Page-Application"><i className="fab fa-github pr-3"></i>Visit the GitHub Repo</a></p>
                    </div>
                </Container>
            </Container>
        </>
    )
};
export default AppFooter;