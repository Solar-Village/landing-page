import type { MouseEvent } from "react";
import { toast } from "@/hooks/use-toast";

export const showConceptToast = (e?: MouseEvent) => {
  e?.preventDefault();
  toast({
    description:
      "This is a concept site, many links don't work. Please contact Firebelly.xyz if you are interested in helping make this project a reality",
  });
};
