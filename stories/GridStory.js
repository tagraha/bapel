import React from 'react';
import Row from './../src/Grid/components/Row';
import Grid from './../src/Grid/components/Grid';
import Col from './../src/Grid/components/Col';

const GridStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Grid</h1>
      <Row>
        <Col xs={12} sm={3} md={2} lg={3}>
          <p style={{ 'background': '#e6e6e6', padding: '4px' }}>1 Hello, world!</p>
        </Col>
        <Col xs={6} sm={6} md={8} lg={6}>
          <p style={{ 'background': '#e6e6e6', padding: '4px' }}>2 Hello, world!</p>
        </Col>
        <Col xs={6} sm={3} md={2} lg={3}>
          <p style={{ 'background': '#e6e6e6', padding: '4px' }}>3 Hello, world!</p>
        </Col>
      </Row>
    </div>
  );
}

export default GridStory;