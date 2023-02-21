import React from "react";

class Rate extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="App" >
                <div className="container">
                    <div className='first'>
                        <input type="number" className="inp-one" onChange={() => {
                            {
                                Object.keys(this.props.data).map((item, i) => {
                                    if (item == document.getElementById('one').value) { document.querySelector(".inp-two").value = ((this.props.data[item]) * document.querySelector(".inp-one").value / this.props.data[document.getElementById('two').value]).toFixed(2) }
                                })
                            }
                        }} />
                        <select name="" id="one" onChange={() => {
                            {
                                Object.keys(this.props.data).map((item, i) => {
                                    if (item == document.getElementById('one').value) { document.querySelector(".inp-two").value = ((this.props.data[item]) * document.querySelector(".inp-one").value / this.props.data[document.getElementById('two').value]).toFixed(2) }
                                    <option key={i} >{this.props[item]} </option>
                                })
                            }
                        }}>
                            {
                                Object.keys(this.props.data).map((item, i) =>
                                    (<option key={i} >{item} </option>)
                                )
                            }
                        </select>
                    </div>
                    <div className="second">
                        <input type="number" className="inp-two" onChange={() => {
                            {
                                Object.keys(this.props.data).map((item, i) => {
                                    if (item == document.getElementById('two').value) document.querySelector(".inp-one").value = ((this.props.data[item]) * document.querySelector(".inp-two").value / this.props.data[document.getElementById('one').value]).toFixed(2);
                                })
                            }
                        }} />
                        <select name="" id="two" onChange={() => {

                            {
                                Object.keys(this.props.data).map((item, i) => {
                                    if (item == document.getElementById('two').value) document.querySelector(".inp-one").value = ((this.props.data[item]) * document.querySelector(".inp-two").value / this.props.data[document.getElementById('one').value]).toFixed(2);
                                })
                            }
                        }}>
                            {
                                Object.keys(this.props.data).map((item, i) =>
                                    (<option key={i} >{item} </option>)
                                )
                            }
                        </select>
                    </div>
                </div>
            </div >
        )
    }
}
export default Rate;
