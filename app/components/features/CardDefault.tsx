"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function CardDefault({
  title,
  description,
  image,
  url,
  icon,
}: {
  title: string;
  description: string;
  image: string;
  url: string;
  icon: any;
}) {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={image} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>

        <Typography className="text-gray-400">{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0 flex space-x-2 items-center">
        <Button
          className="text-gray-400"
          onClick={() => {
            // navigate to an external url
            window.open(url);
          }}
        >
          View Code
        </Button>
        {icon}
      </CardFooter>
    </Card>
  );
}
