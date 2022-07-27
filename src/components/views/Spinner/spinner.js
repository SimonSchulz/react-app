import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
function LoadSpinner() {
    const style = {
        width: 100,
        height: 100,
     }
    return (
        <div style={{padding: 100, display:"block",margin:"auto"}}>
            <Spinner animation="border" role="status" style={style}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default LoadSpinner;