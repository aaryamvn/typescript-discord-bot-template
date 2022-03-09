import { AutocompleteInteraction } from "discord.js";
import BetterClient from "../extensions/BetterClient";

export default class AutoComplete {
    /**
     * The name of our autoComplete.
     */
    public readonly name: string;

    /**
     * Our client.
     * @private
     */
    // @ts-ignore
    public readonly client: BetterClient;

    /**
     * Create our autoComplete.
     * @param name The name of our autoComplete.
     * @param client Our client.
     */
    constructor(name: string, client: BetterClient) {
        this.name = name;

        this.client = client;
    }

    /**
     * Run the autocomplete.
     * @param _interaction The interaction that was created.
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public async run(_interaction: AutocompleteInteraction): Promise<void> {}
}