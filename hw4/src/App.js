import {CarContainer} from "./components/Cars/CarContainer"
import {UserContainer} from "./components/UserContainer/UserContainer";
import {CommentContainer} from "./components/Comments/CommentContainer"
import "./App.css"

const App = () => {
  return (
      <div>
          <div className="main">CARS:</div>
        <CarContainer/>
          <div className="main">USERS:</div>
          <UserContainer/>
          <div className="main">COMMENTS:</div>
          <CommentContainer/>
      </div>
  )
}

export default App