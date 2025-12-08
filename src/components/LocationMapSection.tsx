import { MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LocationMapSection() {
  const handle3DMapClick = () => {
    window.open(
      "https://earth.google.com/web/@25.00698959,85.37785444,93.47028002a,2368.13171996d,35y,90.37246327h,60.0107588t,0.00000003r/data=CgRCAggBMigKJgokCiAxVGZvcFJ5amVSQzg3ajRSLUc2b256ZS1oTXJUV2JNVSACOgMKATBCAggASgcIsOywOhAB",
      "_blank"
    );
  };

  return (
    <section id="location" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            Our Location
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Us on the Map
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit our office at Pilkhi Mauja, Near CRPF Camp, Rajgir, Bihar. 
            Easy to reach and conveniently located near major landmarks.
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="w-full rounded-2xl overflow-hidden shadow-xl mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.242771238519!2d85.41002497560245!3d25.025833977821595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2efc0c8b475a5%3A0x5b4bcb70a95e66ef!2sSQUARE%20GROUP!5e0!3m2!1sen!2sin!4v1765185971774!5m2!1sen!2sin"
            className="w-full h-[300px] md:h-[450px] lg:h-[500px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kailasha Hill Valley Location"
          />
        </div>

        {/* 3D Map CTA Button */}
        <div className="text-center">
          <Button
            onClick={handle3DMapClick}
            size="lg"
            className="bg-gradient-to-r from-primary to-green-600 hover:from-green-600 hover:to-primary text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Globe className="w-5 h-5 mr-2" />
            VIEW 3D MAP
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Explore our project location in Google Earth 3D view
          </p>
        </div>
      </div>
    </section>
  );
}
