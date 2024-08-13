import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="error">
            <h2>404 - Not Found</h2>
            <p>Sorry the page you are looking for is not available.</p>
            <p>
                Try returning to the <Link to="/">homepage</Link>.
            </p>
        </div>
    )
}

export default NotFound