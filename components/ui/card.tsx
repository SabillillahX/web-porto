import * as React from "react";
import { cn } from "../../src/lib/utils";

// This empty interface is intentionally kept for future extensions
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl bg-gray-800 p-6 shadow-md",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";