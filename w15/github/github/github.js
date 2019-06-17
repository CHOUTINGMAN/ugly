class Github{
    constructor(){
        this.client_id="ea0f5b5242f0ef985302";
        this.client_secret="92efcd44efc25231aa7d4eeba6ca93c464396612";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
    
        return {
          profile,
          repos
        }
      }
    }
    
    
        /*
        {
        "login": "CHOUTINGMAN",
        "id": 43173983,
        "node_id": "MDQ6VXNlcjQzMTczOTgz",
        "avatar_url": "https://avatars0.githubusercontent.com/u/43173983?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/CHOUTINGMAN",
        "html_url": "https://github.com/CHOUTINGMAN",
        "followers_url": "https://api.github.com/users/CHOUTINGMAN/followers",
        "following_url": "https://api.github.com/users/CHOUTINGMAN/following{/other_user}",
        "gists_url": "https://api.github.com/users/CHOUTINGMAN/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/CHOUTINGMAN/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/CHOUTINGMAN/subscriptions",
        "organizations_url": "https://api.github.com/users/CHOUTINGMAN/orgs",
        "repos_url": "https://api.github.com/users/CHOUTINGMAN/repos",
        "events_url": "https://api.github.com/users/CHOUTINGMAN/events{/privacy}",
        "received_events_url": "https://api.github.com/users/CHOUTINGMAN/received_events",
        "type": "User",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "public_repos": 3,
        "public_gists": 0,
        "followers": 0,
        "following": 0,
        "created_at": "2018-09-11T12:22:03Z",
        "updated_at": "2019-05-27T10:21:44Z"
      }
      */
