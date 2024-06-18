import React from 'react'

export default function RenderComputed({ asElement, asStyle, children }) {
    const computedStyle = typeof asStyle === "function" ? asStyle() : asStyle;
    return React.createElement(asElement, { className: computedStyle }, children);
}