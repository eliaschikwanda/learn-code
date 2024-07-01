# Angular Learing Recording Progress
## This is to record my progress learning Angular.

I have started learning Angular on YouTube using the channel CodeWithMosh
and this is the link to the [video](https://www.youtube.com/watch?v=k5E2AVpwsko&t).

### Shortcuts in Angular.
`g` - generate <br>
`c` - component <br>
`s` - service <br>
- For creating a component you use `ng g c "componet-name"`
* For creating a service you use `ng g s "service-name"`


### General Notes
- To start a new project with a traditional program structure use `ng new "app-name" --standalone false`, and for
the one with standalone structure use `ng new "app-name"`
- To use a library like bootsrap in our program use the command `npm install bootstrap --save`. It install bootsrap and
  adds it on the Node modules folder. Bootstrap is also added as a dependency in `package.json` file. After running the
  command you can see that bootstrap is added to the depencies section of the `package.json` file. In this case my
  version was `^5.3.3` with the format `major.minor.patch`. The `^` means we can use the most recent minor version of the
  dependency, meaning we can use `5.4` or `5.5`, but not the newer major version.
- To download all the dependencies in the folder with a `package.json` file (for example using version control) use `npm install`
  download all the dependencies.
- To run an Angular app using angular cli use `npx ng serve`.
