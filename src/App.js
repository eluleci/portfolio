import React, { Component } from 'react';
import './App.css';
import products from './Products'

const User = ({ title, description, image, url, role }) => (
  <div className="user-info a4-page">
    <img src={image} />
    <h2>{title}</h2>

    <p className="text-content-content" dangerouslySetInnerHTML={{ __html: description }} />
    <h1>Portfolio</h1>
  </div>
)

const ProductInfo = ({ title, description, image, url, role }) => (
  <div className="product-info a4-page">
    <div className="product-header">
      <div className="product-logo">
        <img src={image} />
      </div>
      <div className="product-header-right">
        <h1>{title}</h1>
        {url &&
        <div className="link">
          <b>URL:</b> {url}
        </div>
        }
      </div>
    </div>

    <div className="text-content">
      <h2 className="text-content-title">Description</h2>
      <p className="text-content-content" dangerouslySetInnerHTML={{ __html: description }} />
    </div>

    <div className="text-content">
      <h2 className="text-content-title">My Role</h2>
      <p className="text-content-content" dangerouslySetInnerHTML={{ __html: role }} />
    </div>
  </div>
)

const ProductScreenShotsHorizontal = ({ screens, screensDescription }) => (
  <div className="product-screenshots a4-page">
    <div className="product-screenshots-header">
      <h1>Screenshots</h1>
      <span>{screensDescription}</span>
    </div>

    <div className="product-screenshots-images horizontal">
      {screens.map(image => <div><img src={image} /></div>)}
    </div>
  </div>
)

const ProductScreenShotsCell = ({ screens, screensDescription}) => (
  <div className="product-screenshots a4-page">
    <div className="product-screenshots-header">
      <h1>Screenshots</h1>
      <span>{screensDescription}</span>
    </div>

    <div className="product-screenshots-images cell">
      {screens.map(image => <div><img src={image} /></div>)}
    </div>
  </div>
)

const Product = (props) => (
  <div className="product">
    <ProductInfo {...props} />
    {props.layout === 'cell'
      ? <ProductScreenShotsCell screens={props.screens} screensDescription={props.screensDescription} />
      : <ProductScreenShotsHorizontal screens={props.screens} screensDescription={props.screensDescription} />
    }
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="container">
        {products.map(item => item.layout === 'person' ? <User {...item} /> : <Product {...item} />)}
        <div className="devingen a4-page">
          <h1 style={{ fontWeight: 900, color: '#7f8c8d' }}><span style={{ color: '#34495e' }}>DEV</span>INGEN</h1>
        </div>
        <div className="devingen a4-page">
          <h1 style={{ fontWeight: 900, color: '#7f8c8d', fontStyle: 'italic' }}><span
            style={{ color: '#34495e' }}>DEV</span>INGEN</h1>
        </div>
        <div className="devingen a4-page">
          <h1 style={{ fontWeight: 800, color: '#3498db' }}><span style={{ color: '#2980b9' }}>dev</span>ingen</h1>
        </div>
        <div className="devingen a4-page">
          <h1 style={{ fontWeight: 800, color: '#34495e', fontStyle: 'italic' }}><span
            style={{ color: '#2980b9' }}>dev</span>ingen</h1>
        </div>
        <div className="devingen a4-page">
          <h1 style={{ fontWeight: 900, color: '#7f8c8d' }}><span style={{ color: '#e74c3c' }}>DEV</span>INGEN</h1>
        </div>
      </div>
    );
  }
}

export default App;
