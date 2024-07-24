// Use this as reference for icons in react. You can choose fontAwesome icons, Material Design Icons etc
// https://react-icons.github.io/react-icons/

import { FaReact } from 'react-icons/fa';
import { MdAccessAlarm } from "react-icons/md";
import { IconContext } from 'react-icons';


export default function ReactIcons() {
    return (
        <IconContext.Provider value={{ color: "blue", size: '5rem' }}>
            <div className="App">
                <FaReact />
                <MdAccessAlarm />
            </div>
        </IconContext.Provider>
    )
}