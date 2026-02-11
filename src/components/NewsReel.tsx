import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { newsReelItems } from "@/data/newsReel";

const NewsReel = () => {
  return (
    <section id="news" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            News reel
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Solar Village in the spotlight
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Track the latest coverage, announcements, and ecosystem milestones as we
            scale verified solar access.
          </p>
        </div>

        <div className="mt-12">
          <div className="mb-4 flex items-center justify-center gap-3 text-sm font-medium text-muted-foreground md:hidden">
            <span aria-hidden="true" className="animate-pulse text-base">
              ←
            </span>
            <p className="animate-pulse">Swipe left or right for more news</p>
            <span aria-hidden="true" className="animate-pulse text-base">
              →
            </span>
          </div>
          <Carousel
            opts={{ align: "start", loop: false }}
            className="relative"
          >
            <CarouselContent>
              {newsReelItems.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-full md:basis-1/2 xl:basis-1/3"
                >
                  <Card className="h-full border-0 shadow-sm bg-card/90">
                    <CardContent className="flex h-full flex-col gap-6 p-6">
                      <div className="overflow-hidden rounded-2xl bg-muted">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-56 w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-4">
                        <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                          <time dateTime={item.dateTime}>{item.date}</time>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-between rounded-full border border-border px-5 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/10"
                        aria-label={`Read article: ${item.title}`}
                      >
                        Read article
                        <span aria-hidden="true">↗</span>
                      </a>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default NewsReel;
