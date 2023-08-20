import Episodes from "../components/Episodes/Episodes";

import {Pagination} from "@mui/material";
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const EpisodesPage = () => {
    const [query,seQuery] = useSearchParams();
    const {pages} = useSelector(state => state.episodes);

    return (
        <div>
            <Episodes/>
            <Pagination
                count={pages}
                defaultPage={+query.get('page')}
                color="primary"
                onChange={(e, page) => seQuery({page:page.toString()})}
                style={{display:'flex', justifyContent:'center'}}
            />
        </div>
    );
};

export default EpisodesPage;