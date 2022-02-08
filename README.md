# Medium Stats

Live: [el3um4s.github.io/medium-stats/](https://el3um4s.github.io/medium-stats/)

My experiments about how to get better Medium Stats.

I'm blogging about the development process in these posts:

- How to Get Medium Stats With JavaScript and Svelte Part 1: [Medium](https://javascript.plainenglish.io/how-to-get-medium-stats-with-javascript-and-svelte-part-1-a1d08b96799e) - [Strani Anelli](https://blog.stranianelli.com/medium-stats-with-javascript-and-svelte-part-1/)
- How To Create Responsive Data Tables With CSS Grid: [Medium](https://betterprogramming.pub/how-to-create-responsive-data-tables-with-css-grid-9e0a37394450) - [Strani Anelli](https://blog.stranianelli.com/how-to-create-responsive-data-tables-with-css-grid/)
- How to Get Medium Stats With JavaScript and Svelte Part 2: [Medium](https://javascript.plainenglish.io/how-to-get-medium-stats-with-javascript-and-svelte-part-2-1f52e86631c0) - [Strani Anelli](https://blog.stranianelli.com/medium-stats-with-javascript-and-svelte-part-2/)
- Visualize Your Medium Stats With Svelte and JavaScript: [Medium](https://betterprogramming.pub/visualize-your-medium-stats-with-svelte-and-javascript-eb1ef7c71a63) - [Strani Anelli](https://blog.stranianelli.com/5-charts-example-to-get-you-started/)

_Note that you will need to have [Node.js](https://nodejs.org) installed._

## Get started

Clone the repository and then install the dependencies...

```bash
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

## Deploying to the web

### With [GitHub Pages](https://pages.github.com/)

Edit the `gh-pages.js` file with your info. Then, from within your project folder:

```bash
npm run build
npm run deploy
```

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```
