import React from 'react';

/**
 * Renders CommuteFormResults component
 * @param {Array} props - react props
 * @returns {JSX} react jsx
 */
export default function CommuteFormSubmit ({ isFetching, children }) {
  return (
    <button disabled={isFetching} type="submit">
      {children}
    </button>
  );
}
