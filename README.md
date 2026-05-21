# Namaste REACT 🚀

# Parcel - a beast

- Dev Build

- Local Server

- HMR = 'Hot Module Replacement' (automatic refresh the webpage when we make changes in any of the files) - How?

- by using 'File Watching Algorithm' - written in C++. (it keeps an eye on all these files. As soon as we change anything in any of our files, parcel keeps track of everything. As soon as we do it, parcel will build it once again. As soon as we save, it is building once again.)

- 'Caching' - Faster Builds (parcel is caching things and keeping it so that the next builds are built faster.)
  So if we delete the .parcel-cache folder and again restart the parcel, it will take more time because it will again rebuild the cache folder. After the cache folder is built, it will then take lesser time for further subsequent builds after changes in our code.

- Image optimization (Most expensive thing in the browser is loading images. parcel optimizes that for us too)

- Minification(while doing production build)
- Bundling
- Compress (removes white spaces, decreases the size, etc, etc)

So React is not the only thing that makes our app fast. There are so many more things that 'bundlers' are doing to make our apps fast. The things are not automatically present when we install react, bundlers do that.

parcel also does not do everything on its own. It needs the help of other libraries present inside node_modules.
