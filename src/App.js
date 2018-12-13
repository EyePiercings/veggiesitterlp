import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
    <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'black'}} to= '/'>Veggie Sitter</Link>} scroll>
              <Navigation style={{color: 'black'}}>
                  <Link to="/about">About</Link>
              </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to= '/'>Veggie Sitter</Link>}>
              <Navigation>
                  <Link to="/about">About</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main />
          </Content>
          
      </Layout>
  </div>
    );
  }
}

export default App;
