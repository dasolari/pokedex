import type { NextPage } from 'next';

const CardSkeleton: NextPage = () => {
  return (
    <div className="w-full h-full">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-2 py-1">
          <div className="h-40 bg-gray-500 bg-opacity-80 rounded"></div>
          <div className="flex-1 space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-gray-500 bg-opacity-80 rounded col-span-1"></div>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-gray-500 bg-opacity-80 rounded"></div>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-4 bg-gray-500 bg-opacity-80 rounded col-span-1"></div>
                <div className="h-4 bg-gray-500 bg-opacity-80 rounded col-span-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
