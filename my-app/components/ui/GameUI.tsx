'use client';

import { Button } from '@/components/ui/button';

const GameUI = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="flex flex-col gap-4 p-8 pointer-events-auto">
        <Button variant="outline" className="w-48 text-xl h-14">
          スタート
        </Button>
        <Button variant="outline" className="w-48 text-xl h-14">
          設定
        </Button>
      </div>
    </div>
  );
};

export default GameUI;