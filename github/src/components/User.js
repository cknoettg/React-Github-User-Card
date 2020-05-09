// ICE
import React from 'react';
import axios from 'axios';

//TEST: Hard-coded for data for when I hit API rate limit
const sampleData = [
    {login: "theprogramking", 
    avatar_url: "https://avatars3.githubusercontent.com/u/18515031?v=4",
    bio: "Full Stack Web Developer",
    blog: "lukeshimkus.dev",
    company: null,
    created_at: "2016-04-17T14:37:13Z",
    email: null,
    events_url: "https://api.github.com/users/theprogramking/events{/privacy}",
    followers: 9,
    followers_url: "https://api.github.com/users/theprogramking/followers",
    following: 13,
    following_url: "https://api.github.com/users/theprogramking/following{/other_user}",
    gists_url: "https://api.github.com/users/theprogramking/gists{/gist_id}",
    gravatar_id: "",
    hireable: null,
    html_url: "https://github.com/theprogramking",
    id: 18515031,
    location: "Florida",
    name: "Luke Shimkus",
    node_id: "MDQ6VXNlcjE4NTE1MDMx",
    organizations_url: "https://api.github.com/users/theprogramking/orgs",
    public_gists: 1,
    public_repos: 36,
    received_events_url: "https://api.github.com/users/theprogramking/received_events",
    repos_url: "https://api.github.com/users/theprogramking/repos",
    site_admin: false,
    starred_url: "https://api.github.com/users/theprogramking/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/theprogramking/subscriptions",
    type: "User",
    updated_at: "2020-05-04T15:10:53Z",
    url: "https://api.github.com/users/theprogramking"},
    {login: "theprogramking", 
    avatar_url: "https://avatars3.githubusercontent.com/u/18515031?v=4",
    bio: "Full Stack Web Developer",
    blog: "lukeshimkus.dev",
    company: null,
    created_at: "2016-04-17T14:37:13Z",
    email: null,
    events_url: "https://api.github.com/users/theprogramking/events{/privacy}",
    followers: 9,
    followers_url: "https://api.github.com/users/theprogramking/followers",
    following: 13,
    following_url: "https://api.github.com/users/theprogramking/following{/other_user}",
    gists_url: "https://api.github.com/users/theprogramking/gists{/gist_id}",
    gravatar_id: "",
    hireable: null,
    html_url: "https://github.com/theprogramking",
    id: 18515031,
    location: "Florida",
    name: "Luke Shimkus",
    node_id: "MDQ6VXNlcjE4NTE1MDMx",
    organizations_url: "https://api.github.com/users/theprogramking/orgs",
    public_gists: 1,
    public_repos: 36,
    received_events_url: "https://api.github.com/users/theprogramking/received_events",
    repos_url: "https://api.github.com/users/theprogramking/repos",
    site_admin: false,
    starred_url: "https://api.github.com/users/theprogramking/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/theprogramking/subscriptions",
    type: "User",
    updated_at: "2020-05-04T15:10:53Z",
    url: "https://api.github.com/users/theprogramking"}
];

class Card extends React.Component {
    // CCR
    // useState for Github data
    constructor() {
        super();
        this.state={
            avatar_url: "",
            name: "",
            login: "",
            location: "",
            profile: "",
            followers: "",
            following: "",
            bio: "",
            friends: []
        };	
    }

    // GET request function for axios
    //use componentDidMount
    componentDidMount() {

        this.setState({
            avatar_url: sampleData[0].avatar_url,
            name: sampleData[0].name,
            login: sampleData[0].login,
            location: sampleData[0].location,
            profile: sampleData[0].url,
            followers: sampleData[0].followers,
            following: sampleData[0].following,
            bio: sampleData[0].login,
            friends: sampleData
        })

        //TEST: Commenting out axios call for now
        // axios.get('https://api.github.com/users/cknoettg')
        // .then(response => {
        //     console.log("User data", response);
            // this.setState({
            //     avatar_url: response.data.avatar_url,
            //     name: response.data.name,
            //     login: response.data.login,
            //     location: response.data.location,
            //     profile: response.data.url,
            //     followers: response.data.followers,
            //     following: response.data.following,
            //     bio: response.data.bio,
            //     friends: sampleData
            // });
        // })
        // .catch(err => {
        //     console.log("Failed to get user", err);
        // }); //end of first axios call - my card
        
        
        
        //TEST: Commenting out axios call for now
        // axios.get('https://api.github.com/users/TheTrabin/followers')
        // .then(res => {
        //     console.log("Follower logins", res.data)
        //     res.data.map(data=>{
        //         axios.get(`https://api.github.com/users/${data.login}`)
        //         .then(info => {
        //             console.log("Friends data", info.data)
        //             this.setState({
        //               friends: info.data
        //             }); //end setState
        //         }) // end then
        //         return this.state.friends;
        //     }) //end map
            
                // avatar_url: response.data.avatar_url,
                // name: response.data.name,
                // login: response.data.login,
                // location: response.data.location,
                // profile: response.data.url,
                // followers: response.data.followers,
                // following: response.data.following,
                // bio: response.data.bio
        //}) //end then
        // .catch(err => {
        //     console.log("Failed to get friends", err);
        // }); //end of second axios call - follower data
    }//end of componentDidMount

    
    //render method
    render() {
        return (
            <div className="card">
                <img src={this.state.avatar_url} alt="me" />
                <div className="card-info">
                    <h3 className="name">{this.state.name}</h3>
                    <p className="username">{this.state.login}</p>
                    <p>Location: {this.state.location}</p>
                    <p>Profile: 
                    <a href={this.state.profile}> {this.state.profile} </a>
                    </p>
                    <p>Followers: {this.state.followers}</p>
                    <p>Following: {this.state.following}</p>
                    <p>Bio: {this.state.bio}</p>
                </div>
                <div>
                    <h3>Followers</h3>
                    <p>Data: {console.log(this.state.friends.login)}</p>
                    <p>Login: {this.state.friends.login}</p>
                </div>
                {/* TEST: Commentiong out axios data for now*/}
                {/* <div className="friends">
                    <p>{this.state.friends.name}</p>
                </div> */}
            </div>
        )
    };//end of render

}//end of Cards

export default Card;