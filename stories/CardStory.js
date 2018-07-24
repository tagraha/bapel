import React from 'react';
import Card from './../src/Card'

const CardStories = () => {
  return (
    <div className="doc-mainbar">
      <p>Usage: <code>{`import { Card } from bapel;`}</code></p>
      <br/>
      <div><pre>{`<Card
  cardImage="https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg"
  cardCaption="any kind of long text of title would be great. hehehe, yolo bro"
  url="https://github.com/tagraha/bapel"
  isReactRouter={false}
  external={true}
/>`}</pre></div>
      <br/>
      <h3 style={{ color: 'red'}}>Preview</h3>
      <Card
        cardImage="https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg"
        cardCaption="any kind of long text of title would be great. hehehe, yolo bro"
        url="https://github.com/tagraha/bapel"
        isReactRouter={false}
        external={true}
      />
    </div>
  )
};

export default CardStories;