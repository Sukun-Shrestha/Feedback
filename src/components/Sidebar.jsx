import React from "react";

const Sidebar = ({
    filterCategory,
    setFilterCategory,
    roadmapCounts,
    openRoadmap,
    openAdd,
}) => {
    const categories = [
        "All",
        "Feature",
        "Enhancement",
        "Bug",
    ];

    return (
        <aside className="space-y-6">
            {/* Header Card */}
            <div className="rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 p-6 text-white">
                <h1 className="text-2xl font-bold">
                    Frontend Mentor
                </h1>

                <p className="mt-1 text-sm text-purple-100">
                    Feedback Board
                </p>
            </div>

            {/* Categories */}
            <div className="rounded-xl bg-white p-5 shadow-md">
                <h2 className="mb-4 font-bold text-gray-800">
                    Categories
                </h2>

                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setFilterCategory(category)}
                            className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${filterCategory === category
                                    ? "bg-purple-600 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Roadmap */}
            <div className="rounded-xl bg-white p-5 shadow-md">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="font-bold text-gray-800">
                        Roadmap
                    </h2>

                    <button
                        type="button"
                        onClick={openRoadmap}
                        className="text-sm font-semibold text-purple-600 hover:underline"
                    >
                        View
                    </button>
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between">
                        <span className="text-sm text-gray-600">
                            Planned
                        </span>

                        <span className="font-bold text-gray-800">
                            {roadmapCounts.planned}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-sm text-gray-600">
                            In Progress
                        </span>

                        <span className="font-bold text-gray-800">
                            {roadmapCounts.inProgress}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-sm text-gray-600">
                            Live
                        </span>

                        <span className="font-bold text-gray-800">
                            {roadmapCounts.live}
                        </span>
                    </div>
                </div>
            </div>

            {/* Add Button */}
            <button
                type="button"
                onClick={openAdd}
                className="w-full rounded-lg bg-purple-600 px-4 py-3 font-semibold text-white transition hover:bg-purple-700"
            >
                + Add Feedback
            </button>
        </aside>
    );
};

export default Sidebar;