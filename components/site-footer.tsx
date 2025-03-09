import Link from "next/link";
import { Home } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Home className="h-6 w-6" />
              <span className="font-bold text-xl">EasyRooms</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Find your perfect room with our AI-powered platform.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/search" className="hover:underline">Search Rooms</Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">For Landlords</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/landlord/register" className="hover:underline">Become a Landlord</Link>
              </li>
              <li>
                <Link href="/landlord/dashboard" className="hover:underline">Landlord Dashboard</Link>
              </li>
              <li>
                <Link href="/landlord/list-property" className="hover:underline">List a Property</Link>
              </li>
              <li>
                <Link href="/landlord/resources" className="hover:underline">Resources</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="hover:underline">Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:underline">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} EasyRooms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}