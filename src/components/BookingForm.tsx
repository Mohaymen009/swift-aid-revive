import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Request Sent Successfully!",
        description: "One of our medical coordinators will contact you shortly.",
      });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-8 sm:p-10">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-primary mb-2">Request a Quote</h3>
        <p className="text-muted-foreground">Fill in the details for a quick medical transport estimate</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Full Name</label>
            <Input placeholder="John Doe" required className="bg-gray-50/50" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Phone Number</label>
            <Input placeholder="+971 -- --- ----" required className="bg-gray-50/50" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Service Required</label>
            <Select required>
              <SelectTrigger className="bg-gray-50/50">
                <SelectValue placeholder="Select Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="icu">ICU Ambulance</SelectItem>
                <SelectItem value="bls">Basic Ambulance</SelectItem>
                <SelectItem value="transfer">Patient Transfer</SelectItem>
                <SelectItem value="homecare">Home Healthcare</SelectItem>
                <SelectItem value="doctor">Doctor on Call</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Your Location</label>
            <Select required>
              <SelectTrigger className="bg-gray-50/50">
                <SelectValue placeholder="Select Emirate" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dubai">Dubai</SelectItem>
                <SelectItem value="abu-dhabi">Abu Dhabi</SelectItem>
                <SelectItem value="sharjah">Sharjah</SelectItem>
                <SelectItem value="ajman">Ajman</SelectItem>
                <SelectItem value="rak">Ras Al Khaimah</SelectItem>
                <SelectItem value="fujairah">Fujairah</SelectItem>
                <SelectItem value="uaq">Umm Al Quwain</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Additional Details</label>
          <Textarea 
            placeholder="Please mention any specific medical requirements or destination..." 
            className="bg-gray-50/50 min-h-[100px]"
          />
        </div>

        <Button 
          type="submit" 
          disabled={loading}
          className="w-full bg-[#FF4D00] hover:bg-[#FF6200] text-white font-bold text-lg py-6 rounded-xl transition-all duration-300"
        >
          {loading ? "Sending..." : "Request Call Back"}
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
