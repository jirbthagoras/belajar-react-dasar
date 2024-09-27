import React, {Component} from 'react';

class Follow extends Component {

    constructor() {
        super()
        this.state = {
            message: "Follow Me!"
        }
    }

    follow()
    {
        this.setState({
            message: "Thanks For The Follow",
            disabled: true
        })
    }

    unfollow()
    {
        this.setState({
            message: "Follow Me!",
            disabled: false
        })
    }

    render() {
        return(
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={() => this.follow()} disabled={this.state.disabled}>Follow</button>
                <button onClick={() => this.unfollow()} disabled={!this.state.disabled}>Unfollow</button>
            </div>
        )
    }

}

export default Follow;