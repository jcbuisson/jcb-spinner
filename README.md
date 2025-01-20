
# jcb-spinner

A custom element that displays a rotating spinner for loading or progress indicators.


## Attributes

### `visible`
- **Type**: `Boolean`
- **Description**: Indicates whether the spinner is visible or not.
- **Default**: `false`

---

## CSS Custom Properties

### `--jcb-spinner-size`
- **Description**: Width and height of the rotating spinner.
- **Default**: `18em`

### `--jcb-spinner-background-opacity`
- **Description**: Opacity of the spinner's background.
- **Default**: `0.3`

### `--jcb-spinner-border-width`
- **Description**: Width of the spinner's border.
- **Default**: `25px`

### `--jcb-spinner-border-background`
- **Description**: Background color of the spinner's border.
- **Default**: `#ccc`

### `--jcb-spinner-border-color`
- **Description**: Color of the spinner's border.
- **Default**: `#007bff`


## Usage Example
```
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>jcb-spinner</title>
      <script type="module" src="/src/jcb-spinner.js"></script>
   </head>
   <body>
      <button id="toggle">toggle</button>

      <jcb-spinner id="spin">
         <div class="text">Look for a</div>
         <div class="text">better solution...</div>
         <div class="button-container">
            <button id="abandon" class="btn" onclick="toggle">Cancel</button>
         </div>
      </jcb-spinner>
   </body>
</html>

<script>
   document.getElementById('toggle').addEventListener('click', toggle)
   document.getElementById('abandon').addEventListener('click', toggle)

   const spin = document.getElementById('spin')

   function toggle() {
      spin.visible = !spin.visible
   }
</script>

<style>
:root {
   --jcb-spinner-size: 300px;
   --jcb-spinner-background-opacity: 0.7;
   --jcb-spinner-border-width: 15px;
   --jcb-spinner-border-background: #888;
   --jcb-spinner-border-color: red;
}

.text {
   text-align: center;
   font-weight: bold;
   color: white;
   font-size: 1.5rem; /* Equivalent to text-2xl */
}

.button-container {
   width: 100%;
   display: flex;
   justify-content: center;
   margin-top: 0.75rem; /* Equivalent to mt-3 */
}

.btn {
   background: none;
   border: none;
   color: white;
   text-decoration: underline;
   font-size: 1.125rem; /* Equivalent to text-lg */
   width: 20rem; /* Equivalent to w-80 */
   cursor: pointer;
}

.btn:hover {
   opacity: 0.8;
}
</style>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet">
```
