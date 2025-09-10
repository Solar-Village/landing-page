import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBackButton from "@/components/FloatingBackButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
              className="rounded-md font-medium data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-bold"
            >
              Whitepaper
            </TabsTrigger>
            <TabsTrigger
              value="accelerator"
              className="rounded-md font-medium data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-bold"
            >
              SDG Blockchain Accelerator
            </TabsTrigger>
          </TabsList>
          <TabsContent value="whitepaper" className="mt-4">
            <iframe
              src="https://drive.google.com/file/d/14u-WN5Aj6X8zZQy4-L9HIUd0lq3JAENs/preview"
              className="h-screen w-full"
              title="SolarVillage Whitepaper"
            />
          </TabsContent>
          <TabsContent value="accelerator" className="mt-4">
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vTlIBqu76DilHtf7ZLAQ3MkdEDI4SjF1WljVfxattxGUR2QDqKsfs66ucc45_bcMpNdm93pJEdbtvvL/pub?embedded=true"
              className="mx-auto h-screen w-full max-w-[900px]"
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
