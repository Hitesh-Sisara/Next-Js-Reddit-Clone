import Link from "next/link";
import { toast } from "./use-toast";
import { buttonVariants } from "@/components/ui/Button";

export const useCustomToasts = () => {
  const loginToast = () => {
    const { dismiss } = toast({
      title: "Login Required",
      description: "You n'eed to be logged in",
      variant: "destructive",
      action: (
        <Link
          href="/sign-in"
          onClick={() => {
            dismiss;
          }}
          className={buttonVariants({ variant: "outline" })}
        >
          Login
        </Link>
      ),
    });
  };

  return { loginToast };
};
