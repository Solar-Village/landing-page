import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBackButton from "@/components/FloatingBackButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import whitepaperPDF from "@/assets/SolarVillage-Nigeria.pdf";

const Whitepaper = () => {
  useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.userAgent.includes("jsdom")) {
      return;
    }
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingBackButton />
      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="whitepaper" className="w-full">
          <TabsList className="grid w-full grid-cols-2 rounded-lg bg-gradient-sunrise p-1 text-white shadow">
            <TabsTrigger
              value="whitepaper"
              className="rounded-md data-[state=active]:bg-black/30"
            >
              Whitepaper
            </TabsTrigger>
            <TabsTrigger
              value="accelerator"
              className="rounded-md data-[state=active]:bg-black/30"
            >
              SDG Blockchain Accelerator
            </TabsTrigger>
          </TabsList>
          <TabsContent value="whitepaper" className="mt-4">
            <iframe
              src={whitepaperPDF}
              className="w-full h-screen"
              title="SolarVillage Whitepaper"
            />
          </TabsContent>
          <TabsContent value="accelerator" className="mt-4">
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vTlIBqu76DilHtf7ZLAQ3MkdEDI4SjF1WljVfxattxGUR2QDqKsfs66ucc45_bcMpNdm93pJEdbtvvL/pub?embedded=true"
              className="w-full h-screen"
              title="SDG Blockchain Accelerator"
            />
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Whitepaper;
