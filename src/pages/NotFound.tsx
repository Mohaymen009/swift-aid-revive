import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Home, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <SEOHead
        title="404 - Page Not Found | EMRS"
        description="The page you are looking for does not exist. Return to EMRS homepage."
        noIndex={true}
      />
      <div className="text-center px-4 max-w-md mx-auto">
        <h1 className="mb-4 text-7xl font-black text-primary animate-pulse-subtle">404</h1>
        <p className="mb-8 text-2xl font-semibold text-foreground">Oops! Page not found</p>
        <p className="mb-8 text-muted-foreground">
          The page you are looking for might have been moved or doesn't exist. Let's get you back on track.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link
            to="/"
            className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center gap-3">
              <Home className="w-5 h-5 text-accent" />
              <span className="font-medium">Home Page</span>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
          </Link>
          <Link
            to="/ambulance-services-uae/"
            className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center gap-3">
              <span className="font-medium">All Services</span>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
          </Link>
        </div>

        <div className="space-y-4">
          <Button asChild className="w-full bg-accent hover:bg-orange-light text-white font-bold py-6 rounded-xl">
            <Link to="/">Explore Our Website</Link>
          </Button>

          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-wider">Need Urgent Help?</p>
            <Button asChild variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-6 rounded-xl transition-all">
              <a href="tel:+971554728133" className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                <span>Call +971 55 472 8133</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
