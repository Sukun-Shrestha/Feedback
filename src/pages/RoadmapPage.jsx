import React from "react";

import {
    ArrowLeft,
    ChevronUp,
} from "lucide-react";

import {
    useDispatch,
    useSelector,
} from "react-redux";

import { useNavigate } from "react-router-dom";

import { toggleUpvote } from "../Store/feedbackSlice";

const RoadmapPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const suggestions = useSelector(
        (state) => state.feedback.suggestions
    );

    const planned = suggestions.filter(
        (item) => item.status === "Planned"
    );

    const inProgress = suggestions.filter(
        (item) => item.status === "In-Progress"
    );

    const live = suggestions.filter(
        (item) => item.status === "Live"
    );

    const RoadmapColumn = ({
        title,
        description,
        items,
    }) => {
        return (
            <div>
                <div className="mb-4">
                    <h2 className="text-xl font-bold text-gray-800">
                        {title}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        {description}
                    </p>
                </div>

                <div className="space-y-4">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-xl bg-white p-5 shadow-md"
                        >
                            <div className="mb-3 h-1 rounded-full bg-purple-500" />

                            <h3 className="font-bold text-gray-800">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-sm text-gray-500">
                                {item.description}
                            </p>

                            <span className="mt-3 inline-block rounded-lg bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                                {item.category}
                            </span>

                            <div className="mt-4">
                                <button
                                    type="button"
                                    onClick={() =>
                                        dispatch(toggleUpvote(item.id))
                                    }
                                    className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold ${item.upvoted
                                            ? "bg-purple-600 text-white"
                                            : "bg-gray-100 text-gray-700"
                                        }`}
                                >
                                    <ChevronUp size={17} />
                                    {item.upvotes}
                                </button>
                            </div>
                        </div>
                    ))}

                    {items.length === 0 && (
                        <div className="rounded-xl bg-white p-6 text-sm text-gray-500 shadow-md">
                            No feedback here yet.
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="mx-auto max-w-6xl">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between rounded-xl bg-gray-800 p-6">
                <div>
                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>

                    <h1 className="text-2xl font-bold text-white">
                        Roadmap
                    </h1>

                    <p className="mt-1 text-sm text-gray-400">
                        Track upcoming and completed features.
                    </p>
                </div>
            </div>

            {/* Columns */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <RoadmapColumn
                    title={`Planned (${planned.length})`}
                    description="Ideas planned for development."
                    items={planned}
                />

                <RoadmapColumn
                    title={`In Progress (${inProgress.length})`}
                    description="Features currently being developed."
                    items={inProgress}
                />

                <RoadmapColumn
                    title={`Live (${live.length})`}
                    description="Features that are already available."
                    items={live}
                />
            </div>
        </div>
    );
};

export default RoadmapPage;