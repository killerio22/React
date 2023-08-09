import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import './EpisodePagination.css';

const EpisodePagination = () => {
    const {prevPage, nextPage} = useSelector(state => state.episodes);
    const [, setQuery] = useSearchParams();
    const toPrevPage = () => {
        setQuery(prev => ({...prev, page: +prev.get('page') - 1}))
    };

    const toNextPage = () => {
        setQuery(prev => ({...prev, page: +prev.get('page') + 1}))
    };

    return (
        <div className="EpisodePagination">
            <button disabled={!prevPage} onClick={toPrevPage}>prev</button>
            <button disabled={!nextPage} onClick={toNextPage}>next</button>
        </div>
    );
};

export {EpisodePagination};