# Barefoot Dashboard

This is a personal financial dashboard that displays the key statistics and information.

It uses three overflowing buckets to grow wealth: Blow, Mojo and Grow. Learn more about the [barefoot strategy](docs/barefoot-strategy.md).

## Dashboard features

The dashboard displays the current state of your bucket.

Todo: detail its main feature.

## Usage

Todo: Figure out precisely what is required to make this helpful dashboard.

- An Obsidian notification will pop up when:
- An action is required
- The bucket's target has been met
- Open the dashboard to view the recommended actions.
- The dashboard can also be view any time to see one's financial state and progress.

## Setup

Todo: document how to set up this Obsidian plugin.

- Install the plugin using BRAT and point to the git url.
- Request a PocketSmith developer token.
- Open the plugin's settings page.
- Save the PocketSmith developer token.
- Configure which accounts are used for each bucket.

## Development

- Clone [hot-reload](https://github.com/pjeby/hot-reload.git) in the Obsidian developments vault's plugin folder
- `git clone https://github.com/pjeby/hot-reload.git`
- Open `Settings > Community plugins`
- Click the refresh button to make `hot-reload` visible in the list
- Enable the Hot Reload plugin.
- In VSCode, run the barefoot-fire plugin in `dev` mode: `pnpm dev`
- The plugin will automatically update in Obsidian whenever files are changed and saved in VSCode.
