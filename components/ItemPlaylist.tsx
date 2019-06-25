import React from 'react'
import {Text} from "react-native";
import {Song} from "../models/Song";

export default ({item} : {item : Song})=><Text>{item.name}</Text>