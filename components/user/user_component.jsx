import React from "react"
import { User } from "@nextui-org/react"

export default function UserComponent() {
  const [user, setUser] = useState([])

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/me")
        if (!res.ok) {
          // If the response is not 2xx, it will throw an error
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data = await res.json()
        console.log("Fetched data:", data)
        setUser(data.User)
      } catch (error) {
        // Handle errors here
        console.error("Failed to fetch User:", error)
      }
    }

    fetchUser()
  }, [])
  return (
    <User
      name={user.name}
      description={user.description}
      avatarProps={{
        src: user.avatar,
        alt: user.name,
      }}
    />
  )
}
