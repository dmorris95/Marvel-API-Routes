import { Link, NavLink } from "react-router-dom";

function NavigationBar() {
    return (
        <nav className="clearfix">
            <NavLink to='/' activeClassName="active">Home</NavLink>
            <NavLink to='/comics' activeClassName="active">Comics</NavLink>
            <NavLink to='/browse' activeClassName="active">Browse Characters</NavLink>
            <NavLink to='/character-details' activeClassName="active">Character Details</NavLink>
        </nav>
    )
}

export default NavigationBar