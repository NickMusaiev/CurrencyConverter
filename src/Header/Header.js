import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Header" >
                <header className="App-header">
                    <div className="current-curs">
                        <p>Текущий курс: EUR: {this.props.data.EUR}, USD: {this.props.data.USD}</p>
                    </div>
                </header>
            </div>
        )
    }
}
export default Header;
