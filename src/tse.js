
/**
 * Basic template to start for embedding examples and tests.
 * The easiest way to get started with the various components is to log into ThoughtSpot and go to the Develop tab.
 * You can then use the Playground to generate embed code that can be copied (with some modification).
 */

// Add additional imports as needed.

import { Action, AppEmbed } from "@thoughtspot/visual-embed-sdk";
import React from "react";

  
export const EmbedLiveboard = () => {
React.useEffect(() => {
const embed = new AppEmbed("#full-embed", {
    frameParams: {},
    path: "pinboard/22e79c21-eec4-40bf-997b-7454c6e3a2a5",
    disabledActions: [],
    disabledActionReason: "Reason for disabling",
    hiddenActions: [
    Action.Edit,
    Action.EditTitle,
    ],
});
embed.render();
},[]);
return <div id='full-embed' />
}