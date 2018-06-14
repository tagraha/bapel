import React from 'react';
import Card from './../src/Card'

const CardStories = () => {
  return (
    <div className="doc-mainbar">
      <p>Usage: <code>{`import { Card } from bapel;`}</code></p>
      <br/>
      <p><code>{`<Card />`}</code></p>
      <br/>
      <Card
        cardImage="https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg"
        cardCaption="any kind of long text of title would be great. hehehe, yolo bro"
        linkDestination="https://github.com/tagraha/bapel"
        isReactRouter={false}
        external={true}
      />
    </div>
  )
};

export default CardStories;