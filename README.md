# Note App

Note App is a simple web application built with Rails API backend and a React frontend that allows users to create, read, update, and delete notes. It also provides authentication functionality for user registration and login.

## Features

- User registration: Users can create an account with a unique username and password.
- User login: Users can securely log in to their account using their credentials.
- Create notes: Authenticated users can create new notes by providing a title and content.
- View notes: Users can view a list of their notes with titles and content.
- Update notes: Users can edit and update their existing notes.
- Delete notes: Users can delete their notes permanently.
- Search notes: Users can search through the displayed notes.

## Prerequisites

- Ruby (version 3.0.5p211)
- Rails (version 7.0.6)
- NodeJS (v16), and npm
- PostgreSQL (optional, can be replaced with other databases)

## Getting Started

1. Clone the repository
2. Navigate to the project directory
3. Install the dependencies: bundle install
4. Set up the database:
   * rails db:create
   * rails db:migrate
5. Start the Rails server: rails s
6. Run React in another terminal with:
   * npm install --prefix client
   * npm start --prefix client

7. Open your browser and visit `http://localhost:4000` to access the application.

## Configuration

You can configure the application by modifying the following files:

- `config/database.yml`: Update the database configuration if needed.
- `config/secrets.yml`: Set up your application's secret keys.

## Usage

1. Register a new user account by visiting the registration page.
2. Log in using your credentials.
3. Create, update, and delete notes through the application's user interface.
4. Search notes
5. Logout when you're done.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please submit a pull request or open an issue on the project repository.

## License

The project is licensed under the [MIT License](https://opensource.org/licenses/MIT).



