# Barefoot F.I.R.E. Dashboard

This is a personal financial dashboard that displays the key statistics and information.

It uses three overflowing buckets to grow wealth: Blow, Mojo and Grow. Learn more about the [barefoot strategy](docs/barefoot-strategy.md).

## Dashboard features

The dashboard displays the current state of your bucket.

- Health status
  - Displays an overall financial health status and percentage trend
  - Health statuses include: exceeding target, on target, no change, failing target.
- Goals
  - Displays remaining time required to achieve any financial goals.
- Actions
  - Display a list of required actions to maintain financial health.
  - Action include: monthly barefoot review, yearly tax return, purchase goal, update failing financial plan.
- Buckets
  - Displays a breakdown of each bucket for the current month and previous two months in terms of percentage and dollar amount.
  - Within each buckets, the associated account's percentage and dollar amounts are also displayed.
  - Note your Grow bucket shows the amount in your super and investments accounts.
- Forecast
  - Shows a one year financial forecast as a graph designed to keep you motivated.
  - Allows you to select different scenarios to compare forecasts.
  - Displays the end of year difference between base and scenario forecast.
- Budgets
  - Display the roll-up and expanded budgets in percentage and dollar amounts.
- Keyboard shortcuts
  - Open dashboard
  - Refresh dashboard
- Status bar
  - Display an icon reflect your financial health status.
- Notifications
  - Reminder to conduct monthly barefoot review.
  - Financial goal achieved.
  - Financial goal almost achieved in 1, 3 and 6 months.

## Usage

Todo: Figure out precisely what is required to make this helpful dashboard.

- An Obsidian notification will pop up when:
  - An action is required
  - The bucket's target has NOT been met
- Open the dashboard to view the recommended actions.
- The dashboard can also be view any time to see one's financial state and progress.

## How to setup your local development environment

- Create an empty vault for development
  - Start the Obsidian app.
  - In the menu bar, click `File > Open Vault...`
  - In the Vault's modal, click the `create` button.
  - Enter a name for the new vault: `obsidian-dev`.
  - Click the "browse" button to save the vault to your dev/repos folder.
- Start the plugin in dev mode
  - Open VSCode and navigate to `your-dev-folder/obsidian-dev/.obsidian/plugins/`
  - Clone this git repository: `git clone https://github.com/SergeKrstic/barefoot-fire`
  - Install the npm packages: `pnpm install`
  - Start the plugin: `pnpm dev`
- Create a pocketsmith API key
  - Visit <https://my.pocketsmith.com/>
  - Click on `[Account icon] > Security & integrations`.
  - In the "Security & integration" modal, click "Manage developer keys".
  - Enter a name for the new key: "Obsidian F.I.R.E."
  - Then click the "CREATE KEY" button.
  - Copy the key to the clipboard.
- Run the plugin in your Obsidian development vault
  - Open your Obsidian development vault
  - Open Settings > Community plugins
  - Click the refresh button to make Barefoot FIRE visible in the list.
  - Enable the Barefoot FIRE plugin.
  - Open the  Barefoot FIRE plugin's settings.
  - Save the PocketSmith developer token.
  - Todo: figure out to configure which accounts are used for each bucket.

## How to develop the plugin

- Clone [hot-reload](https://github.com/pjeby/hot-reload.git) in the Obsidian developments vault's plugin folder
- `git clone https://github.com/pjeby/hot-reload.git`
- Open `Settings > Community plugins`
- Click the refresh button to make `hot-reload` visible in the list.
- Enable the Hot Reload plugin.
- In VSCode, run the barefoot-fire plugin in dev mode: `pnpm dev`
- The plugin will automatically update in Obsidian whenever files are changed and saved in VSCode.

## How to release the plugin

- Manual process
  - Update the version number in `<root>/package.json` to `x.x.x`.
  - Run the script to bump the version in `manifest.json` and `version.json`: `pnpm bump-version`.
  - Add the changed files to git staging: `git add .`
  - Commit the changed files to git: `git commit -m "your-commit-message-here"`
  - Tag this commit in git: `git tag x.x.x`
  - Push the commit to remote: `git push origin main`
  - Push the tag to remote: `git push origin main --tags`
  - To produce the production version of `main.js`, build the plugin : `pnpm run build`.
  - Open Finder and navigate the plugin's directory: `your-dev-folder/obsidian-dev/.obsidian/plugins/barefoot-fire`
  - Go the tags page in Github: <https://github.com/SergeKrstic/barefoot-fire/tags>.
  - Click the three-dot button and select "Create release".
  - Drag the production file into the attach box in the Github tags page: `main.js`, `manifest.json` and `styles.css`.
  - Finally, click the "Publish release" button.
- Github Actions process
  - A release workflow using Github Action is defined in `<root>/.github/workflows/release.yml`
  - Browse to your repository on GitHub and select the **Settings** tab. Expand the **Actions** menu in the left sidebar, navigate to the **General** menu, scroll to the **Workflow permissions** section, select the **Read and write permissions** option, and save.
  - Update the version number in `<root>/package.json` to `1.0.1`.
  - Run the script to bump the version in `manifest.json` and `version.json`: `pnpm bump-version`.
  - Add the changed files to git staging: `git add .`
  - Commit the changed files to git: `git commit -m "your-commit-message-here"`
  - Create a tag that matches the version in the manifest.json file.
    - `git tag -a 1.0.1 -m "1.0.1"`
    - `git push origin 1.0.1`
    - `-a` creates an annotated tag.
    - `-m` specifies the name of your release. For Obsidian plugins, this must be the same as the version.
  - Browse to your repository on GitHub and select the Actions tab. Your workflow might still be running, or it might have finished already.
  - When the workflow finishes, go back to the main page for your repository and select Releases in the sidebar on the right side. The workflow has created a draft GitHub release and uploaded the required assets as binary attachments.
  - Select Edit (pencil icon) on the right side of the release name.
  - Add release notes to let users know what happened in this release, and then select Publish release.

## How use the plugin in your personal vault

- Install the Barefoot FIRE plugin
  - Open your personal vault.
  - Open `Settings > Community plugins`
  - Search for BRAT to install and enable this plugin.
  - Open BRAT's settings page.
  - Click the "Add Beta plugin" button.
  - Enter the Github repository: `https://github.com/SergeKrstic/barefoot-fire`
  - Click "Add Plugin" button.
- Create a pocketsmith API key
  - Visit <https://my.pocketsmith.com/>
  - Click on [Account icon] > Security & integrations.
  - In the "Security & integration" modal, click "Manage developer keys".
  - Enter a name for the new key: "Obsidian F.I.R.E."
  - Then click the "CREATE KEY" button.
  - Copy the key to the clipboard.
- Configure the plugin
  - Open the settings for the Barefoot FIRE plugin
  - Paste the key into the "Pocketsmith API Key" field.
- Use the plugin
  - Click the "fire" icon to open the dashboard view.
