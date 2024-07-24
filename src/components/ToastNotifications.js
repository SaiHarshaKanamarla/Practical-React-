// This used react-toastify package referenced in the github repo : https://github.com/fkhadra/react-toastify

//usage reference: https://fkhadra.github.io/react-toastify/installation/


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CustomToast = ({ closeToast }) => {
    return (
        <div>
            Something went wrong!
            <button onClick={closeToast}>Close</button>
        </div>
    )
}

export default function ToastNotification() {
    const notify = () => {
        toast.success("Success Notification!", {
            position: 'top-center'
        });
        toast.error("Error Notification!", {
            position: 'top-left',
            autoClose: 8000
        });
        toast.info("Info Notification!", {
            position: 'top-right',
            autoClose: false
        });
        toast.warning("Warning Notification!", {
            position: 'bottom-center'
        });
        toast("Basic bottom left Notification!", {
            position: 'bottom-left'
        });
        toast(<CustomToast />, {
            position: 'bottom-right'
        });

    }
    return (
        <div>
            <button onClick={notify}>Notify!</button>
            <ToastContainer />
        </div>
    )
}