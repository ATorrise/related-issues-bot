# Related Issues Bot

The **Related Issues Bot** is a GitHub bot designed to analyze the sentiment and content of newly created issues and suggest related issues that might be relevant. This helps maintainers and contributors avoid duplicate issues and promotes more effective issue tracking.

## Project Structure

- **`.github/workflows/related-issues.yml`** - Automatically triggers the Related Issues Bot when issues are created or updated.
- **`src/bot.js`** - Executes the bot's logic: ie analyzing new issues and suggesting related ones based on extracted ideas.
- **`src/config.js`** - Loads config settings from config.yaml then makes these settings accessible to the bot logic.
- **`src/related-issues.js`** - Idea extraction and issue suggestion logic.
- **`.gitignore`** - List of files and directories to be excluded from version control.
- **`config.yaml`** - Definition file for user-definied parameters.
- **`.env`** - Sensitive environment variables (ie GitHub token).
- **`package.json`** - Manages the project's dependencies, scripts, and metadata, essential for installing and running the bot.

## Usage

1. **Clone the repository** to your local machine and install dependencies.
   ```bash
   git clone https://github.com/ATorrise/related-issues-bot.git
   cd related-issues-bot
   npm install
   ```
2. **Configure the bot** by editing the `config.yaml` file and setting up any required secrets or tokens.
3. **Enable the GitHub Actions workflow** by customizing and committing the `related-issues.yml` file to your repository.

