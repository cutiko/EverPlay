import {PlaylistRowsState} from "./models/PlayListRow";
import {accent, primary, white} from "./theme/colors";

const seed : PlaylistRowsState = {
  playlists : [
    {
      name: "RoadTrip",
      color: white,
      count: 1
    },
    {
      name: "Work",
      color: primary,
      count: 2
    },
    {
      name: "Relaxation",
      color: accent,
      count: 1
    }
  ]
}
export default seed
