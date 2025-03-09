"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageSquare } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    // Implement actual form submission logic
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form or show success message
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                  <CardDescription>
                    Have a question or suggestion? We're here to help!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block mb-2">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          value={formData.name}
                          onChange={handleChange}
                          required 
                          className="w-full border rounded px-3 py-2"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          value={formData.email}
                          onChange={handleChange}
                          required 
                          className="w-full border rounded px-3 py-2"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block mb-2">Message</label>
                        <textarea 
                          id="message" 
                          value={formData.message}
                          onChange={handleChange}
                          required 
                          className="w-full border rounded px-3 py-2 h-32"
                        />
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="w-full mt-4"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">
                            <path 
                              className="opacity-75" 
                              fill="currentColor" 
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        question: "How do I create an account?",
                        answer: "You can create an account by clicking on the 'Sign Up' button in the top right corner of the homepage. Follow the prompts to complete your registration."
                      },
                      {
                        question: "Is it free to list my property?",
                        answer: "Yes, basic property listings are completely free. We also offer premium listing options for enhanced visibility."
                      },
                      {
                        question: "How does the AI matching work?",
                        answer: "Our AI analyzes your preferences, search history, and behavior to recommend rooms that best match your needs and lifestyle."
                      },
                      {
                        question: "What if I need to cancel my booking?",
                        answer: "Cancellation policies vary by property. You can find the specific policy on each listing page before you make a booking."
                      }
                    ].map((faq, index) => (
                      <div key={index}>
                        <h3 className="font-medium mb-1">{faq.question}</h3>
                        <p className="text-sm text-muted-foreground">{faq.answer}</p>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <Link href="/faq" className="w-full">
                      <Button variant="outline" className="w-full">
                        View All FAQs
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Map Section */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Our Location</CardTitle>
                  <CardDescription>
                    Visit our office in San Francisco
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Interactive map will be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}