"use client";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardTitle } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const formSchema = z.object({
  selectedPackage: z.string().min(1, "Please select a package."),
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Invalid email address."),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits."),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const EnquirySection: React.FC = () => {
  const [message, setMessage] = useState('')
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      selectedPackage: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  async function onSubmit(userDetails: FormData) {
    setMessage("Loading...");
    try {
      const response = await axios.post("/api/contact", userDetails);
  
      if (response.status === 200) {
        setMessage("We will get back to you soon!");
        console.log("Email sent successfully:", response.data);
      } else {
        setMessage("Failed! Please directly email or call.");
        console.error("Failed to send email:", response.data);
      }
    } catch (error: unknown) {
      setMessage("Failed! Please directly email or call.");
  
      if (axios.isAxiosError(error)) {
        // If the error is from Axios, log the response or message
        console.error(
          "Error submitting contact form:",
          error.response?.data || error.message
        );
      } else if (error instanceof Error) {
        // Handle a standard JavaScript Error
        console.error("Error submitting contact form:", error.message);
      } else {
        // Handle unexpected error types
        console.error("Unexpected error:", error);
      }
    }
  }

  return (
    <section id="contact" className="text-gray-600 body-font bg-gray-100">
      <div className="container px-5 py-10 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Get in touch
          </h2>
          <div className="flex flex-col gap-2 text-gray-600 mb-6 leading-relaxed">
            <div>
              Are you a car rental business owner or a busy professional
              struggling to manage your fleet?
            </div>

            <div>
              Look no further! At Grand Fleet, we offer a comprehensive range of
              fleet management services tailored to your needs. Whether it’s
              toll management, fine nominations, driver leads, or payment
              tracking, we have you covered—all at the most competitive prices.
            </div>

            <div>
              We are your one-stop solution for all fleet management, driver
              coordination, Websites and digital marketing needs. Let us handle
              the hard work while you focus on growing your business.
            </div>

            <div>
              Contact us today to learn more about our affordable and efficient
              services. Let’s drive your success forward!
            </div>
          </div>
          <div className="space-y-4 text-gray-700"></div>
        </div>
        <div className="lg:w-2/6 md:w-1/2 rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <Card className="py-8">
            <CardTitle className="text-gray-900 text-2xl font-semibold title-font mb-5 text-center">
              Get a quote
            </CardTitle>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="selectedPackage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Package</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a package" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Fleet Customer Support Management">
                                Fleet Customer Support Management
                              </SelectItem>
                              <SelectItem value="Strategic Fleet Marketing">
                                Strategic Fleet Marketing
                              </SelectItem>
                              <SelectItem value="Digital Marketing">
                                Digital Marketing
                              </SelectItem>
                              <SelectItem value="Website Design">
                                Website Design
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="example@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone number</FormLabel>
                        <FormControl>
                          <Input placeholder="1234567890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        type="submit"
                        className="w-full py-2 px-4 bg-brand_blue"
                      >
                        Send message
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>{message}</DialogTitle>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
