import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
            <div>
              <Input
                placeholder="Your Name"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                rows={6}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;