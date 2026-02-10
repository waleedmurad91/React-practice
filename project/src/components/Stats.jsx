import React from "react";

function Stats() {
  return (
    <div className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="dark:bg-[#ffffff0d] bg-gray-200  rounded-3xl p-12 border dark:border-[#ffffff1a] border-gray-400">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-5xl font-bold text-cyan-500">200+</h3>
              <p className="text-gray-400 uppercase tracking-widest text-sm">
                Projects Completed
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-5xl font-bold text-[#ff2d75]">98%</h3>
              <p className="text-gray-400 uppercase tracking-widest text-sm">
                Client Satisfaction
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-5xl font-bold text-blue-500">15</h3>
              <p className="text-gray-400 uppercase tracking-widest text-sm">
                Industry Awards
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-5xl font-bold text-cyan-500">8</h3>
              <p className="text-gray-400 uppercase tracking-widest text-sm">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
