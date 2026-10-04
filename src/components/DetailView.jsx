import { ArrowLeft, ChevronUp, MessageSquare } from "lucide-react";
import React from "react";

const DetailView = () => {
    return (
        <div className="max-w-3xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold">
                    <ArrowLeft size={20} />
                    Go Back
                </button>

                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2
                    rounded-lg font-semibold transition-all"
                >
                    Edit Feedback
                </button>
            </div>

            {/* Feedback Details */}
            <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-6">
                    {/* Vote Button */}
                    <button className="flex flex-col items-center gap-1 rounded-lg px-3 py-2 transition-all">
                        <ChevronUp size={16} />
                        <span className="font-bold text-sm">
                            Feedback Votes
                        </span>
                    </button>

                    {/* Feedback Content */}
                    <div className="flex-1">
                        <h2 className="font-bold text-gray-800 text-xl mb-2">
                            Feedback Title
                        </h2>

                        <p className="text-gray-600 mb-3">
                            Feedback Description
                        </p>

                        <span className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold">
                            Feedback Category
                        </span>
                    </div>

                    {/* Comments */}
                    <div className="flex items-center gap-2">
                        <MessageSquare
                            className="text-gray-400"
                            size={18}
                        />
                        <span className="font-bold text-gray-800">
                            Feedback Comments
                        </span>
                    </div>
                </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-800 text-lg mb-6">
                    Comment Length
                </h3>

                <div className="space-y-6">
                    {/* Comment */}
                    <div className="flex gap-4">
                        <img
                            src=""
                            alt=""
                            className="w-10 h-10 rounded-full"
                        />

                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h4 className="font-bold text-gray-800 text-sm">
                                        Comment Name
                                    </h4>

                                    <p className="text-gray-500 text-sm">
                                        Comment User name
                                    </p>
                                </div>

                                <button className="text-blue-600 font-semibold text-sm hover:underline">
                                    Reply
                                </button>
                            </div>
                            <p className="text-gray-600 text-sm leading leading-relax">Comment Text</p>
                        </div>
                    </div>
                    <div className="border-b border-gray-100 mt-6"></div>
                </div>
            </div>

            <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-800 text-lg mb-4">
                    Add Comment
                </h3>

                <textarea
                    rows={4}
                    maxLength={250}
                    placeholder="Write your comment..."
                    className="w-full border border-gray-200 rounded-lg p-4
        text-gray-700 resize-none focus:outline-none focus:ring-2
        focus:ring-blue-500"
                ></textarea>

                <div className="flex justify-between items-center mt-4">
                    <span className="text-gray-500 text-sm">
                        Character Left
                    </span>

                    <button
                        className="bg-purple-600 hover:bg-purple-700
            text-white px-6 py-2 rounded-lg font-semibold
            transition-all disabled:bg-gray-400
            disabled:cursor-not-allowed"
                    >
                        Post Comment
                    </button>
                </div>
            </div>




        </div>
    );
};

export default DetailView;



