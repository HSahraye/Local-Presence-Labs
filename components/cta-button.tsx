import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTAButtonProps = ButtonProps & {
  href: string;
  withArrow?: boolean;
};

export function CTAButton({
  href,
  children,
  withArrow = false,
  className,
  ...props
}: CTAButtonProps) {
  return (
    <Button asChild className={cn("gap-2", className)} {...props}>
      <Link href={href}>
        {children}
        {withArrow ? <ArrowRight className="h-4 w-4" /> : null}
      </Link>
    </Button>
  );
}
