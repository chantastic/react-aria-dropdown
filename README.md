# react-aria-dropdown

WIP

## Installation

### Node
```bash
npm i react-aria-dropdown
```

### Browser
```bash
<script src="https://unpkg.com/react-aria-dropdown@0.2.0"></script>
```

## Usage

### Codesandbox

https://codesandbox.io/s/98l4pm0v4o

### Import

Import used for examples below:

```js
import {
  Provider as Dropdown,
  Consumer,
  ToggleButton,
  Popup
} from "react-aria-dropdown";
```

### Basic

```jsx
<Dropdown popup={<div>popup content</div>}>
  <ToggleButton>Toggle</ToggleButton>
  <Popup />
</Dropdown>
```

### Basic + id

```jsx
<Dropdown id="my-custom-id-" popup={<div>popup content</div>}>
  <ToggleButton>Toggle</ToggleButton>
  <Popup />
</Dropdown>
```

### Basic + initialState

```jsx
<Dropdown
  initialState={{ expanded: true }}
  popup={<div>popup content</div>}
>
  <ToggleButton>Toggle</ToggleButton>
  <Popup />
</Dropdown>
```

### Optional render-prop

```jsx
<Dropdown popup={<div>popup content</div>}>
  {context => (
    <React.Fragment>
      <pre>{JSON.stringify(context.state, null, 2)}</pre>
      <ToggleButton />
      <Popup />
    </React.Fragment>
  )}
</Dropdown>
```

### Optional Context Consumer

```jsx
<Dropdown popup={<div>popup content</div>}>
  <Consumer>
    {context => (
      <React.Fragment>
        <pre>{JSON.stringify(context.state, null, 2)}</pre>
        <ToggleButton />
        <Popup />
      </React.Fragment>
    )}
  </Consumer>
</Dropdown>
```

### License

MIT

Copyright &copy; Michael Chan, 2018