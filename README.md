<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo_name, twitter_handle, email, project_title, project_description
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->


<!-- PROJECT LOGO -->
<br />
  <h3 align="center">turntable</h3>

  <p align="center">
    A web-based recipe gallery
    <br />
    <br />
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<!-- <details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About Turntable</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details> -->



<!-- ABOUT THE PROJECT -->
## About Turntable
This project, a recipe gallery, was put together for the Shopify Developer Challenge.

[Live demo](https://turntablewebapp.herokuapp.com/)


### Built With

Backend
* Ruby on Rails 
* Devise for user authentication
* CarrierWave and Fog for AWS S3 file uploads
* MiniMagick/ ImageMagick for image compression
* PostgreSQL for database
* Figaro for environment variable config

Frontend
* React 
* React-Rails 
* Reactstrap for React component templates
* styled-components for convenient styling




<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

* Ruby 2.7.2
* [yarn](https://yarnpkg.com/) 
* [PostgreSQL](https://www.postgresql.org/)


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mslwang/turntable.git
   ```
2. Install gems and yarn packages  
    ```sh
    bundle install
    yarn install
    ```
3. Create and configure database
    ```sh
    rake db:create
    rake db:migrate
    ```
4. Start server
    ```sh
    rails server
    ```