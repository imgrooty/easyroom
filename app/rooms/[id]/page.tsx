import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  MapPin, 
  Star, 
  Calendar, 
  Wifi, 
  Home, 
  Thermometer, 
  Coffee, 
  Car, 
  Tv, 
  Users, 
  DollarSign, 
  Clock, 
  Shield, 
  Heart 
} from "lucide-react";

export default function RoomDetailPage({ params }: { params: { id: string } }) {
  // Mock data for room details
  const room = {
    id: params.id,
    title: "Modern Studio in Downtown",
    description: "This beautiful studio apartment is located in the heart of downtown. It features modern furnishings, high ceilings, and plenty of natural light. The space is perfect for a single professional or a couple looking for a central location with easy access to restaurants, shops, and public transportation.",
    location: "Central District, New York",
    price: 1200,
    type: "Studio",
    size: "450 sq ft",
    rating: 4.9,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ],
    amenities: [
      { name: "WiFi", icon: <Wifi className="h-4 w-4" /> },
      { name: "Furnished", icon: <Home className="h-4 w-4" /> },
      { name: "AC", icon: <Thermometer className="h-4 w-4" /> },
      { name: "Kitchen", icon: <Coffee className="h-4 w-4" /> },
      { name: "TV", icon: <Tv className="h-4 w-4" /> },
      { name: "Parking", icon: <Car className="h-4 w-4" /> }
    ],
    landlord: {
      name: "John Smith",
      rating: 4.8,
      reviews: 42,
      responseTime: "Within 1 hour",
      verified: true
    },
    availability: "Available from June 1, 2025",
    leaseTerms: "Minimum 6 months",
    deposit: "$1,200",
    utilities: "Water included, electricity and internet extra",
    petsAllowed: "Small pets allowed with additional deposit", 
    reviews: [
      {
        id: 1,
        user: "Alex Johnson",
        date: "March 15, 2025",
        rating: 5,
        comment: "Absolutely loved staying here! The location is perfect and the apartment is exactly as pictured. Very clean and modern."
      },
      {
        id: 2,
        user: "Sarah Williams",
        date: "February 28, 2025",
        rating: 4,
        comment: "Great place overall. The kitchen is well-equipped and the bed is comfortable. The only downside was some street noise at night."
      },
      {
        id: 3,
        user: "Michael Chen",
        date: "January 10, 2025",
        rating: 5,
        comment: "Perfect studio for my needs. The landlord was very responsive and helpful throughout my stay. Would definitely recommend!"
      }
    ]
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-6">
            <Link href="/search" className="text-primary hover:underline mb-2 inline-block">
              &larr; Back to search results
            </Link>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold">{room.title}</h1>
                <div className="flex items-center mt-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{room.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="gap-2">
                  <Heart className="h-4 w-4" />
                  Save
                </Button>
                <Button variant="outline" className="gap-2">
                  Share
                </Button>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="h-[400px] rounded-lg overflow-hidden">
              <img
                src={room.images[0]}
                alt={room.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {room.images.slice(1, 3).map((image, index) => (
                <div key={index} className="h-[192px] rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`${room.title} - image ${index + 2}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
              <div className="h-[192px] rounded-lg overflow-hidden relative">
                <img
                  src={room.images[0]}
                  alt={`${room.title} - image 4`}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Button variant="secondary">View All Photos</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold">{room.type} · {room.size}</h2>
                  <div className="flex items-center mt-1">
                    <div className="flex items-center">
                      {Array(5).fill(0).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(room.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`} 
                        />
                      ))}
                      <span className="ml-1 text-sm">{room.rating} ({room.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">${room.price}/mo</div>
                  <div className="text-sm text-muted-foreground">+ utilities</div>
                </div>
              </div>

              <Tabs defaultValue="details">
                <TabsList className="mb-4">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>
                
                <TabsContent value="details" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-muted-foreground">{room.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Availability</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-start gap-2">
                          <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground" />
                          <span>{room.availability}</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Lease Terms</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-start gap-2">
                          <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
                          <span>{room.leaseTerms}</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Deposit</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-start gap-2">
                          <DollarSign className="h-4 w-4 mt-0.5 text-muted-foreground" />
                          <span>{room.deposit}</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Utilities</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-start gap-2">
                          <Home className="h-4 w-4 mt-0.5 text-muted-foreground" />
                          <span>{room.utilities}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Pet Policy</h3>
                    <p className="text-muted-foreground">{room.petsAllowed}</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="amenities">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-card rounded-md">
                        {amenity.icon}
                        <span>{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl font-bold">{room.rating}</div>
                      <div>
                        <div className="flex items-center">
                          {Array(5).fill(0).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-5 w-5 ${i < Math.floor(room.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`} 
                            />
                          ))}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Based on {room.reviewCount} reviews
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {room.reviews.map((review) => (
                        <Card key={review.id}>
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-base">{review.user}</CardTitle>
                              <CardDescription>{review.date}</CardDescription>
                            </div>
                            <div className="flex items-center mt-1">
                              {Array(5).fill(0).map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`} 
                                />
                              ))}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">{review.comment}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="location">
                  <div className="space-y-4">
                    <div className="h-[300px] bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">Map view will be displayed here</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Neighborhood</h3>
                      <p className="text-muted-foreground">
                        Located in the heart of Central District, this apartment is within walking distance to restaurants, cafes, and public transportation. The neighborhood is known for its vibrant atmosphere and cultural attractions.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <Card>
                  <CardHeader>
                    <CardTitle>Book a Viewing</CardTitle>
                    <CardDescription>Schedule a time to see this property</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="w-full justify-start">
                        <Calendar className="mr-2 h-4 w-4" />
                        Today
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Calendar className="mr-2 h-4 w-4" />
                        Tomorrow
                      </Button>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM", "7:00 PM"].map((time) => (
                        <Button key={time} variant="outline" size="sm">
                          {time}
                        </Button>
                      ))}
                    </div>
                    <Button className="w-full">Request Viewing</Button>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Landlord Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">{room.landlord.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-medium">{room.landlord.name}</div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                          {room.landlord.rating} ({room.landlord.reviews} reviews)
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Response time: {room.landlord.responseTime}</span>
                      </div>
                      {room.landlord.verified && (
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-green-500" />
                          <span className="text-green-500">Verified Landlord</span>
                        </div>
                      )}
                    </div>
                    
                    <Button variant="outline" className="w-full">Contact Landlord</Button>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>AI Recommendation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Badge className="bg-green-500">98% Match</Badge>
                      <p className="text-sm text-muted-foreground">
                        Based on your preferences, this room is an excellent match for you. The location, amenities, and price align well with your search criteria.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Similar Listings */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Similar Listings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="overflow-hidden">
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
                  <CardContent className="p-4">
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
                    <Button className="w-full">View Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}