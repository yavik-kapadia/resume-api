import { useEffect, useState } from "react"
import { Skeleton } from "@nextui-org/react"

import { QualificationCards } from "@/components/qualification_cards"

export function CardsGenerator() {
  const [qualifications, setQualifications] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchQualifications() {
      try {
        const res = await fetch("/api/education")
        if (!res.ok) {
          // If the response is not 2xx, it will throw an error
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data = await res.json()

        // format dates
        data.Qualifications.forEach(formatDates)

        console.log("Fetched data:", data)
        setQualifications(data.Qualifications)
        setIsLoading(false)
      } catch (error) {
        // Handle errors here
        console.error("Failed to fetch qualifications:", error)
        setIsLoading(false)
      }
    }

    fetchQualifications()
  }, [])

  return (
    <>
      {isLoading ? (
        <div className="flex flex-wrap gap-4">
          {[...Array(3)].map((_, index) => (
            <Skeleton key={index} width={300} height={200} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-4">
          {qualifications.map((qualification) => (
            <QualificationCards
              key={qualification.id}
              qualifications={qualification}
            />
          ))}
        </div>
      )}
    </>
  )
}

function formatDates(qualification) {
  const startDate = new Date(qualification.startDate)
  const endDate = new Date(qualification.endDate)

  qualification.startDate = startDate.toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  })
  qualification.endDate = endDate.toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  })
}
