## Approach

The following project is built considering a small demo of what could be a large scale app, so the next lines should guide you through the rationalization behind highlighted design decisions

### Demos
You can see the demos for the working app for the Android and IOS version. The Android versions show a splash screen that was not recorded by mistake in the IOS gif and also an improved check mark for the song selection that was created after the IOS recording.

![Android Demo](https://github.com/cutiko/EverPlay/blob/master/Everplay%20v1dot2%20android.gif?raw=true)

![IOS Demo](https://github.com/cutiko/EverPlay/blob/master/Everplay%20v1%20ios.gif?raw=true)

### Data Structure
The following data structure is heavily influenced by my experiences working with Firebase Real-Time Database, although it could be translated to tables physical implementation. However, this data structure is better for showing what a client app will receive as a response in a real REST JSON API request.


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

 - users_ list_rows: represents the entry point for a playlist, it has the ui data mostly, it has a map with the id of the songs so when a song is removed or added the counter can change as well
 - users_list: it contains the songs of that particular playlist
 - user_songs: songs that belong to the user, it has a map with the id of the playlists where the song is included this way when looking at the songs list from a playlist it can be known if the song belongs to that playlist or not
 - songs: all the songs available (in the fictitious REST service)

This data structure should allow to search for `songs` and then keeping selected songs or previous results in some sort of local persistence. In this case, the local persistence is the file called `seed.ts` named like that in the honor of the RoR seed files.

Considering compile languages iterating over thousands of objects would be no problem, but Maps have better performance. Modern languages map implementations tend to be `O(1)`, instead, iterating will be linear if not sorted, log if sorted or using indexOf. Besides, this *mapped* structure allows pinpointing relations between objects precisely.

Eventually, a more elaborated application could include the url for the actual song and if is downloaded then the local object would have the reference to the device storage.

If you want to see the full example the file is called `seed_example.json`.


### Architecture
While figuring how to solve this, my main concerns were 2:

 - Solve it in a *React way*
 - My experience as an Android developer makes me worry about device performance

The traditional way to solve this in Android it would be to use the SQL database, then each screen will set a listener to a database query for accessing the data. The problems with this is [the library I found](https://github.com/andpor/react-native-sqlite-storage) for it, has a very extensive setup and it doesn't seem to have a way to provide an observable for the data. Using the component lifecycle to query the data each time, lose the reactive programming in the *react way*, is wasteful, and could be frail if the component lifecycle is not called due to a navigation problem.

The previous analysis made me shift to what I have done in the past using React, which is using Redux. The next step then would be handling the navigation.

The recommended navigation according to native docs is react-navigation. I was very confused with this because when searching how to integrate it with Redux, found another library with the [same name](https://github.com/wix/react-native-navigation) but from Wix. I was miss lead because the integration seemed simple, but adding the wix library was hurtfully extensive. After that, my choice was to try using my humble knowledge on React and Redux for solving the integration with the recommended react-navigation. My conjecture at the moment was, that the navigator should be wrapped by the `Provider` from Redux, eventually will solving this, this leads me back to the recommended react-navigation documentation, specifically to the integration with Redux section, solving my problem.

Regarding navigation, I also considered using Router, however, this alternative was discharged because Router would show and hide stuff instead of handling it like screens as is done in a mobile-native approach. At this moment I'm not sure that react-navigation is superior because while conducting some quick experiments with the component lifecycle I found some events are not called when expected. To truly test which navigation is more performant, a POC should be made with more time. My first approach for this POC would be to look at the Android Activity lifecycle to see if is actually happening. This would be important for a production app, so the team truly knows what is the performance of the chosen library.

**Summary**: React Redux with react-navigation


### App Workflow

Considering the idea of making this scalable, a SplashScreen was added to later be used as a user experience holder for synchronization operations.

Redux is providing the app state with 3 data sets:

 - The list of playlists rows (ui data, like color and playlist name)
 - The lists of playlists (each playlist has the songs)
 - And the list of songs (each song has the ids of the playlist that included it)

The MainScreen is connected to the redux state for the list of playlists rows, once a row is clicked the key of that playlist is passed to the next using react-navigation. 
The PlaylistScreen is connected to the redux state as well, for the list of playlists, it uses the passed key to show only the selected playlist. When the user presses the add button on the top right corner, the key is passed to the next screen. 
The SongsScreen is connected to the songs state of redux and uses the list key passed on the navigation to set a visual check on each row if is included in this list.


When a song is clicked, the event is dispatch to redux, where every reducer will take care of updating its own state in an appropriate manner. The songs state will update the id of the playlists in the song (added or remove it). The playlists state will update the song on the playlist (added or remove it). And the playlists rows will update the state removing or adding the song id, changing the counter.

**Summary**: When the user adds or remove a song on the SongScreen every other state is updated, updating the other screens as well.

### TypeScript
This is the first time I write in typescript, so I feel very anxious about my performance related to it. In this run, I have grown very fond of typescript, it leverages the power of JS and makes it more explicit. I have very strong positive sentiments toward typescript, because:

 - Is less prone to errors, my favorite example is: a callback cascaded using the HOC pattern can be defined as a function that receives `n` arguments and each argument is defined with a type
 - By explicitly declaring what is going on, I have learned more about my dependencies, by example, instead of using `any` as the `dispatch` type for redux, I learned it actually uses a type `Dispatch`

While looking for how to typescript, I got more confused, some people will focus on using stuff like `PureComponent` and `FunctionalComponent` while others will focus on the typed side of the language. I felt that the true power of the language was in the later, rather than writing `PureComponent` instead of just `Component`.


### Assets
I was not sure until recently how to properly use assets, so I started with some basic assets as placeholders. I postpone this tasks because there were more important things to solve first. By example, U had to solve the critical path, if the redux and navigation integration failed, I would have nothing.

After reviewing the docs related to it. I think React Native approach for assets is fairly simple and should be enough for any screen density. Since I was on this, I took some time to create an Illustrator script for automatically saving any of my work with images in every density needed (@1x, @2x, @3x).

### Improvements

 - PlaylistScreen listen to all the playlists then use the key pass with navigation to define 1 playlist to show. This should not be a problem, but it seems wasteful to have an unused amount of playlists just been there. I think the solution would be to have something like another state `currentPlaylist` the problem is I can't figure now how to concatenate the 2 states.

### Known Issues

 - Users can go back to the SplashScreen on Android when pressing the back button. This error was not anticipated because is not a major problem on Android Java/Kotlin. The first attempts to solve it points to using the listener for the event could prove fruitful but removing the listener when changing screen is troublesome. The splash screen is a very useful user experience pattern, maybe integrating Router only for that part could solve it better than handling the back button.