import React from 'react';
import Card from './../src/Card'

const CardStories = () => {
  return (
    <div className="doc-mainbar">
      <p>Usage: <code>{`import { Card } from bapel;`}</code></p>
      <br/>
      <p><code>{`<Card />`}</code></p>
      <br/>
      <Card />
    </div>
  )
};

export default CardStories;