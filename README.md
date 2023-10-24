<a name="hello--rails-react"></a>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Tutorial](#tutorial)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 [hello--rails-react] <a name="about-project"></a>
hello--rails-react, is a way to greet someone in a very difficult way

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.ruby-lang.org/en/">Ruby</a></li>
    <li><a href="https://rubyonrails.org/">Ruby on Rails</a></li>
    <li><a href="https://redux.js.org/introduction/installation">React-redux</a></li>
    <li><a href="https://axios-http.com/docs/intro">axios</a></li>
  </ul>
</details>

<details>
  <summary>Ruby on Rails</summary>
  <ul>
    <li><a href="https://guides.rubyonrails.org/getting_started.html#what-is-rails-questionmark">Ruby on Rails introduction</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="">N/A</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **ROR**
- **Devise**
- **cancancan**
- **Rspec**
- **Capybara**
- **React-redux**
- **axios**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>
<!-- https://github.com/EmiLoKiJu/hello--rails-react -->

To get a local copy of this project and run it in your computer, follow these steps.

### Prerequisites

In order to run this project you need:
- Ruby 3.0.1 or above
- Ruby on rails 7.0.8 or above
- node and yarn installed on your system.
- npx version 7.1.0 or later.

### Tutorial <a name="tutorial"></a>

This project was build in windows 10, using vscode.

To create this project run the following command:

```
rails new -j esbuild hello-rails-react -d postgresql
```

generate a controller and view to serve your new react app:
```
rails g controller Root index
```

Overwrite the contents of app/views/root/index.html.erb with:
```
<div id="root">
```

Change the root in config/routes.rb to your new view:
```
Rails.application.routes.draw do
  root 'root#index'
end
```

Add your react app to app/javascript/application.js:
```
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (<h1>Hello World!</h1>);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
```

Add --loader:.js=jsx to the build script in your package.json:
```
{
  "name": "app",
  "private": "true",
  "dependencies": {
    "react": "^18.1.0",
    "react-dom": "^18.1.0"
  },
  "scripts": {
    "build": "esbuild app/javascript/*.* --bundle --sourcemap --outdir=app/assets/builds --loader:.js=jsx"
  },
  "devDependencies": {
    "esbuild": "^0.14.38",
    "esbuild-loader": "^2.18.0"
  }
}
```


run the following line to instal babel:
```
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
```

run the following line to instal react-router-dom
```
npm install react-router-dom
```

install foreman gem:

```
gem install foreman
```

edit the contents of Procfile.dev to this:

```
web: rails s
js: yarn build --watch
```

By that point you should have rails react correctly setup.
To run the project, run

```
foreman start -f Procfile.dev
```

For installing react-redux, @reduxjs/toolkit and axios, run the following:

```
npm install react-redux
npm install @reduxjs/toolkit
npm install axios
```

The file structure for react-redux is in the javascript folder, as it follows:
```
|-- app/
|   |-- javascript/
|   |   |-- components/
|   |   |   |-- App.js
|   |   |-- redux/
|   |   |   |-- store.js
|   |   |-- application.js
```

Then, customize as you like to follow your requirements

### Setup

To get a local copy up and running follow these simple example steps.

Clone this repository in the desired folder:
```
cd my-folder
git clone https://github.com/EmiLoKiJu/hello--rails-react.git
```

### Install

To install this project:
```
cd hello--rails-react
code .
bundle install
```
### Usage

To run the project, make sure you configured your database correctly, then execute the following command:
```sh
  rails db:create
  rails db:migrate
  rails db:seed
```

After the database is set up, run the following command:
```
foreman start -f Procfile.dev
```

Go to http://localhost:5000/ and see it working.

You can also run this using 2 terminals:

In one, run:
rails server

In the other, run:
yarn build --watch

Then check the link of the rails server (it should have changed to http://localhost:3000/)

### Run tests

Not implemented tests

<p align="right">(<a href="#hello--rails-react">back to top</a>)</p>

<!-- AUTHORS -->
## 👥 Authors <a name="authors"></a>

👤 **Gabriel Rozas**
- GitHub: [@EmiLoKiJu](https://github.com/EmiLoKiJu)
- Twitter: [@GabrielRozas12](https://twitter.com/GabrielRozas12)
- LinkedIn: [grozas](https://www.linkedin.com/in/grozas/)

<p align="right">(<a href="#hello--rails-react">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- Nothing so far

<p align="right">(<a href="#hello--rails-react">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

I welcome contributions to enhance the functionality and user experience of the Morse_Translator project. If you have any ideas, suggestions, or bug reports, feel free to open an issue or submit a pull request.

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository, explaining your changes in detail.

Please adhere to the coding conventions and guidelines specified in the project.

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](../../issues).

<p align="right">(<a href="#hello--rails-react">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project give it a star ⭐️

<p align="right">(<a href="#hello--rails-react">back to top</a>)</p>

<!-- FAQ -->

## ❓ FAQ <a name="faq"></a>

- **Can I use the project for any purpose?**

  - Yes, you can use this files for anything you need

- **Do I need to ask for permission?**

  - No need to ask for permission.


<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

** I would like to thank to Microverse for giving this inspiring project **

<p align="right">(<a href="#hello--rails-react">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.
