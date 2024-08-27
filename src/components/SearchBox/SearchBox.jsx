import {useDispatch} from "react-redux";
import { changeFilter} from "../../redux/filtersSlice.js";
import {useSelector} from "react-redux";

// eslint-disable-next-line react/prop-types
const SearchBox = () => {
    const dispatch = useDispatch();
    const content = useSelector(state => state.filter.name)
    return <input type="text" placeholder='Search...' value={content} onChange={(e) => dispatch(changeFilter(e.target.value))} />
}

export default SearchBox
