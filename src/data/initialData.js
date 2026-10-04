export const initialSuggestions = [
    {
        id: 1,
        title: "Add tags for solutions",
        description:
            "Easier to search for solutions based on a specific stack.",
        upvotes: 112,
        comments: 2,
        category: "Enhancement",
        upvoted: false,
        status: "Planned",
    },

    {
        id: 2,
        title: "Add a dark theme option",
        description:
            "It would be great to have a dark theme option for users who prefer darker interfaces.",
        upvotes: 98,
        comments: 1,
        category: "Feature",
        upvoted: false,
        status: "In-Progress",
    },

    {
        id: 3,
        title: "Improve mobile responsiveness",
        description:
            "Some sections of the application need better spacing and layout on smaller screens.",
        upvotes: 76,
        comments: 1,
        category: "Enhancement",
        upvoted: false,
        status: "Live",
    },

    {
        id: 4,
        title: "Fix navigation issue",
        description:
            "Navigation sometimes does not update correctly after opening a feedback item.",
        upvotes: 65,
        comments: 1,
        category: "Bug",
        upvoted: false,
        status: "Planned",
    },

    {
        id: 5,
        title: "Add user profiles",
        description:
            "Allow users to create profiles and manage their feedback activity.",
        upvotes: 54,
        comments: 1,
        category: "Feature",
        upvoted: false,
        status: "In-Progress",
    },

    {
        id: 6,
        title: "Improve search",
        description:
            "Make it easier to find feedback by title, category, and description.",
        upvotes: 43,
        comments: 0,
        category: "Enhancement",
        upvoted: false,
        status: "Live",
    },
];

export const initialComments = {
    1: [
        {
            id: 1,
            user: "John",
            comment: "This would make searching much easier.",
        },
        {
            id: 2,
            user: "Sarah",
            comment: "Great idea!",
        },
    ],

    2: [
        {
            id: 3,
            user: "Mike",
            comment: "Dark mode would be really useful.",
        },
    ],

    3: [
        {
            id: 4,
            user: "Alex",
            comment: "Mobile layout definitely needs improvement.",
        },
    ],

    5: [
        {
            id: 5,
            user: "David",
            comment: "User profiles would be a nice addition.",
        },
    ],
};