import React, {
    useEffect,
    useState,
} from "react";

import { X } from "lucide-react";

const FeedbackModal = ({
    isOpen,
    onClose,
    onAdd,
    editingFeedback = null,
}) => {
    const [formData, setFormData] = useState({
        title: "",
        category: "Feature",
        status: "Planned",
        description: "",
    });

    useEffect(() => {
        if (editingFeedback) {
            setFormData({
                title: editingFeedback.title || "",
                category: editingFeedback.category || "Feature",
                status: editingFeedback.status || "Planned",
                description:
                    editingFeedback.description || "",
            });
        } else {
            setFormData({
                title: "",
                category: "Feature",
                status: "Planned",
                description: "",
            });
        }
    }, [editingFeedback, isOpen]);

    if (!isOpen) {
        return null;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.title.trim()) {
            alert("Please enter a feedback title.");
            return;
        }

        if (!formData.description.trim()) {
            alert("Please enter a description.");
            return;
        }

        onAdd(formData);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-lg overflow-y-auto rounded-xl bg-white shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between border-b p-6">
                    <h2 className="text-xl font-bold text-gray-800">
                        {editingFeedback
                            ? "Edit Feedback"
                            : "Add Feedback"}
                    </h2>

                    <button
                        type="button"
                        onClick={onClose}
                        className="text-gray-400 transition hover:text-gray-700"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5 p-6"
                >
                    {/* Title */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Feedback Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="e.g. Add dark mode"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-500"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Category
                        </label>

                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-500"
                        >
                            <option value="Feature">
                                Feature
                            </option>

                            <option value="Enhancement">
                                Enhancement
                            </option>

                            <option value="Bug">
                                Bug
                            </option>
                        </select>
                    </div>

                    {/* Status */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Status
                        </label>

                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-500"
                        >
                            <option value="Planned">
                                Planned
                            </option>

                            <option value="In-Progress">
                                In Progress
                            </option>

                            <option value="Live">
                                Live
                            </option>
                        </select>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Description
                        </label>

                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="5"
                            placeholder="Describe your feedback..."
                            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-500"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg bg-gray-100 px-5 py-2.5 font-semibold text-gray-700 hover:bg-gray-200"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-lg bg-purple-600 px-5 py-2.5 font-semibold text-white hover:bg-purple-700"
                        >
                            {editingFeedback
                                ? "Update Feedback"
                                : "Add Feedback"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FeedbackModal;