import {Link} from "react-router-dom";
import "./NotFound.scss"

export const NotFound = () => {
    return(
        <section
        className="not-found"
        >
            <h1>404 - Not Found</h1>
            <p>
                Click <Link to="/"><b>here</b></Link> to navigate back to the home page.
            </p>
        </section>
    )
}