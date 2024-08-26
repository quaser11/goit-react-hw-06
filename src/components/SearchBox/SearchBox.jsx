import {useDispatch} from "react-redux";
import {value, setFilter} from "../../redux/filtersSlice.js";

// eslint-disable-next-line react/prop-types
const SearchBox = () => {
    const dispatch = useDispatch();
    const content = value()
    return <input type="text" placeholder='Search...' value={content} onChange={(e) => dispatch(setFilter(e.target.value))} />
}

export default SearchBox
