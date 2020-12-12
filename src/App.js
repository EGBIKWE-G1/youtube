import React from "react";
import './App.css';
import SearchBar from './components/SearchBar'
import youtube from './apis/Youtube'
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';



 
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('buildings');
  }

  onTermSubmit = async (term) => {
 const response = await youtube.get('/search', {
    params: {
      q: term
    }
  });     
  this.setState({ 
    videos: response.data.items,
    selectedVideo: response.data.items[0]
  });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {     
    return (
      <div className="ui container">    
      <SearchBar onFormSubmit={this.onTermSubmit} />
      <div className="ui grid">
      <div className="ui row">
      <div className="eleven wide column">
      <VideoDetail video={this.state.selectedVideo} />
      </div>
      <div className="five wide column">
      <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
      </div>    
      </div>
      </div>
      </div>
    )
  }
}

export default App; 






// import logo from './logo.svg';
// import './App.css';

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
