import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";
import familyImage from "@/assets/family-solar-power.jpg";
import studyImage from "@/assets/children-studying.jpg";

const Impact = () => {
  const testimonials = [
    {
      name: "Amina Hassan",
      location: "Kilifi, Kenya",
      rating: 5,
      text: "My children can now study at night with clean LED lights. Our business has grown since we can charge phones and run small equipment. Solar has changed our lives completely.",
      image: familyImage
    },
    {
      name: "Joseph Mutua", 
      location: "Machakos, Kenya",
      rating: 5,
      text: "The payment system is so easy with M-Pesa. I pay daily when I have money, and the app shows exactly how much power I'm using. No more kerosene lamps!",
      image: studyImage
    }
  ];

  const stats = [
    { number: "50,000+", label: "Lives Improved", description: "People now have access to clean energy" },
    { number: "12,000", label: "Students", description: "Can study after sunset" },
    { number: "8,500", label: "Businesses", description: "Powered and growing" },
    { number: "₦2.5M", label: "Savings", description: "On kerosene and candles monthly" }
  ];

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transforming 
            <span className="text-transparent bg-gradient-sunrise bg-clip-text"> Communities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how solar power is creating opportunities, improving education, and building stronger communities across Africa.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-sunrise bg-clip-text text-transparent">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              </div>
              <div className="text-xl font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Stories from Our Community
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 bg-card/60 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.name}'s story`}
                      className="w-20 h-20 rounded-full object-cover shadow-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <Quote className="h-8 w-8 text-primary/30 mb-4" />
                      <p className="text-foreground mb-6 italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-muted-foreground text-sm">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-earth rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Power Your Community?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of families already enjoying clean, reliable energy. Get started today with no upfront costs.
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-sunrise hover:shadow-glow text-lg px-8 py-6 transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("signup")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Request Installation
              </Button>
              <Button
                size="lg"
                className="bg-white text-village hover:bg-white/90 text-lg px-8 py-6"
                onClick={() =>
                  window.open("https://www.firebelly.xyz/start", "_blank")
                }
              >
                Speak to Our Team
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
