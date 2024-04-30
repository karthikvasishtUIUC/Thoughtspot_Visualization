import { init } from '@thoughtspot/visual-embed-sdk';
import { LiveboardEmbed } from '@thoughtspot/visual-embed-sdk/react';

// If you are using Webpack 4 (which is the default when using create-react-app v4), you would need to import
// the React components using the below:
import { LiveboardEmbed } from '@thoughtspot/visual-embed-sdk/lib/src/react';

init({
    thoughtSpotHost: '<%=tshost%>',
    authType: AuthType.None,
});

const Liveboard = ({liveboardId}) => {
   const ref = useEmbedRef<typeof LiveboardEmbed>();
    //apply runtime filters
   const runtimeFilters = [
      {
        columnName: "state",
        operator: RuntimeFilterOp.EQ,
        values: ["michigan"],
      },
    ];
   const onLoad = () => {
   console.log(EmbedEvent.Load, {});
   };
   //Register an event handler to trigger the SetVisibleVizs event when the Liveboard is rendered
    const onLiveboardRendered = () => {
      embedRef.current.trigger(HostEvent.SetVisibleVizs, [
         "3f84d633-e325-44b2-be25-c6650e5a49cf",
         "28b73b4a-1341-4535-ab71-f76b6fe7bf92",
        ]);
      };
   return (
    <LiveboardEmbed
        frameParams={{
            height: 400,
        }}
        ref={embedRef}
        liveboardId="d084c256-e284-4fc4-b80c-111cb606449a"
        runtimeFilters={runtimeFilters}
        onLoad={onLoad}
        onLiveboardRendered={onLiveboardRendered}
    />
  );
};