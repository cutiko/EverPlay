import {PlayListRow} from "./models/PlayListRow";
import {accent, primary, white} from "./theme/colors";
import {Song} from "./models/Song";
import {Playlist, PlaylistState} from "./models/Playlist";

const happy : Song = {
  key: "Happy",
  name: "Happy",
  playlists: new Map<String, boolean>().set("Relaxation", true)
}


const bohemian : Song = {
  key: "Bohemian Rhapsody",
  name: "Bohemian Rhapsody",
  playlists: new Map<String, boolean>().set("RoadTrip", true).set("Work", true)
}

const sandman : Song = {
  key: "Enter Sandman",
  name: "Enter Sandman",
  playlists: new Map<String, boolean>().set("Work", true)
}

export const playlistsRows = new Map<String, PlayListRow>()
const rows = [
  {
    key: "RoadTrip",
    name: "RoadTrip",
    color: white,
    songs: new Map<String, boolean>().set(bohemian.key, true)
  },
  {
    key: "Work",
    name: "Work",
    color: primary,
    songs: new Map<String, boolean>().set(bohemian.key, true).set(sandman.key, true)
  },
  {
    key: "Relaxation",
    name: "Relaxation",
    color: accent,
    songs: new Map<String, boolean>().set(happy.key, true)
  }
]
rows.map(row=>{
  playlistsRows.set(row.key, row)
})

export const songs = new Map<String, Song>()
songs.set(happy.key, happy)
songs.set(bohemian.key, bohemian)
songs.set(sandman.key, sandman)

const roadtrip : Playlist = {
  key: rows[0].key,
  songs: new Map<String, Song>().set(bohemian.key, bohemian)
}

const work : Playlist = {
  key: rows[1].key,
  songs: new Map<String, Song>().set(bohemian.key, bohemian).set(sandman.key, sandman)
}

const relax : Playlist = {
  key: rows[2].key,
  songs: new Map<String, Song>().set(happy.key, happy)
}

export const playlists : PlaylistState = new Map<String, Playlist>()
  .set(roadtrip.key, roadtrip)
  .set(work.key, work)
  .set(relax.key, relax)