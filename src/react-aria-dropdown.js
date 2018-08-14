import React from "react";
import uid from "lodash.uniqueid";

let StateContext = React.createContext();

let Consumer = StateContext.Consumer;

export { Consumer };

export class Provider extends React.Component {
  constructor(props) {
    super(props);

    this.update = (updater, done) => {
      this.setState(
        prevState => ({
          state:
            typeof updater === "function" ? updater(prevState.state) : updater
        }),
        done
      );
    };
    this.state = {
      state: props.initialState,
      update: this.update,
      id: props.id,
      popup: props.popup
    };
  }

  render() {
    return (
      <StateContext.Provider value={this.state}>
        {typeof this.props.children === "function"
          ? this.props.children(this.state)
          : this.props.children}
      </StateContext.Provider>
    );
  }
}
Provider.defaultProps = {
  initialState: {
    expanded: false
  },
  popup: null,
  id: uid("react-aria-dropdown-"),
  children: <div />
};

export function ToggleButton(props) {
  return (
    <StateContext.Consumer>
      {value => (
        <button
          aria-haspopup={value.popup ? true : false}
          aria-expanded={value.state.expanded}
          id={value.id}
          onClick={() =>
            value.update(({ expanded }) => ({ expanded: !expanded }))
          }
          type="button"
          {...props}
        >
          {value.state.expanded ? "true" : "false"}
        </button>
      )}
    </StateContext.Consumer>
  );
}

export function Popup(props) {
  return (
    <StateContext.Consumer>
      {value =>
        value.state.expanded
          ? value.popup
            ? React.cloneElement(value.popup, { "aria-labelledby": "test" })
            : null
          : null
      }
    </StateContext.Consumer>
  );
}
