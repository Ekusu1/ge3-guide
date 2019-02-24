"use strict";
import {RootViewModel} from "../ko/RootViewModel.js";
import {DATA} from "./DATA.js";

ko.applyBindings(new RootViewModel(DATA));