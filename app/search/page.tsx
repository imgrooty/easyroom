import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Search, Star, Wifi, Home, Thermometer, Coffee, Car, Tv } from "lucide-react";

export default function SearchPage() {
  // Mock data for room listings
  const roomListings = [
    {
      id: 1,
      title: "Modern Studio in Downtown",
      location: "Central District, New York",
      price: 1200,
      type: "Studio",
      rating: 4.9,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      amenities: ["WiFi", "Furnished", "AC", "Kitchen", "TV"]
    },
    {
      id: 2,
      title: "Cozy Room in Shared Apartment",
      location: "Brooklyn, New York",
      price: 850,
      type: "Shared",
      rating: 4.7,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      amenities: ["WiFi", "Furnished", "Shared Kitchen", "Laundry"]
    },
    {
      id: 3,
      title: "Luxury One Bedroom with View",
      location: "Upper East Side, New York",
      price: 2100,
      type: "Apartment",
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      amenities: ["WiFi", "Furnished", "AC", "Kitchen", "Gym", "Parking"]
    },
    {
      id: 4,
      title: "Private Room in Family Home",
      location: "Queens, New York",
      price: 750,
      type: "Single",
      rating: 4.6,
      reviews: 72,
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      amenities: ["WiFi", "Furnished", "Shared Kitchen", "Garden"]
    },
    {
      id: 5,
      title: "Modern Loft in Converted Warehouse",
      location: "Williamsburg, Brooklyn",
      price: 1800,
      type: "Studio",
      rating: 4.9,
      reviews: 103,
      image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      amenities: ["WiFi", "Furnished", "AC", "Kitchen", "Rooftop"]
    },
    {
      id: 6,
      title: "Sunny Room with Private Bath",
      location: "Park Slope, Brooklyn",
      price: 1100,
      type: "Single",
      rating: 4.7,
      reviews: 91,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      amenities: ["WiFi", "Furnished", "Private Bath", "Shared Kitchen"]
    }
  ];

  // Helper function to render amenity icons
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="h-4 w-4" />;
      case 'ac':
        return <Thermometer className="h-4 w-4" />;
      case 'kitchen':
      case 'shared kitchen':
        return <Coffee className="h-4 w-4" />;
      case 'parking':
        return <Car className="h-4 w-4" />;
      case 'tv':
        return <Tv className="h-4 w-4" />;
      default:
        return <Home className="h-4 w-4" />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-6">Find Your Perfect Room</h1>
          
          {/* Search and Filter Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <div className="lg:col-span-4">
              <div className="bg-card rounded-lg shadow-sm p-4 mb-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      type="text" 
                      placeholder="Search by location, neighborhood, or address" 
                      className="pl-10"
                    />
                  </div>
                  <Button>Search</Button>
                </div>
              </div>
            </div>
            
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg shadow-sm p-4 sticky top-20">
                <h2 className="font-semibold text-lg mb-4">Filters</h2>
                
                <div className="space-y-6">
                  {/* Price Range */}
                  <div>
                    <h3 className="font-medium mb-2">Price Range</h3>
                    <div className="space-y-4">
                      <Slider defaultValue={[0, 2000]} min={0} max={5000} step={100} />
                      <div className="flex items-center justify-between">
                        <span className="text-sm">$0</span>
                        <span className="text-sm">$5,000+</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Room Type */}
                  <div>
                    <h3 className="font-medium mb-2">Room Type</h3>
                    <div className="space-y-2">
                      {["Single Room", "Shared Room", "Studio", "Apartment"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox id={`type-${type}`} />
                          <label htmlFor={`type-${type}`} className="text-sm">{type}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Amenities */}
                  <div>
                    <h3 className="font-medium mb-2">Amenities</h3>
                    <div className="space-y-2">
                      {["WiFi", "Furnished", "AC", "Kitchen", "Private Bath", "Laundry", "Parking", "Gym"].map((amenity) => (
                        <div key={amenity} className="flex items-center space-x-2">
                          <Checkbox id={`amenity-${amenity}`} />
                          <label htmlFor={`amenity-${amenity}`} className="text-sm">{amenity}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Sort By */}
                  <div>
                    <h3 className="font-medium mb-2">Sort By</h3>
                    <Select defaultValue="recommended">
                      <SelectTrigger>
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recommended">Recommended</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="rating">Highest Rated</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>
            </div>
            
            {/* Results */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="grid">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-muted-foreground">Showing {roomListings.length} results</p>
                  <TabsList>
                    <TabsTrigger value="grid">Grid</TabsTrigger>
                    <TabsTrigger value="list">List</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="grid" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {roomListings.map((room) => (
                      <Card key={room.id} className="overflow-hidden">
                        <div className="relative h-48">
                          <img
                            src={room.image}
                            alt={room.title}
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute top-2 right-2 bg-background/90 px-2 py-1 rounded text-sm font-medium">
                            ${room.price}/mo
                          </div>
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-1 mb-1">
                            {Array(5).fill(0).map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < Math.floor(room.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`} 
                              />
                            ))}
                            <span className="text-sm text-muted-foreground ml-1">{room.rating} ({room.reviews})</span>
                          </div>
                          <CardTitle className="text-lg">{room.title}</CardTitle>
                          <CardDescription className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {room.location}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="flex flex-wrap gap-2 mb-2">
                            <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                              {room.type}
                            </span>
                            {room.amenities.slice(0, 3).map((amenity) => (
                              <span key={amenity} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full flex items-center gap-1">
                                {getAmenityIcon(amenity)}
                                {amenity}
                              </span>
                            ))}
                            {room.amenities.length > 3 && (
                              <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                                +{room.amenities.length - 3} more
                              </span>
                            )}
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full">View Details</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="list" className="mt-0">
                  <div className="space-y-4">
                    {roomListings.map((room) => (
                      <Card key={room.id} className="overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="relative h-48 md:w-1/3">
                            <img
                              src={room.image}
                              alt={room.title}
                              className="object-cover w-full h-full"
                            />
                            <div className="absolute top-2 right-2 bg-background/90 px-2 py-1 rounded text-sm font-medium">
                              ${room.price}/mo
                            </div>
                          </div>
                          <div className="flex-1 p-4">
                            <div className="flex items-center gap-1 mb-1">
                              {Array(5).fill(0).map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${i < Math.floor(room.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`} 
                                />
                              ))}
                              <span className="text-sm text-muted-foreground ml-1">{room.rating} ({room.reviews})</span>
                            </div>
                            <h3 className="font-bold text-lg mb-1">{room.title}</h3>
                            <div className="flex items-center text-sm text-muted-foreground mb-3">
                              <MapPin className="h-3 w-3 mr-1" />
                              <span>{room.location}</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                                {room.type}
                              </span>
                              {room.amenities.map((amenity) => (
                                <span key={amenity} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full flex items-center gap-1">
                                  {getAmenityIcon(amenity)}
                                  {amenity}
                                </span>
                              ))}
                            </div>
                            <Button>View Details</Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
              
              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="icon" disabled>
                    &lt;
                  </Button>
                  <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    &gt;
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}