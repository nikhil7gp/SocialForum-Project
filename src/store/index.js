import { configureStore} from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";

const SocialForum = configureStore({
  reducer: {
    posts: itemSlice.reducer,
  },
});

export default SocialForum;
