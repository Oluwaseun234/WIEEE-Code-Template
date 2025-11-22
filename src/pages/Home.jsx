import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <section className="hero">
        <h2>Welcome to <span className="highlight">MyCoach</span></h2>
        <p>
          Welcome to your personalized enhanced assistant to help you kickstart your goals!
          Take your New Year's resolutions to the next level with this AI-powerd coach!

        </p>
      </section>
    </div>
  )
}
