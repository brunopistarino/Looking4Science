import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import LandingSection from "@/components/landing-section";

export default function Contribute() {
  return (
    <LandingSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <img
          src="https://www.nasa.gov/wp-content/uploads/2018/07/174116main_2006_01777_highres.jpg?resize=2000,1600"
          alt=""
        />
        <div className="flex flex-col gap-12 md:px-12">
          <div className="flex flex-col gap-5">
            <p className="text-3xl font-semibold">Help the open science</p>
            <p className="text-xl text-slate-600">
              Do you want to include any post?
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <Label htmlFor="url">Post URL</Label>
              <Input id="url" />
            </div>
            <div>
              <Label htmlFor="name">Title</Label>
              <Input id="name" />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" />
            </div>
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </LandingSection>
  );
}
