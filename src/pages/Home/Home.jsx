import SM64GameplayBox from "../../components/SM64GameplayBox/SM64GameplayBox"

const Home = () => {
    return (
        <>
          <div className="overlay-container column-center-center">
            <div className="background-container"></div>
            <div className="center-center sm64-gameplay-row">
              <SM64GameplayBox />
              <SM64GameplayBox />
            </div>
            <div className="center-center gradient-test"></div>
          </div>
        </>
      )
}

export default Home