import SM64GameplayBox from "../../components/SM64GameplayBox/SM64GameplayBox"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const nav = useNavigate()
    return (
        <>
          <div className="overlay-container column-center-center">
            <div className="background-container"></div>
            <div className="center-center sm64-gameplay-row">
              <SM64GameplayBox />
              <SM64GameplayBox />
            </div>
            <div className="center-center gradient-test"></div>
            <div className="overlay-toggle-container">
              <button className="overlay-toggle-btn" onClick={()=>nav('/couch-overlay/solo-sm64')}>Go Solo</button>
            </div>
          </div>
        </>
      )
}

export default Home