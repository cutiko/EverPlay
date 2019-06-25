import {PlayListRow} from "./models/PlayListRow";
import {accent, primary, white} from "./theme/colors";

export const playlistsRows = new Map<String, PlayListRow>()
const rows = [
  {
    key: "RoadTrip",
    name: "RoadTrip",
    color: white,
    count: 1
  },
  {
    key: "Work",
    name: "Work",
    color: primary,
    count: 2
  },
  {
    key: "Relaxation",
    name: "Relaxation",
    color: accent,
    count: 1
  }
]
rows.map(row=>{
  playlistsRows.set(row.key, row)
})
