import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../Authentification/AuthContext";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <div className="home">
      <section className="hero">
        <h2>Welcome to <span className="highlight">MyCoach</span></h2>
        <p>
          Welcome to your personalized enhanced assistant to help you kickstart your goals!
          Take your New Year's resolutions to the next level with this AI-powered coach!

        </p>
        {user ? (
          <>
            <button className="startbtn" onClick={() => navigate("/about")}>Get Started</button>
          </>
        ) : (
          <>
            <button className="startbtn" onClick={() => navigate("/login")}>Get Started</button>
          </>
        )}
      </section>
    </div>
  )
}
