import { memo } from 'react'

export const ConfigureApiKey = memo(function ConfigureApiKey(): React.JSX.Element {
  return (
    <div className="fire-container">
      <div className="fire-title">
        <h4>Barefoot FIRE</h4>
      </div>
      <div>Please set up your Pocketsmith API key.</div>
      <ul>
        <li>
          Visit{' '}
          <a href="https://my.pocketsmith.com" target="_blank">
            my.pocketsmith.com
          </a>
          .
        </li>
        <li>Log into your account.</li>
        <li>
          In the top-right corner, click on <b>{`[Account icon] > Security & integrations`}</b>.
        </li>
        <li>
          In the <b>Security & integration</b> modal, select <b>Manage developer keys</b>.
        </li>
        <li>Enter a name for the new key, eg "Obsidian FIRE".</li>
        <li>
          Then click the <b>CREATE KEY</b> button.
        </li>
        <li>Copy the key to the clipboard.</li>
        <li>Next, open Obsidian settings.</li>
        <li>
          Click on the <b>Community plugins</b> tab.
        </li>
        <li>
          Find the <b>Obsidian FIRE</b> plugin.
        </li>
        <li>
          Paste the key into the <b>Pocketsmith API key</b> field.
        </li>
      </ul>
    </div>
  )
})
