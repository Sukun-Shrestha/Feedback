import React, { useState } from "react";

import {
    ArrowLeft,
    ChevronUp,
    MessageSquare,
    Trash2,
} from "lucide-react";

import {
    useDispatch,
    useSelector,
} from "react-redux";

import { useNavigate, useParams } from "react-router-dom";

import {
    addComment,
    deleteSuggestion,
    toggleUpvote,
    updateSuggestion,
} from "../Store/feedbackSlice";

import FeedbackModal from "../components/FeedbackModal";

const DetailPage = () => {
    const { id } = useParams();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const suggestion = useSelector((state) =>
        state.feedback.suggestions.find(
            (item) => item.id === Number(id)
        )
    );

    const comments = useSelector(
        (state) =>
            state.feedback.comments[Number(id)] || []
    );

    const [editOpen, setEditOpen] =
        useState(false);

    const [commentText, setCommentText] =
        useState("");

    if (!suggestion) {
        return (
            <div className="mx-auto max-w-4xl p-6">
                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="mb-6 flex items-center gap-2 text-sm font-semibold text-purple-600"
                >
                    <ArrowLeft size={18} />
                    Go Back
                </button>

                <div className="rounded-xl bg-white p-10 text-center shadow-md">
                    <h1 className="text-2xl font-bold">
                        Feedback not found
                    </h1>
                </div>
            </div>
        );
    }

    const handleDelete = () => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this feedback?"
        );

        if (!confirmed) {
            return;
        }

        dispatch(deleteSuggestion(suggestion.id));

        navigate("/");
    };

    const handleUpdate = (data) => {
        dispatch(
            updateSuggestion({
                id: suggestion.id,
                ...data,
            })
        );

        setEditOpen(false);
    };

    const handleComment = (e) => {
        e.preventDefault();

        if (!commentText.trim()) {
            return;
        }

        dispatch(
            addComment({
                suggestionId: suggestion.id,
                comment: {
                    user: "You",
                    comment: commentText,
                },
            })
        );

        setCommentText("");
    };

    return (
        <div className="mx-auto max-w-4xl space-y-6">
            {/* Back */}
            <button
                type="button"
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-purple-600"
            >
                <ArrowLeft size={18} />
                Go Back
            </button>

            {/* Main Feedback */}
            <div className="rounded-xl bg-white p-6 shadow-md">
                <div className="flex items-start gap-5">
                    {/* Upvote */}
                    <button
                        type="button"
                        onClick={() =>
                            dispatch(toggleUpvote(suggestion.id))
                        }
                        className={`flex min-w-[60px] flex-col items-center rounded-lg px-3 py-2 ${suggestion.upvoted
                                ? "bg-purple-600 text-white"
                                : "bg-gray-100 text-gray-700"
                            }`}
                    >
                        <ChevronUp size={22} />

                        <span className="font-bold">
                            {suggestion.upvotes}
                        </span>
                    </button>

                    {/* Content */}
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold text-gray-800">
                            {suggestion.title}
                        </h1>

                        <p className="mt-2 text-gray-500">
                            {suggestion.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-3">
                            <span className="rounded-lg bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600">
                                {suggestion.category}
                            </span>

                            <span className="rounded-lg bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-600">
                                {suggestion.status}
                            </span>

                            <span className="flex items-center gap-1 text-sm text-gray-500">
                                <MessageSquare size={17} />
                                {suggestion.comments}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex justify-end gap-3 border-t pt-5">
                    <button
                        type="button"
                        onClick={() => setEditOpen(true)}
                        className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700"
                    >
                        Edit
                    </button>

                    <button
                        type="button"
                        onClick={handleDelete}
                        className="flex items-center gap-2 rounded-lg bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-200"
                    >
                        <Trash2 size={16} />
                        Delete
                    </button>
                </div>
            </div>

            {/* Comments */}
            <div className="rounded-xl bg-white p-6 shadow-md">
                <h2 className="mb-6 text-xl font-bold text-gray-800">
                    {comments.length} Comments
                </h2>

                <div className="space-y-5">
                    {comments.map((comment) => (
                        <div
                            key={comment.id}
                            className="border-b pb-5 last:border-b-0"
                        >
                            <p className="font-semibold text-gray-800">
                                {comment.user}
                            </p>

                            <p className="mt-1 text-gray-600">
                                {comment.comment}
                            </p>
                        </div>
                    ))}

                    {comments.length === 0 && (
                        <p className="text-gray-500">
                            No comments yet.
                        </p>
                    )}
                </div>

                {/* Add Comment */}
                <form
                    onSubmit={handleComment}
                    className="mt-6"
                >
                    <textarea
                        value={commentText}
                        onChange={(e) =>
                            setCommentText(e.target.value)
                        }
                        placeholder="Add a comment..."
                        rows="4"
                        className="w-full resize-none rounded-lg border border-gray-300 p-4 outline-none focus:border-purple-500"
                    />

                    <div className="mt-3 flex justify-end">
                        <button
                            type="submit"
                            className="rounded-lg bg-purple-600 px-5 py-2.5 font-semibold text-white hover:bg-purple-700"
                        >
                            Post Comment
                        </button>
                    </div>
                </form>
            </div>

            {/* Edit Modal */}
            <FeedbackModal
                isOpen={editOpen}
                onClose={() => setEditOpen(false)}
                onAdd={handleUpdate}
                editingFeedback={suggestion}
            />
        </div>
    );
};

export default DetailPage;