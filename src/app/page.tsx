import { ConfigProvider } from "@/providers/configProvider";

import Header from "@/components/Header";
import Board from "@/components/Board";

export default function Home() {
  return (
    <ConfigProvider>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <Header />
        <Board />
      </div>
    </ConfigProvider>
  );
}
