import Image from 'next/image';
import Clock from '@/components/icons/Clock';
import Ethereum from '@/components/icons/Ethereum';
import View from '@/components/icons/View';

export default function Home() {
  return (
    <div className="group cursor-pointer w-[350px] h-[596px] bg-blue-900 flex justify-center items-center p-[24px] rounded-[24px]">
      <div className="w-[302px] flex flex-col gap-[24px]">
        {/* 이미지 */}
        <div className="relative w-full h-[302px] rounded-[8px] overflow-hidden">
          <Image src="/images/image-equilibrium.jpg" alt="equilibrium" fill />
          {/* 이미지 래퍼 */}
          <div className="absolute inset-0 bg-cyan-400/50 opacity-0 group-hover:opacity-100 transition-all duration-200 flex justify-center items-center">
            <View />
          </div>
        </div>
        <div className="w-full flex flex-col gap-[24px]">
          <div className="w-full flex flex-col gap-[24px]">
            <div className="w-full flex flex-col gap-[16px]">
              <h1 className="text-preset-1 text-white group-hover:text-cyan-400 transition-all duration-200">
                Equilibrium #3429
              </h1>
              <p className="text-preset-2 text-blue-500">Our Equilibrium collection promotes balance and calm</p>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="flex gap-[8px] items-center">
                <Ethereum />
                <p className="text-preset-3-semibold text-cyan-400">0.041 ETH</p>
              </div>
              <div className="flex gap-[8px] items-center">
                <Clock />
                <p className="text-preset-3-regular text-blue-500">3 days left</p>
              </div>
            </div>
            <div className="w-full h-px bg-blue-800"></div>
            <div className="flex gap-[16px] items-center">
              <div className="relative size-[33px] rounded-full border border-white ">
                <Image src="/images/image-avatar.png" alt="avatar" fill />
              </div>
              <div className="flex items-center gap-[8px]">
                <p className="text-preset-3-regular text-blue-500">Creation of</p>
                <p className="text-preset-3-regular text-white group-hover:text-cyan-400 transition-all duration-200">
                  Jules Wyvern
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
