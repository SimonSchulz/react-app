import Spinner from 'react-bootstrap/Spinner';

function LoadSpinner() {
    const style = {
        position:"relative",
        alignItems: 'center',
        left: "50%"
    }
    return (
        <div style={style}>
            <Spinner animation="border" role="status" style={{width:50, height: 50}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default LoadSpinner;