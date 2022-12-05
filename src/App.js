import Top from "./components/Top"
import Left from "./components/Left"
import Bottom from "./components/Bottom"

import './App.css';

export default function App() {
  return (
    <>
      <div className="majorContainer">
        <div className="container1">
          <Top />
        </div>
        <div className="container2">
          <Left />
        </div>
        <div className="container3">
          <Bottom />
        </div>
      </div>

    </>
  )
}

