import { useEffect, useState } from 'react';
import { QualificationCards } from '@/components/qualification_cards';

export function CardsGenerator({ cards }) {
    const [qualifications, setQualifications] = useState([]);

    useEffect(() => {
        async function fetchQualifications() {
            try {
                const res = await fetch('/api/education');
                if (!res.ok) {
                    // If the response is not 2xx, it will throw an error
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();

                // format dates
                data.Qualifications.forEach(formatDates);

                console.log("Fetched data:", data); 
                setQualifications(data.Qualifications);
            } catch (error) {
                // Handle errors here
                console.error("Failed to fetch qualifications:", error);
            }
        }

        

        fetchQualifications();
    }, []);

    return (
        <>
            <div className="flex flex-wrap gap-4">
                {qualifications.map((qualification) => (
                    <QualificationCards key={qualification.id} qualifications={qualification} />
                ))}
            </div>
        </>
    );
}
function formatDates(qualification) {
            const startDate = new Date(qualification.startDate);
            const endDate = new Date(qualification.endDate);

            qualification.startDate = startDate.toLocaleDateString('en-GB', {
                month: 'long',
                year: 'numeric',
            });
            qualification.endDate = endDate.toLocaleDateString('en-GB', {
                month: 'long',
                year: 'numeric',
            });
        }
