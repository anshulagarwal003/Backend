require("dotenv").config();
// This is a simple Express server that serves a few routes
const express = require("express");
const app = express();
const port = 3001;
const githubData = {
  login: "anshulagarwal003",
  id: 91783974,
  node_id: "U_kgDOBXiDJg",
  avatar_url: "https://avatars.githubusercontent.com/u/91783974?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/anshulagarwal003",
  html_url: "https://github.com/anshulagarwal003",
  followers_url: "https://api.github.com/users/anshulagarwal003/followers",
  following_url:
    "https://api.github.com/users/anshulagarwal003/following{/other_user}",
  gists_url: "https://api.github.com/users/anshulagarwal003/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/anshulagarwal003/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/anshulagarwal003/subscriptions",
  organizations_url: "https://api.github.com/users/anshulagarwal003/orgs",
  repos_url: "https://api.github.com/users/anshulagarwal003/repos",
  events_url: "https://api.github.com/users/anshulagarwal003/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/anshulagarwal003/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 15,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2021-10-02T10:55:54Z",
  updated_at: "2025-07-08T15:11:56Z",
};
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/health", (req, res) => {
  res.send("OK");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.get("/login", (req, res) => {
  res.send("<h1> please login at your favourite website</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
