import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
} from "@nextui-org/react"

export function QualificationCards({ qualifications }) {
  return (
    <>
      <Card id={qualifications.id} className="w-[350px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">{qualifications.title}</p>
            <p className="text-small text-default-500">
              {qualifications.institution}
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>{qualifications.description}</p>
        </CardBody>
        <Divider />
        <CardFooter>
          {qualifications.startDate} - {qualifications.endDate}
        </CardFooter>
      </Card>
    </>
  )
}
