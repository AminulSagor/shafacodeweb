'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const VideoPlayer = () => {
  const [open, setOpen] = useState(true); // show popup initially
  const [allowSound, setAllowSound] = useState(false);

  const videoIdBangla = 'qrqlHdevfOc';
  const videoIdEnglish = 'B7EHdqms3hU';

  const autoplayUrlBangla = `https://www.youtube.com/embed/${videoIdBangla}?autoplay=1&mute=${
    allowSound ? '0' : '1'
  }&rel=0&modestbranding=1`;

  const autoplayUrlEnglish = `https://www.youtube.com/embed/${videoIdEnglish}?autoplay=1&mute=${
    allowSound ? '0' : '1'
  }&rel=0&modestbranding=1`;

  return (
    <>
      {/* POPUP */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md text-center">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Play Video With Sound?
            </DialogTitle>
            <DialogDescription>
              To play the video with sound, click the button below.
            </DialogDescription>
          </DialogHeader>

          <div className="flex items-center flex-col">
            <Button
              className="mt-4 w-full  hover:cursor-pointer bg-sky-600 hover:bg-sky-500 text-white font-semibold"
              onClick={() => {
                setAllowSound(true);
                setOpen(false);
              }}
            >
              Start Video With Sound
            </Button>

            <Button
              variant="outline"
              className="mt-2 w-full hover:cursor-pointer font-semibold"
              onClick={() => {
                setAllowSound(false);
                setOpen(false);
              }}
            >
              Start Muted
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* MAIN VIDEO PLAYER */}
      <div className="border border-slate-700 rounded-lg p-4">
        <Tabs defaultValue="bangla">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              See how the affiliate program works
            </h2>
            <TabsList className="bg-transparent border border-slate-700 ">
              <TabsTrigger
                className="text-white data-[state=active]:bg-background data-[state=active]:text-foreground"
                value="bangla"
              >
                Bangla
              </TabsTrigger>
              <TabsTrigger
                className="text-white data-[state=active]:bg-background data-[state=active]:text-foreground"
                value="english"
              >
                English
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="bangla">
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg bg-[#0f172a]">
              <div className="pt-[56.25%]"></div>
              <iframe
                src={autoplayUrlBangla}
                className="absolute inset-0 w-full h-full rounded-xl"
                title="Bangla Video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </TabsContent>

          <TabsContent value="english">
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg bg-[#0f172a]">
              <div className="pt-[56.25%]"></div>
              <iframe
                src={autoplayUrlEnglish}
                className="absolute inset-0 w-full h-full rounded-xl"
                title="English Video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default VideoPlayer;
