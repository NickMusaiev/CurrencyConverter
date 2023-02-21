
import './App.css';
import React from "react";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "USD": "import data...",
      "EUR": "import data...",
      "UAH": "",
    }
    this.getRate();
  }

  getRate = () => {
    fetch("https://api.apilayer.com/currency_data/live", {
      method: "GET",
      headers: {
        'apikey': '3g3I8EgsApjhOorxMV1sdXPVFlwgKoP1',
      }
    })
      .then(data => data.json())
      .then(data => {
        this.setState({ EUR: ((2 - data.quotes.USDEUR) * data.quotes.USDUAH).toFixed(2) });
        this.setState({ USD: (data.quotes.USDUAH).toFixed(2) });
        this.setState({ UAH: (data.quotes.USDUAH / data.quotes.USDUAH).toFixed(2) });
      })
  }

  render() {
    return (
      <div className="App" >
        <Header data={this.state} />
        <Rate data={this.state} />
        <Footer />
      </div>
    )
  }
}

export default App;
