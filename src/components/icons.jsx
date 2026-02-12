export function ChevronDown(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            className="w-6 h-6"
            {...props}
        >
            <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                clipRule="evenodd"
            />
        </svg>
    )
}

export function ChevronUp(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            {...props}
        >
            <path
                fillRule="evenodd"
                d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                clipRule="evenodd"
            />
        </svg>
    )
}

// https://feathericons.dev/?search=home&iconset=feather&format=strict-jsx
export function Home(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="main-grid-item-icon"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            {...props}
        >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    );
}

// https://feathericons.dev/?search=plus&iconset=feather&format=strict-jsx
export function Plus(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" {...props}>
            <line x1="12" x2="12" y1="5" y2="19" />
            <line x1="5" x2="19" y1="12" y2="12" />
        </svg>
    );
}

// https://feathericons.dev/?search=search&iconset=feather&format=strict-jsx
export function Search(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="main-grid-item-icon"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            {...props}
        >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" x2="16.65" y1="21" y2="16.65" />
        </svg>
    );
}

// https://feathericons.dev/?search=user&iconset=feather&format=strict-jsx
export function User(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="main-grid-item-icon"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            {...props}
        >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    );
}

export function X(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 1.66675C6.16751 1.66675 2.25 5.39771 2.25 10.0001C2.25 14.6025 6.16751 18.3334 11 18.3334C15.8325 18.3334 19.75 14.6025 19.75 10.0001C19.75 5.39771 15.8325 1.66675 11 1.66675ZM11 16.6667C7.13401 16.6667 4 13.682 4 10.0001C4 6.31818 7.13401 3.33341 11 3.33341C14.866 3.33341 18 6.31818 18 10.0001C18 13.682 14.866 16.6667 11 16.6667ZM12.1355 7.73687C12.4786 7.41277 13.0326 7.41493 13.3729 7.7417L13.378 7.74653C13.7183 8.0733 13.716 8.60093 13.3729 8.92503L12.2354 10L13.3729 11.075L13.378 11.0799C13.7183 11.4066 13.716 11.9343 13.3729 12.2584L13.3678 12.2632C13.0247 12.5873 12.4707 12.5851 12.1304 12.2584L11.0017 11.175L9.8729 12.2584L9.86783 12.2632C9.52473 12.5873 8.97071 12.5851 8.63041 12.2584L8.62533 12.2535C8.28503 11.9268 8.2873 11.3991 8.63041 11.075L9.76791 10L8.63041 8.92503C8.2873 8.59826 8.2873 8.06847 8.63041 7.7417C8.97351 7.41493 9.5298 7.41493 9.87291 7.7417L11.0017 8.82503L12.1304 7.7417L12.1355 7.73687Z"
                fill="#EE7200"
            />
        </svg>
    )
}

