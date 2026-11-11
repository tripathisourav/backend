import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useProduct } from '../../products/hooks/useProduct';
import { setQuery } from '../../products/state/product.slice';


const SearchBar = () => {
    const dispatch = useDispatch();

    const query = useSelector(
        state => state.product.filters.query
    );

    const searchSuggestions = useSelector(
        state => state.product.searchSuggestions
    );

    const { handleSearchSuggestions } = useProduct();

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        const controller = new AbortController();

        const fetchSuggestions = async () => {
            try {
                await handleSearchSuggestions(
                    query,
                    controller.signal
                );
            } catch (error) {
                if (error.code !== "ERR_CANCELED") {
                    console.error(error);
                }
            }
        };

        const timer = setTimeout(
            fetchSuggestions,
            query.trim() ? 300 : 0
        );

        return () => {
            clearTimeout(timer);
            controller.abort();
        };

    }, [query, isOpen, handleSearchSuggestions]);

    const handleChange = (e) => {
        dispatch(setQuery(e.target.value));
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={query}
                onFocus={() => setIsOpen(true)}
                onChange={handleChange}
                placeholder="Search products..."
            />

            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-xl z-50">

                    {searchSuggestions.map(product => (
                        <div key={product._id}>
                            {product.title}
                        </div>
                    ))}

                </div>
            )}
        </div>
    );
};

export default SearchBar