import { cn } from "@/lib/utils";

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <section className={cn("max-w-[95%] w-full mx-auto overflow-x-hidden", className)}>{children}</section>;
};

export default Container;
