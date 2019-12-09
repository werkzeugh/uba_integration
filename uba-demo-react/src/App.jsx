import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      filteredData: [],
      data: [
        {
          uid: 1,
          textkey: "AB",
          text: "Abfall "
        },
        {
          uid: 9,
          textkey: "AL",
          text: "Altlasten "
        },
        {
          uid: 2,
          textkey: "AN",
          text: "Analytik "
        },
        {
          uid: 10,
          textkey: "BO",
          text: "Boden "
        },
        {
          uid: 6,
          textkey: "CH",
          text: "Chemikalien "
        },
        {
          uid: 14,
          textkey: "EN",
          text: "Energie "
        },
        {
          uid: 19,
          textkey: "GT",
          text: "Gentechnik "
        },
        {
          uid: 24,
          textkey: "HE",
          text: "Gesundheit "
        },
        {
          uid: 3,
          textkey: "AX",
          text: "Industrie "
        },
        {
          uid: 18,
          textkey: "RA",
          text: "Kernenergie "
        },
        {
          uid: 23,
          textkey: "KL",
          text: "Klima "
        },
        {
          uid: 7,
          textkey: "LW",
          text: "Landwirtschaft "
        },
        {
          uid: 4,
          textkey: "LU",
          text: "Luft "
        },
        {
          uid: 17,
          textkey: "LR",
          text: "L\u00e4rm "
        },
        {
          uid: 11,
          textkey: "MO",
          text: "Monitoring "
        },
        {
          uid: 21,
          textkey: "NP",
          text: "Nationalpark "
        },
        {
          uid: 15,
          textkey: "NL",
          text: "Natur / Landschaft "
        },
        {
          uid: 20,
          textkey: "SO",
          text: "Sonstiges "
        },
        {
          uid: 16,
          textkey: "VE",
          text: "Verkehr "
        },
        {
          uid: 8,
          textkey: "WD",
          text: "Wald "
        },
        {
          uid: 12,
          textkey: "WA",
          text: "Wasser "
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="keyword"
            aria-label="keyword"
            value={this.state.keyword}
            onChange={this.handleChange.bind(this)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.resetForm.bind(this)}
            >
              reset
            </button>
          </div>
        </div>
        {this.state.keyword}
        <table className="styled_table">
          <thead>
            <tr>
              <th>key</th>
              <th>title</th>
            </tr>
          </thead>
          <tbody>
            {this.state.filteredData.map((row, idx) => {
              return (
                <tr key={idx}>
                  <td>{row.textkey}</td>
                  <td>{row.text}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  filterList(kw0) {
    var filteredData = this.state.data;
    const kw = kw0.toLowerCase();
    console.log("#log 8755", filteredData, kw);
    if (kw !== "") {
      filteredData = filteredData.filter(function(item) {
        return (item.text + item.textkey).toLowerCase().search(kw) !== -1;
      });
    }
    return filteredData;
  }
  resetForm(event) {
    this.setState({ keyword: "" });
  }
  handleChange(event) {
    this.setState({
      keyword: event.target.value,
      filteredData: this.filterList(event.target.value)
    });
  }
  componentDidMount() {
    this.setState({
      filteredData: this.filterList(this.state.keyword)
    });
  }
}

export default App;
