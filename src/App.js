// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// let a = prompt("Enter the category you want to display");


// rcc   -> react class based component

export default class App extends Component {
 pageSize=25;
 country ="us";    // here you can change the country
 apiKey = process.env.REACT_APP_NEWS_API
//  apiKey = "7c0f3b1372b247358716d5e480767c55"
 // state is an object
state = {
   progress: 7
}

// setProgress is a method, We have to make it as an arrow function
setProgress = (progress)=>{
  this.setState({progress: progress})
}

  render() {
    console.log(process.env.REACT_APP_NEWS_API);
    return (
        // console.log(a),
        <div>
        
        <Router>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Navbar/>
        <Routes>

          {/* <Route exact path= {`/${a}`} element={<News setProgress= {this.setProgress} apiKey={this.apiKey}  key= {`${a}`}  pageSize={this.pageSize} country="us" category= {`/${a}`} />} /> */}
          <Route exact path= "/" element={<News setProgress= {this.setProgress} apiKey={this.apiKey}  key="general"  pageSize={this.pageSize} country= {this.country} category= "general" />} />
          <Route exact path="/business" element={<News setProgress= {this.setProgress} apiKey={this.apiKey}  key="business"  pageSize={this.pageSize} country={this.country} category= "business"/>} /> 
          <Route exact path="/entertainment" element={<News setProgress= {this.setProgress} apiKey={this.apiKey}  key="entertainment"  pageSize={this.pageSize} country={this.country} category= "entertainment"/> } /> 
          <Route exact path="/health" element={<News setProgress= {this.setProgress} apiKey={this.apiKey}  key="health"  pageSize={this.pageSize} country={this.country} category= "health"/>  } />
          <Route exact path="/science" element={<News setProgress= {this.setProgress} apiKey={this.apiKey}   key="science" pageSize={this.pageSize} country={this.country} category= "science"/> } /> 
          <Route exact path="/sports" element={<News setProgress= {this.setProgress} apiKey={this.apiKey}  key="sports"  pageSize={this.pageSize} country={this.country} category= "sports"/>  } />
          <Route exact path="/technology" element={<News setProgress= {this.setProgress} apiKey={this.apiKey}   key="technology" pageSize={this.pageSize} country={this.country} category= "technology"/> } />
 
        </Routes>
        
        </Router>
      </div>
    )
  }
}



// Remove function based component
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
