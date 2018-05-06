# How to run

Just start the webserver.js via

```
    yarn start
```

Which uses:

```
    pm2 start ecosystem.json --watch
```

Or just use nodemon (need to add dependency):


```
    nodemon webserver.js
```

# What's wrong?

App-shell is not working, you will see that it cannot find the property on app-route. Note, app-route is not even loaded but as soon as you try to use a property on an element it breaks it seems. 

### How to remove the error:
- Remove app-shell, then it'll work
- Or remove iron-selector and it will work
- Alternatively keep both and remove absoluteView and it will work as well
- I had cases where my css mixins like alternativeView will be the values of properties such as `route`