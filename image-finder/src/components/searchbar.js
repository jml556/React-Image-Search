import React from 'react'

class SearchBar extends React.Component {

    state = {text: ''}

    onInputChange = (e) => {
        this.setState({text: e.target.value})
    }

    render() {
        return(
            <div className="ui segment">
               <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange} value={this.state.text}/>
                    </div>

               </form> 
            </div>
        )
    }
}

export default SearchBar