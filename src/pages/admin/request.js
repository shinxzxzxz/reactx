import React from "react";
import { Alert, Col, Row, Tab, Tabs } from 'react-bootstrap';

import Sidebar from "../../components/Sidebar";
import Statistic from "../../components/Stats";

const Request = () => {

    return (
        <Sidebar.Container>
            <Sidebar.Toggle />
            <Sidebar.Layout>
                <Sidebar.Navigation />
                <Sidebar.Content>
                    <Row>
                        <Col sm={12} md={8} lg={9}>
                            <Sidebar.Search />
                            <Alert variant="light" className="">
                                <div className="fs-4 mb-2 fw-semibold">Request</div>
                                <div className="fs-6">Empower hospital personnel to efficiently review and respond to blood requests. Approve or decline requests to contribute to a streamlined and responsive blood donation process. Enhance communication and coordination between hospitals, ensuring timely and effective response to blood requests.</div>
                            </Alert>
                            <Alert variant="light" className="">
                                <Tabs variant="underline" defaultActiveKey="pending" className="mb-2 py-2 fs-5" fill>
                                    <Tab eventKey="pending" title="Pending">
                                        <Statistic.Grid id="request-pending" realtime={true} />
                                    </Tab>
                                    <Tab eventKey="approved" title="Approved">
                                        <Statistic.Grid id="request-approved" realtime={true} />
                                    </Tab>
                                    <Tab eventKey="declined" title="Declined">
                                        <Statistic.Grid id="request-rejected" realtime={true} />
                                    </Tab>
                                </Tabs>
                            </Alert>
                        </Col>
                        <Col sm={12} md={4} lg={3}>
                            <Row>
                                <Col>
                                    <Alert variant="light">
                                        <Statistic.Graph type="bar" label="Bulacan Blood Center" actions={false} realtime={true} transparent={true} api="api/c/bleed/bloodbank?type=Bulacan Blood Center" />
                                    </Alert>

                                </Col>
                                <Col>
                                    <Alert variant="light">
                                        <Statistic.Graph type="bar" label="Philippine Heart Center" actions={false} realtime={true} transparent={true} api="api/c/bleed/bloodbank?type=Philippine Health Center" />
                                    </Alert>
                                </Col>
                                <Col>
                                    <Alert variant="light">
                                        <Statistic.Graph type="bar" label="Philippine Red Cross" actions={false} realtime={true} transparent={true} api="api/c/bleed/bloodbank?type=Philippine Red Cross" />
                                    </Alert>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Sidebar.Content>
            </Sidebar.Layout>
        </Sidebar.Container>
    );
}

export default Request;