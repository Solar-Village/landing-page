import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { newsReelItems } from "@/data/newsReel";

const ONE_TIME_SCROLL_DELAY_MS = 2000;

const renderDescriptionWithBold = (description: string) => {
  const parts = description.split("**");

  return parts.map((part, index) => {
    const key = `${part}-${index}`;

    if (index % 2 === 1) {
      return <strong key={key}>{part}</strong>;
    }

    return <Fragment key={key}>{part}</Fragment>;
  });
};

const NewsReel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(1);
  const [oneTimeScrollEnabled, setOneTimeScrollEnabled] = useState(true);
  const [isNewsReelVisible, setIsNewsReelVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const initialIndex = useMemo(() => {
    if (newsReelItems.length < 2) {
      return 0;
    }

    return 1;
  }, []);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    if (typeof window === "undefined" || !window.IntersectionObserver) {
      setIsNewsReelVisible(true);
      return;
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setIsNewsReelVisible(true);
        }
      },
      { threshold: [0.5] }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrentSlide = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    updateCurrentSlide();
    api.on("select", updateCurrentSlide);

    const disableOneTimeScroll = () => {
      setOneTimeScrollEnabled(false);
    };

    api.on("pointerDown", disableOneTimeScroll);
    api.on("slideFocus", disableOneTimeScroll);

    return () => {
      api.off("select", updateCurrentSlide);
      api.off("pointerDown", disableOneTimeScroll);
      api.off("slideFocus", disableOneTimeScroll);
    };
  }, [api]);

  useEffect(() => {
    if (!api || !oneTimeScrollEnabled || !isNewsReelVisible) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      api.scrollTo(0);
      setOneTimeScrollEnabled(false);
    }, ONE_TIME_SCROLL_DELAY_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [api, oneTimeScrollEnabled, isNewsReelVisible]);

  const handlePrevious = () => {
    setOneTimeScrollEnabled(false);
    api?.scrollPrev();
  };

  const handleNext = () => {
    setOneTimeScrollEnabled(false);
    api?.scrollNext();
  };

  const handleGoToSlide = (index: number) => {
    setOneTimeScrollEnabled(false);
    api?.scrollTo(index);
  };

  return (
    <section id="news" className="py-20 bg-muted/20" ref={sectionRef}>
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
          <Carousel
            opts={{ align: "start", loop: false, startIndex: initialIndex }}
            className="relative"
            setApi={setApi}
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
                          {renderDescriptionWithBold(item.description)}
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

            <button
              type="button"
              className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#556b2f]/70 text-2xl font-bold text-white shadow-md backdrop-blur transition hover:bg-[#556b2f]/85 lg:-left-6"
              aria-label="Previous news item"
              onClick={handlePrevious}
            >
              <span aria-hidden="true">&lt;</span>
            </button>

            <button
              type="button"
              className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#556b2f]/70 text-2xl font-bold text-white shadow-md backdrop-blur transition hover:bg-[#556b2f]/85 lg:-right-6"
              aria-label="Next news item"
              onClick={handleNext}
            >
              <span aria-hidden="true">&gt;</span>
            </button>
          </Carousel>

          <div
            className="mt-6 flex items-center justify-center gap-2"
            aria-label="News reel slide indicator"
          >
            {newsReelItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-all",
                  currentSlide === index
                    ? "bg-primary ring-2 ring-primary/30"
                    : "bg-muted-foreground/35 hover:bg-muted-foreground/60"
                )}
                onClick={() => handleGoToSlide(index)}
                aria-label={`Go to news item ${index + 1}`}
                aria-current={currentSlide === index ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsReel;
