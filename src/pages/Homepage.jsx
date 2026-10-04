import React, {
    useMemo,
    useState,
} from "react";

import {
    useDispatch,
    useSelector,
} from "react-redux";

import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import FeedbackList from "../components/FeedbackList";
import FeedbackModal from "../components/FeedbackModal";

import {
    addSuggestion,
    toggleUpvote,
} from "../Store/feedbackSlice";

const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const suggestions = useSelector(
        (state) => state.feedback.suggestions
    );

    const [filterCategory, setFilterCategory] =
        useState("All");

    const [sortBy, setSortBy] =
        useState("Most Upvotes");

    const [modalOpen, setModalOpen] =
        useState(false);

    const roadmapCounts = useMemo(
        () => ({
            planned: suggestions.filter(
                (item) => item.status === "Planned"
            ).length,

            inProgress: suggestions.filter(
                (item) => item.status === "In-Progress"
            ).length,

            live: suggestions.filter(
                (item) => item.status === "Live"
            ).length,
        }),
        [suggestions]
    );

    const openAdd = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleAdd = (suggestion) => {
        dispatch(addSuggestion(suggestion));

        setModalOpen(false);
    };

    const handleUpvote = (id) => {
        dispatch(toggleUpvote(id));
    };

    const handleView = (item) => {
        navigate(`/feedback/${item.id}`);
    };

    return (
        <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
                {/* Sidebar */}
                <Sidebar
                    filterCategory={filterCategory}
                    setFilterCategory={setFilterCategory}
                    roadmapCounts={roadmapCounts}
                    openRoadmap={() => navigate("/roadmap")}
                    openAdd={openAdd}
                />

                {/* Main */}
                <div className="space-y-6 lg:col-span-3">
                    {/* Top Bar */}
                    <div className="flex flex-col items-start justify-between gap-4 rounded-xl bg-gray-800 p-4 sm:flex-row sm:items-center">
                        <div className="flex flex-wrap items-center gap-4">
                            <span className="font-bold text-white">
                                {suggestions.length} Suggestions
                            </span>

                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-300">
                                    Sort by:
                                </span>

                                <select
                                    value={sortBy}
                                    onChange={(e) =>
                                        setSortBy(e.target.value)
                                    }
                                    className="cursor-pointer border-none bg-transparent text-sm font-semibold text-gray-400 outline-none"
                                >
                                    <option value="Most Upvotes">
                                        Most Upvotes
                                    </option>

                                    <option value="Least Upvotes">
                                        Least Upvotes
                                    </option>

                                    <option value="Most Comments">
                                        Most Comments
                                    </option>

                                    <option value="Least Comments">
                                        Least Comments
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* THIS BUTTON OPENS THE MODAL */}
                        <button
                            type="button"
                            onClick={openAdd}
                            className="whitespace-nowrap rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-700"
                        >
                            + Add Feedback
                        </button>
                    </div>

                    {/* Feedback */}
                    <FeedbackList
                        suggestions={suggestions}
                        filterCategory={filterCategory}
                        sortBy={sortBy}
                        onUpvote={handleUpvote}
                        onView={handleView}
                    />
                </div>
            </div>

            {/* Modal */}
            <FeedbackModal
                isOpen={modalOpen}
                onClose={closeModal}
                onAdd={handleAdd}
                editingFeedback={null}
            />
        </div>
    );
};

export default HomePage;