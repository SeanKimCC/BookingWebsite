

/**
 * Before you modify this file, it is highly recommended that you read following React.js' documentations to get a general understanding of React.js:
 *
 * http://facebook.github.io/react/docs/tutorial.html
 * http://facebook.github.io/react/docs/thinking-in-react.html
 * http://facebook.github.io/react/docs/why-react.html
 * http://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html
 * http://facebook.github.io/react/docs/multiple-components.html
 * https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750
 *
 * It is really helpful to install React Developer Tools: https://facebook.github.io/react/blog/2015/09/02/new-react-developer-tools.html
 *
 * Also if a component overrides shouldComponentUpdate method, you don't want to do "this.state.blabla = 1" in the component because it makes diffing current state and next state harder.
 * Immutable data structures helps in this case but we don't use immutable data structures yet.
 */
(function()
{
    var mainPage = React.createClass({
        displayName : "Homepage",
        propTypes : {
            
        },
        getDefaultProps : function () {
            
        },
        getInitialState : function () {
            
        },
        render : function () {
            return React.createElement("div", {}, "hello world!");
        }
    })
})();