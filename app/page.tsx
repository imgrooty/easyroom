import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Home, Shield, Star } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Find Your Perfect Room with AI-Powered Recommendations
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  EasyRooms uses advanced AI to match you with your ideal living space. Search, filter, and book with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/search">
                    <Button size="lg" className="gap-2">
                      <Search className="h-4 w-4" />
                      Find Rooms
                    </Button>
                  </Link>
                  <Link href="/login?tab=register">
  <Button size="lg" variant="outline" className="gap-2">
    List Your Property
  </Button>
</Link>
                </div>
              </div>
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Modern apartment interior"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-card">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Quick Search
              </h2>
              <p className="text-muted-foreground">
                Find rooms that match your preferences in seconds
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 p-4 bg-background rounded-lg shadow-sm">
                <div className="flex-1">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Price Range</option>
                    <option value="0-500">$0 - $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-1500">$1,000 - $1,500</option>
                    <option value="1500+">$1,500+</option>
                  </select>
                </div>
                <div className="flex-1">
                  <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Room Type</option>
                    <option value="single">Single Room</option>
                    <option value="shared">Shared Room</option>
                    <option value="studio">Studio</option>
                    <option value="apartment">Apartment</option>
                  </select>
                </div>
                <Button className="gap-2">
                  <Search className="h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Why Choose EasyRooms
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Our platform offers unique features to make your room search experience seamless
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI-Powered Search</h3>
                <p className="text-muted-foreground">
                  Our intelligent algorithm learns your preferences to recommend the perfect rooms for you.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Geolocation Features</h3>
                <p className="text-muted-foreground">
                  Find rooms near your workplace, school, or favorite locations with our interactive map.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Verified Listings</h3>
                <p className="text-muted-foreground">
                  All listings are verified to ensure safety and accuracy, giving you peace of mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Listings */}
        <section className="py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Featured Listings
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Explore some of our top-rated rooms available now
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-card rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48">
                    <img
                      src={`https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80&h=300`}
                      alt="Room interior"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-2 right-2 bg-background/90 px-2 py-1 rounded text-sm font-medium">
                      ${(Math.floor(Math.random() * 1000) + 500).toLocaleString()}/mo
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {Array(5).fill(0).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">5.0</span>
                    </div>
                    <h3 className="font-bold text-lg mb-1">Modern Studio in Downtown</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>Central District, New York</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">WiFi</span>
                      <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">Furnished</span>
                      <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">AC</span>
                    </div>
                    <Link href={`/rooms/${item}`}>
                      <Button className="w-full">View Details</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/search">
                <Button variant="outline" size="lg">View All Listings</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                What Our Users Say
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Hear from people who found their perfect room through EasyRooms
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Johnson",
                  role: "Student",
                  quote: "EasyRooms helped me find an affordable room near my university in just two days. The AI recommendations were spot on!"
                },
                {
                  name: "Sarah Williams",
                  role: "Young Professional",
                  quote: "As someone who relocated for work, this platform made finding a room in a new city so much easier. Highly recommend!"
                },
                {
                  name: "Michael Chen",
                  role: "Landlord",
                  quote: "I've been listing my properties on EasyRooms for 6 months now. The quality of tenants and ease of use is unmatched."
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-1 mb-4">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Find Your Perfect Room?
                </h2>
                <p className="mt-4 text-primary-foreground/90 md:text-xl max-w-[600px]">
                  Join thousands of satisfied users who found their ideal living space through our platform.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <Link href="/search">
                  <Button size="lg" variant="secondary" className="gap-2">
                    <Search className="h-4 w-4" />
                    Start Searching
                  </Button>
                </Link>
                <Link href="/login?tab=register">
                  <Button size="lg" variant="outline" className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                    Create Account
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}