import MainScene from '@/components/scenes/MainScene';
import GameUI from '@/components/ui/GameUI';

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <div className="relative h-full w-full">
        <MainScene />
      </div>

      <GameUI />
    </main>
  );
}