import { useEffect } from 'react'
import RemoteTeam from '../components/RemoteTeam'

const RemoteTeamPage = () => {
  useEffect(() => {
    // Ensure page starts from top
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen pt-16 sm:pt-20 md:pt-4 mobile-container">
      <RemoteTeam />
    </div>
  )
}

export default RemoteTeamPage