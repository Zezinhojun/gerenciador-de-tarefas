import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page my-5">
            <h1 className="text-center text-warning">Oops!</h1>
            <p className="text-center text-warning">Sorry, an unexpected error has occurred.</p>
            <p className="text-center text-warning">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}