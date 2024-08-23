import React from "react";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button, buttonVariants } from "@/components/ui/button";
import { Camera, MessageCircle, PhoneOutgoingIcon } from "lucide-react";

const ContactPage = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col items-center py-36">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Hi there, trying to enquire.</h1>
          <h2 className="text-3xl font-semibold">You can do that here.</h2>
        </div>

        <div className="items-center w-1/2 py-20">
          <form action="https://formsubmit.co/gourneyza@gmail.com" method="POST" >
            <LabelInputContainer>
              <Label htmlFor="firstname" className={LABEL_STYLE}>First name</Label>
              <Input type="text" placeholder="Email"></Input>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname" className={LABEL_STYLE}>Last Name</Label>
              <Input type="text" placeholder="Last Name"></Input>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="email" className={LABEL_STYLE}>Email</Label>
              <Input type="email" placeholder="Email"></Input>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="phonenumber" className={LABEL_STYLE}>Phone Number</Label>
              <Input type="text" placeholder="Phone Number"></Input>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label className={LABEL_STYLE}>Services</Label>
              <div className="py-2"></div>
              <div className="flex flex-row gap-x-4 mt-14 items-center border p-6">
                <Checkbox>
                </Checkbox>
                <label htmlFor="">Web Design</label>
              </div>
              <div className="py-2"></div>
              <div className="flex flex-row gap-x-4 mt-14 items-center border p-6">
                <Checkbox/>
                <label htmlFor="">Web Development</label>
              </div>
              <div className="py-2"></div>
              <div className="flex flex-row gap-x-4 mt-14 items-center border p-6">
                <Checkbox/>
                <label htmlFor="">Software Design</label>
              </div>
              <div className="py-4"></div>
              <Button className={cn(buttonVariants({variant: "default"}))}>
                Submit
              </Button>
            </LabelInputContainer>

          </form>
          <div className="py-2 flex flex-row items-center justify-center">
            <div className="border w-full"></div>
            <span className="mx-5 font-semibold">Or</span>
            <div className="border w-full"></div>
          </div>
          
          <div className="flex flex-col">
            <Button className={cn(buttonVariants({variant:"ghost"}), "w-full mt-10")}>
              <MessageCircle/>
              <span className="text-center mx-auto">Whatsapp</span>
            </Button>
          </div>

          <div className="flex flex-col">
            <Button className={cn(buttonVariants({variant:"ghost"}), "w-full mt-10")}>
              <Camera/>
              <span className="text-center mx-auto">Instagram</span>
            </Button>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full mb-10", className)}>
      {children}
    </div>
  );
};

const LABEL_STYLE = "font-semibold text-[16px]"

export default ContactPage;
