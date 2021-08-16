import React, {Component} from "react";


class FilterString extends Component {
    
    constructor() {
        super()

        this.state = {
            jNames: ["Jason", "Jackson", "Jeffery", "Jared", "Jerome"],
            userInput: "",
            filteredArray: []
        };
    }

    handleChange(val) {
        this.setState({userInput: val});
    }

    filterJNames(userInput) {
        let jNames = this.state.jNames;
        let filteredJNames = [];

        for (let i = 0; i < jNames.length; i++) {
            if (jNames[i].includes(userInput)) {
                filteredJNames.push(jNames[i]);
            }
        }
        this.setState({filteredJNames: filteredJNames});
    }
    
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names: {JSON.stringify(this.state.jNames, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filterJNames(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredJNames, null, 10)}</span>
            </div>
        )
    }

}

export default FilterString;