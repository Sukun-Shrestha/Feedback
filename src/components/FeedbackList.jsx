import React, { useMemo } from "react";
import {
  ChevronUp,
  MessageSquare,
} from "lucide-react";

const FeedbackList = ({
  suggestions,
  filterCategory,
  sortBy,
  onUpvote,
  onView,
}) => {
  const filteredSuggestions = useMemo(() => {
    let result = [...suggestions];

    // Filter
    if (filterCategory !== "All") {
      result = result.filter(
        (item) => item.category === filterCategory
      );
    }

    // Sort
    switch (sortBy) {
      case "Most Upvotes":
        result.sort((a, b) => b.upvotes - a.upvotes);
        break;

      case "Least Upvotes":
        result.sort((a, b) => a.upvotes - b.upvotes);
        break;

      case "Most Comments":
        result.sort((a, b) => b.comments - a.comments);
        break;

      case "Least Comments":
        result.sort((a, b) => a.comments - b.comments);
        break;

      default:
        break;
    }

    return result;
  }, [suggestions, filterCategory, sortBy]);

  if (filteredSuggestions.length === 0) {
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow-md">
        <h2 className="text-xl font-bold text-gray-800">
          No feedback found
        </h2>

        <p className="mt-2 text-gray-500">
          Try selecting another category.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredSuggestions.map((item) => (
        <div
          key={item.id}
          onClick={() => onView(item)}
          className="cursor-pointer rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg"
        >
          <div className="flex items-start gap-5">
            {/* Upvote */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onUpvote(item.id);
              }}
              className={`flex min-w-[55px] flex-col items-center rounded-lg px-3 py-2 transition ${item.upvoted
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-purple-100"
                }`}
            >
              <ChevronUp size={20} />

              <span className="text-sm font-bold">
                {item.upvotes}
              </span>
            </button>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-bold text-gray-800">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {item.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="rounded-lg bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                  {item.category}
                </span>

                <span className="flex items-center gap-1 text-sm text-gray-500">
                  <MessageSquare size={16} />
                  {item.comments}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;