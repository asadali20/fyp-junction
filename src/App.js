import React from 'react';
import './App.css';
import {NavDropdown,Nav,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Main from './components/main';
import Footer from './components/footer/footer';



function App() {
  return (
    <div className="App">
      
      <Main/>
      
      {/* <div className="demo-big-content">
    <Layout className='App-layout'>
        <Header className='App-header' title="Title" scroll>
            <Navigation>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            </Navigation>
        </Drawer>
        <Content> 
           <div className="page-content" />
            <Main/>
         </Content>
        <Footer/>
   </Layout>
 </div> */}
    </div>
  );
}
export default App;
