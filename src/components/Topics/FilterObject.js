import React, {Component} from "react";

class FilterObject extends Component {
    
    constructor(){
        super()

        this.state = {
            athletes: [
                {jerseyNumber: 23, name: "Michael Jordan", favoriteSport: "Basketball"},
                {age: 18, name: "George", school: "High School"},
                {favoriteNumber: 4, name: "Sally", favoriteFood: "Pizza"}
            ],
            userInput: "",
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({userInput: val});
    }

    filterAthletes(prop) {
        let athletes = this.state.athletes;
        let filteredAthletes = [];

        for (let i = 0; i < athletes.length; i++) {
            if (athletes[i].hasOwnProperty(prop)) {
                filteredAthletes.push(athletes[i]);
            }
        }
        this.setState({filteredAthletes: filteredAthletes});
    }
    
    render () {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.athletes, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filterAthletes(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredAthletes, null, 10)}</span>
            </div>
        )
    }

}

export default FilterObject;