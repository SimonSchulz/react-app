import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
function LoadSpinner() {
    const style = {
        display:"block",
        width: 100,
        height: 100,
        margin:"auto"
     }
    return (
        <div style={{padding: 100}}>
            <Spinner animation="border" role="status" style={style}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default LoadSpinner;