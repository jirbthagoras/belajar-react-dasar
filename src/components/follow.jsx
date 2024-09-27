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
            message: "Thanks For The Follow"
        })
    }

    unfollow()
    {
        this.setState({
            message: "Follow Me!"
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.follow()}>Follow</button>
                <button onClick={() => this.unfollow()}>Unfollow</button>
            </div>
        )
    }

}

export default Follow;