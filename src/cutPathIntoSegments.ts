import {Vec2 } from "./vec";

export function cutPathIntoSegments(path: Vec2[], maxLength: number):  Vec2[][] {
  let currentSegment: Vec2[] = [];
  const segments: Vec2[][] = [];

  let currentLength = 0;

  // add the first point at the beginning of the segment
  currentSegment.push(path[0]);
  // Iterate over the points in the path
  for (let i = 1; i < path.length; i++) {
    const point1 = path[i - 1];
    const point2 = path[i];

    // Calculate distance between consecutive points
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    console.log(currentLength);

    // If adding the next segment doesn't exceed maxLength
    if (currentLength + distance <= maxLength || currentSegment.length < 2 || i == path.length - 1) {
      currentSegment.push(point2);
      currentLength += distance;
    } else {
      // Add the current segment to the segments array
      segments.push(currentSegment);
      // Start a new segment with the current point
      currentSegment = [point1, point2];
      currentLength = distance;
    }
  }

  // Add the last segment
  if (currentSegment.length > 0) {
    segments.push(currentSegment);
  }

  return segments;
}
