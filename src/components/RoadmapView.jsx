import { ArrowLeft, ChevronUp, MessageSquare } from "lucide-react";
import React from "react";

function RoadmapView() {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-4 flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <button
                        className="flex items-center gap-2 text-white
                        hover:text-gray-300 font-semibold"
                    >
                        <ArrowLeft size={20} />
                        Go Back
                    </button>

                    <div className="ml-4">
                        <h1 className="text-white font-bold text-xl">
                            Roadmap
                        </h1>
                    </div>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold
                 text-sm transtion-all ">
                    + Add Feedback
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* I will use map method */}

                <div>
                    <h2 className="font-bold text-gray-800 mb-1">
                        Category Name & Length
                    </h2>

                    <p className="text-gray-600 text-sm mb-4">
                        Category Name
                    </p>

                    <div className="space-y-4">
                        {/* I will use map method */}

                        <div
                            className="bg-white rounded-xl p-6 border-t-4
                cursor-pointer hover:shadow-lg transition-all"
                        >
                            <div className="mb-2">
                                <div className="inline-block w-2 h-2 rounded-full mr-2"></div>

                                <span className="text-gray-600 text-sm">
                                    Category Name
                                </span>
                            </div>
                            <h3 className="font-bold text-gray-800 text-lg mb-2">Item Title</h3>
                            <p className="text-gray-600 mb-3">Item Description</p>
                            <span className="inline-block bg-blue-500 text-blue-600 px-4 py-1 rounded-lg text-sm font-semibold mb-4">
                                Item Category
                            </span>
                            <div className="flex items-center gap-2 rounded-lg px-3 py-2 transition-all">
                                <button className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-all`}>
                                    <ChevronUp size={16} />
                                    <span className="font-bold text-sm">Item Votes</span>
                                </button>
                                <div className="flex items-center gap-2">
                                    <MessageSquare className="text-gray-400" size={18} />
                                    <span className="font-bold">Item Comments</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoadmapView;

