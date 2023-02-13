"use client";
import TimmeAgo from "react-timeago";

type Props = {
  time: string;
};

function LiveTimeStamp({ time }: Props) {
  return <TimmeAgo date={time} />;
}

export default LiveTimeStamp;
