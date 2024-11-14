import { StrictMode } from "react";
import { ItemView, WorkspaceLeaf } from "obsidian";
import { Root, createRoot } from "react-dom/client";
import { ReactViewComponent } from "./ReactView.component";

export const VIEW_TYPE_EXAMPLE = "react-view";

export class ReactView extends ItemView {
	root: Root | null = null;

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType(): string {
		return VIEW_TYPE_EXAMPLE;
	}

	getDisplayText(): string {
		return "Example view";
	}

	async onOpen(): Promise<void> {
		this.root = createRoot(this.containerEl.children[1]);
		this.root.render(
			<StrictMode>
				<ReactViewComponent />
			</StrictMode>,
		);
	}

	async onClose(): Promise<void> {
		this.root?.unmount();
	}
}
