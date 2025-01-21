import {
  Briefcase,
  TrendingUp,
  Globe,
  Laptop,
  CheckCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const services = [
  {
    title: "Fleet Customer Support Management",
    description:
      "Reduce overhead by 50%–80% with skilled professionals managing your operations.",
    icon: Briefcase,
    packages: [
      {
        name: "Package 1",
        list: [
          "Toll Management & Fine Nomination",
          "Follow-Up on Payment Dishonors, Payment Tracking, and Recovery Letters",
          "Monitoring and Tracking Redbook Inspections",
        ],
      },
      {
        name: "Package 2",
        list: [
          "Toll Management & Fine Nomination",
          "Booking Management",
          "Comprehensive Payment Reporting, Payment Dishonor Follow-Ups, and Recovery Letters",
          "Marketplace Advertising Support",
          "Business Contract Setup",
          "Driver Communication and Coordination",
        ],
      },

    ]
  },
  // {
  //   title: "Strategic Fleet Marketing",
  //   description:
  //     "Attract long-term rental drivers and generate consistent leads with targeted campaigns.",
  //   icon: TrendingUp,
  // },
  {
    title: "Driver Connect Solutions",
    description:
      "Your trusted source for long-term driver leads tailored to your car rental business needs.",
    icon: TrendingUp,
    packages: [
      {
        name: "Submit the form for more details."
      }
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "Maximize engagement with cost-effective SEO, social media, and search engine campaigns.",
    icon: Globe,
    packages: [
      {
        name: "Submit the form for more details."
      }
    ],
  },
  {
    title: "Website Design",
    description:
      "Custom, responsive, and SEO-optimized websites starting at $599.",
    icon: Laptop,
    packages: [      {
        name: "Submit the form for more details."
      }
],
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center items-center"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center text-[#1A1919] mb-12">
          Tailored Solutions for Your Business
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="flex flex-col bg-brand_blue text-white cursor-pointer">
                  <CardHeader>
                    <service.icon className="h-10 w-10 text-brand_orange mb-4" />
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{service.title}</DialogTitle>
                  <DialogDescription>
                    <div className="flex flex-col gap-4">
                      {service.packages &&
                        service.packages.map((item, index) => (
                          <div key={index}>
                            <div className="font-semibold">
                              {item.name}
                            </div>
                            <div>
                              <ul>
                                {item.list &&
                                  item.list.map((str, index) => (
                                    <li
                                      key={index}
                                      className="flex items-center gap-3"
                                    >
                                      <div>
                                        <CheckCircle className="h-2 w-2 text-brand_orange" />
                                      </div>
                                      <div>
                                        <span className="text-gray-700">
                                          {str}
                                        </span>
                                      </div>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
