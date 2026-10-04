import { createSlice } from "@reduxjs/toolkit";
import {
    initialSuggestions,
    initialComments,
} from "../data/initialData";

const initialState = {
    suggestions: initialSuggestions,
    comments: initialComments,
};

const feedbackSlice = createSlice({
    name: "feedback",

    initialState,

    reducers: {
        addSuggestion: (state, action) => {
            const payload = action.payload;

            const newSuggestion = {
                id: Date.now(),
                title: payload.title,
                description: payload.description,
                category: payload.category || "Feature",
                status: payload.status || "Planned",
                upvotes: 0,
                comments: 0,
                upvoted: false,
            };

            state.suggestions.push(newSuggestion);
        },

        updateSuggestion: (state, action) => {
            const updatedSuggestion = action.payload;

            const index = state.suggestions.findIndex(
                (suggestion) => suggestion.id === updatedSuggestion.id
            );

            if (index !== -1) {
                state.suggestions[index] = {
                    ...state.suggestions[index],
                    ...updatedSuggestion,
                };
            }
        },

        deleteSuggestion: (state, action) => {
            const id = action.payload;

            state.suggestions = state.suggestions.filter(
                (suggestion) => suggestion.id !== id
            );

            delete state.comments[id];
        },

        toggleUpvote: (state, action) => {
            const id = action.payload;

            const suggestion = state.suggestions.find(
                (item) => item.id === id
            );

            if (suggestion) {
                suggestion.upvoted = !suggestion.upvoted;

                if (suggestion.upvoted) {
                    suggestion.upvotes += 1;
                } else {
                    suggestion.upvotes = Math.max(
                        0,
                        suggestion.upvotes - 1
                    );
                }
            }
        },

        addComment: (state, action) => {
            const { suggestionId, comment } = action.payload;

            if (!state.comments[suggestionId]) {
                state.comments[suggestionId] = [];
            }

            state.comments[suggestionId].push({
                id: Date.now(),
                ...comment,
            });

            const suggestion = state.suggestions.find(
                (item) => item.id === suggestionId
            );

            if (suggestion) {
                suggestion.comments =
                    (suggestion.comments || 0) + 1;
            }
        },
    },
});

export const {
    addSuggestion,
    updateSuggestion,
    deleteSuggestion,
    toggleUpvote,
    addComment,
} = feedbackSlice.actions;

export default feedbackSlice.reducer;