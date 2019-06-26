## Approach

The following project is built considering a small demo of what could be a large scale app, so the next lines should guide you throught the rationalization behind highlighted design decisions

### Demos
You can see the demos for the working app for the Android and IOS version. The Android versions shows a splash screen that was not recorded by mistake in the IOS gif and also an improved check mark for the song selection that was created after the IOS recording.

![Android Demo](https://github.com/cutiko/EverPlay/blob/master/Everplay%20v1dot2%20android.gif?raw=true)

![IOS Demo](https://github.com/cutiko/EverPlay/blob/master/Everplay%20v1%20ios.gif?raw=true)

### Data Structure
The following data structure is heavily influenced by mi experiences working with Firebase Real-Time Database, allthougt it could be translated to a tables physical implementation. However, this data structure is better for showing what would a client app will receive as response in a real REST JSON API request.


```
  {
    "users_lists_rows": {
      "uid1": {
        "list1": {
          "key": "list1",
          "name": "Cool Playlist",
          "color": "#FFF",
          "songs": {
            "songId1": true,
            "songId2": true,
            "songId289": true
          }
        },
        "list2": {
          "key": "list2",
          "name": "Second Playlist",
          "color": "#F4A45F",
          "songs": {
            "songId2": true,
            "songId500": true
          }
        }
      },
      "uid2": {...}
    },
    "users_lists": {
      "uid1": {
        "list1": {
          "songs": {
            "songId1": {
              "key": "songId1",
              "name": "Sad Song"
            },
            "songId2": {
              "key": "songId2",
              "name": "Foo Bar Song"
            },
            "songId289": {
              "key": "songId289",
              "name": "National Anthem"
            }
          },
          "key": "list1"
        }...
      },
      "uid2": {...}
    },
    "user_songs": {
      "uid1": {
        "songId1": {
          "key": "songId1",
          "name": "Sad Song",
          "playlists": {
            "list1": true
          }
        },
        "songId2": {
          "key": "songId2",
          "name": "Foo Bar Song",
          "playlists": {
            "list1": true,
            "list2": true
          }
        },
        "songId289": {
          "key": "songId289",
          "name": "National Anthem",
          "playlists": {
            "list1": true
          }
        },
        "songId500": {
          "key": "songId500",
          "name": "Song 1",
          "playlists": {
            "list1": true
          }
        }
      },
      "uid2": {...}
    },
    "songs": {
      "songId500": {
        "key": "songId500",
        "name": "Song 1"
      },
      "songId1": {
        "key": "songId1",
        "name": "Sad Song"
      },
      "songId2": {
        "key": "songId2",
        "name": "Foo Bar Song"
      },
      "songId289": {
        "key": "songId289",
        "name": "National Anthem"
      }
    }
  }
```

 - users_ list_rows: represents the entry point for a play list, it has the ui data mostly, it has a map with the id of the songs so when a song is removed or added the counter can change as well
 - users_list: it contains the songs of that particular playlist
 - user_songs: songs that belong to the user, it has a map with the id of the playlists where the song is included this way when looking at the songs list from a playlist it can be known if the song belongs to that playlist or not
 - songs: all the songs available (in the ficticious REST service)

This data structure should allow to search for `songs` and then keeping selected songs or previous results in some sort of local persistence. In this case the local persistence is the file called `seed.ts` named like that in the honor of the RoR seed files.

Considering compile languajes iterating over thousands of objects would be no problem, but Maps have better performance. Modern languajes map implementations tend to be `O(1)`, instead, iterating will be linear if not sorted, log if sorted or using indexOf. Besides, this *mapped* structure allow to pinpoint relations between objects precisely.

Eventually a more elaborated aplication could include the url for the actual song and if is downloaded then the local object would have the reference to the device storage.

If you want to see the full example the file is called `seed_example.json`.


### Architecture
While figuring how to solve this, my main concerns where 2:

 - Solve it in a *React way*
 - My experience as Android developer makes me worry about device performance

The traditional way to solve this in Android it would be to use the SQL database, then each screen will set a listener to a database query for accesing the data. The problems with this is [the library I found](https://github.com/andpor/react-native-sqlite-storage) for it, has a very extensive setup and it doesn't seem to have a way to provide an observable for the data. Using the component lifecycle to query the data each time, loose the reactive programming in the *react way*, is wastefull, and could be frail if the component lifecycle is not called due to a navigation problem.

The previous analisis made me shift to what I have done in the pass using React, wich is using Redux. The next step then, would be handling the navigation.

The recommended navigation according to native docs is react-navigation. I was very confused with this, because when searching how to integrate it with Redux, found another library with the [same name](https://github.com/wix/react-native-navigation) but from Wix. I was miss lead because the integration seemed simple, but adding the wix library was hurtfully extensive. After that, my choice was to try using my humble knowledge on React and Redux for solving the integration with the recommended react-navigation. My conjecture at the moment was, that the navigator should be wrapped by the `Provider` from Redux, eventually will solving this, this lead me back to the recommended react-navigation documentation, specifically to the integration with Redux section, solving my problem.

Regarding navigation, I also considered using Router, however, this alternative was discharged because, Router would show and hide stuff instead of handling it like sreens as is done in a mobile native approach. At this moment I'm not sure that react-navigation is superior, because while conducting some quick experiments with the component lifecycle I found some events are not called when expected. To truly test wich navigation is more performant, a POC should be made with more time. My first approach for this POC, would be to look at the Android Activity lifecycle to see if is actually happening. This would be important for a production app, so the team truly knows what is the performance of the choosen library.

**Summary**: React Redux with react-navigation


### App Workflow

Considering the idea of making this scalable, a SplashScreen was added to later be use as a user experience holder for synchronization operations.

Redux is providing the app state with 3 data sets:

 - The list of playlists rows (ui data, like color and playlist name)
 - The lists of playlists (each playlist has the songs)
 - And the list of songs (each song has the ids of the playlist that included it)

The MainScreen is connected to redux state for the list of playlists rows, once a a row is clicked the key of that playlist is passed to the next using react-navigation.
The PlaylistScreen is connected to the redux state as well, for the list of playlists, it uses the passed key to show only the selected playlist. When the user press the add button on the top rigth corner, the key is passed to the next screen.
The SongsScreen is connect to the songs state of redux and uses the list key passed on the navigation to set a visual check on each row if is included in this list.

When a song is clicked, the event is dispatch to redux, where every reducer will take care of updating its own state in a appropiate manner. The songs state, will update the id of the playlists in the song (added or remove it). The playlists state, will update the song on the playlist (added or remove it). And the playlists rows will update the state removing or adding the song id, changing the counter.

**Summary**: When then user add or remove a song on the SongScreen every other state is updated.

### TypeScript
This is the first time I write in typescript, so I feel very anxious about my performance related with it. In this run, I have grown very fond of typescript, it leverage the power of JS and makes it more explicit. I have very strong possitive sentiments toward typescript, because:

 - Is less prone to errors, my favorite example is: a callback cascaded using the HOC pattern can be defined as a function that receives `n` arguments and each argument is defined with a type
 - By explicitly declaring what is going on, I have learned more about my dependencies, by example, instead of using `any` as the `dispatch` type for redux, I learned it actually uses a type `Dispatch`

While looking for how to typescript, I got more confused, some people will focus on using stuff like `PureComponent` and `FunctionalComponent` while others will focus on the typed side of the language. I felt that the true power of the language was in the later, rather than writting `PureComponent` instead of just `Component`.


### Assets
I was not sure untill recently how to properly use assets, so I started with some basic assets as placeholders. I postpone this taks because there were more important things to solve first. By example, U had to solve the critical path, if the redux and navigation integration failed, I would have nothing.

After reviewing the docs related with it. I think React Native approach for assets is fairly simple and should be enough for any screen density. Since I was on this, I took some time to create an Illustrator script for automatically saving any of my work with images in every density needed (@1x, @2x, @3x).

### Improvements

 - PlaylistScreen listen to all the playlists

### Known Issues

 - Android Back Button