"use client";

import React from "react";

export default function Grid({ components }: { components: any[] }) {
    // Receive components (elements) as a prop
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-8 justify-items-center">
            {components.map((element, index) =>
                // Directly render the element without wrapping it in a JSX tag
                React.cloneElement(element, { key: index })
            )}
        </div>
    );
}
