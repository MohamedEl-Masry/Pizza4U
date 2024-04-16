import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchOrder = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="relative ms-4 sm:ms-0">
          <svg
            className="absolute h-5 w-5 text-stone-400 mt-2 ms-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
          </svg>
          <input
            className="input w-1/2 ps-6 sm:w-3/4 text-center"
            placeholder="Search Order"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default SearchOrder;
