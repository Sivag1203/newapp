import React, { useState } from "react";
import { IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";
export default function Counter() {
  let [like, setLike] = useState(0);
  let [dislike, setDisLike] = useState(0);
  const incrementLike = () => setLike(like + 1);
  const incrementDislike = () => setDisLike(dislike + 1);
  return (
    <div>
      <IconButton aria-label="like" color="success" onClick={incrementLike}>
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton aria-label="dislike" color="error" onClick={incrementDislike}>
        <Badge badgeContent={dislike} color="primary">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
