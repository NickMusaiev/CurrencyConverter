import React from "react";
import './Footer.css';
class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Footer" >
                <footer>
                    <p>все права защищены...</p>
                </footer>
            </div>
        )
    }
}
export default Footer;
